(() => {
  "use strict";

  const root = document.documentElement;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const MAX_ANGLE = 10;
  let dispose;

  function cleanup() {
    dispose?.();
    dispose = undefined;
  }

  function mount() {
    cleanup();
    const garden = document.querySelector("[data-footer-garden]");
    const svg = garden?.matches("svg") ? garden : garden?.querySelector("svg");
    if (!garden || !svg) return;

    const stems = [...svg.querySelectorAll("[data-footer-stem]")].map((element) => {
      const sway = element.querySelector("[data-footer-sway]");
      return sway ? {
        element,
        sway,
        originalTransform: sway.getAttribute("transform"),
        baseY: Number(element.dataset.baseY) || 390,
        tipY: Number(element.dataset.tipY) || 160,
        strength: Number(element.dataset.strength) || 1,
        angle: 0,
        velocity: 0,
        target: 0,
        x: 0,
        y: 0,
        radiusX: 150,
        radiusY: 175,
      } : null;
    }).filter(Boolean);
    if (!stems.length) return;

    const controller = new AbortController();
    let visible = false;
    let frame = 0;
    let previousTime = 0;
    let previousPointer = null;
    let inverseScreen = null;
    let measuredScrollX = 0;
    let measuredScrollY = 0;

    const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
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
        !disabled() && inverseScreen;
    }

    function restore(stem) {
      if (stem.originalTransform === null) stem.sway.removeAttribute("transform");
      else stem.sway.setAttribute("transform", stem.originalTransform);
    }

    function reset() {
      window.cancelAnimationFrame(frame);
      frame = 0;
      previousTime = 0;
      previousPointer = null;
      stems.forEach((stem) => {
        stem.angle = 0;
        stem.velocity = 0;
        stem.target = 0;
        restore(stem);
      });
    }

    function measure() {
      if (controller.signal.aborted) return;
      const screen = svg.getScreenCTM();
      if (!screen || !screen.a || !screen.d) {
        inverseScreen = null;
        reset();
        return;
      }
      // An inverse SVG matrix accounts for viewBox letterboxing and the
      // intentionally cropped "xMidYMax slice" composition on small screens.
      inverseScreen = screen.inverse();
      measuredScrollX = window.scrollX;
      measuredScrollY = window.scrollY;
      stems.forEach((stem) => {
        const parentScreen = stem.element.getScreenCTM();
        if (!parentScreen) return;
        const localToSvg = inverseScreen.multiply(parentScreen);
        const tip = new DOMPoint(0, stem.tipY).matrixTransform(localToSvg);
        const bounds = stem.sway.getBBox();
        stem.x = tip.x;
        stem.y = tip.y;
        stem.radiusX = clamp(bounds.width * 0.8, 115, 190);
        stem.radiusY = clamp(bounds.height * 0.66, 145, 235);
      });
    }

    function draw(stem) {
      if (!stem.angle && !stem.target) {
        restore(stem);
        return;
      }
      const x = (stem.angle * 0.35).toFixed(3);
      const y = (-Math.abs(stem.angle) * 0.1).toFixed(3);
      const angle = stem.angle.toFixed(3);
      stem.sway.setAttribute("transform",
        `translate(${x} ${y}) rotate(${angle} 0 ${stem.baseY})`);
    }

    function tick(time) {
      frame = 0;
      if (!running()) {
        reset();
        return;
      }
      const delta = previousTime ? Math.min((time - previousTime) / 1000, 1 / 30) : 1 / 60;
      previousTime = time;
      let unsettled = false;

      stems.forEach((stem) => {
        // Slightly underdamped springs let each hand follow a passing cursor
        // and settle independently without an always-running idle animation.
        stem.velocity += ((stem.target - stem.angle) * 110 - stem.velocity * 14) * delta;
        stem.angle += stem.velocity * delta;
        if (Math.abs(stem.angle) > MAX_ANGLE) {
          stem.angle = clamp(stem.angle, -MAX_ANGLE, MAX_ANGLE);
          stem.velocity *= 0.2;
        }
        if (Math.abs(stem.angle - stem.target) < 0.015 && Math.abs(stem.velocity) < 0.04) {
          stem.angle = stem.target;
          stem.velocity = 0;
        } else {
          unsettled = true;
        }
        draw(stem);
      });

      if (unsettled) frame = window.requestAnimationFrame(tick);
      else previousTime = 0;
    }

    function wake() {
      if (running() && !frame) frame = window.requestAnimationFrame(tick);
    }

    function influence(stem, point) {
      const distance = Math.hypot(
        (point.x - stem.x) / stem.radiusX,
        (point.y - stem.y) / stem.radiusY,
      );
      return Math.pow(Math.max(0, 1 - distance * distance), 2);
    }

    function pointer(event, tapped = false) {
      if (!running()) return;
      // Cache the layout matrix, compensating for page scroll without a layout
      // read on every pointer event or animation frame.
      const point = new DOMPoint(
        event.clientX + window.scrollX - measuredScrollX,
        event.clientY + window.scrollY - measuredScrollY,
      ).matrixTransform(inverseScreen);
      const now = performance.now();
      const elapsed = previousPointer ? Math.max(16, now - previousPointer.time) : 16;
      const speed = previousPointer ? clamp((point.x - previousPointer.x) / elapsed * 1000, -1400, 1400) : 0;
      const touching = event.pointerType === "touch";

      stems.forEach((stem, index) => {
        const amount = influence(stem, point);
        const direction = clamp((stem.x - point.x) / 42, -1, 1);
        stem.target = touching ? 0 : clamp(direction * amount * 8 * stem.strength, -8, 8);
        let impulse = speed * amount * 0.026 * stem.strength;
        if (tapped) {
          // Browser touch coordinates are rounded; an almost-centred tap still
          // needs a clear nudge instead of an imperceptibly small impulse.
          const tapDirection = Math.abs(direction) > 0.1 ? Math.sign(direction) : (index % 2 ? -1 : 1);
          impulse += tapDirection * amount * 42;
        }
        stem.velocity = clamp(stem.velocity + impulse, -95, 95);
      });

      previousPointer = { x: point.x, y: point.y, time: now };
      wake();
    }

    function release() {
      previousPointer = null;
      stems.forEach((stem) => { stem.target = 0; });
      wake();
    }

    function synchronize() {
      if (!running()) reset();
    }

    on(garden, "pointerenter", (event) => {
      measure();
      previousPointer = null;
      pointer(event);
    });
    on(garden, "pointermove", (event) => pointer(event));
    on(garden, "pointerdown", (event) => {
      measure();
      pointer(event, true);
    });
    on(garden, "pointerleave", release);
    on(garden, "pointercancel", release);
    on(garden, "pointerup", (event) => {
      if (event.pointerType === "touch") release();
    });
    on(window, "resize", () => { measure(); release(); });
    on(window, "site-motion-change", synchronize);
    on(document, "visibilitychange", synchronize);
    on(reducedMotion, "change", synchronize);

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(svg);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) measure();
      synchronize();
    });
    intersectionObserver.observe(garden);
    const classObserver = new MutationObserver(synchronize);
    classObserver.observe(root, { attributes: true, attributeFilter: ["class"] });

    measure();
    dispose = () => {
      controller.abort();
      reset();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      classObserver.disconnect();
      inverseScreen = null;
    };
  }

  window.FooterGarden = { mount, cleanup };
})();
