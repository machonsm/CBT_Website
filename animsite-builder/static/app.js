(() => {
  "use strict";

  const assets = {
    logo: "src/assets/images/logo.png",
    portrait: "src/assets/images/regenerated_image_1786380909669.png",
    hero: "src/components/blue-shape-hero.png",
    heart: "src/assets/images/heart-arrow.png",
    help: "src/assets/images/pic1.png",
    orangePetal: "src/assets/images/petal-orange.png",
    pinkPetal: "src/assets/images/petal-pink.png",
    helpHeart: "src/assets/images/help/heart-clean.webp",
    helpCovers: {
      anxiety: "anxiety-palette-v4.webp",
      stress: "stress-palette-v4.webp",
      mood: "mood-palette-v4.webp",
      overthinking: "overthinking-paper-v5.webp",
    },
  };

  const translations = {
    PL: {
      nav: {
        about: "O mnie",
        help: "Dla kogo",
        therapy: "Terapia CBT",
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
      reflection: {
        title: "Zrozumieć siebie",
        text: "Nie musisz od razu wiedzieć, jak poradzić sobie z tym, co czujesz. W terapii CBT wspólnie przyglądamy się myślom, emocjom i zachowaniom, szukając sposobów na więcej spokoju w codziennym życiu.",
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
        subtitle: "Terapia szyta na miarę",
        paragraph1:
          "Nazywam się Sandra Machoń. Jestem psycholożką i terapeutką CBT w trakcie certyfikacji. Ukończyłam psychologię na University of Roehampton oraz studia magisterskie z neuronauki w King’s College London. Mam doświadczenie w pracy badawczej. Obecnie kształcę się w Szkole Psychoterapii WSB-NLU.",
        paragraph2:
          "W terapii chcę zrozumieć Ciebie: co przeżywasz, co jest dla Ciebie ważne i co chcesz zmienić. Wspólnie ustalamy cele, dobieramy tempo i narzędzia do Twoich potrzeb. Przyglądamy się związkom między myślami, emocjami i zachowaniem, szukając zmian możliwych w Twoim codziennym życiu.",
        paragraph3:
          "Wspieram osoby dorosłe doświadczające lęku, stresu i obniżonego nastroju. Szczególnie bliskie jest mi zdrowie psychiczne kobiet, w tym trudności związane z depresją poporodową, okresem okołomenopauzalnym i menopauzą. Ukończyłam również szkolenie z afirmującego wsparcia osób LGBT+.",
        paragraph4:
          "Prowadzę terapię online po polsku i angielsku, także dla osób z zagranicy mieszkających w Polsce oraz osób z Polski żyjących za granicą. Zależy mi na uważnej rozmowie, w której możesz mówić o sobie bez obawy przed oceną.",
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
      assessment: {
        title: "Samosprawdzenie samopoczucia",
        subtitle: "Krótki test gotowości do terapii CBT",
        question: "Jak często w ostatnim czasie odczuwasz natłok myśli lub lęk?",
        options: [
          "Rzadko. Zazwyczaj radzę sobie ze stresem.",
          "Czasami. W trudniejszych momentach czuję przeciążenie.",
          "Często. Wyczerpuje mnie ciągłe zamartwianie się.",
          "Prawie zawsze. Lęk i myśli przeszkadzają mi w codziennym funkcjonowaniu.",
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
              'Kluczowym krokiem jest zadanie sobie pytania: "Czy mam w tej chwili realny wpływ na tę sytuację?". Jeśli nie, stosujemy techniki zakotwiczenia (oddech 4-7-8, zauważanie bodźców z otoczenia) oraz przekierowanie uwagi.',
            ],
            keyTakeaways: [
              'Rozpoznaj pętlę "co jeśli?". To sygnał lękowy, a nie fakt.',
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
              "Oddziel siebie od swojej myśli. Myśl to nie absolutna prawda.",
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
              "Kolejną metodą jest Progresywna Relaksacja Mięśni Jacobsona: świadome napinanie i rozluźnianie poszczególnych partii ciała.",
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
          "Otworzyłam szkic wiadomości w Twoim programie pocztowym. Wyślij ją, aby potwierdzić zgłoszenie. Jeśli okno poczty się nie otworzyło, napisz bezpośrednio na machonsm@gmail.com.",
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
        help: "Who I help",
        therapy: "CBT Therapy",
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
      reflection: {
        title: "Understanding yourself",
        text: "You don’t have to know right away how to cope with what you’re feeling. In CBT, we explore thoughts, emotions and behaviours together, looking for ways to bring more calm into everyday life.",
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
        subtitle: "Therapy tailored to you",
        paragraph1:
          "My name is Sandra Machoń. I am a psychologist and a CBT therapist working towards certification. I studied psychology at the University of Roehampton and completed a master’s degree in neuroscience at King’s College London. My background includes academic research. I am currently training at the WSB-NLU School of Psychotherapy.",
        paragraph2:
          "In therapy, I want to understand you: what you are experiencing, what matters to you and what you would like to change. Together, we set goals and choose a pace and tools that fit your needs. We explore the connections between thoughts, emotions and behaviour, looking for changes that feel achievable in your everyday life.",
        paragraph3:
          "I support adults experiencing anxiety, stress and low mood. Women’s mental health is a particular interest of mine, including difficulties related to postpartum depression, perimenopause and menopause. I have also completed training in affirmative support for LGBT+ people.",
        paragraph4:
          "I offer online therapy in Polish and English, including for people from abroad living in Poland and people from Poland living overseas. I value thoughtful conversations where you can talk about yourself without fear of judgement.",
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
      assessment: {
        title: "Self-Reflection Checklist",
        subtitle: "A brief check on your mental wellness",
        question: "How often do you feel overwhelmed by racing thoughts or anxiety lately?",
        options: [
          "Rarely. I usually handle daily stress well.",
          "Sometimes. During tough weeks I feel overloaded.",
          "Often. Constant worrying drains my energy.",
          "Almost constantly. Anxiety interferes with my day-to-day life.",
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
              'Notice "what if?" statements. They are anxiety signals, not facts.',
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
              "Separate identity from thoughts. Thoughts are not objective truth.",
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
          "I opened an email draft in your mail app. Send it to confirm your request. If your mail window did not open, contact me directly at machonsm@gmail.com.",
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
  const sectionIds = ["help", "about", "therapy", "first-consultation", "cooperation", "pricing", "faq", "contact"];
  let initialHashHandled = false;
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
    return { ...translations[state.lang], ...window.SiteContent[state.lang] };
  }

  function getBlogPosts() {
    return blogArticleCards[state.lang];
  }

  function navLinks() {
    const nav = getCopy().nav;
    return [
      { href: "#help", id: "help", label: nav.help },
      { href: "#about", id: "about", label: nav.about },
      { href: "#therapy", id: "therapy", label: nav.therapy },
      { href: "#pricing", id: "pricing", label: nav.pricing },
      { href: "#faq", id: "faq", label: nav.faq },
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
        <button class="lang-toggle" type="button" data-lang-toggle aria-label="${state.lang === "PL" ? "Zmień język na angielski" : "Switch language to Polish"}">
          ${state.lang === "PL" ? "PL / EN" : "EN / PL"}
        </button>
      `;
    }

    const plClass = state.lang === "PL" ? "is-current" : "is-muted";
    const enClass = state.lang === "EN" ? "is-current" : "is-muted";
    return `
      <button class="lang-toggle" type="button" data-lang-toggle aria-label="${state.lang === "PL" ? "Zmień język na angielski" : "Switch language to Polish"}">
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
        <div class="reading-progress" aria-hidden="true"><span></span></div>
        <div class="nav-shell">
          ${renderBrand()}

          <nav class="desktop-nav" aria-label="Main navigation">
            ${renderNavList()}
          </nav>

          <div class="nav-actions">
            ${renderLanguageToggle()}
            <button class="btn btn-primary" type="button" data-open-booking data-magnetic>
              ${escapeHtml(nav.bookButton)}
            </button>
          </div>

          <div class="mobile-actions">
            ${renderLanguageToggle(true)}
            <button class="icon-btn" type="button" data-mobile-toggle aria-label="${state.lang === "PL" ? "Otwórz menu" : "Open menu"}" aria-expanded="${state.mobileOpen}">
              ${state.mobileOpen ? "×" : "☰"}
            </button>
          </div>
        </div>
      </header>
      <button class="motion-toggle" type="button" data-motion-toggle aria-pressed="false" aria-label="${state.lang === "PL" ? "Wstrzymaj animacje" : "Pause animations"}">
        <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M5 3v10M11 3v10" fill="none" stroke="currentColor" stroke-width="2"/></svg>
        <span data-motion-label>${state.lang === "PL" ? "Wstrzymaj animacje" : "Pause animations"}</span>
      </button>
      ${state.mobileOpen ? renderMobileMenu() : ""}
    `;
  }

  function renderMobileMenu() {
    const nav = getCopy().nav;
    return `
      <div class="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile navigation">
        <div class="mobile-menu-head">
          ${renderBrand("mobile-brand")}
          <div class="mobile-menu-actions">
            ${renderLanguageToggle(true)}
            <button class="icon-btn" type="button" data-mobile-toggle aria-label="${state.lang === "PL" ? "Zamknij menu" : "Close menu"}">×</button>
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
    const [firstLines, secondLines] = hero.lines;
    const renderFillWords = (lines) => lines.map((word) =>
      `<span class="landing-word">${Array.from(word).map((letter) =>
        letter === " " ? " " : `<span class="landing-letter" data-fill-letter>${escapeHtml(letter)}</span>`,
      ).join("")}</span>`,
    ).join(" ");

    return `
      <section class="landing-scroll" aria-labelledby="landing-title">
        <div class="hero">
          <a class="landing-brand" href="#top" aria-label="Sandra Machoń, Terapia CBT Online">
            <img src="${assets.logo}" alt="" width="2363" height="2363">
            <span class="landing-brand-text">
              <span class="landing-brand-title">Terapia CBT Online</span>
              <span class="landing-brand-name">Sandra Machoń</span>
            </span>
          </a>
          <div class="landing-content">
            <h1 id="landing-title" class="display" aria-label="${escapeHtml(`${hero.line1} ${hero.line2}`)}">
              <span class="landing-phrase" aria-hidden="true">${renderFillWords(firstLines)}</span>
              <em class="landing-phrase" aria-hidden="true">${renderFillWords(secondLines)}</em>
            </h1>
            <div class="landing-intro">
              <p class="hero-description">${escapeHtml(hero.description)}</p>
              <div class="landing-actions">
                <button class="btn btn-primary landing-booking" type="button" data-open-booking>
                  ${escapeHtml(hero.cta)}
                  <span aria-hidden="true">↗</span>
                </button>
                <a class="landing-scroll-cue" href="#help">
                  <span>${escapeHtml(hero.scroll)}</span>
                  <span class="scroll-cue-icon" aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
          </div>
          <button class="hero-art" type="button" data-hero-interactive data-tilt data-bloom-art aria-pressed="false" aria-label="${state.lang === "PL" ? "Rozwiń kwiat" : "Let the flower bloom"}">
            <span class="hero-art-field">
              ${renderBloomIllustration()}
            </span>
          </button>
        </div>
      </section>
    `;
  }

  function renderBloomIllustration() {
    // Keep the original flower, heart and arm in separate clips. The brain is
    // a continuous vector silhouette, so no raster stem can leak through its join.
    return `
      <svg class="bloom-illustration" viewBox="-80 100 1750 1390" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <defs>
          <image id="bloom-source" href="${assets.help}" x="0" y="0" width="1600" height="1600"/>
          <clipPath id="bloom-body-clip" clipPathUnits="userSpaceOnUse">
            <path d="M715 0H1600V1600H904V880L886 830H715Z"/>
            <path d="M599.9 1128.7L610.7 1132.1L633.1 1143.6L653.4 1156.5L677.8 1175.5L679.8 1175.5L694.7 1184.3L711.6 1181.5L737.4 1192.4L742.8 1192.4L747.5 1195.1L752.3 1195.8L752.9 1197.1L757.7 1197.8L758.4 1199.2L763.1 1199.8L763.8 1201.2L773.3 1203.2L773.3 1204.6L779.3 1205.2L780.0 1206.6L786.1 1207.3L786.8 1208.6L800.3 1211.3L801.7 1212.7L806.4 1212.7L807.1 1214.0L822.7 1216.8L831.5 1216.8L832.8 1218.1L859.2 1218.1L860.6 1216.8L872.8 1216.1L873.5 1214.7L880.9 1214.0L888.4 1210.7L891.7 1210.7L912.1 1199.8L912.1 1270.2L902.6 1272.3L902.6 1273.6L895.1 1275.7L891.1 1275.7L889.7 1277.0L873.5 1279.7L864.7 1279.7L863.3 1281.1L828.8 1281.1L827.4 1279.7L811.8 1279.1L810.5 1277.7L800.3 1277.0L799.0 1275.7L785.4 1273.6L784.8 1272.3L777.3 1271.6L776.6 1270.2L769.9 1269.6L769.9 1268.2L763.8 1267.5L753.6 1264.2L752.9 1262.8L747.5 1262.1L746.8 1260.8L741.4 1260.1L741.4 1258.7L736.0 1258.1L727.2 1253.3L717.1 1250.6L716.4 1249.3L714.3 1249.3L713.0 1246.6L708.3 1244.5L695.4 1240.5L688.6 1236.4L686.6 1233.7L669.0 1233.7L594.5 1235.0L576.2 1237.1L562.7 1240.5L558.6 1240.5L555.2 1237.7L554.5 1234.4L555.9 1232.3L567.4 1226.9L583.0 1222.9L601.9 1221.5L604.7 1220.8L604.7 1219.5L598.6 1218.1L552.5 1217.4L545.1 1212.7L543.7 1209.3L545.1 1205.2L547.1 1203.9L560.0 1202.5L601.9 1202.5L608.7 1200.5L608.7 1198.5L547.8 1191.0L541.7 1185.6L542.4 1179.5L547.8 1176.8L564.7 1176.8L601.3 1180.9L606.0 1179.5L606.0 1178.2L545.1 1155.1L541.7 1152.4L541.0 1147.0L545.7 1143.0L555.9 1143.0L566.7 1145.0L606.0 1158.5L606.7 1159.9L614.1 1161.9L621.6 1166.0L629.0 1168.0L633.1 1167.3L631.7 1163.3L622.9 1159.2L621.6 1157.2L612.1 1151.8L597.2 1138.2L595.9 1132.8L597.2 1130.1Z"/>
          </clipPath>
          <clipPath id="bloom-flower-clip" clipPathUnits="userSpaceOnUse">
            <path d="M205 220H710V832H205Z"/>
          </clipPath>
          <clipPath id="bloom-growth-window" clipPathUnits="userSpaceOnUse">
            <path d="M130 80H735V846H130Z"/>
          </clipPath>
          <g id="bloom-lobe">
            <path d="M70 858C32 844 28 802 53 774C32 729 57 683 103 676C100 632 139 598 181 607C201 564 256 550 292 578C324 545 380 550 407 585C437 565 470 574 484 600V858Z" fill="var(--palette-pink)"/>
            <g stroke="#181a17" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M103 676C139 670 161 690 162 721C159 745 183 759 211 750C229 744 231 723 218 708"/>
              <path d="M181 607C177 635 198 654 225 656C249 656 264 639 260 618"/>
              <path d="M292 578C284 610 304 636 332 636C351 638 365 625 369 608"/>
              <path d="M407 585C382 620 395 651 422 660"/>
              <path d="M53 774C105 751 149 768 169 808C176 825 188 835 204 840"/>
              <path d="M254 693C281 676 311 687 318 711C325 736 307 754 289 767C271 783 272 807 291 821"/>
              <path d="M341 691C367 674 397 684 402 713C408 734 433 748 456 740"/>
              <path d="M369 754C352 769 349 790 361 807"/>
            </g>
          </g>
        </defs>
        <g class="bloom-lids">
          <ellipse cx="480" cy="843" rx="395" ry="30" fill="var(--palette-pink-shadow)"/>
          <g class="bloom-lid bloom-lid-right"><use href="#bloom-lobe" transform="translate(960 0) scale(-1 1)"/></g>
          <g class="bloom-lid bloom-lid-left">
            <use href="#bloom-lobe"/>
            <path d="M480 601C460 630 495 650 479 679C464 704 489 725 476 752C465 779 488 805 480 839" stroke="#181a17" stroke-width="5" stroke-linecap="round"/>
          </g>
        </g>
        <g clip-path="url(#bloom-growth-window)">
          <g class="bloom-flower">
            <g class="bloom-flower-sway" clip-path="url(#bloom-flower-clip)"><use href="#bloom-source"/></g>
          </g>
        </g>
        <g class="bloom-brain-base">
          <path d="M70 832Q480 819 890 832C916 864 908 913 870 942C899 987 878 1043 830 1061C846 1109 814 1161 754 1170C750 1215 701 1250 649 1225C626 1252 568 1267 526 1244C496 1262 457 1262 425 1245C385 1269 320 1267 284 1225C238 1244 181 1220 183 1170C125 1164 91 1112 111 1061C63 1045 44 986 78 942C42 916 42 864 70 832Z" fill="var(--palette-pink)"/>
          <g stroke="#181a17" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M78 942C120 912 160 914 193 941C214 958 242 955 259 933"/>
            <path d="M151 1038C193 1049 230 1037 273 1006C300 983 329 991 343 1012"/>
            <path d="M111 1061C144 1072 165 1094 161 1120"/>
            <path d="M183 1170C222 1150 224 1114 261 1101C284 1092 310 1097 326 1120"/>
            <path d="M284 1225C288 1191 304 1171 326 1174"/>
            <path d="M425 1245C411 1210 429 1184 454 1189"/>
            <path d="M480 826C477 839 479 849 480 861C453 887 493 914 477 944C462 972 490 991 475 1019C456 1046 470 1075 454 1099C434 1126 439 1151 460 1169C478 1187 490 1215 478 1242"/>
            <path d="M477 944C442 958 409 945 398 922C387 898 361 886 342 899"/>
            <path d="M575 889C541 882 525 902 532 923C540 947 574 950 590 929C613 896 657 886 687 908"/>
            <path d="M870 942C830 933 802 957 788 981C776 1006 793 1032 771 1050"/>
            <path d="M548 1059C569 1033 599 1028 625 1043C650 1058 672 1054 684 1031C699 1002 724 990 745 1003"/>
            <path d="M555 1142C574 1118 600 1122 610 1147"/>
            <path d="M649 1225C628 1203 638 1173 662 1165"/>
          </g>
        </g>
        <g clip-path="url(#bloom-body-clip)"><use href="#bloom-source"/></g>
      </svg>
    `;
  }

  function renderAudience() {
    const help = getCopy().help;
    const waveText = Array.from(help.explore).map((character, index) =>
      character === " "
        ? `<span class="flow-help-wave-space" aria-hidden="true">&nbsp;</span>`
        : `<span class="flow-help-wave-letter" style="--wave-index:${index}" aria-hidden="true">${escapeHtml(character)}</span>`,
    ).join("");
    return `
      <section id="help" class="section-about about-water flow-help" aria-labelledby="help-title" data-animate-section data-water-surface>
        <canvas class="about-water-canvas" data-water-canvas aria-hidden="true"></canvas>
        <canvas class="about-water-canvas about-water-drops" data-water-drops aria-hidden="true"></canvas>
        <div class="about-water-intro flow-help-surface">
          <div class="section-shell flow-help-content">
            <header class="editorial-head">
              <span class="section-label">${escapeHtml(getCopy().nav.help)}</span>
              <h2 id="help-title" class="section-title">${escapeHtml(help.title)}</h2>
              <p class="section-lead">${escapeHtml(help.subtitle)}</p>
              <a class="flow-help-explore" href="#help-areas" aria-label="${escapeHtml(help.explore)}"><span class="flow-help-wave">${waveText}</span><span class="flow-help-wave-arrow" aria-hidden="true">↓</span></a>
            </header>
          </div>
        </div>
        <div id="help-areas" class="section-shell flow-help-areas">
            <div class="help-discovery-grid">
              ${help.topics.map((item, index) => `
                <article class="help-card" data-help-card="${item.id}" aria-labelledby="help-experience-${item.id}">
                  <h3 id="help-experience-${item.id}" class="help-card-experience">${escapeHtml(item.experience)}</h3>
                  <div class="help-card-body">
                    <div class="help-card-art" aria-hidden="true">
                      <img class="help-card-cover" src="src/assets/images/help/${assets.helpCovers[item.id]}" alt="" loading="lazy" decoding="async" width="1254" height="1254">
                    </div>
                    <div id="help-detail-${item.id}" class="help-card-reveal">
                      <div class="help-card-inside-art" aria-hidden="true">
                        ${index === 0 || index === 2
                          ? `<span class="help-card-symbol help-card-petal"></span>`
                          : `<img class="help-card-symbol" src="${index === 1 ? assets.logo : assets.helpHeart}" alt="" loading="lazy" decoding="async" width="1024" height="1024">`}
                      </div>
                      <p class="help-card-eyebrow">${escapeHtml(help.workOn)}</p>
                      <h4>${escapeHtml(item.title)}</h4>
                      <p class="help-card-description">${escapeHtml(item.description)}</p>
                    </div>
                  </div>
                  <button id="help-toggle-${item.id}" class="help-card-toggle" type="button" aria-expanded="true" aria-controls="help-detail-${item.id}" aria-describedby="help-experience-${item.id}" data-help-toggle>
                    <span data-help-toggle-label>${escapeHtml(help.returnToSituation)}</span>
                    <span class="help-card-toggle-icon" aria-hidden="true">+</span>
                  </button>
                </article>`).join("")}
            </div>
            <div class="flow-help-closing"><p class="flow-diagnosis">${escapeHtml(help.diagnosis)}</p><p>${escapeHtml(help.closing)}</p></div>
            <aside class="flow-women" aria-labelledby="women-title">
              <div class="flow-women-heading"><h3 id="women-title">${escapeHtml(help.womenTitle)}</h3><p>${escapeHtml(help.womenInclusive)}</p></div>
              <div class="flow-women-copy"><p>${escapeHtml(help.womenIntro)}</p>
                <div><h4>${escapeHtml(help.womenLifeTitle)}</h4><p>${escapeHtml(help.womenText)}</p></div>
                <div><h4>${escapeHtml(help.womenAdhdTitle)}</h4><p>${escapeHtml(help.womenAdhdText)}</p></div>
              </div>
            </aside>
        </div>
      </section>`;
  }

  function renderAbout() {
    const about = getCopy().about;
    const certification = getCopy().faq.items.find(item => item.id === "certification");
    return `
      <section id="about" class="section-about about-water" aria-labelledby="about-title" data-about-transition data-animate-section>
        <span class="about-profile-petal" aria-hidden="true"></span>
        <span class="about-profile-shape" aria-hidden="true"></span>
        <div id="about-profile" class="about-profile-shell">
          <div class="about-profile-grid">
            <figure class="about-portrait">
              <div class="about-portrait-frame"><img src="${assets.portrait}" alt="Sandra Machoń" loading="lazy" width="2072" height="2070"></div>
              <figcaption><span class="about-portrait-name">${escapeHtml(about.name)}</span></figcaption>
            </figure>
            <div class="about-biography">
              <h2 id="about-title" class="about-water-label about-profile-label">${escapeHtml(about.title)}</h2>
              <h3>${escapeHtml(about.subtitle)}</h3>
              <div class="about-biography-text">${about.paragraphs.map(text => `<p>${escapeHtml(text)}</p>`).join("")}</div>
              <details id="about-education" class="flow-education"><summary>${escapeHtml(about.educationTitle)}</summary><div>${about.education.map(text => `<p>${escapeHtml(text)}</p>`).join("")}<p><a class="flow-school-source" href="${escapeHtml(about.schoolLink)}">${escapeHtml(about.schoolLinkLabel)} <span aria-hidden="true">↗</span></a></p></div></details>
              ${certification ? `<details id="about-certification" class="flow-education flow-certification"><summary>${escapeHtml(certification.question)}</summary><div>${certification.answer.split("\n\n").map(text => `<p>${escapeHtml(text)}</p>`).join("")}</div></details>` : ""}
            </div>
          </div>
        </div>
      </section>`;
  }

  function renderTherapy() {
    const therapy = getCopy().therapy;
    return `
      <section id="therapy" class="section page-section page-section-plain section-therapy" aria-labelledby="therapy-title" data-animate-section>
        <div class="container section-shell">
          <div class="therapy-redesign-grid">
            <div class="section-copy-block">
              <span class="section-label">${escapeHtml(getCopy().nav.therapy)}</span>
              <h2 id="therapy-title" class="section-title">${escapeHtml(therapy.title)}</h2>
              <p class="section-lead">${escapeHtml(therapy.intro)}</p>
              <div class="flow-cbt-principles">${therapy.principles.map(item => `<div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.text)}</p></div>`).join("")}</div>
            </div>
            ${window.CbtModel.render(therapy.model)}
          </div>
          <aside class="flow-partnership" aria-labelledby="partnership-title"><h3 id="partnership-title">${escapeHtml(therapy.partnershipTitle)}</h3><div><p>${escapeHtml(therapy.partnershipText)}</p><a class="link-arrow" href="#first-consultation">${escapeHtml(therapy.learnMore)} <span aria-hidden="true">→</span></a></div></aside>
        </div>
      </section>`;
  }

  function renderConsultation() {
    const copy = getCopy().consultation;
    return `
      <section id="first-consultation" class="page-section flow-section flow-consultation" aria-labelledby="consultation-title">
        <div class="section-shell flow-two-column">
          <div class="flow-copy">
            <span class="section-label">${escapeHtml(copy.label)}</span>
            <h2 id="consultation-title" class="section-title">${escapeHtml(copy.title)}</h2>
            ${copy.paragraphs.map(text => `<p>${escapeHtml(text)}</p>`).join("")}
          </div>
          <aside class="flow-first-note">
            <p class="flow-highlight">${escapeHtml(copy.highlight)}</p>
            <p>${escapeHtml(copy.ending)}</p>
            <p class="flow-meta">${escapeHtml(copy.meta)}</p>
            <button class="btn btn-primary" type="button" data-open-booking>${escapeHtml(getCopy().nav.bookButton)}</button>
          </aside>
        </div>
      </section>`;
  }

  function renderCooperation() {
    const copy = getCopy().cooperation;
    return `<section id="cooperation" class="page-section flow-section flow-cooperation" aria-labelledby="cooperation-title">
      <div class="section-shell"><h2 id="cooperation-title" class="section-title">${escapeHtml(copy.title)}</h2>
        <div class="flow-plan-intro">${copy.intro.map(text => `<p>${escapeHtml(text)}</p>`).join("")}</div>
        <ol class="flow-steps">${copy.steps.map(step => `<li><h3>${escapeHtml(step.title)}</h3><p>${escapeHtml(step.text)}</p></li>`).join("")}</ol>
        <div class="flow-independence"><h3>${escapeHtml(copy.independenceTitle)}</h3><div>${copy.independence.map(text => `<p>${escapeHtml(text)}</p>`).join("")}</div></div>
      </div></section>`;
  }

  function renderPricing() {
    const copy = getCopy().pricing;
    return `<section id="pricing" class="page-section flow-section flow-pricing" aria-labelledby="pricing-title">
      <div class="section-shell"><span class="section-label">${escapeHtml(copy.label)}</span>
        <h2 id="pricing-title" class="section-title">${escapeHtml(copy.title)}</h2>
        <p class="section-lead">${escapeHtml(copy.intro)}</p>
        <dl class="flow-price-list">${copy.items.map(item => `<div class="flow-price-row"><dt>${escapeHtml(item.title)}</dt><dd><strong>${escapeHtml(item.price)}</strong></dd></div>`).join("")}</dl>
        <p class="flow-price-languages">${escapeHtml(copy.languages)}</p>
        <p class="flow-pricing-note">${escapeHtml(copy.note)}</p>
        <button class="btn btn-primary" type="button" data-open-booking>${escapeHtml(copy.cta)}</button>
      </div></section>`;
  }

  function renderFaq() {
    const copy = getCopy().faq;
    const question = (item, index) => `<details id="faq-${index + 1}" class="flow-question"><summary>${escapeHtml(item.question)}</summary><div>${item.answer.split("\n\n").map(text => `<p>${escapeHtml(text)}</p>`).join("")}</div></details>`;
    return `<section id="faq" class="page-section flow-section flow-faq" aria-labelledby="faq-title">
      <div class="section-shell"><span class="section-label">${escapeHtml(copy.label)}</span>
        <h2 id="faq-title" class="section-title">${escapeHtml(copy.title)}</h2>
        <div class="flow-faq-list">${copy.items.slice(0, 6).map(question).join("")}</div>
        <details id="faq-more" class="flow-faq-more"><summary><span class="faq-show-all">${escapeHtml(copy.showAll)}</span><span class="faq-show-less">${escapeHtml(copy.showLess)}</span><span aria-hidden="true">↓</span></summary>
          <div class="flow-faq-list">${copy.items.slice(6).map((item, index) => question(item, index + 6)).join("")}</div>
        </details>
      </div></section>`;
  }

  function renderCta() {
    const cta = getCopy().cta;
    return `<section id="contact" class="section page-section page-section-color section-contact" aria-labelledby="contact-title">
      <span class="contact-flower" aria-hidden="true" data-parallax="50"></span>
      <div class="container section-shell"><div class="cta-shell redesigned"><div class="cta-grid">
        <div class="section-copy-block"><span class="section-label section-label-light">${escapeHtml(cta.label)}</span>
          <h2 id="contact-title" class="section-title">${escapeHtml(cta.title)}</h2><p>${escapeHtml(cta.subtitle)}</p>
        </div>
        <div class="contact-actions">
          <button class="btn btn-primary" type="button" data-open-booking>${escapeHtml(cta.button)}</button>
          <p>${escapeHtml(cta.emailLabel)}</p><a class="contact-email" href="mailto:machonsm@gmail.com">machonsm@gmail.com</a>
          <p>${escapeHtml(cta.emailNote)}</p>
          <a href="#urgent-help">${escapeHtml(getCopy().footer.urgentTitle)}</a>
        </div>
      </div></div></div></section>`;
  }

  function renderFooterGarden() {
    return `
      <div class="footer-garden" data-footer-garden aria-hidden="true">
        <svg class="footer-garden-art" viewBox="-40 -30 1520 430" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg" focusable="false">
          <defs>
            <g id="footer-flower" fill="currentColor">
              <path d="M-10 89C-28 88-40 90-49 77C-63 62-79 44-71 24C-63 2-44 7-33 27L-24 48C-30 22-39-17-22-27C-2-40 12-8 15 18L18 44C24 16 35 9 46 17C60 28 57 69 49 81C43 91 21 87 10 89L12 154L-9 154Z"/>
              <path d="M-1 123C-22 126-45 116-58 97C-35 91-13 101-1 112C14 99 35 95 57 99C45 118 24 130-1 123Z"/>
            </g>
            <g id="footer-heart">
              <path d="M0 46C-18 12-52-20-69 0C-93 29-44 116-5 157C-2 161 2 161 5 157C41 117 93 26 68 0C48-21 15 15 0 46Z" fill="var(--palette-orange)"/>
              <g fill="none" stroke="#262321" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M-38 68Q-25 75-13 68M14 68Q26 75 38 68M0 77V99H8M-8 117Q7 122 20 111"/>
              </g>
            </g>
            <g id="footer-brain">
              <path d="M-1 5C-15-10-41-8-49 10C-70 5-84 23-78 41C-97 52-95 77-79 88C-91 108-74 130-55 128C-50 149-24 155-6 140C11 157 39 151 47 132C69 137 89 116 80 96C101 83 100 58 81 46C87 26 72 9 54 12C45-9 18-13-1 5Z" fill="var(--palette-pink)"/>
              <g fill="none" stroke="#262321" stroke-width="2.3" stroke-linecap="round">
                <path d="M-2 11C-17 27 13 37-1 54C-17 70 13 78-1 96C-10 109-2 123-6 133M-48 14C-54 31-40 40-29 35M-75 44C-54 38-44 53-49 67M-76 86C-59 82-42 90-44 106M-31 79C-18 84-15 101-23 112M-55 125C-39 129-33 118-34 110M52 18C58 33 48 42 32 40M78 49C60 41 45 54 49 68M29 63C15 70 17 83 30 87M79 94C57 90 46 103 54 116M21 119C21 106 32 101 41 104"/>
              </g>
            </g>
            <g id="footer-cupped-hand" fill="currentColor">
              <path d="M-21 116L-22 88C-23 77-29 71-39 65L-72 43C-82 36-81 26-74 23C-70 21-67 24-62 27L-43 38L-75 13C-84 6-79-5-71-5C-67-5-64-2-60 1L-34 21L-60-4C-68-12-61-23-53-21C-50-21-47-18-44-16L-17 8L-33-11C-40-20-31-29-22-25C-19-24-16-20-13-17L15 15C22 23 26 33 26 43L35 25C40 15 51 18 51 26C52 30 49 37 47 43L40 64C37 74 29 79 26 90L24 116Z"/>
              <g fill="none" stroke="#262321" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M-43 38L-27 49M-34 21L-16 38M-17 8L-3 25M26 43C15 44 7 55 10 68M-17 64Q-3 66 2 78"/>
              </g>
            </g>
            <g id="footer-flower-hand" fill="currentColor">
              <path d="M-21 115L-23 80C-33 62-39 47-35 27C-33 18-22 18-21 29L-19 45L-15 4C-14-9-2-7-2 5L0 42L10 12C14 0 26 5 22 17L14 53L27 36C34 27 45 34 38 45L28 70C24 79 25 99 25 115Z"/>
              <path d="M25 81C43 67 45 50 35 44C30 41 24 45 20 54L10 65Z"/>
              <g fill="none" stroke="#262321" stroke-width="2" stroke-linecap="round">
                <path d="M-19 45L-17 60M0 42L-1 59M14 53L8 67M-4 88C-9 77-3 67 8 64"/>
              </g>
            </g>
          </defs>

          <g class="footer-stem-edge" data-footer-stem transform="translate(126 0)" data-tip-y="122">
            <g data-footer-sway>
              <g transform="translate(0 45) rotate(-9)" style="color:var(--palette-blue)"><use href="#footer-flower"/></g>
              <g transform="translate(0 170) rotate(-5)" style="color:var(--palette-pink)"><use href="#footer-flower-hand"/></g>
              <path d="M-29 268Q-14 274 31 267L54 414H-51Z" fill="var(--palette-deep)"/>
              <path d="M-22 291L-32 406M-1 293L-4 409M21 289L31 407" fill="none" stroke="var(--palette-paper)" stroke-width="4" stroke-linecap="round"/>
              <path d="M-28 268Q0 276 32 267L35 286Q3 293-30 287Z" fill="var(--palette-orange)"/>
            </g>
          </g>
          <g class="footer-stem-brain" data-footer-stem transform="translate(365 0)" data-tip-y="155">
            <g data-footer-sway>
              <g transform="translate(-9 69) rotate(8)"><use href="#footer-brain"/></g>
              <g transform="translate(0 205)" style="color:var(--palette-blue)"><use href="#footer-cupped-hand"/></g>
              <path d="M-25 307Q0 312 29 307L42 414H-43Z" fill="var(--palette-orange)"/>
              <g fill="var(--palette-pink)"><circle cx="-11" cy="331" r="5"/><circle cx="19" cy="350" r="5"/><circle cx="-16" cy="373" r="5"/><circle cx="18" cy="397" r="5"/></g>
            </g>
          </g>
          <g class="footer-stem-heart" data-footer-stem transform="translate(605 0)" data-tip-y="128">
            <g data-footer-sway>
              <g transform="translate(-15 47) rotate(-8)"><use href="#footer-heart"/></g>
              <g transform="translate(0 196) rotate(-3)" style="color:var(--palette-pink)"><use href="#footer-cupped-hand"/></g>
              <path d="M-24 300Q1 307 34 300L50 414H-48Z" fill="var(--palette-blue)"/>
              <path d="M-25 300Q0 308 35 300L38 321Q8 329-29 321Z" fill="var(--palette-deep)"/>
            </g>
          </g>
          <g class="footer-stem-flower" data-footer-stem transform="translate(845 0)" data-tip-y="100">
            <g data-footer-sway>
              <g transform="translate(3 36) rotate(9)" style="color:var(--palette-pink)"><use href="#footer-flower"/></g>
              <g transform="translate(-4 167) rotate(5)" style="color:var(--palette-orange)"><use href="#footer-flower-hand"/></g>
              <path d="M-33 267Q-8 276 26 270L45 414H-57Z" fill="var(--palette-deep)"/>
              <path d="M-24 292L-34 408M-4 293L-7 410M15 291L25 407" fill="none" stroke="var(--palette-pink)" stroke-width="4" stroke-linecap="round"/>
            </g>
          </g>
          <g class="footer-stem-edge" data-footer-stem transform="translate(1082 0)" data-tip-y="177">
            <g data-footer-sway>
              <g transform="translate(-10 94) rotate(9) scale(.86)"><use href="#footer-heart"/></g>
              <g transform="translate(-10 232) rotate(-10)" style="color:var(--palette-blue)"><use href="#footer-cupped-hand"/></g>
              <path d="M-17 341Q9 348 39 332L54 414H-40Z" fill="var(--palette-pink)"/>
              <g fill="var(--palette-deep)"><circle cx="-3" cy="362" r="5"/><circle cx="29" cy="376" r="5"/><circle cx="-13" cy="397" r="5"/></g>
            </g>
          </g>
          <g class="footer-stem-edge" data-footer-stem transform="translate(1320 0)" data-tip-y="140">
            <g data-footer-sway>
              <g transform="translate(4 66) rotate(-5)" style="color:var(--palette-orange)"><use href="#footer-flower"/></g>
              <g transform="translate(4 204) rotate(-4)" style="color:var(--palette-pink)"><use href="#footer-flower-hand"/></g>
              <path d="M-23 305Q5 312 36 302L57 414H-41Z" fill="var(--palette-blue)"/>
              <path d="M-25 306Q7 314 37 302L40 322Q9 334-29 326Z" fill="var(--palette-deep)"/>
            </g>
          </g>
        </svg>
      </div>
    `;
  }

  function renderFooter() {
    const footer = getCopy().footer;
    return `<footer id="footer" class="site-footer illustrated-footer"><div class="container">
      <div class="footer-grid">
        <div class="footer-brand"><div class="footer-brand-row"><img src="${assets.logo}" alt=""><span>Terapia CBT Online<br>Sandra Machoń</span></div><p>${escapeHtml(footer.description)}</p></div>
        <div class="footer-col"><h4>${escapeHtml(footer.linksTitle)}</h4><ul class="footer-link-list">${navLinks().map(link => `<li><a href="${link.href}">${escapeHtml(link.label)}</a></li>`).join("")}</ul></div>
        <div class="footer-col"><h4>${escapeHtml(footer.contactTitle)}</h4><p><a class="email-link" href="mailto:machonsm@gmail.com">machonsm@gmail.com</a></p><a href="#first-consultation">${escapeHtml(getCopy().consultation.label)}</a></div>
        <div class="footer-col">${renderLanguageToggle()}</div>
      </div>
      <aside id="urgent-help" class="flow-urgent" aria-labelledby="urgent-title"><h3 id="urgent-title">${escapeHtml(footer.urgentTitle)}</h3><p>${escapeHtml(footer.urgentText)}</p>
        <p><a href="tel:112">112</a> · <a href="tel:800702222">800 70 2222</a> · <a href="https://centrumwsparcia.pl/">Centrum Wsparcia</a></p>
      </aside>
      <div class="footer-bottom"><div>© ${new Date().getFullYear()} Sandra Machoń. ${escapeHtml(footer.rights)}</div><a href="#pricing">${state.lang === "PL" ? "Organizacja spotkań i ceny" : "Session arrangements and fees"}</a></div>
    </div>${renderFooterGarden()}</footer>`;
  }

  function renderBookingModal() {
    if (!state.bookingOpen) return "";
    return `<div class="modal-backdrop" data-modal-backdrop="booking">
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="booking-title">
        <button class="modal-close" type="button" data-close-booking aria-label="${state.lang === "PL" ? "Zamknij" : "Close"}">×</button>
        ${window.BookingFlow.render(state.lang)}
      </div></div>`;
  }

  let hasRendered = false;
  let renderedOverlay = null;
  let overlayReturnFocus = null;
  let revealObserver = null;
  let sectionObserver = null;
  const seenReveals = new Set();
  const seenSections = new Set();

  function render() {
    const scrollPosition = { top: window.scrollY, left: window.scrollX };
    const openDetails = Array.from(site.querySelectorAll("details[id][open]"), (element) => element.id);
    const pinnedHelp = Array.from(site.querySelectorAll("[data-help-card][data-pinned='true']"), element => element.dataset.helpCard);
    const cbtState = window.CbtModel?.getState();
    const railPosition = document.querySelector("[data-blog-rail]")?.scrollLeft || 0;
    const activeElement = document.activeElement;
    const focusSelector = getFocusSelector(activeElement);
    const nextOverlay = state.bookingOpen ? "booking" : state.mobileOpen ? "mobile" : null;
    const previousOverlay = renderedOverlay;
    if (nextOverlay && !previousOverlay) overlayReturnFocus = focusSelector;

    revealObserver?.disconnect();
    sectionObserver?.disconnect();
    window.AboutWater?.cleanup();
    window.AboutTransition?.cleanup();
    window.FooterGarden?.cleanup();
    window.HelpDiscovery?.cleanup();
    window.CbtModel?.cleanup();
    window.BookingFlow?.cleanup();
    document.documentElement.lang = state.lang === "PL" ? "pl" : "en";
    document.querySelector('meta[name="description"]')?.setAttribute("content", getCopy().footer.description);
    document.body.classList.toggle("modal-open", Boolean(nextOverlay));
    document.body.classList.toggle("site-has-rendered", hasRendered);

    site.innerHTML = `
      <div class="page">
        ${renderHeader()}
        <main id="top" class="content-flow">
          ${renderHero()}
          <div class="about-sections">
            <div class="about-journey" data-about-journey>
              ${renderAudience()}
            </div>
            <div class="about-journey about-profile-panel" data-about-journey>
              ${renderAbout()}
            </div>
          </div>
          ${renderTherapy()}
          ${renderConsultation()}
          ${renderCooperation()}
          ${renderPricing()}
          ${renderFaq()}
          ${renderCta()}
        </main>
        ${renderFooter()}
        ${renderBookingModal()}
      </div>
    `;

    openDetails.forEach((id) => {
      const element = document.getElementById(id);
      if (element?.tagName === "DETAILS") element.open = true;
    });
    if (hasRendered) {
      window.scrollTo({ ...scrollPosition, behavior: "instant" });
      document.querySelector("[data-blog-rail]")?.scrollTo({ left: railPosition, behavior: "instant" });
    }
    attachHandlers();
    setupRevealAnimations();
    initBlogScroller();
    window.SiteMotion?.mount();
    window.CbtModel?.mount(getCopy().therapy.model, cbtState);
    window.AboutTransition?.mount();
    window.AboutWater?.mount();
    window.FooterGarden?.mount();
    window.HelpDiscovery?.mount(getCopy().help, pinnedHelp);
    updateScrollEffects();
    renderedOverlay = nextOverlay;
    syncOverlayAccessibility(previousOverlay, focusSelector);
    hasRendered = true;
    handleInitialHashScroll();
  }

  function getFocusSelector(element) {
    if (!element || element === document.body || !site.contains(element)) return null;
    if (element.id) return `#${CSS.escape(element.id)}`;
    const parts = [];
    let node = element;
    while (node && node !== site) {
      if (node.id) {
        parts.unshift(`#${CSS.escape(node.id)}`);
        break;
      }
      const siblings = Array.from(node.parentElement?.children || []).filter(
        (sibling) => sibling.tagName === node.tagName,
      );
      parts.unshift(`${node.tagName.toLowerCase()}:nth-of-type(${siblings.indexOf(node) + 1})`);
      node = node.parentElement;
    }
    return `${node === site ? "#site > " : ""}${parts.join(" > ")}`;
  }

  function getActiveOverlay() {
    return state.bookingOpen
      ? document.querySelector(".modal[role='dialog']")
      : state.mobileOpen
        ? document.querySelector(".mobile-menu[role='dialog']")
        : null;
  }

  function getFocusableElements(container) {
    return Array.from(container.querySelectorAll(
      "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])",
    )).filter((element) => !element.closest("[inert]") && element.getClientRects().length);
  }

  function syncOverlayAccessibility(previousOverlay, focusSelector) {
    const dialog = getActiveOverlay();
    if (dialog) {
      document.querySelectorAll(".page > *").forEach((element) => {
        if (element === dialog || element.contains(dialog)) return;
        element.inert = true;
        element.setAttribute("aria-hidden", "true");
      });
      dialog.tabIndex = -1;
      const previousFocus = previousOverlay === renderedOverlay && focusSelector
        ? document.querySelector(focusSelector)
        : null;
      const preferredFocus = state.bookingOpen && !state.bookingSubmitted
        ? dialog.querySelector("#booking-name")
        : dialog.querySelector("[data-close-booking], [data-mobile-toggle]");
      const focusTarget = previousFocus && dialog.contains(previousFocus)
        ? previousFocus
        : preferredFocus || getFocusableElements(dialog)[0] || dialog;
      focusTarget.focus({ preventScroll: true });
    } else if (previousOverlay) {
      const returnTarget = overlayReturnFocus && document.querySelector(overlayReturnFocus);
      (returnTarget || document.querySelector(".site-header [data-mobile-toggle]"))?.focus({ preventScroll: true });
      overlayReturnFocus = null;
    } else if (focusSelector) {
      document.querySelector(focusSelector)?.focus({ preventScroll: true });
    }
  }

  function handleInitialHashScroll() {
    if (initialHashHandled) return;
    initialHashHandled = true;
    if (!window.location.hash) return;
    scrollToSelector(window.location.hash, { immediate: true });
    requestAnimationFrame(() => {
      scrollToSelector(window.location.hash, { immediate: true });
      requestScrollEffectsUpdate();
    });
  }

  function closeOverlay() {
    state.mobileOpen = false;
    state.bookingOpen = false;
    state.bookingSubmitted = false;
    render();
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
        if (!state.mobileOpen) button.focus({ preventScroll: true });
        state.mobileOpen = !state.mobileOpen;
        render();
      });
    });

    document.querySelectorAll("a[href^='#']").forEach((link) => {
      link.addEventListener("click", (event) => {
        const selector = link.getAttribute("href");
        if (!selector || selector === "#" || !getAnchorTarget(selector)) return;
        event.preventDefault();
        if (state.mobileOpen) {
          state.mobileOpen = false;
          render();
        }
        scrollToSelector(selector);
      });
    });

    document.querySelectorAll("[data-blog-scroll]").forEach((button) => {
      button.addEventListener("click", () => {
        scrollBlogRail(button.dataset.blogScroll === "next" ? 1 : -1);
      });
    });

    document.querySelectorAll("[data-open-booking]").forEach((button) => {
      button.addEventListener("click", () => {
        button.focus({ preventScroll: true });
        state.mobileOpen = false;
        state.bookingOpen = true;
        state.bookingSubmitted = false;
        render();
      });
    });

    document.querySelectorAll("[data-close-booking]").forEach((button) => {
      button.addEventListener("click", closeOverlay);
    });

    document.querySelectorAll("[data-modal-backdrop]").forEach((backdrop) => {
      backdrop.addEventListener("click", (event) => {
        if (event.target === backdrop) closeOverlay();
      });
    });

    window.BookingFlow?.bind(site);
  }

  function setupRevealAnimations() {
    revealObserver?.disconnect();
    sectionObserver?.disconnect();
    const revealItems = document.querySelectorAll("[data-reveal]");
    const animatedSections = document.querySelectorAll("[data-animate-section]");
    const showImmediately = userPrefersReducedMotion() || !("IntersectionObserver" in window);
    const groupCounts = new Map();

    if (!showImmediately) {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          seenReveals.add(entry.target.dataset.revealKey);
          revealObserver.unobserve(entry.target);
        });
      }, { rootMargin: "0px 0px -6% 0px", threshold: 0.08 });

      sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("section-in-view");
          seenSections.add(entry.target.dataset.sectionKey);
          sectionObserver.unobserve(entry.target);
        });
      }, { rootMargin: "0px 0px -12% 0px", threshold: 0.1 });
    }

    revealItems.forEach((item, index) => {
      const section = item.closest("section");
      const key = item.dataset.revealKey || `${section?.id || "page"}:${index}`;
      item.dataset.revealKey = key;
      const group = item.closest("[data-reveal-group]") || section || site;
      const groupIndex = groupCounts.get(group) || 0;
      groupCounts.set(group, groupIndex + 1);
      const alreadySeen = seenReveals.has(key) || item.getBoundingClientRect().bottom <= 0;
      item.style.setProperty("--reveal-delay", `${alreadySeen || showImmediately ? 0 : Math.min(groupIndex * 75, 300)}ms`);
      if (showImmediately || alreadySeen) {
        item.classList.add("is-visible");
        seenReveals.add(key);
      } else {
        revealObserver.observe(item);
      }
    });

    animatedSections.forEach((section, index) => {
      const key = section.id || String(index);
      section.dataset.sectionKey = key;
      if (showImmediately || seenSections.has(key) || section.getBoundingClientRect().bottom <= 0) {
        section.classList.add("section-in-view");
        seenSections.add(key);
      } else {
        sectionObserver.observe(section);
      }
    });
  }

  function initBlogScroller() {
    const rail = document.querySelector("[data-blog-rail]");
    if (!rail) return;
    rail.addEventListener("scroll", updateBlogProgress, { passive: true });
    rail.querySelectorAll("img").forEach((image) => {
      if (!image.complete) image.addEventListener("load", updateBlogProgress, { once: true });
    });
    updateBlogProgress();
  }

  function getStickyHeaderHeight() {
    return document.querySelector(".site-header")?.offsetHeight || 0;
  }

  function updateBlogProgress() {
    const rail = document.querySelector("[data-blog-rail]");
    if (!rail) return;
    const maxScroll = Math.max(0, rail.scrollWidth - rail.clientWidth);
    const position = Math.min(maxScroll, Math.max(0, rail.scrollLeft));
    const value = maxScroll > 0 ? position / maxScroll : 1;
    const progress = document.querySelector("[data-blog-progress]");
    if (progress) progress.style.transform = `scaleX(${Math.max(0.08, Math.min(1, value))})`;
    document.querySelectorAll("[data-blog-scroll]").forEach((button) => {
      button.disabled = button.dataset.blogScroll === "prev" ? position <= 2 : position >= maxScroll - 2;
    });
  }

  function scrollBlogRailTo(target, immediate = false) {
    const rail = document.querySelector("[data-blog-rail]");
    if (!rail) return;
    const maxScroll = Math.max(0, rail.scrollWidth - rail.clientWidth);
    rail.scrollTo({
      left: Math.min(maxScroll, Math.max(0, target)),
      behavior: immediate || userPrefersReducedMotion() ? "instant" : "smooth",
    });
  }

  function scrollBlogRail(direction) {
    const rail = document.querySelector("[data-blog-rail]");
    if (!rail) return;
    const cards = rail.querySelectorAll(".blog-card");
    const distance = cards.length > 1
      ? cards[1].offsetLeft - cards[0].offsetLeft
      : rail.clientWidth * 0.8;
    scrollBlogRailTo(rail.scrollLeft + distance * direction);
  }

  function getAnchorTarget(selector) {
    if (!selector?.startsWith("#")) return null;
    try {
      const id = decodeURIComponent(selector.slice(1));
      return document.getElementById(id === "understanding" ? "help" : id === "blog-cbt" ? "therapy" : id);
    } catch {
      return null;
    }
  }

  function scrollToSelector(selector, options = {}) {
    const target = getAnchorTarget(selector);
    if (!target) return;
    for (let parent = target.parentElement; parent; parent = parent.parentElement) {
      if (parent.tagName === "DETAILS") parent.open = true;
    }
    if (target.tagName === "DETAILS") target.open = true;
    const immediate = Boolean(options.immediate || userPrefersReducedMotion());
    if (selector === "#blog-cbt") scrollBlogRailTo(0, immediate);
    window.scrollTo({
      top: Math.max(0, target.getBoundingClientRect().top + window.scrollY - getStickyHeaderHeight() - 16),
      behavior: immediate ? "instant" : "smooth",
    });
  }

  function userPrefersReducedMotion() {
    if (document.documentElement.classList.contains("motion-paused")) return true;
    if (typeof window.matchMedia !== "function") return false;
    reducedMotionQuery = reducedMotionQuery || window.matchMedia("(prefers-reduced-motion: reduce)");
    return reducedMotionQuery.matches;
  }



  function updateScrollEffects() {
    updateActiveNav();
    updateBlogProgress();
    window.SiteMotion?.update();
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
    const activeLine = getStickyHeaderHeight() + 100;
    if (window.scrollY >= 100) {
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 24;
      if (atBottom) {
        current = "contact";
      } else {
        sectionIds.forEach((id) => {
          const section = document.getElementById(id);
          if (section && section.getBoundingClientRect().top <= activeLine) current = id;
        });
      }
    }
    links.forEach((link) => {
      const navigationSection = ["first-consultation", "cooperation"].includes(current) ? "therapy" : current;
      const isActive = link.getAttribute("data-section-id") === navigationSection;
      link.classList.toggle("is-active", isActive);
      if (isActive) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
    document.body.dataset.activeSection = current || "top";
  }

  document.addEventListener("keydown", (event) => {
    const dialog = getActiveOverlay();
    if (!dialog) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeOverlay();
    } else if (event.key === "Tab") {
      const focusable = getFocusableElements(dialog);
      const first = focusable[0] || dialog;
      const last = focusable[focusable.length - 1] || dialog;
      if (!focusable.length || (event.shiftKey && (document.activeElement === first || !focusable.includes(document.activeElement)))) {
        event.preventDefault();
        last.focus({ preventScroll: true });
      } else if (!event.shiftKey && (document.activeElement === last || !focusable.includes(document.activeElement))) {
        event.preventDefault();
        first.focus({ preventScroll: true });
      }
    }
  });

  window.addEventListener("scroll", requestScrollEffectsUpdate, { passive: true });
  window.addEventListener("resize", requestScrollEffectsUpdate);
  window.addEventListener("site-motion-change", () => {
    setupRevealAnimations();
    requestScrollEffectsUpdate();
  });
  userPrefersReducedMotion();
  reducedMotionQuery?.addEventListener?.("change", () => {
    setupRevealAnimations();
    requestScrollEffectsUpdate();
  });

  render();
})();
