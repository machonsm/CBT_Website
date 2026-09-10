(() => {
  const contactEmail = "machonsm@gmail.com";
  let controller = null;

  const copy = {
    PL: {
      title: "Umów pierwszą konsultację",
      intro: "Zaproponuj termin i przygotuj wiadomość do Sandry. Konsultacja zostanie umówiona po wspólnym potwierdzeniu terminu.",
      stepOne: "1 z 2 · Preferencje i kontakt",
      stepTwo: "2 z 2 · Sprawdź wiadomość",
      format: "Online · po polsku lub angielsku",
      name: "Imię",
      email: "Adres e-mail",
      date: "Preferowana data (opcjonalnie)",
      time: "Preferowana godzina (opcjonalnie)",
      timezone: "Datę i godzinę podaj w strefie Europe/Warsaw (czas w Polsce). To propozycja terminu. Dostępność potwierdzi Sandra.",
      language: "Język spotkania",
      required: "Imię i adres e-mail są wymagane. Nie musisz opisywać swoich trudności ani podawać informacji o zdrowiu.",
      next: "Przejdź do podsumowania",
      review: "Sprawdź prośbę o termin",
      reviewIntro: "Poniżej znajdziesz szczegóły do wysłania. Przygotowanie wiadomości nie rezerwuje terminu.",
      meeting: "Spotkanie",
      price: "Koszt konsultacji",
      proposedDate: "Proponowana data",
      proposedTime: "Proponowana godzina",
      zone: "Strefa czasowa",
      toArrange: "Do wspólnego ustalenia",
      confirmation: "Termin wymaga potwierdzenia przez Sandrę. Przed jego potwierdzeniem ustalicie sposób połączenia oraz zasady płatności i zmiany terminu.",
      draft: "Zobacz treść wiadomości",
      draftLabel: "Treść wiadomości do skopiowania",
      mail: "Otwórz wiadomość e-mail",
      back: "Wróć do danych",
      emailHelp: "Przycisk otworzy Twoją aplikację pocztową. Sprawdź i wyślij wiadomość w tej aplikacji. Strona nie wysyła jej automatycznie.",
      fallback: "Jeśli aplikacja pocztowa się nie otworzy, skopiuj treść wiadomości powyżej i wyślij ją na",
      subject: "Prośba o pierwszą konsultację CBT",
      greeting: "Dzień dobry,\nchcę umówić pierwszą konsultację online.",
      ending: "Proszę o potwierdzenie dostępności oraz informacje o połączeniu i zasadach spotkania.",
      nameError: "Wpisz swoje imię.",
    },
    EN: {
      title: "Book an initial consultation",
      intro: "Suggest a time and prepare an email to Sandra. Your consultation will be booked once you have agreed and confirmed a time together.",
      stepOne: "1 of 2 · Preferences and contact",
      stepTwo: "2 of 2 · Review your email",
      format: "Online · in Polish or English",
      name: "First name",
      email: "Email address",
      date: "Preferred date (optional)",
      time: "Preferred time (optional)",
      timezone: "Enter the date and time in Europe/Warsaw (Polish local time). This is a suggested appointment. Sandra will confirm availability.",
      language: "Session language",
      required: "Your name and email address are required. You do not need to describe your difficulties or share health information.",
      next: "Review your request",
      review: "Check your appointment request",
      reviewIntro: "These are the details to send. Preparing this email does not reserve an appointment.",
      meeting: "Appointment",
      price: "Consultation fee",
      proposedDate: "Suggested date",
      proposedTime: "Suggested time",
      zone: "Time zone",
      toArrange: "To be agreed together",
      confirmation: "Sandra needs to confirm the appointment. Before confirmation, you will agree on how to connect, and the payment and rescheduling arrangements.",
      draft: "View the email text",
      draftLabel: "Email text to copy",
      mail: "Open email draft",
      back: "Edit your details",
      emailHelp: "The button opens your email application. Check and send the message there. This website does not send it automatically.",
      fallback: "If your email application does not open, copy the message above and send it to",
      subject: "Initial CBT consultation request",
      greeting: "Hello,\nI would like to arrange an initial online consultation.",
      ending: "Please confirm availability and share the connection details and appointment arrangements.",
      nameError: "Please enter your first name.",
    },
  };

  function getCopy(lang) {
    const appointment = window.SiteContent[lang].pricing.items[0];
    return { ...copy[lang], consultation: appointment.title, cost: appointment.price };
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    })[character]);
  }

  function warsawToday() {
    const parts = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Warsaw", year: "numeric", month: "2-digit", day: "2-digit",
    }).formatToParts(new Date());
    const part = (type) => parts.find((item) => item.type === type).value;
    return `${part("year")}-${part("month")}-${part("day")}`;
  }

  function render(language = "PL") {
    const lang = language === "EN" ? "EN" : "PL";
    const t = getCopy(lang);
    return `
      <div class="booking-flow" data-booking-flow data-booking-language="${lang}">
        <div class="modal-head">
          <p class="booking-flow-step" data-booking-step>${t.stepOne}</p>
          <h3 id="booking-title" class="card-title" tabindex="-1">${t.title}</h3>
          <p data-booking-intro>${t.intro}</p>
        </div>
        <div data-booking-entry>
          <div class="booking-flow-price">
            <div><strong>${t.consultation}</strong><span>${t.format}</span></div>
            <strong>${t.cost}</strong>
          </div>
          <form class="form" data-booking-request-form>
            <div class="form-grid">
              <div class="field">
                <label for="booking-name">${t.name} *</label>
                <input id="booking-name" name="name" type="text" autocomplete="given-name" maxlength="200" required>
              </div>
              <div class="field">
                <label for="booking-email">${t.email} *</label>
                <input id="booking-email" name="email" type="email" autocomplete="email" maxlength="254" required>
              </div>
            </div>
            <div class="form-grid">
              <div class="field">
                <label for="booking-date">${t.date}</label>
                <input id="booking-date" name="preferredDate" type="date" min="${warsawToday()}" aria-describedby="booking-timezone">
              </div>
              <div class="field">
                <label for="booking-time">${t.time}</label>
                <input id="booking-time" name="preferredTime" type="time" aria-describedby="booking-timezone">
              </div>
            </div>
            <p id="booking-timezone" class="booking-flow-note">${t.timezone}</p>
            <div class="field">
              <label for="booking-language">${t.language}</label>
              <select id="booking-language" name="preferredLanguage">
                <option value="PL" ${lang === "PL" ? "selected" : ""}>Polski</option>
                <option value="EN" ${lang === "EN" ? "selected" : ""}>English</option>
              </select>
            </div>
            <p class="booking-flow-note">${t.required}</p>
            <button class="btn btn-primary" type="submit">${t.next}</button>
          </form>
        </div>
        <div class="booking-flow-review" data-booking-review hidden></div>
      </div>
    `;
  }

  function bind(container = document) {
    cleanup();
    const root = container.querySelector("[data-booking-flow]");
    if (!root) return;
    controller = new AbortController();
    const { signal } = controller;
    const lang = root.dataset.bookingLanguage;
    const t = getCopy(lang);
    const form = root.querySelector("[data-booking-request-form]");
    const entry = root.querySelector("[data-booking-entry]");
    const review = root.querySelector("[data-booking-review]");
    const heading = root.querySelector("#booking-title");
    const nameInput = form.elements.name;

    function setStep(isReview) {
      entry.hidden = isReview;
      review.hidden = !isReview;
      root.querySelector("[data-booking-step]").textContent = isReview ? t.stepTwo : t.stepOne;
      root.querySelector("[data-booking-intro]").textContent = isReview ? t.reviewIntro : t.intro;
      heading.textContent = isReview ? t.review : t.title;
      root.closest(".modal")?.scrollTo({ top: 0, behavior: "instant" });
      heading.focus({ preventScroll: true });
    }

    nameInput.addEventListener("input", () => nameInput.setCustomValidity(""), { signal });
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      nameInput.value = nameInput.value.trim();
      nameInput.setCustomValidity(nameInput.value ? "" : t.nameError);
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const dateValue = data.get("preferredDate");
      // Date-only input is a Warsaw calendar date, not a browser-local timestamp.
      const dateLabel = dateValue ? new Intl.DateTimeFormat(lang === "PL" ? "pl-PL" : "en-GB", {
        dateStyle: "long", timeZone: "UTC",
      }).format(new Date(`${dateValue}T12:00:00Z`)) : t.toArrange;
      const languageLabel = data.get("preferredLanguage") === "EN" ? "English" : "Polski";
      const rows = [
        [t.meeting, `${t.consultation} · Online`],
        [t.price, t.cost],
        [t.proposedDate, dateLabel],
        [t.proposedTime, data.get("preferredTime") || t.toArrange],
        [t.zone, "Europe/Warsaw"],
        [t.language, languageLabel],
        [t.name, data.get("name")],
        [t.email, data.get("email").trim()],
      ];
      const draft = [t.greeting, "", ...rows.map(([label, value]) => `${label}: ${value}`), "", t.ending].join("\n");
      const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(t.subject)}&body=${encodeURIComponent(draft)}`;
      review.innerHTML = `
        <dl class="booking-flow-summary">${rows.map(([label, value]) => `
          <div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>
        `).join("")}</dl>
        <p class="booking-flow-notice">${t.confirmation}</p>
        <details class="booking-flow-draft">
          <summary>${t.draft}</summary>
          <div class="field">
            <label class="sr-only" for="booking-draft">${t.draftLabel}</label>
            <textarea id="booking-draft" rows="12" readonly spellcheck="false">${escapeHtml(draft)}</textarea>
          </div>
        </details>
        <div class="booking-flow-actions">
          <a class="btn btn-primary" href="${escapeHtml(mailto)}" aria-describedby="booking-email-help">${t.mail}</a>
          <button class="btn booking-flow-back" type="button" data-booking-back>${t.back}</button>
        </div>
        <p id="booking-email-help" class="booking-flow-note">${t.emailHelp}</p>
        <p class="booking-flow-note">${t.fallback} <a href="mailto:${contactEmail}">${contactEmail}</a>.</p>
      `;
      setStep(true);
    }, { signal });

    review.addEventListener("click", (event) => {
      if (event.target.closest("[data-booking-back]")) setStep(false);
    }, { signal });
  }

  function cleanup() {
    controller?.abort();
    controller = null;
  }

  window.BookingFlow = { render, bind, cleanup };
})();
