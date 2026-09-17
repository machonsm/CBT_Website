(() => {
  "use strict";

  const root = document.documentElement;
  const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const smoothstep = (start, end, value) => {
    const progress = clamp((value - start) / (end - start), 0, 1);
    return progress * progress * (3 - 2 * progress);
  };
  let controller;
  let resizeObserver;
  let inputFrame = 0;
  let geometryDirty = true;
  let lastScrollY = window.scrollY;
  let hero;
  let header;
  let progress;
  let motionButtons = [];
  let parallaxItems = [];
  let pointerItems = [];
  let dragCleanups = [];
  let paused = false;

  try {
    paused = sessionStorage.getItem("cbt-motion-paused") === "true";
  } catch {
    // Motion controls still work when browser storage is unavailable.
  }

  function motionDisabled() {
    return paused || reduceQuery.matches;
  }

  function on(target, name, handler, options = {}) {
    target.addEventListener(name, handler, { ...options, signal: controller.signal });
  }

  function syncBloom(item) {
    if (!item.bloom) return;
    const disabled = motionDisabled();
    const closed = item.bloomClosed && !disabled;
    const fullyOpen = disabled || item.active || item.bloomLatched;
    const progress = hero?.progress || 0;
    const open = (closed ? 0 : fullyOpen ? 1 : smoothstep(0.08, 0.4, progress)).toFixed(4);
    const grow = (closed ? 0 : fullyOpen ? 1 : smoothstep(0.22, 0.95, progress)).toFixed(4);
    if (item.bloomOpen !== open) {
      item.bloomOpen = open;
      item.node.style.setProperty("--bloom-open", open);
    }
    if (item.bloomGrow !== grow) {
      item.bloomGrow = grow;
      item.node.style.setProperty("--bloom-grow", grow);
    }
    const polish = root.lang.toLowerCase().startsWith("pl");
    const label = item.bloomLatched
      ? (polish ? "Zwiń kwiat" : "Close the flower")
      : (polish ? "Rozwiń kwiat" : "Let the flower bloom");
    item.node.setAttribute("aria-pressed", String(item.bloomLatched));
    item.node.setAttribute("aria-label", label);
  }

  function resetPointer(item) {
    item.active = false;
    item.pending = false;
    item.bloomClosed = false;
    if (item.touchTimer) window.clearTimeout(item.touchTimer);
    item.touchTimer = 0;
    item.node.classList.remove("is-touched");
    item.node.style.setProperty("--tilt-x", "0deg");
    item.node.style.setProperty("--tilt-y", "0deg");
    item.node.style.setProperty("--art-x", "0px");
    item.node.style.setProperty("--art-y", "0px");
    item.node.style.setProperty("--art-rotate", "0deg");
    item.node.style.setProperty("--magnet-x", "0px");
    item.node.style.setProperty("--magnet-y", "0px");
    item.node.style.setProperty("--pointer-x", "50%");
    item.node.style.setProperty("--pointer-y", "50%");
    // Leaving the illustration releases its hover response, but a click or
    // keyboard activation keeps the flower open until the next activation.
    syncBloom(item);
  }

  function syncMotionPreference({ preserveScroll = true } = {}) {
    const scrollY = window.scrollY;
    let previousLanding;
    if (preserveScroll && hero?.scrollWrapper) {
      const rect = hero.scrollWrapper.getBoundingClientRect();
      // The media-query CSS may already have resized the landing before its
      // change event. Keep the last measured geometry for that transition.
      const reducedChanged = hero.reduced !== reduceQuery.matches;
      const previousGeometry = hero.preferenceGeometry || hero;
      previousLanding = {
        top: reducedChanged ? previousGeometry.top : rect.top + scrollY,
        height: reducedChanged ? previousGeometry.height : rect.height,
      };
    }
    root.classList.toggle("motion-paused", paused);
    root.classList.toggle("reduced-motion", reduceQuery.matches);
    if (hero) hero.reduced = reduceQuery.matches;
    if (previousLanding) {
      const rect = hero.scrollWrapper.getBoundingClientRect();
      const heightDifference = rect.height - previousLanding.height;
      if (Math.abs(heightDifference) > 0.5 && scrollY >= previousLanding.top) {
        const previousRunway = Math.max(0, previousLanding.height - window.innerHeight);
        const wasPinned = scrollY <= previousLanding.top + previousRunway;
        const target = wasPinned ? rect.top + window.scrollY : scrollY + heightDifference;
        window.scrollTo({ top: Math.max(0, target), behavior: "instant" });
      }
    }
    const polish = root.lang.toLowerCase().startsWith("pl");
    const label = paused
      ? (polish ? "Wznów animacje" : "Resume animations")
      : (polish ? "Wstrzymaj animacje" : "Pause animations");

    motionButtons.forEach((button) => {
      button.setAttribute("aria-pressed", String(paused));
      button.setAttribute("aria-label", label);
      button.title = label;
      const text = button.querySelector("[data-motion-label]");
      if (text) text.textContent = label;
    });

    if (motionDisabled() || !finePointerQuery.matches) {
      pointerItems.forEach(resetPointer);
    }
    geometryDirty = true;
    update();
    window.dispatchEvent(new Event("site-motion-change"));
  }

  function measure() {
    const scrollY = window.scrollY;
    parallaxItems.forEach((item) => {
      // Measure the stable wrapper so transforms cannot feed back into motion.
      const rect = item.anchor.getBoundingClientRect();
      item.centerY = rect.top + scrollY + rect.height / 2;
    });
    if (hero) {
      const rect = (hero.scrollWrapper || hero.node).getBoundingClientRect();
      hero.top = rect.top + scrollY;
      hero.height = Math.max(1, rect.height);
      hero.runway = Math.max(0, rect.height - window.innerHeight);
      if (hero.reduced === reduceQuery.matches) {
        hero.preferenceGeometry = { top: hero.top, height: hero.height };
      }
    }
    geometryDirty = false;
  }

  function update() {
    if (!controller || controller.signal.aborted) return;
    if (geometryDirty) measure();

    const scrollY = window.scrollY;
    const scrollChanged = scrollY !== lastScrollY;
    lastScrollY = scrollY;
    const viewportHeight = Math.max(1, window.innerHeight);
    const disabled = motionDisabled();

    if (header) {
      header.classList.toggle("is-scrolled", scrollY > 24);
      header.classList.toggle("is-revealed", !hero?.scrollWrapper || scrollY > hero.top + hero.runway + 20);
    }
    if (progress) {
      const distance = Math.max(1, root.scrollHeight - viewportHeight);
      progress.style.transform = `scaleX(${clamp(scrollY / distance, 0, 1).toFixed(4)})`;
    }
    if (hero) {
      const value = hero.scrollWrapper
        ? (disabled ? 1 : clamp((scrollY - hero.top) / Math.max(1, hero.runway * 0.85), 0, 1))
        : (disabled ? 0 : clamp((scrollY - hero.top) / hero.height, 0, 1));
      hero.progress = value;
      hero.node.style.setProperty("--hero-progress", value.toFixed(4));
      hero.letters.forEach((letter, index) => {
        const fill = `${(clamp(value * hero.letters.length - index, 0, 1) * 100).toFixed(2)}%`;
        if (letter.fill === fill) return;
        letter.fill = fill;
        letter.node.style.setProperty("--letter-fill", fill);
      });
    }
    parallaxItems.forEach((item) => {
      const relative = clamp((scrollY + viewportHeight / 2 - item.centerY) / viewportHeight, -1, 1);
      const offset = disabled ? 0 : relative * item.strength;
      item.node.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
    });
    // A document scroll changes pointer coordinates without resizing the target.
    pointerItems.forEach((item) => {
      item.rect = null;
      // An explicit close wins over hover and the current scroll position.
      // Only moving through the page releases it; repeated geometry updates
      // at the same position must leave a keyboard or touch close visible.
      if (scrollChanged) item.bloomClosed = false;
      syncBloom(item);
    });
  }

  function flushPointerInput() {
    inputFrame = 0;
    if (motionDisabled() || !finePointerQuery.matches) return;
    pointerItems.forEach((item) => {
      if (!item.pending || !item.active) return;
      item.pending = false;
      const rect = item.rect || item.node.getBoundingClientRect();
      item.rect = rect;
      const x = clamp((item.clientX - rect.left) / Math.max(1, rect.width), 0, 1);
      const y = clamp((item.clientY - rect.top) / Math.max(1, rect.height), 0, 1);
      item.node.style.setProperty("--pointer-x", `${(x * 100).toFixed(2)}%`);
      item.node.style.setProperty("--pointer-y", `${(y * 100).toFixed(2)}%`);
      if (item.tilt) {
        const strength = item.bloom ? 5 : (item.heroInteractive ? 14 : 7);
        item.node.style.setProperty("--tilt-x", `${((0.5 - y) * strength).toFixed(2)}deg`);
        item.node.style.setProperty("--tilt-y", `${((x - 0.5) * strength).toFixed(2)}deg`);
      }
      if (item.heroInteractive) {
        const travel = item.bloom ? 20 : 44;
        const rotation = item.bloom ? 5 : 10;
        item.node.style.setProperty("--art-x", `${((x - 0.5) * travel).toFixed(2)}px`);
        item.node.style.setProperty("--art-y", `${((y - 0.5) * travel).toFixed(2)}px`);
        item.node.style.setProperty("--art-rotate", `${((x - 0.5) * rotation).toFixed(2)}deg`);
      }
      if (item.magnetic) {
        item.node.style.setProperty("--magnet-x", `${((x - 0.5) * 10).toFixed(2)}px`);
        item.node.style.setProperty("--magnet-y", `${((y - 0.5) * 10).toFixed(2)}px`);
      }
    });
  }

  function setupPointerEffects() {
    pointerItems = Array.from(document.querySelectorAll("[data-tilt], [data-magnetic], [data-hero-interactive], [data-bloom-art]"), (node) => ({
      node,
      tilt: node.hasAttribute("data-tilt") || node.hasAttribute("data-hero-interactive"),
      magnetic: node.hasAttribute("data-magnetic"),
      heroInteractive: node.hasAttribute("data-hero-interactive"),
      bloom: node.hasAttribute("data-bloom-art"),
      bloomLatched: false,
      bloomClosed: false,
      bloomOpen: null,
      bloomGrow: null,
      active: false,
      pending: false,
      rect: null,
      touchTimer: 0,
    }));

    pointerItems.forEach((item) => {
      const receive = (event) => {
        if (motionDisabled() || !finePointerQuery.matches || event.pointerType === "touch") return;
        const entering = !item.active;
        if (entering) item.rect = item.node.getBoundingClientRect();
        item.active = true;
        if (entering) syncBloom(item);
        item.pending = true;
        item.clientX = event.clientX;
        item.clientY = event.clientY;
        if (!inputFrame) inputFrame = requestAnimationFrame(flushPointerInput);
      };
      on(item.node, "pointerenter", receive, { passive: true });
      on(item.node, "pointermove", receive, { passive: true });
      on(item.node, "pointerleave", (event) => {
        // A touch pointer leaves on release; let its short tap response finish.
        if (event.pointerType !== "touch") resetPointer(item);
      }, { passive: true });
      on(item.node, "pointercancel", () => resetPointer(item), { passive: true });
      if (item.bloom) {
        // Native button clicks cover a pointer tap, Enter, and Space without
        // a second toggle when the browser synthesizes a click on release.
        on(item.node, "click", () => {
          if (motionDisabled()) return;
          item.bloomClosed = item.bloomLatched;
          item.bloomLatched = !item.bloomLatched;
          syncBloom(item);
        });
        syncBloom(item);
      } else if (item.heroInteractive) {
        const respondToPress = () => {
          if (motionDisabled()) return;
          if (item.touchTimer) window.clearTimeout(item.touchTimer);
          item.node.classList.add("is-touched");
          item.touchTimer = window.setTimeout(() => {
            item.node.classList.remove("is-touched");
            item.touchTimer = 0;
          }, 600);
        };
        on(item.node, "pointerdown", (event) => {
          if (event.pointerType === "mouse" && event.button !== 0) return;
          respondToPress();
        }, { passive: true });
        on(item.node, "click", (event) => {
          if (event.detail === 0) respondToPress();
        });
      }
    });
  }


  function setupBlogRails() {
    document.querySelectorAll("[data-blog-rail]").forEach((rail) => {
      let drag = null;
      let suppressClick = false;
      let savedScrollBehavior = "";
      let savedUserSelect = "";

      const stopDrag = () => {
        if (!drag) return;
        const current = drag;
        drag = null;
        if (rail.hasPointerCapture?.(current.id)) rail.releasePointerCapture(current.id);
        rail.classList.remove("is-dragging");
        if (current.moved) {
          rail.style.scrollBehavior = savedScrollBehavior;
          rail.style.userSelect = savedUserSelect;
        }
      };
      dragCleanups.push(stopDrag);

      on(rail, "pointerdown", (event) => {
        suppressClick = false;
        if (event.button !== 0 || event.pointerType === "touch" || !finePointerQuery.matches) return;
        if (event.target.closest("a, button, input, select, textarea, [contenteditable='true']")) return;
        drag = { id: event.pointerId, x: event.clientX, scroll: rail.scrollLeft, moved: false };
      });
      on(rail, "pointermove", (event) => {
        if (!drag || drag.id !== event.pointerId) return;
        const distance = event.clientX - drag.x;
        if (!drag.moved && Math.abs(distance) < 6) return;
        if (!drag.moved) {
          drag.moved = true;
          suppressClick = true;
          savedScrollBehavior = rail.style.scrollBehavior;
          savedUserSelect = rail.style.userSelect;
          rail.style.scrollBehavior = "auto";
          rail.style.userSelect = "none";
          rail.classList.add("is-dragging");
          rail.setPointerCapture?.(event.pointerId);
        }
        event.preventDefault();
        rail.scrollLeft = drag.scroll - distance;
      }, { passive: false });
      on(rail, "pointerup", stopDrag);
      on(rail, "pointercancel", stopDrag);
      on(rail, "lostpointercapture", stopDrag);
      on(rail, "pointerleave", () => {
        if (drag && !drag.moved) stopDrag();
      });
      on(rail, "click", (event) => {
        if (!suppressClick) return;
        suppressClick = false;
        event.preventDefault();
        event.stopPropagation();
      }, { capture: true });
      on(rail, "keydown", (event) => {
        if (event.target !== rail || !["ArrowLeft", "ArrowRight"].includes(event.key)) return;
        event.preventDefault();
        const direction = event.key === "ArrowRight" ? 1 : -1;
        rail.scrollBy({
          left: direction * Math.min(rail.clientWidth * 0.8, 560),
          behavior: motionDisabled() ? "instant" : "smooth",
        });
      });
    });
  }

  function cleanup() {
    controller?.abort();
    resizeObserver?.disconnect();
    resizeObserver = undefined;
    if (inputFrame) cancelAnimationFrame(inputFrame);
    inputFrame = 0;
    lastScrollY = window.scrollY;
    dragCleanups.forEach((stop) => stop());
    dragCleanups = [];
    pointerItems.forEach(resetPointer);
    pointerItems = [];
    parallaxItems.forEach((item) => item.node.style.setProperty("--parallax-y", "0px"));
    parallaxItems = [];
    motionButtons = [];
    hero = undefined;
    header = undefined;
    progress = undefined;
  }

  function mount() {
    cleanup();
    controller = new AbortController();
    const heroNode = document.querySelector(".hero");
    hero = heroNode ? {
      node: heroNode,
      scrollWrapper: heroNode.closest(".landing-scroll"),
      letters: Array.from(heroNode.querySelectorAll("[data-fill-letter]"), (node) => ({ node, fill: null })),
      top: 0,
      height: 1,
      runway: 0,
      reduced: reduceQuery.matches,
    } : undefined;
    header = document.querySelector(".site-header");
    progress = document.querySelector(".reading-progress span");
    motionButtons = Array.from(document.querySelectorAll("[data-motion-toggle]"));
    parallaxItems = Array.from(document.querySelectorAll("[data-parallax]"), (node) => ({
      node,
      anchor: node.parentElement || node,
      strength: clamp(Number.parseFloat(node.dataset.parallax) || 0, -120, 120),
      centerY: 0,
    }));
    motionButtons.forEach((button) => on(button, "click", () => {
      paused = !paused;
      try {
        sessionStorage.setItem("cbt-motion-paused", String(paused));
      } catch {
        // Storage is optional; keep the current page preference in memory.
      }
      syncMotionPreference();
    }));
    on(reduceQuery, "change", syncMotionPreference);
    on(finePointerQuery, "change", syncMotionPreference);
    on(window, "resize", () => { geometryDirty = true; update(); }, { passive: true });
    on(window, "blur", () => {
      pointerItems.forEach(resetPointer);
      dragCleanups.forEach((stop) => stop());
    });
    on(document, "load", () => { geometryDirty = true; update(); }, { capture: true });
    setupPointerEffects();
    setupBlogRails();
    if ("ResizeObserver" in window) {
      resizeObserver = new ResizeObserver(() => {
        geometryDirty = true;
        update();
      });
      resizeObserver.observe(document.getElementById("site") || document.body);
      if (hero) resizeObserver.observe(hero.node);
      if (hero?.scrollWrapper) resizeObserver.observe(hero.scrollWrapper);
    }
    const mountSignal = controller.signal;
    document.fonts?.ready.then(() => {
      if (mountSignal.aborted) return;
      geometryDirty = true;
      update();
    });
    syncMotionPreference({ preserveScroll: false });
  }

  window.SiteMotion = { mount, update, cleanup };
})();
