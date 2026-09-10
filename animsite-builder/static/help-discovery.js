(() => {
  "use strict";
  let dispose;

  function cleanup() { dispose?.(); dispose = undefined; }

  function mount(copy, pinnedIds = []) {
    cleanup();
    const controller = new AbortController();
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = matchMedia("(hover: hover) and (pointer: fine)");
    const on = (target, event, fn) => target.addEventListener(event, fn, { signal: controller.signal });
    const motionDisabled = () => reduced.matches || document.documentElement.matches(".motion-paused, .reduced-motion");
    const cards = Array.from(document.querySelectorAll("[data-help-card]"), node => ({
      node,
      button: node.querySelector("[data-help-toggle]"),
      label: node.querySelector("[data-help-toggle-label]"),
      detail: node.querySelector(".help-card-reveal"),
      pinned: pinnedIds.includes(node.dataset.helpCard),
      hovered: false,
    }));

    function sync(card) {
      const open = card.pinned || card.hovered;
      card.node.classList.toggle("is-open", open);
      card.node.dataset.pinned = String(card.pinned);
      card.button.setAttribute("aria-expanded", String(open));
      card.detail.setAttribute("aria-hidden", String(!open));
      card.detail.inert = !open;
      card.label.textContent = card.pinned ? copy.returnToSituation : card.hovered ? copy.keepOpen : copy.discover;
    }

    cards.forEach(card => {
      card.node.classList.add("is-ready");
      sync(card);
      on(card.node, "pointerenter", event => {
        if (event.pointerType !== "mouse" || !finePointer.matches || motionDisabled()) return;
        card.hovered = true;
        sync(card);
      });
      on(card.node, "pointerleave", () => {
        card.hovered = false;
        sync(card);
      });
      on(card.button, "click", () => {
        card.pinned = !card.pinned;
        card.hovered = false;
        sync(card);
      });
      on(card.button, "keydown", event => {
        if (event.key !== "Escape") return;
        card.pinned = false;
        card.hovered = false;
        sync(card);
      });
    });

    const resetHover = () => cards.forEach(card => { card.hovered = false; sync(card); });
    on(window, "site-motion-change", resetHover);
    on(reduced, "change", resetHover);
    on(finePointer, "change", resetHover);
    dispose = () => controller.abort();
  }

  window.HelpDiscovery = { mount, cleanup };
})();
