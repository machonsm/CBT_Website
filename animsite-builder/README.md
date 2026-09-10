# Sandra Machoń: Terapia CBT Online

The live website is a static, bilingual site. It runs without npm, a build step, or API keys.

From this directory:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. Press Ctrl+C to stop the server.

The active entry point is `index.html`. Public Polish/English copy is in `static/site-content.js`, with rendering and navigation in `static/app.js`; the original styles are in `static/styles.css`. The illustrated redesign lives in `static/experience.css`, and the opening panel is styled in `static/landing.css`. Scroll, pointer, and CBT model interactions are in `static/motion.js`. Existing image assets stay in `src/assets/images` and `src/components`.

The palette tokens in `static/experience.css` are sampled from `pic1.png` and the logo: heart orange `#f1562c`, brain pink `#ffcddf`, and hand/logo blue `#0085de`. Paper `#f3f4ef`, the illustration's dark outline `#080908`, and the original navy `#211ea3` keep text readable. Cards, buttons, booking panels and footer SVGs use these shared tokens. Decorative petals keep their original silhouettes through CSS masks. The original navy remains on the hero frame, text, primary buttons and footer details. The hero letters fill from their original pale shade to navy as the visitor scrolls.

The landing page uses locally hosted Instrument Serif (regular and italic), the reference website's heading font. Font files and their SIL Open Font License are in `static/fonts/instrument-serif`. The opening panel stays in view while scrolling fills the headline's letters, then releases into the page. Its illustration combines a rounded SVG brain with the flower, heart and arm from `pic1.png`. The overlapping brain layers keep the flower hidden until the brain opens with scrolling or hovering. Click, tap, Enter, or Space can hold the flower open or close it. Reduced motion shows the completed illustration without animation.

The next section, “W czym pomagam,” opens with a spacious, full-height water scene containing a label, heading, one paragraph and a small link to `#help-areas`. Four illustrated cards show everyday experiences. Hover previews an area of work through a circular colour wash and a drawn connecting line; click, tap, Enter or Space pins a card open. Its experience stays visible and the card height stays stable. A second activation or Escape closes it. `static/help-discovery.js` manages the accessible disclosure states, preserves pinned cards across rerenders and cleans up listeners; `static/help-discovery.css` provides four, two or one column depending on the screen width. Paused and reduced motion disable transitions and automatic hover previews while retaining button interaction. A diagnosis note leads into the prominent women’s mental health block, including postpartum experiences, perimenopause, menopause and ADHD. It explicitly welcomes adults of all genders. The following “O mnie” section contains the portrait, current training and supervision status, research background and expandable education details. Accreditations belong to the school’s programme, not to Sandra personally. `static/about-water.js` renders the decorative canvas only while visible and cleans up when the language or booking dialog changes.

“W czym pomagam” and “O mnie” are separate sections on the home page. The biography sits in its own rounded panel, with narrow paper-coloured margins above and beside it. Each `.about-journey::before` paints one independent animated blue gradient. `static/about-transition.js` manages both surfaces with a shared scroll listener and separate geometry: each gradient continues until its section's bottom leaves the viewport. The portrait and biography remain visible, with no circular reveal, zoom or text fade. The menu still scrolls to `#about`; `#about-education` opens the education details. Scrolling backwards reverses the gradients. Reduced motion and paused animations use readable static backgrounds.

Motion respects the system's reduced-motion setting. The page's pause button remembers the choice for the browser session. Touch devices use native scrolling. The first consultation, cooperation steps, fees and FAQ remain readable immediately; they do not wait for a reveal animation.

The footer returns to the landing page's paper background with original SVG hands holding flowers, hearts, and a brain in the same illustration palette. `static/footer-garden.js` gives each hand a spring sway as the pointer passes nearby, with a small nudge on touch. The artwork shows three complete motifs on narrow screens. Motion stops when settled or offscreen, respects pause and reduced motion, and cleans up when the page rerenders. Styling is in `static/footer-garden.css`; the vector artwork is rendered in `static/app.js`.

The page follows this order: introduction → help areas → about Sandra → how CBT works → first consultation → further cooperation → fees → FAQ → contact → illustrated footer. `static/content-flow.css` adapts the existing visual language to the new copy and sections.

The CBT section explains evidence, individual formulation, collaborative goals and work between sessions. The existing five-part interaction is called the CBT cognitive model. Its two choices compare postponing an important conversation with having it despite anxiety. Only the behaviour changes; thoughts, emotion and body sensations remain the same. A small loop opens into a path, with a qualified explanation rather than a promise of symptom relief. Buttons work with keyboard and touch even when animations are paused. Model state survives language changes and opening or closing the booking dialog.

A concise partnership passage leads to the first consultation, now on paper with a pink note and an orange accent. A numbered path through planning, practice, review and independence explains further therapy. The FAQ initially displays six questions; a native details disclosure reveals four more. Individual answers remain native details elements, and direct links open the necessary parent disclosure. Unconfirmed practical policies are kept off the public page.

`static/booking-flow.js` and `static/booking-flow.css` provide a two-step request: contact/preferences, then a review of the initial consultation cost and proposed Warsaw time. Sandra confirmed on 10 September 2026 that the first consultation is 50 minutes / PLN 150 and CBT psychotherapy is 50 minutes / PLN 190, with the same fees in both languages. Booking reads the consultation entry from `SiteContent.pricing.items[0]`, so the form, summary, email and fee table stay consistent. The visitor opens and sends an email draft in their own mail application. The page does not send mail or reserve a slot, and it explicitly explains that Sandra confirms the appointment separately. No health history or phone number is requested.

The blog is hidden because its current cards are previews without complete linked articles; the old content remains in the source. Restore it once the first-consultation, CBT and overthinking articles have usable destinations. Missing practice details and documents are listed in `CONTENT-NOTES.md`; no unconfirmed durations, cancellation terms or supervision credentials are published.

The React/Vite files in `src` are retained from the earlier prototype and are not the active website. To host this version, serve this directory as static files, including `static` and the referenced image directories.

Quick syntax checks:

```sh
node --check static/app.js
node --check static/motion.js
```
