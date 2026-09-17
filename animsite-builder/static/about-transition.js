(() => {
  "use strict";

  const root = document.documentElement;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const properties = [
    "--about-colour-progress",
    "--about-gradient-shift",
    "--about-gradient-deep",
  ];
  let dispose;

  const clamp = (value) => Math.min(1, Math.max(0, value));
  const smoothstep = (start, end, value) => {
    const progress = clamp((value - start) / (end - start));
    return progress * progress * (3 - 2 * progress);
  };

  function cleanup() {
    dispose?.();
    dispose = undefined;
  }

  function mount() {
    cleanup();
    const surfaces = Array.from(document.querySelectorAll("[data-about-journey]")).map((journey) => {
      const section = journey.querySelector("[data-about-transition]") ||
        journey.querySelector("[data-water-surface]")?.closest("section");
      return section ? { journey, section, written: new Map(), geometry: null } : null;
    }).filter(Boolean);
    if (!surfaces.length) return;

    const controller = new AbortController();
    let geometryDirty = true;
    let frame = 0;

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

    function setProperty(surface, name, value) {
      if (surface.written.get(name) === value) return;
      surface.journey.style.setProperty(name, value);
      surface.written.set(name, value);
    }

    function measure() {
      geometryDirty = false;
      const viewportHeight = window.innerHeight;
      surfaces.forEach((surface) => {
        const bounds = surface.section.getBoundingClientRect();
        surface.geometry = bounds.width && bounds.height && viewportHeight ? {
          start: bounds.top + window.scrollY - viewportHeight * 0.6,
          // Finish when this section's bottom leaves the viewport.
          distance: bounds.height + viewportHeight * 0.6,
        } : null;
      });
    }

    function render() {
      frame = 0;
      if (controller.signal.aborted) return;
      if (geometryDirty) measure();
      const motionDisabled = disabled();
      surfaces.forEach((surface) => {
        const { geometry } = surface;
        if (!geometry) return;
        // Independent scroll ranges keep both sections animated to their ends.
        const progress = motionDisabled ? 0.82 : clamp(
          (window.scrollY - geometry.start) / geometry.distance);
        const colourProgress = smoothstep(0, 1, progress);
        setProperty(surface, "--about-colour-progress", colourProgress.toFixed(4));
        const profile = surface.journey.classList.contains("about-profile-panel");
        const from = profile ? [243, 244, 239] : [33, 30, 163];
        const to = profile ? [223, 234, 240] : [33, 30, 163];
        const deep = from.map((channel, index) =>
          Math.round(channel + (to[index] - channel) * progress));
        setProperty(surface, "--about-gradient-deep", `rgb(${deep.join(", ")})`);
        setProperty(surface, "--about-gradient-shift", `${((1 - progress) * 100).toFixed(3)}%`);
      });
    }

    function schedule() {
      if (!frame && !controller.signal.aborted) frame = window.requestAnimationFrame(render);
    }

    function invalidateGeometry() {
      geometryDirty = true;
      schedule();
    }

    on(window, "scroll", schedule);
    on(window, "resize", invalidateGeometry);
    on(window, "pageshow", invalidateGeometry);
    // Pausing the landing animation changes its height, shifting this section.
    on(window, "site-motion-change", invalidateGeometry);
    on(reducedMotion, "change", invalidateGeometry);
    const resizeObserver = new ResizeObserver(invalidateGeometry);
    const observed = new Set();
    surfaces.forEach(({ journey, section }) => {
      [journey, section, journey.parentElement].forEach(element => observed.add(element));
      // Earlier sections can move this surface without changing its own size.
      for (let sibling = journey.previousElementSibling; sibling; sibling = sibling.previousElementSibling) {
        observed.add(sibling);
      }
    });
    observed.forEach((element) => { if (element) resizeObserver.observe(element); });

    if (document.fonts) {
      on(document.fonts, "loadingdone", invalidateGeometry);
      document.fonts.ready.then(() => {
        if (!controller.signal.aborted) invalidateGeometry();
      });
    }

    render();
    dispose = () => {
      controller.abort();
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      surfaces.forEach((surface) => {
        properties.forEach((property) => surface.journey.style.removeProperty(property));
        surface.written.clear();
        surface.geometry = null;
      });
    };
  }

  window.AboutTransition = { mount, cleanup };
})();
