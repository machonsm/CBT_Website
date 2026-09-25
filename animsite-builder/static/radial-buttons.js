(() => {
  "use strict";
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const selector = ".btn-primary:not(:disabled):not([aria-disabled='true'])";
  let frame = 0;
  let pending;

  function position(button, x, y) {
    const rect = button.getBoundingClientRect();
    button.style.setProperty("--radial-x", `${Math.max(0, Math.min(rect.width, x - rect.left))}px`);
    button.style.setProperty("--radial-y", `${Math.max(0, Math.min(rect.height, y - rect.top))}px`);
    button.style.setProperty("--radial-radius", `${Math.ceil(Math.hypot(rect.width, rect.height))}px`);
  }
  // Delegation also covers buttons created by booking steps and page rerenders.
  document.addEventListener("pointerover", event => {
    if (!finePointer.matches || reducedMotion.matches || event.pointerType === "touch") return;
    const button = event.target.closest(selector);
    if (!button || button.contains(event.relatedTarget)) return;
    position(button, event.clientX, event.clientY);
  }, { passive: true });
  document.addEventListener("pointermove", event => {
    if (!finePointer.matches || reducedMotion.matches || event.pointerType === "touch") return;
    const button = event.target.closest(selector);
    if (!button) return;
    pending = { button, x: event.clientX, y: event.clientY };
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      if (pending.button.isConnected) position(pending.button, pending.x, pending.y);
      pending = null;
    });
  }, { passive: true });
})();
