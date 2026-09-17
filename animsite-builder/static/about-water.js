(() => {
  "use strict";

  const root = document.documentElement;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  const TAU = Math.PI * 2;
  const LOOP_DURATION = 10000;
  const RIPPLE_DURATION = 2100;
  const MAX_RIPPLES = 20;
  let dispose;

  function cleanup() {
    dispose?.();
    dispose = undefined;
  }

  function mount() {
    cleanup();
    const surface = document.querySelector("[data-water-surface]");
    const canvas = surface?.querySelector("canvas[data-water-canvas]");
    const dropsCanvas = surface?.querySelector("canvas[data-water-drops]");
    const context = canvas?.getContext("2d", { alpha: true });
    const dropsContext = dropsCanvas?.getContext("2d", { alpha: true });
    if (!surface || !canvas || !context || !dropsCanvas || !dropsContext) return;

    const controller = new AbortController();
    let width = 0;
    let height = 0;
    let surfaceHeight = 0;
    let introEnd = 0;
    let ambientSources = [];
    let offset = 0;
    let documentLeft = 0;
    let documentTop = 0;
    let visible = false;
    let frame = 0;
    let previousTime = 0;
    let elapsed = 0;
    let lastPointer = null;
    let lastRippleTime = -Infinity;
    let ripples = [];
    let hoveredCard = null;

    const on = (target, event, handler) => {
      target.addEventListener(event, handler, {
        passive: true,
        signal: controller.signal,
      });
    };

    function disabled() {
      return reducedMotion.matches || root.classList.contains("motion-paused") ||
        root.classList.contains("reduced-motion");
    }

    function running() {
      return !controller.signal.aborted && visible && !document.hidden &&
        !disabled() && !hoveredCard && width > 0 && height > 0;
    }

    // Only allocate viewport-sized canvases, even when mobile cards make the
    // section several screens tall. Ripple positions stay in section space.
    function positionCanvases() {
      const nextOffset = Math.max(0, Math.min(window.scrollY - documentTop, surfaceHeight - height));
      if (nextOffset === offset) return;
      offset = nextOffset;
      [canvas, dropsCanvas].forEach(layer => {
        layer.style.transform = `translateY(${offset}px)`;
      });
    }

    function measure() {
      if (controller.signal.aborted) return;
      const bounds = surface.getBoundingClientRect();
      documentLeft = bounds.left + window.scrollX;
      documentTop = bounds.top + window.scrollY;
      width = bounds.width;
      surfaceHeight = bounds.height;
      height = Math.min(surfaceHeight, window.innerHeight);
      const areas = surface.querySelector("#help-areas");
      introEnd = areas ? areas.getBoundingClientRect().top - bounds.top : surfaceHeight;
      const lowerHeight = Math.max(0, surfaceHeight - introEnd);
      const count = Math.ceil(lowerHeight / Math.max(330, Math.min(460, height * 0.52)));
      const bandHeight = count ? lowerHeight / count : 0;
      const positions = [0.12, 0.78, 0.36, 0.89, 0.22, 0.62];
      ambientSources = Array.from({ length: count }, (_, index) => ({
        x: width * positions[index % positions.length],
        y: introEnd + bandHeight * (index + 0.5),
        // Separate vertical bands leave space even at each ring's widest point.
        radius: Math.min(260, width * 0.34, bandHeight * 0.43),
        phase: index * 0.29,
      }));
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const pixelWidth = Math.max(1, Math.round(width * ratio));
      const pixelHeight = Math.max(1, Math.round(height * ratio));
      [[canvas, context], [dropsCanvas, dropsContext]].forEach(([layer, ctx]) => {
        if (layer.width !== pixelWidth || layer.height !== pixelHeight) {
          layer.width = pixelWidth;
          layer.height = pixelHeight;
        }
        layer.style.height = `${height}px`;
        ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      });
      positionCanvases();
      draw(disabled());
      synchronize();
    }

    function ring(ctx, x, y, radius, opacity, strokeWidth, phase, colour = "#0085de", small = false) {
      if (opacity < 0.002 || radius <= 0) return;
      const segments = small ? 48 : 128;
      ctx.beginPath();
      for (let step = 0; step <= segments; step += 1) {
        const angle = (step / segments) * TAU;
        const wobble = 1 + Math.sin(angle * 3 + phase) * 0.014 +
          Math.cos(angle * 5 - phase * 0.7) * 0.006;
        const px = x + Math.cos(angle) * radius * wobble;
        const py = y - offset + Math.sin(angle) * radius * wobble;
        if (step === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.strokeStyle = colour;
      ctx.globalAlpha = opacity;
      ctx.lineWidth = strokeWidth;
      ctx.stroke();
      ctx.globalAlpha = 1;
    }

    function draw(staticFrame = false) {
      positionCanvases();
      context.clearRect(0, 0, width, height);
      dropsContext.clearRect(0, 0, width, height);
      if (!width || !height) return;
      const centerX = width * 0.52;
      const maxRadius = Math.hypot(width, height) * 0.7;
      const strokeWidth = Math.min(10, Math.max(7, width * 0.007));
      // Keep the spacious concentric waves in the opening scene only.
      if (offset < introEnd) {
        const centerY = introEnd * 0.46;
        if (staticFrame) {
          ring(context, centerX, centerY, maxRadius * 0.31, 0.12, strokeWidth, 0.8);
          ring(context, centerX, centerY, maxRadius * 0.66, 0.08, strokeWidth, 0.8);
        } else {
          for (let index = 0; index < 3; index += 1) {
            const progress = ((elapsed / LOOP_DURATION) + index / 3) % 1;
            const eased = 1 - Math.pow(1 - progress, 1.5);
            const opacity = Math.pow(Math.sin(progress * Math.PI), 1.5) * 0.22;
            ring(context, centerX, centerY, maxRadius * (0.035 + eased * 0.965), opacity,
              strokeWidth, elapsed / 11000);
          }
        }
        // Fade the introductory waves before the cards, rather than cutting
        // their arcs at a hard boundary or mixing them with the lower ripples.
        context.save();
        context.globalCompositeOperation = "destination-in";
        const fade = context.createLinearGradient(0, introEnd - offset - 140, 0, introEnd - offset);
        fade.addColorStop(0, "#000");
        fade.addColorStop(1, "transparent");
        context.fillStyle = fade;
        context.fillRect(0, 0, width, height);
        context.restore();
      }

      // Below the introduction, smaller waves emerge at different positions
      // and times. Their maximum radii cannot reach a neighbouring source.
      ambientSources.forEach(source => {
        if (source.y + source.radius < offset || source.y - source.radius > offset + height) return;
        const progress = staticFrame ? 0.5 : (elapsed / LOOP_DURATION + source.phase) % 1;
        const eased = 1 - Math.pow(1 - progress, 1.5);
        const opacity = staticFrame ? 0.16 : Math.pow(Math.sin(progress * Math.PI), 1.5) * 0.3;
        const radius = source.radius * (0.035 + eased * 0.965);
        const phase = staticFrame ? source.phase : elapsed / 11000 + source.phase;
        ring(context, source.x, source.y, radius, opacity, 3, phase);
        ring(context, source.x, source.y, radius * 0.65, opacity * 0.5, 1.8, phase);
      });
      if (staticFrame) return;

      ripples = ripples.filter((ripple) => elapsed - ripple.created < RIPPLE_DURATION);
      ripples.forEach((ripple) => {
        const progress = Math.max(0, (elapsed - ripple.created) / RIPPLE_DURATION);
        const eased = 1 - Math.pow(1 - progress, 2);
        const opacity = Math.min(1, progress * 14) * Math.pow(1 - progress, 1.5) * 0.65;
        const radius = 5 + eased * ripple.size;
        ring(dropsContext, ripple.x, ripple.y, radius, opacity * 0.75, 1.4, ripple.phase, ripple.colour, true);
        ring(dropsContext, ripple.x, ripple.y, radius * 0.67, opacity * 0.4, 1, ripple.phase, ripple.colour, true);
      });
    }

    function tick(time) {
      frame = 0;
      if (!running()) {
        previousTime = 0;
        return;
      }
      if (previousTime) elapsed += Math.min(time - previousTime, 64);
      previousTime = time;
      draw();
      frame = window.requestAnimationFrame(tick);
    }

    function synchronize() {
      if (!running()) {
        window.cancelAnimationFrame(frame);
        frame = 0;
        previousTime = 0;
        lastPointer = null;
        ripples = [];
        dropsContext.clearRect(0, 0, width, height);
        if (disabled()) draw(true);
        return;
      }
      if (!frame) frame = window.requestAnimationFrame(tick);
    }

    function setHoveredCard(card) {
      if (hoveredCard === card) return;
      hoveredCard = card;
      lastRippleTime = -Infinity;
      // Freeze the ambient waves in place and clear the cursor trail while
      // someone reads a card. Resume the same phase after the pointer leaves.
      synchronize();
    }

    function coordinates(event) {
      return {
        x: event.clientX + window.scrollX - documentLeft,
        y: event.clientY + window.scrollY - documentTop,
      };
    }

    function createRipple(point, target) {
      if (target.closest(".help-card") || !running() || point.x < 0 || point.x > width || point.y < 0 || point.y > surfaceHeight) return;
      if (ripples.length >= MAX_RIPPLES) ripples.shift();
      ripples.push({
        ...point,
        colour: "#f3f4ef",
        created: elapsed,
        size: Math.min(width * 0.11, 82),
        phase: Math.random() * TAU,
      });
      lastRippleTime = elapsed;
      lastPointer = point;
    }

    surface.querySelectorAll(".help-card").forEach(card => {
      on(card, "pointerenter", event => {
        if (finePointer.matches && event.pointerType !== "touch") setHoveredCard(card);
      });
      on(card, "pointerleave", () => {
        if (hoveredCard === card) setHoveredCard(null);
      });
      on(card, "pointercancel", () => {
        if (hoveredCard === card) setHoveredCard(null);
      });
    });
    on(finePointer, "change", () => {
      setHoveredCard(finePointer.matches ? surface.querySelector(".help-card:hover") : null);
    });

    on(surface, "pointerenter", () => {
      measure();
      lastPointer = null;
    });
    on(surface, "pointermove", (event) => {
      if (!running() || !finePointer.matches || event.pointerType === "touch") return;
      const point = coordinates(event);
      const distance = lastPointer ? Math.hypot(point.x - lastPointer.x, point.y - lastPointer.y) : Infinity;
      if (distance >= 28 && elapsed - lastRippleTime >= 90) createRipple(point, event.target);
    });
    on(surface, "pointerleave", () => { lastPointer = null; });
    on(surface, "click", (event) => {
      // Keyboard activation of a link has no pointer position to illustrate.
      if (!event.detail || !running()) return;
      measure();
      createRipple(coordinates(event), event.target);
    });
    on(window, "scroll", () => {
      lastPointer = null;
      if (visible && !running()) draw(disabled());
    });
    on(window, "resize", measure);
    on(window, "site-motion-change", () => {
      measure();
      synchronize();
    });
    on(document, "visibilitychange", synchronize);
    on(reducedMotion, "change", synchronize);

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(surface);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) measure();
      synchronize();
    });
    intersectionObserver.observe(surface);

    hoveredCard = finePointer.matches ? surface.querySelector(".help-card:hover") : null;
    measure();
    dispose = () => {
      controller.abort();
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      context.clearRect(0, 0, width, height);
      dropsContext.clearRect(0, 0, width, height);
      ripples = [];
    };
  }

  window.AboutWater = { mount, cleanup };
})();
