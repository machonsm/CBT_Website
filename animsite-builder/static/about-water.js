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
    const context = canvas?.getContext("2d", { alpha: true });
    if (!surface || !canvas || !context) return;

    const controller = new AbortController();
    let width = 0;
    let height = 0;
    let documentLeft = 0;
    let documentTop = 0;
    let visible = false;
    let frame = 0;
    let previousTime = 0;
    let elapsed = 0;
    let lastPointer = null;
    let lastRippleTime = -Infinity;
    let ripples = [];

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
        !disabled() && width > 0 && height > 0;
    }

    // Keep document coordinates so scrolling needs no layout measurement in
    // either the drawing loop or the pointermove handler.
    function measure() {
      if (controller.signal.aborted) return;
      const bounds = surface.getBoundingClientRect();
      documentLeft = bounds.left + window.scrollX;
      documentTop = bounds.top + window.scrollY;
      width = bounds.width;
      height = bounds.height;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const pixelWidth = Math.max(1, Math.round(width * ratio));
      const pixelHeight = Math.max(1, Math.round(height * ratio));
      if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
        canvas.width = pixelWidth;
        canvas.height = pixelHeight;
      }
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      draw(disabled());
      synchronize();
    }

    function ring(x, y, radius, opacity, strokeWidth, phase, small = false) {
      if (opacity < 0.002 || radius <= 0) return;
      const segments = small ? 48 : 128;
      context.beginPath();
      for (let step = 0; step <= segments; step += 1) {
        const angle = (step / segments) * TAU;
        const wobble = 1 + Math.sin(angle * 3 + phase) * 0.014 +
          Math.cos(angle * 5 - phase * 0.7) * 0.006;
        const px = x + Math.cos(angle) * radius * wobble;
        const py = y + Math.sin(angle) * radius * wobble;
        if (step === 0) context.moveTo(px, py);
        else context.lineTo(px, py);
      }
      context.closePath();
      // The same readable blue as the brightest gradient stop. Overlapping
      // ripples therefore retain contrast beneath the paper-coloured text.
      context.strokeStyle = `rgba(0, 111, 186, ${opacity})`;
      context.lineWidth = strokeWidth;
      context.stroke();
    }

    function draw(staticFrame = false) {
      context.clearRect(0, 0, width, height);
      if (!width || !height) return;
      const centerX = width * 0.52;
      const centerY = height * 0.46;
      const maxRadius = Math.hypot(width, height) * 0.7;
      const strokeWidth = Math.min(10, Math.max(7, width * 0.007));

      if (staticFrame) {
        ring(centerX, centerY, maxRadius * 0.31, 0.12, strokeWidth, 0.8);
        ring(centerX, centerY, maxRadius * 0.66, 0.08, strokeWidth, 0.8);
        return;
      }

      for (let index = 0; index < 3; index += 1) {
        const progress = ((elapsed / LOOP_DURATION) + index / 3) % 1;
        const eased = 1 - Math.pow(1 - progress, 1.5);
        const opacity = Math.pow(Math.sin(progress * Math.PI), 1.5) * 0.35;
        ring(centerX, centerY, maxRadius * (0.035 + eased * 0.965), opacity,
          strokeWidth, elapsed / 11000);
      }

      ripples = ripples.filter((ripple) => elapsed - ripple.created < RIPPLE_DURATION);
      ripples.forEach((ripple) => {
        const progress = Math.max(0, (elapsed - ripple.created) / RIPPLE_DURATION);
        const eased = 1 - Math.pow(1 - progress, 2);
        const opacity = Math.min(1, progress * 14) * Math.pow(1 - progress, 1.5) * 0.65;
        const radius = 5 + eased * ripple.size;
        ring(ripple.x, ripple.y, radius, opacity, 1.8, ripple.phase, true);
        ring(ripple.x, ripple.y, radius * 0.67, opacity * 0.5, 1.1, ripple.phase, true);
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
        if (disabled()) draw(true);
        return;
      }
      if (!frame) frame = window.requestAnimationFrame(tick);
    }

    function coordinates(event) {
      return {
        x: event.clientX + window.scrollX - documentLeft,
        y: event.clientY + window.scrollY - documentTop,
      };
    }

    function createRipple(point) {
      if (!running() || point.x < 0 || point.x > width || point.y < 0 || point.y > height) return;
      if (ripples.length >= MAX_RIPPLES) ripples.shift();
      ripples.push({
        ...point,
        created: elapsed,
        size: Math.min(width * 0.11, 82),
        phase: Math.random() * TAU,
      });
      lastRippleTime = elapsed;
      lastPointer = point;
    }

    on(surface, "pointerenter", () => {
      measure();
      lastPointer = null;
    });
    on(surface, "pointermove", (event) => {
      if (!running() || !finePointer.matches || event.pointerType === "touch") return;
      const point = coordinates(event);
      const distance = lastPointer ? Math.hypot(point.x - lastPointer.x, point.y - lastPointer.y) : Infinity;
      if (distance >= 28 && elapsed - lastRippleTime >= 90) createRipple(point);
    });
    on(surface, "pointerleave", () => { lastPointer = null; });
    on(surface, "click", (event) => {
      // Keyboard activation of a link has no pointer position to illustrate.
      if (!event.detail || !running()) return;
      measure();
      createRipple(coordinates(event));
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

    measure();
    dispose = () => {
      controller.abort();
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      context.clearRect(0, 0, width, height);
      ripples = [];
    };
  }

  window.AboutWater = { mount, cleanup };
})();
