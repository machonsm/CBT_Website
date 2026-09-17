(() => {
  "use strict";

  let controller = null;
  let resizeObserver = null;
  let frame = 0;
  let panel = null;
  let current = null;
  const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);

  function render(copy) {
    const first = copy.scenarios[0];
    const node = id => {
      const item = copy.nodes.find(item => item.id === id);
      const value = id === "situation" ? first.situation : first.views[0][id];
      if (id === "belief") {
        return `<div class="abc-node abc-node-belief">
          <button type="button" class="abc-node-heading abc-belief-trigger" data-abc-node="belief" aria-pressed="true" aria-controls="abc-detail" aria-describedby="abc-belief-value"><span class="abc-letter" aria-hidden="true">B</span><span>${escapeHtml(item.label)}</span><span class="abc-node-plus" aria-hidden="true">+</span></button>
          <p id="abc-belief-value" class="abc-node-value abc-belief-value" data-abc-value="belief">${escapeHtml(value)}</p>
          <fieldset class="abc-perspectives"><legend class="abc-sr-only">${escapeHtml(copy.perspectiveLabel)}</legend><div>
            ${copy.perspectives.map((label, index) => `<button type="button" data-abc-view="${index}" aria-pressed="${index === 0}" aria-controls="abc-diagram abc-belief-value">${escapeHtml(label)}</button>`).join("")}
          </div></fieldset>
        </div>`;
      }
      return `<button type="button" class="abc-node abc-node-${id}" data-abc-node="${id}" aria-pressed="false" aria-controls="abc-detail">
        <span class="abc-node-heading">${id === "situation" || id === "belief" ? `<span class="abc-letter" aria-hidden="true">${item.letter}</span>` : ""}<span>${escapeHtml(item.label)}</span><span class="abc-node-plus" aria-hidden="true">+</span></span>
        <span class="abc-node-value" data-abc-value="${id}">${escapeHtml(value)}</span>
      </button>`;
    };
    const belief = copy.nodes.find(item => item.id === "belief");
    return `<section class="abc-model" data-abc-model aria-labelledby="abc-title">
      <header class="abc-heading">
        <div><span class="section-label">${escapeHtml(copy.label)}</span><h3 id="abc-title">${escapeHtml(copy.title)}</h3><p>${escapeHtml(copy.intro)}</p></div>
        <span class="abc-monogram" aria-hidden="true">A<span>→</span>B<span>→</span>C</span>
      </header>
      <div class="abc-toolbar"><fieldset class="abc-scenarios"><legend>${escapeHtml(copy.sceneLabel)}</legend><div class="abc-scenario-options">
        ${copy.scenarios.map((scene, index) => `<button type="button" data-abc-scene="${scene.id}" aria-pressed="${index === 0}" aria-controls="abc-diagram"><span class="abc-choice-dot" aria-hidden="true"></span>${escapeHtml(scene.label)}</button>`).join("")}
      </div></fieldset><p id="abc-hint">${escapeHtml(copy.hint)}</p></div>
      <div id="abc-diagram" class="abc-diagram" role="group" aria-label="${escapeHtml(copy.diagramLabel)}" aria-describedby="abc-hint abc-cycle-caption">
        <svg class="abc-connections" aria-hidden="true" focusable="false"><defs><marker id="abc-arrow" viewBox="0 0 12 12" refX="9" refY="6" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M2 2L9 6L2 10" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></marker></defs>
          ${["entry", "belief", "emotion", "behaviour", "body"].map(id => `<path data-abc-path="${id}" class="abc-connection" pathLength="1" marker-end="url(#abc-arrow)"/>`).join("")}
        </svg>
        <div class="abc-event">${node("situation")}</div>
        <div class="abc-cycle">
          ${node("belief")}
          <div class="abc-consequences" role="group" aria-labelledby="abc-consequences-title">
            <h4 id="abc-consequences-title"><span class="abc-letter" aria-hidden="true">C</span>${escapeHtml(copy.consequences)}</h4>
            ${node("emotion")}${node("behaviour")}${node("body")}
            <p id="abc-cycle-caption" class="abc-cycle-caption"><span aria-hidden="true">↻</span>${escapeHtml(copy.cycleLabel)}</p>
          </div>
        </div>
      </div>
      <div id="abc-detail" class="abc-detail">
        <div><span class="abc-detail-eyebrow">${escapeHtml(copy.detailLabel)}</span><h4 data-abc-detail-title>${escapeHtml(belief.label)}</h4><p data-abc-detail-text>${escapeHtml(belief.explanation)}</p></div>
        <div class="abc-question"><span class="abc-detail-eyebrow">${escapeHtml(copy.questionLabel)}</span><p data-abc-detail-question>${escapeHtml(belief.question)}</p></div>
      </div>
      <footer class="abc-footnote"><p>${escapeHtml(copy.note)}</p><a href="${escapeHtml(copy.sourceUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(copy.sourceLabel)} <span aria-hidden="true">↗</span></a></footer>
      <p class="abc-sr-only" data-abc-status role="status" aria-atomic="true"></p>
    </section>`;
  }

  function cleanup() {
    controller?.abort();
    resizeObserver?.disconnect();
    cancelAnimationFrame(frame);
    panel?.getAnimations({ subtree: true }).forEach(animation => animation.cancel());
    controller = resizeObserver = panel = null;
    frame = 0;
  }

  function mount(copy, saved) {
    cleanup();
    panel = document.querySelector("[data-abc-model]");
    if (!panel) return;
    controller = new AbortController();
    const { signal } = controller;
    const nodes = Array.from(panel.querySelectorAll("[data-abc-node]"));
    const scenes = Array.from(panel.querySelectorAll("[data-abc-scene]"));
    const views = Array.from(panel.querySelectorAll("[data-abc-view]"));
    const diagram = panel.querySelector(".abc-diagram");
    const svg = panel.querySelector(".abc-connections");
    const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    current = {
      scene: copy.scenarios.some(scene => scene.id === saved?.scene) ? saved.scene : copy.scenarios[0].id,
      view: saved?.view === 1 ? 1 : 0,
      node: copy.nodes.some(node => node.id === saved?.node) ? saved.node : "belief"
    };
    const motionAllowed = () => !reduceQuery.matches && !document.documentElement.matches(".motion-paused, .reduced-motion");

    // Measure real card edges so arrows remain in the gutters after text wraps,
    // language changes, font loading and mobile reflow. SVG never captures input.
    function drawConnections() {
      frame = 0;
      if (signal.aborted) return;
      const box = diagram.getBoundingClientRect();
      if (!box.width || !box.height) return;
      svg.setAttribute("viewBox", `0 0 ${box.width} ${box.height}`);
      const bounds = Object.fromEntries(nodes.map(node => {
        const rect = node.closest(".abc-node").getBoundingClientRect();
        return [node.dataset.abcNode, { left: rect.left - box.left, right: rect.right - box.left, top: rect.top - box.top, bottom: rect.bottom - box.top, x: rect.left - box.left + rect.width / 2, y: rect.top - box.top + rect.height / 2 }];
      }));
      const { situation: a, belief: b, emotion: e, behaviour: h, body: p } = bounds;
      const mobile = getComputedStyle(diagram).getPropertyValue("--abc-stacked").trim() === "1";
      const point = (x, y) => `${x.toFixed(1)} ${y.toFixed(1)}`;
      const curve = (start, c1, c2, end) => `M${point(...start)} C${point(...c1)} ${point(...c2)} ${point(...end)}`;
      let paths;
      if (mobile) {
        const left = Math.max(5, b.left - 17);
        paths = {
          entry: `M${point(a.x, a.bottom + 7)} L${point(b.x, b.top - 10)}`,
          belief: curve([b.x, b.bottom + 7], [b.x, b.bottom + 24], [e.x, e.top - 24], [e.x, e.top - 10]),
          emotion: `M${point(e.x, e.bottom + 7)} L${point(h.x, h.top - 10)}`,
          behaviour: `M${point(h.x, h.bottom + 7)} L${point(p.x, p.top - 10)}`,
          body: `M${point(p.left - 7, p.y)} C${point(left, p.y)} ${point(left, p.y)} ${point(left, p.y - 24)} L${point(left, b.y + 24)} Q${point(left, b.y)} ${point(b.left - 10, b.y)}`
        };
      } else {
        const returnX = (a.right + b.left) / 2;
        paths = {
          entry: curve([a.right + 8, a.y], [a.right + 30, a.y], [b.left - 40, b.y - 25], [b.left - 12, b.y - 25]),
          belief: `M${point(e.x, b.bottom + 8)} L${point(e.x, e.top - 11)}`,
          emotion: curve([e.x, e.bottom + 8], [e.x, h.y], [e.x, h.y], [h.right + 11, h.y]),
          behaviour: curve([h.left - 8, h.y], [p.x, h.y], [p.x, h.y], [p.x, p.bottom + 11]),
          body: `M${point(p.right + 8, p.y)} Q${point(returnX, p.y)} ${point(returnX, p.y - 16)} L${point(returnX, b.y + 41)} Q${point(returnX, b.y + 25)} ${point(b.left - 11, b.y + 25)}`
        };
      }
      Object.entries(paths).forEach(([id, path]) => svg.querySelector(`[data-abc-path="${id}"]`).setAttribute("d", path));
    }

    function scheduleDraw() {
      if (!frame) frame = requestAnimationFrame(drawConnections);
    }

    function refresh(kind) {
      const scene = copy.scenarios.find(scene => scene.id === current.scene);
      const selected = copy.nodes.find(node => node.id === current.node);
      scenes.forEach(button => button.setAttribute("aria-pressed", String(button.dataset.abcScene === current.scene)));
      views.forEach(button => button.setAttribute("aria-pressed", String(Number(button.dataset.abcView) === current.view)));
      nodes.forEach(button => button.setAttribute("aria-pressed", String(button.dataset.abcNode === current.node)));
      panel.dataset.abcPerspective = String(current.view);
      panel.dataset.abcActive = current.node;
      panel.querySelectorAll("[data-abc-value]").forEach(element => {
        const id = element.dataset.abcValue;
        element.textContent = id === "situation" ? scene.situation : scene.views[current.view][id];
      });
      panel.querySelector("[data-abc-detail-title]").textContent = `${selected.letter} · ${selected.label}`;
      panel.querySelector("[data-abc-detail-text]").textContent = selected.explanation;
      panel.querySelector("[data-abc-detail-question]").textContent = selected.question;
      if (kind) {
        const status = panel.querySelector("[data-abc-status]");
        status.textContent = kind === "node"
          ? `${selected.label}. ${selected.explanation} ${selected.question}`
          : `${scene.label}. ${copy.perspectives[current.view]}. ${copy.updated} ${scene.views[current.view].belief}`;
        panel.getAnimations({ subtree: true }).forEach(animation => animation.cancel());
        if (motionAllowed()) {
          if (kind === "node") {
            panel.querySelector(".abc-detail").animate([{ opacity: .45 }, { opacity: 1 }], { duration: 300 });
          } else {
            Array.from(panel.querySelectorAll("[data-abc-value]")).filter(value => kind === "scene" || value.dataset.abcValue !== "situation").forEach((value, index) => {
              value.animate([
                { opacity: .2, transform: "translateY(5px)" },
                { opacity: 1, transform: "translateY(0)" }
              ], { duration: 360, delay: index * 35, fill: "backwards" });
            });
            svg.querySelectorAll(".abc-connection").forEach((path, index) => path.animate([
              { strokeDasharray: "1", strokeDashoffset: "1", opacity: .3 },
              { strokeDasharray: "1", strokeDashoffset: "0", opacity: 1 }
            ], { duration: 650, delay: index * 70, fill: "backwards" }));
          }
        }
      }
      scheduleDraw();
    }

    panel.addEventListener("click", event => {
      const target = event.target.closest("button");
      if (!target) return;
      if (target.hasAttribute("data-abc-scene")) {
        if (current.scene === target.dataset.abcScene) return;
        current.scene = target.dataset.abcScene;
        current.view = 0;
        refresh("scene");
      } else if (target.hasAttribute("data-abc-view")) {
        if (current.view === Number(target.dataset.abcView)) return;
        current.view = Number(target.dataset.abcView);
        refresh("view");
      } else if (target.hasAttribute("data-abc-node")) {
        current.node = target.dataset.abcNode;
        refresh("node");
      }
    }, { signal });
    // Cancel even in-flight WAAPI animations when the global pause is used.
    window.addEventListener("site-motion-change", () => {
      if (!motionAllowed()) panel.getAnimations({ subtree: true }).forEach(animation => animation.cancel());
    }, { signal });
    reduceQuery.addEventListener("change", () => {
      if (!motionAllowed()) panel.getAnimations({ subtree: true }).forEach(animation => animation.cancel());
    }, { signal });
    window.addEventListener("resize", scheduleDraw, { signal, passive: true });
    if ("ResizeObserver" in window) {
      resizeObserver = new ResizeObserver(scheduleDraw);
      resizeObserver.observe(diagram);
      nodes.forEach(node => resizeObserver.observe(node.closest(".abc-node")));
    }
    document.fonts?.ready.then(() => { if (!signal.aborted) scheduleDraw(); });
    refresh();
  }

  window.CbtModel = { render, mount, cleanup, getState: () => current ? { ...current } : null };
})();
