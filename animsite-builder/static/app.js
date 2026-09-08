(() => {
  "use strict";

  const assets = {
    logo: "src/assets/images/logo.png",
    portrait: "src/assets/images/regenerated_image_1786380909669.png",
    hero: "src/components/blue-shape-hero.png",
    heart: "src/assets/images/heart-arrow.png",
    help: "src/assets/images/pic1.png",
  };

  const translations = {
    PL: {
      nav: {
        about: "O mnie",
        therapy: "Terapia CBT",
        process: "Jak pracuję",
        blog: "Blog",
        contact: "Kontakt",
        bookButton: "Umów konsultację",
      },
      hero: {
        line1: "Zrozumieć myśli.",
        line2: "Odzyskać równowagę.",
        description:
          "Prowadzę prywatną praktykę terapii poznawczo-behawioralnej online. Wspieram osoby dorosłe w pracy z lękiem, stresem, obniżonym nastrojem i trudnymi myślami, pomagając odzyskać większy spokój i sprawczość.",
        cta: "Umów konsultację →",
        scroll: "Przewiń w dół",
      },
      benefits: [
        {
          icon: "🔒",
          title: "Bezpieczeństwo",
          description:
            "Twoja prywatność i zaufanie są dla mnie priorytetem. Pracujemy w bezpiecznej i poufnej przestrzeni.",
        },
        {
          icon: "📅",
          title: "Elastyczne terminy",
          description:
            "Dopasowuję spotkania do Twojego grafiku. Sesje online w dogodnych godzinach, także wieczorami.",
        },
        {
          icon: "💻",
          title: "Wygodnie online",
          description:
            "Terapia z dowolnego miejsca w Polsce i na świecie. Wystarczy internet i spokojne miejsce.",
        },
        {
          icon: "👤",
          title: "Indywidualne podejście",
          description:
            "Pracujemy nad Twoimi celami i w Twoim tempie. Ty decydujesz, co jest dla Ciebie ważne.",
        },
      ],
      therapy: {
        badge: "Metoda pracy",
        title: "Zrozum. Zmień. Działaj.",
        paragraph1:
          "Terapia poznawczo-behawioralna (CBT) to naukowo potwierdzona metoda, która pomaga lepiej zrozumieć, jak myśli wpływają na emocje i zachowania. CBT uczy praktycznych umiejętności radzenia sobie z trudnościami, zmniejsza stres i lęk oraz wspiera budowanie bardziej satysfakcjonującego życia.",
        paragraph2:
          "Wspólnie zidentyfikujemy trudne schematy myślenia, znajdziemy nowe perspektywy i wprowadzimy zmiany, które naprawdę działają w codziennym życiu.",
        learnMore: "Dowiedz się więcej o CBT",
        interactiveSimTitle: "Interaktywny model CBT (Trójkąt Poznawczy)",
        interactiveSimSubtitle: "Zobacz, jak myśli, emocje i zachowania są ze sobą połączone:",
        thoughtLabel: 'Myśl (np. "Nie poradzę sobie z tym zadaniem")',
        emotionLabel: "Emocja (np. Lęk, napięcie 8/10)",
        behaviorLabel: "Zachowanie (np. Odkładanie na później, wycofanie)",
        physioLabel: "Reakcja ciała (np. Ścisk w żołądku, przyspieszony oddech)",
      },
      about: {
        title: "O mnie",
        subtitle: "Terapia z empatią i doświadczeniem",
        paragraph1:
          "Jestem Sandrą Machoń, psycholożką i terapeutką CBT w trakcie certyfikacji. Ukończyłam psychologię na University of Roehampton oraz studia magisterskie z neuronauki w King’s College London. Pracowałam także jako badaczka akademicka.",
        paragraph2:
          "Wspieram osoby dorosłe w pracy z lękiem, stresem i obniżonym nastrojem. Szczególnie interesuje mnie zdrowie psychiczne kobiet, w tym depresja poporodowa, okres okołomenopauzalny i menopauza. Ukończyłam również szkolenie z afirmującego wsparcia osób LGBT+.",
        paragraph3:
          "Prowadzę terapię po polsku i po angielsku, także dla ekspatów (expats) mieszkających w Polsce lub Polaków za granicą.",
        values: [
          {
            symbol: "♥",
            title: "Empatia",
            detail: "Uważnie słucham i naprawdę rozumiem Twoją sytuację.",
          },
          {
            symbol: "▣",
            title: "Konkretne narzędzia",
            detail: "Daję Ci sprawdzone metody, które wdrażasz w codziennym życiu.",
          },
          {
            symbol: "⬡",
            title: "Bezpieczna przestrzeń",
            detail: "Tworzę miejsce pełne zaufania, akceptacji i braku oceniania.",
          },
        ],
      },
      help: {
        title: "Jak mogę pomóc?",
        subtitle: "Pracuję z różnymi trudnościami m.in.:",
        topics: [
          {
            id: "anxiety",
            icon: "🍃",
            title: "Lęk",
            description:
              "Lęk uogólniony, napady paniki, lęk społeczny i niepokój w codziennych sytuacjach.",
            cbtApproach:
              "Stosujemy ekspozycję poznawczą, pracę z katastrofizacją i techniki oddechowe.",
          },
          {
            id: "stress",
            icon: "⚡",
            title: "Stres",
            description:
              "Przewlekły stres zawodowy, wypalenie, poczucie przeciążenia i napięcie mięśniowe.",
            cbtApproach:
              "Pracujemy nad stawianiem granic, higieną układu nerwowego i restrukturyzacją wymagań.",
          },
          {
            id: "mood",
            icon: "☁",
            title: "Obniżony nastrój",
            description:
              "Stany depresyjne, spadek energii, utrata satysfakcji z życia i apatia.",
            cbtApproach:
              "Używamy aktywacji behawioralnej i identyfikowania zniekształceń poznawczych.",
          },
          {
            id: "overthinking",
            icon: "◉",
            title: "Natłok myśli",
            description:
              "Ruminacje, ciągłe analizowanie przeszłości i zamartwianie się o przyszłość.",
            cbtApproach:
              "Uczymy wyznaczania czasu na zamartwianie się oraz technik zakotwiczenia w tu i teraz.",
          },
          {
            id: "selfesteem",
            icon: "●",
            title: "Niska samoocena",
            description:
              'Surowy krytyk wewnętrzny, poczucie bycia "niewystarczającym" i porównywanie się z innymi.',
            cbtApproach:
              "Budujemy wspierający dialog wewnętrzny i weryfikujemy kluczowe przekonania o sobie.",
          },
          {
            id: "relationships",
            icon: "💬",
            title: "Trudności w relacjach",
            description:
              "Problemy z komunikacją, obawa przed odrzuceniem, trudność z asertywnością.",
            cbtApproach:
              "Ćwiczymy asertywną komunikację Ja i rozpoznajemy schematy interpersonalne.",
          },
          {
            id: "perfectionism",
            icon: "🎯",
            title: "Perfekcjonizm",
            description:
              "Paraliżujący lęk przed błędem, nierealistyczne oczekiwania i ciągłe niezadowolenie.",
            cbtApproach:
              "Pracujemy nad akceptacją niedoskonałości i elastycznością poznawczą.",
          },
          {
            id: "insomnia",
            icon: "☾",
            title: "Bezsenność",
            description: "Trudności z zasypianiem przez gonitwę myśli, wybudzanie się w nocy.",
            cbtApproach:
              "Stosujemy protokół CBT-I (CBT for Insomnia), w tym restrykcję snu i kontrolę bodźców.",
          },
        ],
      },
      process: {
        title: "Jak pracuję?",
        subtitle: "Cztery kroki do trwałej zmiany",
        steps: [
          {
            number: 1,
            title: "Konsultacja wstępna",
            description:
              "Poznajemy się i rozmawiamy o tym, co jest dla Ciebie ważne i z czym przychodzisz.",
          },
          {
            number: 2,
            title: "Cele terapii",
            description:
              "Wspólnie rozpoznajemy zniekształcenia poznawcze i określamy realne cele oraz plan dopasowany do Twoich potrzeb.",
          },
          {
            number: 3,
            title: "Praca i narzędzia",
            description:
              "Uczymy się nowych umiejętności poznawczych i wdrażamy eksperymenty w codziennym życiu.",
          },
          {
            number: 4,
            title: "Trwała zmiana",
            description:
              "Zmieniasz sposób myślenia, czujesz się lepiej, budujesz odporność psychiczną i odzyskujesz równowagę.",
          },
        ],
      },
      assessment: {
        title: "Samosprawdzenie samopoczucia",
        subtitle: "Krótki test gotowości do terapii CBT",
        question: "Jak często w ostatnim czasie odczuwasz natłok myśli lub lęk?",
        options: [
          "Rzadko – zazwyczaj radzę sobie ze stresem.",
          "Czasami – w trudniejszych momentach czuję przeciążenie.",
          "Często – wyczerpuje mnie ciągłe zamartwianie się.",
          "Prawie zawsze – lęk i myśli przeszkadzają mi w codziennym funkcjonowaniu.",
        ],
        recommendationTitle: "Co mówi Twój wynik?",
        recommendationText:
          "Terapia CBT jest wysoce skuteczna w pracy z natłokiem myśli i lękiem. Pierwsza konsultacja to bezpieczny krok do zrozumienia swoich mechanizmów.",
        actionButton: "Skonsultuj wynik ze mną",
      },
      blog: {
        title: "Na blogu",
        viewAll: "Zobacz wszystkie artykuły →",
        readMore: "Czytaj więcej →",
        posts: [
          {
            id: "1",
            title: "Jak rozpoznać natłok myśli i wyjść z pętli zamartwiania się?",
            category: "Lęk & Ruminacje",
            readTime: "5 min czytania",
            excerpt:
              "Ciągłe analizowanie, wymyślanie scenariuszy i martwienie się potrafią wyczerpać. Poznaj sygnały i pierwsze kroki CBT.",
            shapeType: "therapy",
            fullContent: [
              'Natłok myśli (tzw. overthinking lub ruminacje) pojawia się wtedy, gdy nasz mózg utknie w pętli poszukiwania zagrożeń. Mimo że wydaje nam się, że "rozwiązujemy problem", w rzeczywistości obciążamy układ nerwowy.',
              "W terapii CBT uczymy się rozróżniać problem produktywny od bezużytecznego zamartwiania się. Zamartwianie się często dotyczy kwestii, na które nie mamy bezpośredniego wpływu tu i teraz.",
              'Kluczowym krokiem jest zadanie sobie pytania: "Czy mam w tej chwili realny wpływ na tę sytuację?". Jeśli nie – stosujemy techniki zakotwiczenia (oddech 4-7-8, zauważanie bodźców z otoczenia) oraz przekierowanie uwagi.',
            ],
            keyTakeaways: [
              'Rozpoznaj pętlę "co jeśli?" – to sygnał lękowy, a nie fakt.',
              'Wyznacz 15-minutowe "okienko martwienia się" w ciągu dnia.',
              "Używaj technik zakotwiczenia sensorycznego (5-4-3-2-1).",
            ],
          },
          {
            id: "2",
            title: "CBT a wewnętrzny krytyk: jak zamienić samokrytykę na wsparcie",
            category: "Samoocena",
            readTime: "4 min czytania",
            excerpt:
              "Samokrytyka potrafi być bardzo obciążająca. Sprawdź, jak psychologia poznawcza pomaga ją zrozumieć i przekształcić.",
            shapeType: "about",
            fullContent: [
              "Wewnętrzny krytyk to głos, który wykształcił się często w reakcji na dawne oczekiwania i trudne doświadczenia. Choć bywa złośliwy, jego pierwotną funkcją miało być chronienie nas przed porażką.",
              "W terapii poznawczo-behawioralnej nie walczymy brutalnie ze swoimi myślami. Zamiast tego stajemy się wyrozumiałym obserwatorem i weryfikujemy ich prawdziwość.",
              'Zadaj sobie pytanie: "Czy powiedział(a)bym to samo przyjacielowi w podobnej sytuacji?". Zmiana tonu wewnętrznego dialogu zmniejsza poziom kortyzolu i przywraca motywację.',
            ],
            keyTakeaways: [
              "Oddziel siebie od swojej myśli – myśl to nie absolutna prawda.",
              "Poszukaj dowodów ZA i PRZECIW uogólnionym wnioskom.",
              "Ćwicz wyrozumiałość wobec siebie (self-compassion).",
            ],
          },
          {
            id: "3",
            title: "5 sprawdzonych sposobów na szybką regulację stresu",
            category: "Ciało & Emocje",
            readTime: "6 min czytania",
            excerpt:
              "Proste i skuteczne techniki bazujące na neuronauce, które możesz zastosować natychmiast w pracy i domu.",
            shapeType: "cta",
            fullContent: [
              "Kiedy odczuwamy ostry stres, nasz układ autonomiczny przechodzi w tryb walki lub ucieczki. Zanim zmienimy schemat myślenia, warto wpłynąć bezpośrednio na ciało.",
              "Wzdych fizjologiczny (zrobienie dwóch szybkich wdechów nosem i długiego powolnego wydechu ustami) natychmiast obniża tętno i stymuluje nerw błędny.",
              "Kolejną metodą jest Progresywna Relaksacja Mięśni Jacobsona – świadome napinanie i rozluźnianie poszczególnych partii ciała.",
            ],
            keyTakeaways: [
              "Wzdychanie fizjologiczne resetuje układ nerwowy w kilkanaście sekund.",
              "Wydłużony wydech stymuluje przywspółczulny układ nerwowy.",
              "Ruch fizyczny pomaga dokończyć cykl reakcji stresowej.",
            ],
          },
        ],
      },
      cta: {
        title: "Zacznijmy od rozmowy.",
        subtitle:
          "Pierwsza konsultacja to spokojna przestrzeń, żeby opowiedzieć, co się dzieje i sprawdzić, czy terapia CBT będzie dla Ciebie dobrym kierunkiem.",
        button: "Umów konsultację",
      },
      bookingModal: {
        title: "Umów konsultację online",
        subtitle: "Wypełnij krótki formularz, a przygotuję wiadomość e-mail z Twoim zgłoszeniem.",
        nameLabel: "Imię i nazwisko",
        emailLabel: "Adres e-mail",
        phoneLabel: "Numer telefonu",
        typeLabel: "Rodzaj spotkania",
        typeOptions: {
          consultation: "Konsultacja wstępna (50 min)",
          cbt_session: "Sesja terapii CBT (50 min)",
          expat_session: "Session in English for Expats (50 min)",
        },
        langLabel: "Preferowany język spotkania",
        dateLabel: "Preferowany dzień",
        timeLabel: "Preferowana pora",
        timeOptions: {
          morning: "Rano (8:00 - 12:00)",
          afternoon: "Popołudnie (12:00 - 17:00)",
          evening: "Wieczór (17:00 - 20:00)",
        },
        messageLabel: "Krótki opis trudności (opcjonalnie)",
        submitButton: "Przygotuj wiadomość",
        successTitle: "Prawie gotowe!",
        successText:
          "Otworzyłam szkic wiadomości w Twoim programie pocztowym. Wyślij ją, aby potwierdzić zgłoszenie. Jeśli okno poczty się nie otworzyło, napisz bezpośrednio na kontakt@sandramachon.pl.",
        closeButton: "Zamknij okno",
      },
      footer: {
        brandDesc:
          "Prywatna praktyka terapii poznawczo-behawioralnej online dla osób dorosłych w całej Polsce i za granicą.",
        quickLinks: "Szybkie linki",
        contact: "Kontakt",
        language: "Język / Language",
        copyright: "© 2026 Sandra Machoń. Wszelkie prawa zastrzeżone.",
        legal: "Polityka prywatności | Regulamin",
        onlineNote: "Sesje online w całej Polsce i dla polonii / ekspatów",
      },
    },
    EN: {
      nav: {
        about: "About Me",
        therapy: "CBT Therapy",
        process: "How I Work",
        blog: "Blog",
        contact: "Contact",
        bookButton: "Book Consultation",
      },
      hero: {
        line1: "Understand your thoughts.",
        line2: "Restore your balance.",
        description:
          "I run a private online Cognitive Behavioral Therapy practice. I support adults working through anxiety, stress, low mood, and overwhelming thoughts, helping you regain peace of mind and agency.",
        cta: "Book a consultation →",
        scroll: "Scroll down",
      },
      benefits: [
        {
          icon: "🔒",
          title: "Safety & Privacy",
          description:
            "Your privacy and trust are my highest priority. We work in a safe, confidential space.",
        },
        {
          icon: "📅",
          title: "Flexible Hours",
          description:
            "Sessions tailored to your busy schedule, including evening slots in Polish time (CET).",
        },
        {
          icon: "💻",
          title: "Convenient Online",
          description:
            "Therapy from anywhere in the world. All you need is an internet connection and a quiet spot.",
        },
        {
          icon: "👤",
          title: "Personalized Care",
          description:
            "We focus on your goals at your pace. You decide what matters most to you.",
        },
      ],
      therapy: {
        badge: "Methodology",
        title: "Understand. Change. Act.",
        paragraph1:
          "Cognitive Behavioral Therapy (CBT) is an evidence-based approach that helps you understand how thoughts, feelings, and behaviors interact. CBT equips you with practical skills to navigate difficulty, ease stress, and build a more fulfilling life.",
        paragraph2:
          "Together we identify unhelpful thinking patterns, explore new perspectives, and implement actionable changes that stick in your daily routine.",
        learnMore: "Learn more about CBT",
        interactiveSimTitle: "Interactive CBT Model (Cognitive Triangle)",
        interactiveSimSubtitle: "Explore how thoughts, feelings, and actions connect:",
        thoughtLabel: 'Thought (e.g., "I cannot handle this task")',
        emotionLabel: "Emotion (e.g., Anxiety, tension 8/10)",
        behaviorLabel: "Behavior (e.g., Procrastination, avoidance)",
        physioLabel: "Body Signal (e.g., Tight chest, shallow breath)",
      },
      about: {
        title: "About Me",
        subtitle: "Therapy with empathy and expertise",
        paragraph1:
          "I am Sandra Machoń, a psychologist and CBT therapist in certification. I completed my psychology degree at University of Roehampton and my Master’s degree in Neuroscience at King’s College London. I also worked as an academic researcher.",
        paragraph2:
          "I work with adults experiencing anxiety, chronic stress, and low mood. I have a special clinical focus on women’s mental health (including postpartum depression, perimenopause, and menopause). I am also trained in LGBTQ+ affirmative therapy.",
        paragraph3:
          "I offer therapy sessions in both Polish and English, welcoming expats living in Poland as well as clients abroad.",
        values: [
          {
            symbol: "♥",
            title: "Empathy",
            detail: "I listen deeply and seek to truly understand your experience.",
          },
          {
            symbol: "▣",
            title: "Practical Tools",
            detail: "Evidence-based techniques you can apply in daily life right away.",
          },
          {
            symbol: "⬡",
            title: "Safe Space",
            detail: "A compassionate environment free of judgment or stigma.",
          },
        ],
      },
      help: {
        title: "How Can I Help?",
        subtitle: "Areas of therapeutic focus include:",
        topics: [
          {
            id: "anxiety",
            icon: "🍃",
            title: "Anxiety",
            description: "Generalized anxiety, panic attacks, social anxiety, and health worries.",
            cbtApproach:
              "Cognitive restructuring, systematic exposure, and grounding breathwork.",
          },
          {
            id: "stress",
            icon: "⚡",
            title: "Burnout & Stress",
            description: "Workplace stress, emotional exhaustion, boundary difficulties.",
            cbtApproach:
              "Workload restructuring, nervous system regulation, and assertive boundaries.",
          },
          {
            id: "mood",
            icon: "☁",
            title: "Low Mood",
            description: "Depressive episodes, loss of energy, lack of motivation or pleasure.",
            cbtApproach: "Behavioral activation and identifying cognitive distortions.",
          },
          {
            id: "overthinking",
            icon: "◉",
            title: "Overthinking",
            description: "Rumination loops, hyper-analyzing past events, catastrophizing.",
            cbtApproach:
              "Worry postponement strategies and present-moment mindfulness anchoring.",
          },
          {
            id: "selfesteem",
            icon: "●",
            title: "Low Self-Esteem",
            description: "Harsh internal critic, feelings of inadequacy, social comparison.",
            cbtApproach:
              "Core belief work, self-compassion, and challenging self-criticism.",
          },
          {
            id: "relationships",
            icon: "💬",
            title: "Relationship Issues",
            description: "Communication blocks, fear of rejection, setting boundaries.",
            cbtApproach:
              "Assertive communication skills and interpersonal pattern awareness.",
          },
          {
            id: "perfectionism",
            icon: "🎯",
            title: "Perfectionism",
            description:
              "Paralyzing fear of failure, all-or-nothing thinking, unrealistic standards.",
            cbtApproach:
              "Unpacking rules for living and embracing flexible performance standards.",
          },
          {
            id: "insomnia",
            icon: "☾",
            title: "Insomnia",
            description:
              "Difficulty falling asleep due to racing thoughts, night awakenings.",
            cbtApproach:
              "CBT-I protocols including sleep hygiene, stimulus control, and relaxation.",
          },
        ],
      },
      process: {
        title: "How I Work",
        subtitle: "Four steps toward lasting change",
        steps: [
          {
            number: 1,
            title: "Initial Consultation",
            description:
              "We meet online to discuss what brings you to therapy and what you wish to achieve.",
          },
          {
            number: 2,
            title: "Goal Setting",
            description:
              "We collaboratively outline clear, realistic goals and a tailored plan.",
          },
          {
            number: 3,
            title: "Skills & Tools",
            description:
              "We learn cognitive techniques and test behavioral experiments in your everyday life.",
          },
          {
            number: 4,
            title: "Lasting Growth",
            description:
              "You gain emotional resilience, new mental habits, and restored internal balance.",
          },
        ],
      },
      assessment: {
        title: "Self-Reflection Checklist",
        subtitle: "A brief check on your mental wellness",
        question: "How often do you feel overwhelmed by racing thoughts or anxiety lately?",
        options: [
          "Rarely – I usually handle daily stress well.",
          "Sometimes – during tough weeks I feel overloaded.",
          "Often – constant worrying drains my energy.",
          "Almost constantly – anxiety interferes with my day-to-day life.",
        ],
        recommendationTitle: "What does this mean?",
        recommendationText:
          "CBT therapy is proven to significantly reduce anxiety and overthinking. Booking an initial consultation is a positive step toward relief.",
        actionButton: "Discuss Your Reflection",
      },
      blog: {
        title: "From the Blog",
        viewAll: "View all articles →",
        readMore: "Read more →",
        posts: [
          {
            id: "1",
            title: "How to Recognize Overthinking and Break the Worry Cycle",
            category: "Anxiety & Rumination",
            readTime: "5 min read",
            excerpt:
              "Endless analyzing and worst-case scenarios can leave you exhausted. Discover key signals and CBT steps.",
            shapeType: "therapy",
            fullContent: [
              "Overthinking occurs when the mind gets stuck in an alarm loop. While it feels like you are solving a problem, you are actually overloading your nervous system.",
              "In CBT, we distinguish between productive problem-solving and unhelpful worrying about things outside immediate control.",
              'A helpful question is: "Do I have direct power over this right now?". If not, grounding exercises (4-7-8 breathing, sensory awareness) help redirect focus.',
            ],
            keyTakeaways: [
              'Notice "what if?" statements – they are anxiety signals, not facts.',
              'Set a dedicated 15-minute "worry time" window during the day.',
              "Use sensory grounding techniques (5-4-3-2-1 rule).",
            ],
          },
          {
            id: "2",
            title: "CBT and the Inner Critic: Transforming Self-Criticism into Self-Compassion",
            category: "Self-Esteem",
            readTime: "4 min read",
            excerpt:
              "Harsh self-talk is draining. Learn how cognitive psychology helps reframe harsh thoughts.",
            shapeType: "about",
            fullContent: [
              "The inner critic often develops as a defense mechanism to protect us from failure or rejection.",
              "In CBT we do not fight our thoughts with aggression. Instead, we observe them objectively and evaluate their validity.",
              'Ask yourself: "Would I talk this way to a close friend in the same position?". Shifting your internal dialogue lowers cortisol and restores motivation.',
            ],
            keyTakeaways: [
              "Separate identity from thoughts – thoughts are not objective truth.",
              "Examine evidence FOR and AGAINST negative assumptions.",
              "Practice self-compassionate self-talk.",
            ],
          },
          {
            id: "3",
            title: "5 Neuroscience-Backed Ways to Instantly Down-Regulate Stress",
            category: "Mind & Body",
            readTime: "6 min read",
            excerpt:
              "Simple, scientifically validated techniques you can use immediately at work or home.",
            shapeType: "cta",
            fullContent: [
              "When acute stress hits, your sympathetic nervous system triggers a fight-or-flight response.",
              "A physiological sigh (two quick inhales through the nose followed by a slow exhale through the mouth) rapidly slows heart rate via the vagus nerve.",
              "Progressive Muscle Relaxation (PMR) is another effective method to release physical tension stored in muscles.",
            ],
            keyTakeaways: [
              "Physiological sighs reset nervous system tension in seconds.",
              "Prolonged exhales trigger the parasympathetic recovery system.",
              "Light physical movement helps complete the stress cycle.",
            ],
          },
        ],
      },
      cta: {
        title: "Let’s start with a conversation.",
        subtitle:
          "An initial consultation is a calm space to talk through what is happening and see whether CBT therapy feels like the right next step.",
        button: "Book a Consultation",
      },
      bookingModal: {
        title: "Book an Online Consultation",
        subtitle: "Fill in the details below and I will prepare an email request for you.",
        nameLabel: "Full Name",
        emailLabel: "Email Address",
        phoneLabel: "Phone Number",
        typeLabel: "Session Type",
        typeOptions: {
          consultation: "Initial Consultation (50 min)",
          cbt_session: "CBT Therapy Session (50 min)",
          expat_session: "Session in English for Expats (50 min)",
        },
        langLabel: "Preferred Language",
        dateLabel: "Preferred Date",
        timeLabel: "Preferred Time Slot",
        timeOptions: {
          morning: "Morning (8:00 - 12:00)",
          afternoon: "Afternoon (12:00 - 17:00)",
          evening: "Evening (17:00 - 20:00)",
        },
        messageLabel: "Brief message / reason for visit (optional)",
        submitButton: "Prepare Email",
        successTitle: "Almost ready!",
        successText:
          "I opened an email draft in your mail app. Send it to confirm your request. If your mail window did not open, contact me directly at kontakt@sandramachon.pl.",
        closeButton: "Close window",
      },
      footer: {
        brandDesc:
          "Private online Cognitive Behavioral Therapy practice for adults across Poland and internationally.",
        quickLinks: "Quick Links",
        contact: "Contact",
        language: "Language / Język",
        copyright: "© 2026 Sandra Machoń. All rights reserved.",
        legal: "Privacy Policy | Terms of Service",
        onlineNote: "Online sessions in Poland & internationally",
      },
    },
  };

  const state = {
    lang: localStorage.getItem("sandra-cbt-lang") === "EN" ? "EN" : "PL",
    mobileOpen: false,
    bookingOpen: false,
    bookingSubmitted: false,
  };

  const blogArticleCards = {
    PL: [
      {
        id: "cbt",
        title: "Czym jest terapia CBT i kiedy może pomóc?",
        category: "Podstawy CBT",
        readTime: "6 min czytania",
        excerpt:
          "Przystępne wyjaśnienie, jak myśli, emocje, ciało i zachowania tworzą wzorce, które można stopniowo zmieniać.",
      },
      {
        id: "overthinking",
        title: "Jak rozpoznać natłok myśli i wyjść z pętli zamartwiania się?",
        category: "Lęk & Ruminacje",
        readTime: "5 min czytania",
        excerpt:
          "Ciągłe analizowanie i scenariusze typu 'co jeśli' potrafią wyczerpać. Poznaj pierwsze kroki pracy CBT.",
      },
      {
        id: "inner-critic",
        title: "CBT a wewnętrzny krytyk: jak zamienić samokrytykę na wsparcie",
        category: "Samoocena",
        readTime: "4 min czytania",
        excerpt:
          "Jak odróżnić fakt od surowej interpretacji i zacząć budować łagodniejszy dialog wewnętrzny.",
      },
      {
        id: "stress-regulation",
        title: "5 sprawdzonych sposobów na szybką regulację stresu",
        category: "Ciało & Emocje",
        readTime: "6 min czytania",
        excerpt:
          "Proste techniki oddechowe i poznawcze, które pomagają obniżyć napięcie w pracy i w domu.",
      },
      {
        id: "social-anxiety",
        title: "Lęk społeczny: jak zacząć od małych, bezpiecznych ekspozycji",
        category: "Lęk społeczny",
        readTime: "7 min czytania",
        excerpt:
          "Pomysły na stopniowe ćwiczenia, które pomagają oswajać sytuacje społeczne bez presji perfekcji.",
      },
      {
        id: "perfectionism",
        title: "Perfekcjonizm i zasada 'wystarczająco dobrze'",
        category: "Perfekcjonizm",
        readTime: "5 min czytania",
        excerpt:
          "Dlaczego wysokie standardy czasem blokują działanie i jak szukać większej elastyczności.",
      },
      {
        id: "sleep",
        title: "Bezsenność i gonitwa myśli wieczorem: od czego zacząć?",
        category: "Sen",
        readTime: "6 min czytania",
        excerpt:
          "Łagodne strategie wyciszania wieczornego napięcia i budowania bardziej przewidywalnej rutyny snu.",
      },
      {
        id: "self-esteem",
        title: "Niska samoocena: jak pracować z przekonaniami o sobie",
        category: "Samoocena",
        readTime: "7 min czytania",
        excerpt:
          "Wstęp do rozpoznawania przekonań kluczowych i testowania ich w codziennych sytuacjach.",
      },
      {
        id: "postpartum",
        title: "Depresja poporodowa: kiedy warto poszukać wsparcia?",
        category: "Zdrowie kobiet",
        readTime: "5 min czytania",
        excerpt:
          "Krótki tekst o sygnałach przeciążenia po porodzie i o tym, dlaczego proszenie o pomoc ma znaczenie.",
      },
      {
        id: "first-session",
        title: "Terapia online: jak przygotować się do pierwszej konsultacji",
        category: "Pierwsza sesja",
        readTime: "4 min czytania",
        excerpt:
          "Co warto mieć pod ręką, jak wybrać spokojne miejsce i czego możesz spodziewać się na początku.",
      },
    ],
    EN: [
      {
        id: "cbt",
        title: "What is CBT therapy and when can it help?",
        category: "CBT Basics",
        readTime: "6 min read",
        excerpt:
          "A clear introduction to how thoughts, emotions, body signals, and behaviors form patterns that can change.",
      },
      {
        id: "overthinking",
        title: "How to recognize overthinking and break the worry cycle",
        category: "Anxiety & Rumination",
        readTime: "5 min read",
        excerpt:
          "Endless analyzing and 'what if' scenarios can be exhausting. Learn the first CBT steps.",
      },
      {
        id: "inner-critic",
        title: "CBT and the inner critic: shifting from self-criticism to support",
        category: "Self-Esteem",
        readTime: "4 min read",
        excerpt:
          "How to separate facts from harsh interpretations and build a more compassionate internal voice.",
      },
      {
        id: "stress-regulation",
        title: "5 practical ways to regulate stress quickly",
        category: "Mind & Body",
        readTime: "6 min read",
        excerpt:
          "Simple breathing and cognitive tools that can help lower tension at work and at home.",
      },
      {
        id: "social-anxiety",
        title: "Social anxiety: starting with small, safe exposures",
        category: "Social Anxiety",
        readTime: "7 min read",
        excerpt:
          "Ideas for gradual practice that can make social situations feel more manageable.",
      },
      {
        id: "perfectionism",
        title: "Perfectionism and the 'good enough' principle",
        category: "Perfectionism",
        readTime: "5 min read",
        excerpt:
          "Why high standards can sometimes block action, and how to build more flexible expectations.",
      },
      {
        id: "sleep",
        title: "Insomnia and racing thoughts at night: where to begin",
        category: "Sleep",
        readTime: "6 min read",
        excerpt:
          "Gentle ways to reduce evening tension and create a more predictable wind-down routine.",
      },
      {
        id: "self-esteem",
        title: "Low self-esteem: working with beliefs about yourself",
        category: "Self-Esteem",
        readTime: "7 min read",
        excerpt:
          "An introduction to identifying core beliefs and testing them in everyday situations.",
      },
      {
        id: "postpartum",
        title: "Postpartum depression: when is it worth seeking support?",
        category: "Women's Health",
        readTime: "5 min read",
        excerpt:
          "A short placeholder article about signs of overwhelm after birth and why support matters.",
      },
      {
        id: "first-session",
        title: "Online therapy: how to prepare for your first consultation",
        category: "First Session",
        readTime: "4 min read",
        excerpt:
          "What to have nearby, how to choose a quiet space, and what to expect at the beginning.",
      },
    ],
  };

  const site = document.getElementById("site");
  const sectionIds = ["help", "therapy", "about", "process", "blog", "contact"];
  const heroWaveDefaultPath =
    "M0 94 C160 66 320 124 480 94 C640 66 800 124 960 94 C1120 66 1280 124 1440 94 V140 H0 Z";
  let initialHashHandled = false;
  let lenis = null;
  let reducedMotionQuery = null;
  let scrollEffectsFrame = null;

  const escapeMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => escapeMap[char]);
  }

  function getCopy() {
    return translations[state.lang];
  }

  function getBlogPosts() {
    return blogArticleCards[state.lang];
  }

  function navLinks() {
    const nav = getCopy().nav;
    return [
      { href: "#about", id: "about", label: nav.about },
      { href: "#therapy", id: "therapy", label: nav.therapy },
      { href: "#process", id: "process", label: nav.process },
      { href: "#contact", id: "contact", label: nav.contact },
      { href: "#blog", id: "blog", label: nav.blog },
    ];
  }

  function compositionCta() {
    return `
      <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="340" cy="200" r="160" fill="#1b3644"></circle>
        <path d="M220 250 C220 120, 360 120, 360 250 Z" fill="#2FA875"></path>
        <circle cx="350" cy="200" r="60" fill="#FCF5F0"></circle>
      </svg>
    `;
  }

  function renderBrand(extraClass = "") {
    return `
      <a href="#top" class="brand ${extraClass}" aria-label="Sandra Machoń - Terapia CBT Online">
        <img src="${assets.logo}" alt="Sandra Machoń Logo">
        <span class="brand-text">
          <span class="brand-title">Terapia CBT Online</span>
          <span class="brand-subtitle">Sandra Machoń</span>
        </span>
      </a>
    `;
  }

  function renderLanguageToggle(compact = false) {
    if (compact) {
      return `
        <button class="lang-toggle" type="button" data-lang-toggle aria-label="Switch language">
          ${state.lang === "PL" ? "PL / EN" : "EN / PL"}
        </button>
      `;
    }

    const plClass = state.lang === "PL" ? "is-current" : "is-muted";
    const enClass = state.lang === "EN" ? "is-current" : "is-muted";
    return `
      <button class="lang-toggle" type="button" data-lang-toggle aria-label="Switch language">
        <span class="${plClass}">PL</span>
        <span class="is-muted">/</span>
        <span class="${enClass}">EN</span>
      </button>
    `;
  }

  function renderNavList() {
    return navLinks()
      .map(
        (link) => `
          <a href="${link.href}" class="nav-link" data-section-id="${link.id}">
            ${escapeHtml(link.label)}
          </a>
        `,
      )
      .join("");
  }

  function renderHeader() {
    const nav = getCopy().nav;
    return `
      <header class="site-header">
        <div class="nav-shell">
          ${renderBrand()}

          <nav class="desktop-nav" aria-label="Main navigation">
            ${renderNavList()}
          </nav>

          <div class="nav-actions">
            ${renderLanguageToggle()}
            <button class="btn btn-primary" type="button" data-open-booking>
              ${escapeHtml(nav.bookButton)}
            </button>
          </div>

          <div class="mobile-actions">
            ${renderLanguageToggle(true)}
            <button class="icon-btn" type="button" data-mobile-toggle aria-label="Toggle menu" aria-expanded="${state.mobileOpen}">
              ${state.mobileOpen ? "×" : "☰"}
            </button>
          </div>
        </div>
      </header>
      ${state.mobileOpen ? renderMobileMenu() : ""}
    `;
  }

  function renderMobileMenu() {
    const nav = getCopy().nav;
    return `
      <div class="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile navigation" data-lenis-prevent>
        <div class="mobile-menu-head">
          ${renderBrand("mobile-brand")}
          <div class="mobile-menu-actions">
            ${renderLanguageToggle(true)}
            <button class="icon-btn" type="button" data-mobile-toggle aria-label="Close menu">×</button>
          </div>
        </div>
        <nav aria-label="Mobile navigation links">
          ${renderNavList()}
          <button class="btn btn-primary" type="button" data-open-booking>
            ${escapeHtml(nav.bookButton)}
          </button>
        </nav>
        <div class="mobile-menu-foot">Terapia CBT Online · Sandra Machoń</div>
      </div>
    `;
  }

  function renderHero() {
    const hero = getCopy().hero;
    const heroLabel =
      state.lang === "PL"
        ? "Terapia CBT online po polsku i angielsku"
        : "Online CBT therapy in Polish and English";
    const heroAlt =
      state.lang === "PL"
        ? "Ilustracja symbolizująca terapię CBT i odzyskiwanie równowagi"
        : "Illustration representing CBT therapy and restoring balance";

    return `
      <section class="hero">
        <div class="container hero-grid">
          <div class="hero-copy fade-in">
            <p class="hero-kicker">${escapeHtml(heroLabel)}</p>
            <h1 class="display">
              <span class="hero-title-line">${escapeHtml(hero.line1)}</span>
              <span class="hero-title-line">${escapeHtml(hero.line2)}</span>
            </h1>
            <p class="hero-description">${escapeHtml(hero.description)}</p>
            <div class="hero-actions">
              <button class="btn btn-primary" type="button" data-open-booking>
                <span>${escapeHtml(hero.cta)}</span>
              </button>
            </div>
          </div>
          <div class="hero-art fade-in">
            <div class="hero-art-field">
              <img src="${assets.hero}" alt="${escapeHtml(heroAlt)}">
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function renderAudience() {
    const help = getCopy().help;
    const cards = help.topics.slice(0, 4);
    const label = state.lang === "PL" ? "DLA KOGO" : "WHO IT'S FOR";
    const title =
      state.lang === "PL"
        ? "Nie musisz mieć wszystkiego poukładanego, żeby zacząć."
        : "You do not need to have everything figured out to begin.";
    const lead =
      state.lang === "PL"
        ? "CBT może pomóc, kiedy myśli, emocje albo napięcie zaczynają zajmować zbyt dużo miejsca w codziennym życiu."
        : "CBT can help when thoughts, emotions, or tension begin taking up too much space in everyday life.";

    return `
      <section id="help" class="section page-section page-section-plain section-audience" data-animate-section>
        <div class="container section-shell">
          <div class="editorial-head" data-reveal>
            <span class="section-label">${escapeHtml(label)}</span>
            <h2 class="section-title">${escapeHtml(title)}</h2>
            <p class="section-lead">${escapeHtml(lead)}</p>
          </div>

          <div class="audience-grid" data-reveal-group>
            ${cards
              .map(
                (item, index) => `
                  <article class="audience-card" data-reveal>
                    <span class="card-index">${String(index + 1).padStart(2, "0")}</span>
                    <h3>${escapeHtml(item.title)}</h3>
                    <p>${escapeHtml(item.description)}</p>
                  </article>
                `,
              )
              .join("")}
          </div>
        </div>
      </section>
    `;
  }

  function renderAbout() {
    const about = getCopy().about;
    return `
      <section id="about" class="section page-section page-section-color section-about" data-animate-section>
        <div class="section-ribbon" aria-hidden="true"></div>
        <div class="container section-shell">
          <div class="about-redesign-grid">
            <div class="about-photo-stage" data-reveal="left">
              <img src="${assets.portrait}" alt="Sandra Machoń - Psychoterapeuta CBT">
            </div>

            <div class="section-copy-block" data-reveal="right">
              <span class="section-label section-label-light">O MNIE</span>
              <h2 class="section-title">${escapeHtml(about.subtitle)}</h2>
              <div class="about-paragraphs">
                <p>${escapeHtml(about.paragraph1)}</p>
                <p>${escapeHtml(about.paragraph2)}</p>
                <p>${escapeHtml(about.paragraph3)}</p>
              </div>
              <div class="credential-row redesigned">
                <span class="credential">University of Roehampton</span>
                <span class="credential">King's College London MSc</span>
                <span class="credential credential-accent">PL / EN</span>
              </div>
            </div>
          </div>

          <div class="value-grid redesigned" data-reveal-group>
            ${about.values
              .map(
                (value) => `
                  <article class="value-card" data-reveal>
                    <span class="value-symbol" aria-hidden="true">${escapeHtml(value.symbol)}</span>
                    <div>
                      <h3>${escapeHtml(value.title)}</h3>
                      <p>${escapeHtml(value.detail)}</p>
                    </div>
                  </article>
                `,
              )
              .join("")}
          </div>
        </div>
      </section>
    `;
  }

  function renderTherapy() {
    const therapy = getCopy().therapy;
    return `
      <section id="therapy" class="section page-section page-section-plain section-therapy" data-animate-section>
        <div class="container section-shell">
          <div class="therapy-redesign-grid">
            <div class="section-copy-block" data-reveal="left">
              <span class="section-label">TERAPIA CBT</span>
              <h2 class="section-title">${escapeHtml(therapy.title)}</h2>
              <p class="section-lead">${escapeHtml(therapy.paragraph1)}</p>
              <p class="section-copy">${escapeHtml(therapy.paragraph2)}</p>
              <a class="link-arrow" href="#blog-cbt">
                <span>${escapeHtml(therapy.learnMore)}</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
            <div class="therapy-model-panel" data-reveal="right">
              <img src="${assets.help}" alt="Terapia CBT online - ilustracja">
              <div class="cbt-loop" aria-label="${state.lang === "PL" ? "Model CBT" : "CBT model"}">
                <span>${state.lang === "PL" ? "Myśli" : "Thoughts"}</span>
                <span>${state.lang === "PL" ? "Emocje" : "Emotions"}</span>
                <span>${state.lang === "PL" ? "Zachowania" : "Behaviors"}</span>
                <span>${state.lang === "PL" ? "Reakcje ciała" : "Body signals"}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function renderProcess() {
    const process = getCopy().process;
    const processSubtitle =
      state.lang === "PL"
        ? "Trzy proste etapy współpracy, bez presji i bez pośpiechu."
        : "Three simple stages of working together, without pressure or rush.";
    const processSteps =
      state.lang === "PL"
        ? [
            {
              number: "01",
              title: "Konsultacja",
              description:
                "Spokojnie rozmawiamy o tym, z czym przychodzisz, czego potrzebujesz i czy CBT jest dobrym kierunkiem.",
            },
            {
              number: "02",
              title: "Terapia",
              description:
                "Łączymy rozmowę z konkretnymi narzędziami: rozpoznawaniem schematów, eksperymentami i praktyką między sesjami.",
            },
            {
              number: "03",
              title: "Postępy",
              description:
                "Regularnie sprawdzamy, co się zmienia, wzmacniamy nowe umiejętności i dopasowujemy tempo pracy.",
            },
          ]
        : [
            {
              number: "01",
              title: "Consultation",
              description:
                "We calmly talk through what brings you here, what you need, and whether CBT is a good direction.",
            },
            {
              number: "02",
              title: "Therapy",
              description:
                "We combine conversation with practical tools: identifying patterns, testing experiments, and practicing between sessions.",
            },
            {
              number: "03",
              title: "Progress",
              description:
                "We regularly review what is changing, strengthen new skills, and adjust the pace of the work.",
            },
          ];

    return `
      <section id="process" class="section page-section page-section-color section-process" data-animate-section>
        <div class="section-ribbon process-ribbon" aria-hidden="true"></div>
        <div class="container section-shell">
          <div class="process-head redesigned" data-reveal>
            <span class="section-label section-label-light">${state.lang === "PL" ? "JAK TO WYGLĄDA" : "WHAT IT LOOKS LIKE"}</span>
            <h2 class="section-title">${escapeHtml(process.title)}</h2>
            <p>${escapeHtml(processSubtitle)}</p>
          </div>
          <div class="step-grid redesigned" data-reveal-group>
            ${processSteps
              .map(
                (step) => `
                  <article class="step-card" data-reveal>
                    <div class="step-number">${escapeHtml(step.number)}</div>
                    <h3 class="card-title">${escapeHtml(step.title)}</h3>
                    <p>${escapeHtml(step.description)}</p>
                  </article>
                `,
              )
              .join("")}
          </div>
        </div>
      </section>
    `;
  }

  function renderBlog() {
    const blog = getCopy().blog;
    const posts = getBlogPosts();
    const lead =
      state.lang === "PL"
        ? "Krótkie teksty o CBT, regulacji stresu, natłoku myśli i pierwszych krokach w terapii."
        : "Short pieces on CBT, stress regulation, overthinking, and first steps in therapy.";
    const prevLabel = state.lang === "PL" ? "Poprzednie artykuły" : "Previous articles";
    const nextLabel = state.lang === "PL" ? "Następne artykuły" : "Next articles";
    const railLabel =
      state.lang === "PL" ? "Pozioma lista artykułów blogowych" : "Horizontal blog article list";

    return `
      <section id="blog" class="section page-section page-section-plain section-blog" data-animate-section>
        <div class="blog-pin" data-blog-pin>
          <div class="container section-shell blog-shell">
            <div class="section-head-row redesigned blog-head" data-reveal>
              <div class="section-copy-block">
                <span class="section-label">BLOG</span>
                <h2 class="section-title">${escapeHtml(blog.title)}</h2>
                <p class="section-lead">${escapeHtml(lead)}</p>
              </div>
              <div class="blog-controls" aria-label="${escapeHtml(blog.title)}">
                <button class="blog-scroll-btn" type="button" data-blog-scroll="prev" aria-label="${escapeHtml(prevLabel)}">←</button>
                <button class="blog-scroll-btn" type="button" data-blog-scroll="next" aria-label="${escapeHtml(nextLabel)}">→</button>
              </div>
            </div>

            <div class="blog-rail-shell" data-reveal>
              <div class="blog-rail" data-blog-rail tabindex="0" aria-label="${escapeHtml(railLabel)}">
                <div class="article-track" data-blog-track>
                  ${posts
                    .map((post, index) => {
                      const articleId = post.id === "cbt" ? ' id="blog-cbt"' : "";
                      return `
                        <article${articleId} class="article-card blog-card blog-tone-${(index % 5) + 1}" data-reveal>
                          <div class="article-art blog-art" aria-hidden="true">
                            <span class="category-pill">${escapeHtml(post.category)}</span>
                            <span class="blog-card-number">${String(index + 1).padStart(2, "0")}</span>
                            <span class="blog-art-stripe stripe-one"></span>
                            <span class="blog-art-stripe stripe-two"></span>
                          </div>
                          <div class="article-body">
                            <div>
                              <div class="read-time">${escapeHtml(post.readTime)}</div>
                              <h3>${escapeHtml(post.title)}</h3>
                              <p>${escapeHtml(post.excerpt)}</p>
                            </div>
                            <span class="article-link">${escapeHtml(blog.readMore)}</span>
                          </div>
                        </article>
                      `;
                    })
                    .join("")}
                </div>
              </div>
              <div class="blog-progress" aria-hidden="true">
                <span data-blog-progress></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function renderCta() {
    const cta = getCopy().cta;
    const footer = getCopy().footer;
    const pricing =
      state.lang === "PL"
        ? {
            title: "Cennik",
            items: [
              { label: "Konsultacja wstępna", price: "150 zł" },
              { label: "Sesja terapeutyczna", price: "200 zł" },
              { label: "Sesja terapeutyczna w języku angielskim", price: "200 zł" },
            ],
          }
        : {
            title: "Pricing",
            items: [
              { label: "Initial consultation", price: "150 PLN" },
              { label: "Therapy session", price: "200 PLN" },
              { label: "Therapy session in English", price: "200 PLN" },
            ],
          };
    return `
      <section id="contact" class="section page-section page-section-color section-contact" data-animate-section>
        <div class="section-ribbon contact-ribbon" aria-hidden="true"></div>
        <div class="container section-shell">
          <div class="cta-shell redesigned" data-reveal>
            <div class="cta-grid">
              <div class="section-copy-block">
                <span class="section-label section-label-light">${state.lang === "PL" ? "KONTAKT" : "CONTACT"}</span>
                <h2 class="section-title">${escapeHtml(cta.title)}</h2>
                <p>${escapeHtml(cta.subtitle)}</p>
              </div>
              <div class="contact-actions">
                <a class="contact-email" href="mailto:kontakt@sandramachon.pl">kontakt@sandramachon.pl</a>
                <p>${escapeHtml(footer.onlineNote)}</p>
                <button class="btn btn-primary" type="button" data-open-booking>
                  ${escapeHtml(cta.button)}
                </button>
              </div>
            </div>
            <div class="pricing-panel" data-reveal>
              <div>
                <span class="mini-label">${escapeHtml(pricing.title)}</span>
              </div>
              <div class="pricing-grid">
                ${pricing.items
                  .map(
                    (item) => `
                      <div class="pricing-item">
                        <span>${escapeHtml(item.label)}</span>
                        <strong>${escapeHtml(item.price)}</strong>
                      </div>
                    `,
                  )
                  .join("")}
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function renderFooter() {
    const footer = getCopy().footer;
    return `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand">
              <div class="footer-brand-row">
                <img src="${assets.logo}" alt="Sandra Machoń Logo">
                <span>Terapia CBT Online</span>
              </div>
              <p>${escapeHtml(footer.brandDesc)}</p>
            </div>
            <div class="footer-col">
              <h4>${escapeHtml(footer.quickLinks)}</h4>
              <ul>
                <li><a href="#about">O mnie / About</a></li>
                <li><a href="#therapy">Terapia CBT</a></li>
                <li><a href="#process">Jak pracuję / Process</a></li>
                <li><a href="#blog">Blog</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>${escapeHtml(footer.contact)}</h4>
              <p><a class="email-link" href="mailto:kontakt@sandramachon.pl">kontakt@sandramachon.pl</a></p>
              <p>${escapeHtml(footer.onlineNote)}</p>
            </div>
            <div class="footer-col">
              <h4>${escapeHtml(footer.language)}</h4>
              <button class="lang-toggle" type="button" data-lang-toggle>
                🌐 ${state.lang === "PL" ? "Język: Polski (Switch to EN)" : "Language: English (Zmień na PL)"}
              </button>
            </div>
          </div>
          <div class="footer-bottom">
            <div>${escapeHtml(footer.copyright)}</div>
            <div>${escapeHtml(footer.legal)}</div>
          </div>
        </div>
      </footer>
    `;
  }

  function renderBookingModal() {
    if (!state.bookingOpen) return "";

    const modal = getCopy().bookingModal;
    if (state.bookingSubmitted) {
      return `
        <div class="modal-backdrop" data-modal-backdrop="booking" data-lenis-prevent>
          <div class="modal" role="dialog" aria-modal="true" aria-labelledby="booking-success-title" data-lenis-prevent>
            <button class="modal-close" type="button" data-close-booking aria-label="Close">×</button>
            <div class="success-state">
              <div class="success-icon" aria-hidden="true">✓</div>
              <h3 id="booking-success-title" class="card-title">${escapeHtml(modal.successTitle)}</h3>
              <p>${escapeHtml(modal.successText)}</p>
              <button class="btn btn-primary" type="button" data-close-booking>
                ${escapeHtml(modal.closeButton)}
              </button>
            </div>
          </div>
        </div>
      `;
    }

    return `
      <div class="modal-backdrop" data-modal-backdrop="booking" data-lenis-prevent>
        <div class="modal" role="dialog" aria-modal="true" aria-labelledby="booking-title" data-lenis-prevent>
          <button class="modal-close" type="button" data-close-booking aria-label="Close">×</button>
          <div class="modal-head">
            <h3 id="booking-title" class="card-title">${escapeHtml(modal.title)}</h3>
            <p>${escapeHtml(modal.subtitle)}</p>
          </div>

          <form class="form" data-booking-form>
            <div class="field">
              <label for="booking-name">${escapeHtml(modal.nameLabel)} *</label>
              <input id="booking-name" name="name" type="text" required placeholder="${state.lang === "PL" ? "np. Anna Kowalska" : "e.g. Anna Kowalska"}">
            </div>

            <div class="form-grid">
              <div class="field">
                <label for="booking-email">${escapeHtml(modal.emailLabel)} *</label>
                <input id="booking-email" name="email" type="email" required placeholder="anna@example.com">
              </div>
              <div class="field">
                <label for="booking-phone">${escapeHtml(modal.phoneLabel)}</label>
                <input id="booking-phone" name="phone" type="tel" placeholder="+48 123 456 789">
              </div>
            </div>

            <div class="field">
              <label for="booking-type">${escapeHtml(modal.typeLabel)}</label>
              <select id="booking-type" name="sessionType">
                <option value="consultation">${escapeHtml(modal.typeOptions.consultation)}</option>
                <option value="cbt_session">${escapeHtml(modal.typeOptions.cbt_session)}</option>
                <option value="expat_session">${escapeHtml(modal.typeOptions.expat_session)}</option>
              </select>
            </div>

            <div class="form-grid">
              <div class="field">
                <label for="booking-language">${escapeHtml(modal.langLabel)}</label>
                <select id="booking-language" name="preferredLanguage">
                  <option value="PL" ${state.lang === "PL" ? "selected" : ""}>Polski</option>
                  <option value="EN" ${state.lang === "EN" ? "selected" : ""}>English</option>
                </select>
              </div>
              <div class="field">
                <label for="booking-date">${escapeHtml(modal.dateLabel)}</label>
                <input id="booking-date" name="preferredDate" type="date">
              </div>
            </div>

            <div class="field">
              <label for="booking-time">${escapeHtml(modal.timeLabel)}</label>
              <select id="booking-time" name="preferredTime">
                <option value="morning">${escapeHtml(modal.timeOptions.morning)}</option>
                <option value="afternoon">${escapeHtml(modal.timeOptions.afternoon)}</option>
                <option value="evening">${escapeHtml(modal.timeOptions.evening)}</option>
              </select>
            </div>

            <div class="field">
              <label for="booking-message">${escapeHtml(modal.messageLabel)}</label>
              <textarea id="booking-message" name="message" placeholder="${state.lang === "PL" ? "Krótko opisz, z czym przychodzisz..." : "Briefly describe what you would like to work on..."}"></textarea>
            </div>

            <button class="btn btn-primary" type="submit">${escapeHtml(modal.submitButton)}</button>
          </form>
        </div>
      </div>
    `;
  }

  function render() {
    document.documentElement.lang = state.lang === "PL" ? "pl" : "en";
    document.body.classList.toggle(
      "modal-open",
      state.mobileOpen || state.bookingOpen,
    );

    site.innerHTML = `
      <div class="page">
        ${renderHeader()}
        <main id="top">
          ${renderHero()}
          ${renderAudience()}
          ${renderTherapy()}
          ${renderAbout()}
          ${renderProcess()}
          ${renderBlog()}
          ${renderCta()}
        </main>
        ${renderFooter()}
        ${renderBookingModal()}
      </div>
    `;

    attachHandlers();
    setupRevealAnimations();
    initLenis();
    syncLenisState();
    initBlogScroller();
    updateScrollEffects();
    handleInitialHashScroll();
  }

  function handleInitialHashScroll() {
    if (initialHashHandled || !window.location.hash) return;
    initialHashHandled = true;

    scrollToSelector(window.location.hash, { immediate: true });
    requestScrollEffectsUpdate();

    requestAnimationFrame(() => {
      scrollToSelector(window.location.hash, { immediate: true });
      requestScrollEffectsUpdate();
    });
  }

  function attachHandlers() {
    document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        state.lang = state.lang === "PL" ? "EN" : "PL";
        localStorage.setItem("sandra-cbt-lang", state.lang);
        render();
      });
    });

    document.querySelectorAll("[data-mobile-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        state.mobileOpen = !state.mobileOpen;
        render();
      });
    });

    document.querySelectorAll("a[href^='#']").forEach((link) => {
      link.addEventListener("click", (event) => {
        const selector = link.getAttribute("href");
        if (!selector || selector === "#") return;

        const scrollToTarget = () => {
          scrollToSelector(selector);
        };

        if (document.querySelector(selector)) {
          event.preventDefault();
          const hadMobileMenu = state.mobileOpen;
          state.mobileOpen = false;

          if (hadMobileMenu) {
            render();
            requestAnimationFrame(scrollToTarget);
          } else {
            scrollToTarget();
          }
        }
      });
    });

    document.querySelectorAll("[data-blog-scroll]").forEach((button) => {
      button.addEventListener("click", () => {
        scrollBlogRail(button.dataset.blogScroll === "next" ? 1 : -1);
      });
    });

    document.querySelectorAll("[data-open-booking]").forEach((button) => {
      button.addEventListener("click", () => {
        state.mobileOpen = false;
        state.bookingOpen = true;
        state.bookingSubmitted = false;
        render();
        requestAnimationFrame(() => {
          document.getElementById("booking-name")?.focus();
        });
      });
    });

    document.querySelectorAll("[data-close-booking]").forEach((button) => {
      button.addEventListener("click", () => {
        state.bookingOpen = false;
        state.bookingSubmitted = false;
        render();
      });
    });

    document.querySelectorAll("[data-modal-backdrop]").forEach((backdrop) => {
      backdrop.addEventListener("click", (event) => {
        if (event.target !== backdrop) return;

        state.bookingOpen = false;
        state.bookingSubmitted = false;
        render();
      });
    });

    const form = document.querySelector("[data-booking-form]");
    if (form) {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        openEmailDraft(new FormData(form));
        state.bookingSubmitted = true;
        render();
      });
    }
  }

  function setupRevealAnimations() {
    const revealItems = document.querySelectorAll("[data-reveal]");
    const animatedSections = document.querySelectorAll("[data-animate-section]");

    if (!revealItems.length && !animatedSections.length) return;

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      animatedSections.forEach((section) => section.classList.add("section-in-view"));
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12,
      },
    );

    revealItems.forEach((item, index) => {
      item.style.setProperty("--reveal-delay", `${Math.min(index * 35, 220)}ms`);
      revealObserver.observe(item);
    });

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-in-view");
            sectionObserver.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -24% 0px",
        threshold: 0.18,
      },
    );

    animatedSections.forEach((section) => sectionObserver.observe(section));
  }

  function initLenis() {
    if (lenis || typeof window.Lenis !== "function") return;

    reducedMotionQuery =
      reducedMotionQuery || window.matchMedia("(prefers-reduced-motion: reduce)");

    lenis = new window.Lenis({
      autoRaf: true,
      anchors: false,
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
      stopInertiaOnNavigate: true,
      respectReducedMotion: true,
      prevent: (node) => Boolean(node.closest?.("[data-lenis-prevent]")),
    });

    lenis.on("scroll", requestScrollEffectsUpdate);

    if (typeof reducedMotionQuery.addEventListener === "function") {
      reducedMotionQuery.addEventListener("change", syncLenisState);
    }
  }

  function syncLenisState() {
    if (!lenis) return;

    if (state.mobileOpen || state.bookingOpen) {
      lenis.stop();
    } else {
      lenis.start();
      lenis.resize();
    }
  }

  function initBlogScroller() {
    const rail = document.querySelector("[data-blog-rail]");
    const track = document.querySelector("[data-blog-track]");

    if (!rail || !track) return;

    rail.addEventListener("scroll", updateBlogProgress, { passive: true });
    updateBlogProgress();

    requestAnimationFrame(() => {
      updateBlogPin();
      updateBlogProgress();
    });
  }

  function getStickyHeaderHeight() {
    return document.querySelector(".site-header")?.offsetHeight || 0;
  }

  function shouldPinBlog() {
    return (
      typeof window.matchMedia === "function" &&
      window.matchMedia("(min-width: 960px)").matches
    );
  }

  function getBlogPinMetrics() {
    const section = document.getElementById("blog");
    const pin = document.querySelector("[data-blog-pin]");
    const rail = document.querySelector("[data-blog-rail]");

    if (!section || !pin || !rail) return null;

    if (!shouldPinBlog()) {
      section.style.removeProperty("--blog-pin-offset");
      section.style.removeProperty("--blog-pin-height");
      return null;
    }

    const headerHeight = getStickyHeaderHeight();
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight || 1;
    const pinHeight = Math.max(1, pin.offsetHeight || viewportHeight - headerHeight);
    const maxScroll = Math.max(0, rail.scrollWidth - rail.clientWidth);
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;

    section.style.setProperty("--blog-pin-offset", `${formatWaveNumber(headerHeight)}px`);
    section.style.setProperty(
      "--blog-pin-height",
      `${formatWaveNumber(pinHeight + maxScroll)}px`,
    );

    return {
      rail,
      maxScroll,
      startY: sectionTop - headerHeight,
    };
  }

  function updateBlogPin() {
    const metrics = getBlogPinMetrics();

    if (!metrics) {
      updateBlogProgress();
      return;
    }

    const { rail, maxScroll, startY } = metrics;

    if (!maxScroll) {
      rail.scrollLeft = 0;
      updateBlogProgress();
      return;
    }

    const progress = Math.min(1, Math.max(0, (window.scrollY - startY) / maxScroll));
    const target = maxScroll * progress;

    if (Math.abs(rail.scrollLeft - target) > 0.5) {
      rail.scrollLeft = target;
    }

    updateBlogProgress();
  }

  function updateBlogProgress() {
    const rail = document.querySelector("[data-blog-rail]");
    const progress = document.querySelector("[data-blog-progress]");

    if (!rail || !progress) return;

    const maxScroll = Math.max(0, rail.scrollWidth - rail.clientWidth);
    const value = maxScroll > 0 ? rail.scrollLeft / maxScroll : 1;
    progress.style.transform = `scaleX(${formatWaveNumber(Math.max(0.08, Math.min(1, value)))})`;
  }

  function scrollBlogRailTo(target) {
    const rail = document.querySelector("[data-blog-rail]");
    if (!rail) return;

    const maxScroll = Math.max(0, rail.scrollWidth - rail.clientWidth);
    const nextTarget = Math.min(maxScroll, Math.max(0, target));
    const metrics = getBlogPinMetrics();

    if (metrics && metrics.maxScroll > 0) {
      const targetY = metrics.startY + nextTarget;

      if (lenis && !state.bookingOpen && !state.mobileOpen) {
        lenis.scrollTo(targetY, {
          duration: 0.85,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else {
        window.scrollTo({
          top: targetY,
          behavior: userPrefersReducedMotion() ? "auto" : "smooth",
        });
      }

      return;
    }

    rail.scrollTo({
      left: nextTarget,
      behavior: userPrefersReducedMotion() ? "auto" : "smooth",
    });
  }

  function scrollBlogRail(direction) {
    const rail = document.querySelector("[data-blog-rail]");
    if (!rail) return;

    const distance = Math.min(rail.clientWidth * 0.78, 560);
    scrollBlogRailTo(rail.scrollLeft + distance * direction);
  }

  function scrollToSelector(selector, options = {}) {
    const target =
      selector === "#blog-cbt"
        ? document.querySelector("#blog") || document.querySelector(selector)
        : document.querySelector(selector);
    if (!target) return;

    if (selector === "#blog-cbt") {
      scrollBlogRailTo(0);
    }

    const prefersReducedMotion = userPrefersReducedMotion();
    const immediate = Boolean(options.immediate || prefersReducedMotion);
    const offset =
      selector === "#blog" || selector === "#blog-cbt" ? -getStickyHeaderHeight() : 0;

    if (lenis && !state.bookingOpen && !state.mobileOpen) {
      lenis.scrollTo(target, {
        immediate,
        duration: immediate ? 0 : 1.05,
        offset,
      });
      return;
    }

    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY + offset,
      behavior: immediate ? "auto" : "smooth",
    });
  }

  function userPrefersReducedMotion() {
    if (typeof window.matchMedia !== "function") return false;

    reducedMotionQuery =
      reducedMotionQuery || window.matchMedia("(prefers-reduced-motion: reduce)");

    return reducedMotionQuery.matches;
  }

  function formatWaveNumber(value) {
    return Number.parseFloat(value.toFixed(2));
  }

  function clampWaveY(value) {
    return formatWaveNumber(Math.min(134, Math.max(4, value)));
  }

  function updateHeroWave() {
    const hero = document.querySelector(".hero");
    const wave = document.querySelector("[data-hero-wave]");

    if (!hero || !wave) return;

    if (userPrefersReducedMotion()) {
      wave.setAttribute("d", heroWaveDefaultPath);
      hero.style.setProperty("--hero-wave-shift-x", "0px");
      hero.style.setProperty("--hero-wave-shift-y", "0px");
      hero.style.setProperty("--hero-wave-scale-y", "1");
      return;
    }

    const rect = hero.getBoundingClientRect();
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight || 1;
    const rawProgress = 1 - rect.bottom / viewportHeight;
    const progress = Math.min(1, Math.max(0, rawProgress));
    const eased = progress * progress * (3 - 2 * progress);
    const phase = eased * Math.PI * 4.8;

    if (eased <= 0.001) {
      wave.setAttribute("d", heroWaveDefaultPath);
      hero.style.setProperty("--hero-wave-shift-x", "0px");
      hero.style.setProperty("--hero-wave-shift-y", "0px");
      hero.style.setProperty("--hero-wave-scale-y", "1");
      return;
    }

    const base = 94 + eased * 9 + Math.sin(phase * 0.55) * 9 * eased;
    const crestA = 66 - eased * 7 + Math.sin(phase) * 24 * eased;
    const troughA = 124 + eased * 5 + Math.cos(phase * 0.85) * 18 * eased;
    const crestB = 66 - eased * 6 + Math.cos(phase + 0.8) * 22 * eased;
    const troughB = 124 + eased * 6 + Math.sin(phase + 1.1) * 19 * eased;
    const crestC = 66 - eased * 7 + Math.sin(phase + 1.7) * 23 * eased;
    const troughC = 124 + eased * 5 + Math.cos(phase + 2.2) * 18 * eased;

    wave.setAttribute(
      "d",
      [
        `M0 ${formatWaveNumber(base)}`,
        `C160 ${clampWaveY(crestA)} 320 ${clampWaveY(troughA)} 480 ${formatWaveNumber(base)}`,
        `C640 ${clampWaveY(crestB)} 800 ${clampWaveY(troughB)} 960 ${formatWaveNumber(base)}`,
        `C1120 ${clampWaveY(crestC)} 1280 ${clampWaveY(troughC)} 1440 ${formatWaveNumber(base)}`,
        "V140 H0 Z",
      ].join(" "),
    );

    hero.style.setProperty("--hero-wave-shift-x", `${formatWaveNumber(-126 * eased)}px`);
    hero.style.setProperty(
      "--hero-wave-shift-y",
      `${formatWaveNumber(Math.sin(eased * Math.PI) * 6)}px`,
    );
    hero.style.setProperty(
      "--hero-wave-scale-y",
      `${formatWaveNumber(1 + Math.sin(eased * Math.PI) * 0.16)}`,
    );
  }

  function openEmailDraft(formData) {
    const modal = getCopy().bookingModal;
    const sessionType = formData.get("sessionType");
    const preferredTime = formData.get("preferredTime");
    const sessionLabel = modal.typeOptions[sessionType] || sessionType;
    const timeLabel = modal.timeOptions[preferredTime] || preferredTime;
    const subject =
      state.lang === "PL" ? "Zgłoszenie na konsultację CBT" : "CBT consultation request";
    const body = [
      `${modal.nameLabel}: ${formData.get("name") || ""}`,
      `${modal.emailLabel}: ${formData.get("email") || ""}`,
      `${modal.phoneLabel}: ${formData.get("phone") || ""}`,
      `${modal.typeLabel}: ${sessionLabel}`,
      `${modal.langLabel}: ${formData.get("preferredLanguage") || state.lang}`,
      `${modal.dateLabel}: ${formData.get("preferredDate") || ""}`,
      `${modal.timeLabel}: ${timeLabel}`,
      "",
      `${modal.messageLabel}:`,
      formData.get("message") || "",
    ].join("\n");

    window.location.href = `mailto:kontakt@sandramachon.pl?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  function updateScrollEffects() {
    updateActiveNav();
    updateHeroWave();
    updateBlogPin();
  }

  function requestScrollEffectsUpdate() {
    if (scrollEffectsFrame) return;

    scrollEffectsFrame = window.requestAnimationFrame(() => {
      scrollEffectsFrame = null;
      updateScrollEffects();
    });
  }

  function updateActiveNav() {
    const links = document.querySelectorAll("[data-section-id]");
    if (!links.length) return;

    let current = null;
    if (window.scrollY >= 200) {
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;

      if (atBottom) {
        current = "blog";
      } else {
        sectionIds.forEach((id) => {
          const section = document.getElementById(id);
          if (!section) return;

          const rect = section.getBoundingClientRect();
          if (rect.top <= 220 && rect.bottom > 120) {
            current = id;
          }
        });
      }
    }

    links.forEach((link) => {
      const isActive = link.getAttribute("data-section-id") === current;
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    document.body.dataset.activeSection = current || "top";
  }

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;

    if (state.mobileOpen || state.bookingOpen) {
      state.mobileOpen = false;
      state.bookingOpen = false;
      state.bookingSubmitted = false;
      render();
    }
  });

  window.addEventListener("scroll", requestScrollEffectsUpdate, { passive: true });
  window.addEventListener("resize", requestScrollEffectsUpdate);

  render();
})();
