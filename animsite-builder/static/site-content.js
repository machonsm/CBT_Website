(() => {
  "use strict";

  // Public copy shared by the Polish and English versions of the static site.
  // Organisation details are limited to information confirmed for this practice.
  // Sandra confirmed these fees and both durations on 10 September 2026.
  // Booking uses the same pricing entry, including its duration and fee.
  const consultation = { minutes: 50, pln: 150 };
  const psychotherapy = { minutes: 50, pln: 190 };
  window.SiteContent = {
    PL: {
      nav: {
        help: "W czym pomagam",
        about: "O mnie",
        therapy: "Jak wygląda terapia",
        pricing: "Cennik",
        contact: "Kontakt",
        faq: "Pytania",
        bookButton: "Umów pierwszą konsultację",
      },
      hero: {
        line1: "Zrozumieć myśli.",
        line2: "Działać inaczej.",
        lines: [["Zrozumieć", "myśli."], ["Działać", "inaczej."]],
        description: "Prowadzę psychoterapię poznawczo-behawioralną osób dorosłych online, po polsku i angielsku. Pracuję z lękiem, obniżonym nastrojem, stresem i natłokiem myśli, które utrudniają codzienne życie. W CBT wspólnie przyglądamy się temu, co podtrzymuje trudności, i sprawdzamy, co można zmienić w myśleniu i działaniu.",
        cta: "Umów pierwszą konsultację",
        scroll: "Przewiń w dół",
      },
      help: {
        title: "Gdy trudno odpocząć, a codzienność przytłacza.",
        subtitle: "Nie zawsze trzeba wiedzieć, jak nazwać to, co się dzieje. Czasem zaczyna się od napięcia, unikania, braku energii, natłoku myśli albo poczucia, że coraz trudniej radzić sobie z codziennością.",
        explore: "Zobacz, nad czym możemy pracować",
        discover: "Przyjrzyj się",
        keepOpen: "Zostaw otwarte",
        returnToSituation: "Wróć do sytuacji",
        workOn: "Nad tym możemy pracować",
        topics: [
          {
            id: "anxiety",
            experience: "Odkładasz sytuacje, które budzą napięcie.",
            title: "Lęk i niepokój",
            description: "Zamartwiasz się, przewidujesz najgorsze i unikasz sytuacji, w których chcesz uczestniczyć. Pracuję również z osobami z rozpoznanymi zaburzeniami lękowymi.",
          },
          {
            id: "stress",
            experience: "Nawet w wolnej chwili trudno Ci odpuścić.",
            title: "Stres i przeciążenie",
            description: "Ciągle trzeba coś zrobić, o czymś pamiętać albo komuś sprostać. Presja i napięcie nie ustępują, a Ty masz poczucie nieustannej gotowości do działania.",
          },
          {
            id: "mood",
            experience: "To, co kiedyś cieszyło, daje coraz mniej satysfakcji.",
            title: "Obniżony nastrój i depresja",
            description: "Brakuje energii, wycofujesz się z aktywności, a codzienne zadania wymagają coraz więcej wysiłku. W terapii jest miejsce zarówno na rozmowę o obniżonym nastroju, jak i pracę z depresją.",
          },
          {
            id: "overthinking",
            experience: "Wracasz myślami do tych samych spraw.",
            title: "Natłok myśli",
            description: "Wracasz do rozmów, analizujesz swoje decyzje i zastanawiasz się, co należało zrobić inaczej. Szukasz odpowiedzi, ale kolejne przemyślenia nie przynoszą ulgi.",
          },
        ],
        diagnosis: "Nie musisz mieć diagnozy, żeby zgłosić się na konsultację. Jeśli diagnoza została już postawiona, uwzględnimy ją przy planowaniu terapii.",
        closing: "Podczas konsultacji przyjrzymy się temu, jak te trudności wpływają na Twoje życie. Ustalimy, co jest dla Ciebie najważniejsze i nad czym chcesz pracować.",
        womenTitle: "Szczególnie interesuje mnie zdrowie psychiczne kobiet.",
        womenInclusive: "Ale prowadzę psychoterapię osób dorosłych niezależnie od płci!",
        womenIntro: "W swojej pracy zwracam uwagę na doświadczenia i zmiany, które bywają pomijane, gdy trudności psychiczne rozpatruje się bez szerszego kontekstu życia kobiety.",
        womenLifeTitle: "Okres poporodowy, perimenopauza i menopauza",
        womenText: "Interesuje mnie to, jak przeżywasz te etapy życia i jak wiążą się one z Twoimi emocjami, codziennym funkcjonowaniem, pracą, relacjami i obrazem siebie. W terapii możemy uwzględnić ten kontekst, Twoje potrzeby i to, co jest teraz trudne.",
        womenAdhdTitle: "ADHD u kobiet",
        womenAdhdText: "Jest tu również miejsce na rozmowę o doświadczeniu ADHD: organizowaniu codzienności, przeciążeniu, relacjach i sposobie, w jaki myślisz o sobie. Wspólnie przyglądamy się trudnościom i szukamy rozwiązań dopasowanych do Twojej sytuacji.",
      },
      about: {
        name: "mgr Sandra Machoń",
        title: "O mnie",
        subtitle: "Psychoterapia oparta na metodzie i dopasowana do człowieka",
        contactTitle: "Chcesz o coś zapytać przed umówieniem konsultacji?",
        emailLabel: "E-mail",
        phoneLabel: "Telefon",
        paragraphs: [
          "Cześć, nazywam się Sandra Machoń. Jestem psychoterapeutką w trakcie certyfikacji. Prowadzę psychoterapię osób dorosłych w nurcie poznawczo-behawioralnym, online, po polsku i angielsku.",
          "Jestem na trzecim roku czteroletniej Szkoły Psychoterapii Poznawczo-Behawioralnej WSB-NLU. Pracuję pod superwizją.",
          "Pracowałam jako asystentka badawcza w obszarze neuronauki poznawczej. W pracy badawczej zajmowałam się związkiem doświadczeń traumy z dzieciństwa ze strukturą mózgu oraz rolą regulacji emocji w uzależnieniach.",
          "To naukowe zaplecze jest jednym z powodów, dla których bliskie jest mi CBT: sposób pracy wynika z modelu psychologicznego, dostępnych badań i indywidualnego rozumienia problemu konkretnej osoby. Twoje doświadczenia, cele i informacja o tym, co jest pomocne, współtworzą kierunek terapii.",
        ],
        educationTitle: "Wykształcenie i szkolenia",
        education: [
          "Wykształcenie akademickie zdobywałam w Londynie: psychologia (BSc) na University of Roehampton oraz tytuł magistra (MSc) z neuronauki w King’s College London.",
          "Szkolenie psychoterapeutyczne: trzeci rok czteroletniego programu CBT w WSB-NLU. Program szkoły posiada akredytację Polskiego Stowarzyszenia Psychologów, Psychoterapeutów i Lekarzy (PSPPiL) oraz Professional School of Health Sciences (PSoHS). Akredytacje dotyczą programu kształcenia. Jestem w trakcie szkolenia, a nie po uzyskaniu certyfikatu psychoterapeuty.",
          "Ukończyłam także szkolenie z afirmującego wsparcia osób LGBT+.",
        ],
        schoolLink: "https://www.wsb-nlu.edu.pl/pl/szkola-psychoterapii-wsb-nlu-studia-podyplomowe",
        schoolLinkLabel: "O szkole i akredytacjach na stronie WSB-NLU",
      },
      therapy: {
        title: "CBT ma strukturę. Ty nie jesteś schematem.",
        intro: "Terapia poznawczo-behawioralna opiera się na badaniach. Jej metody są rozwijane i sprawdzane, a dla wielu trudności i zaburzeń istnieją oparte na dowodach sposoby prowadzenia terapii.",
        principles: [
          { title: "Rozumienie Twojej sytuacji", text: "Zaczynamy od indywidualnej konceptualizacji: wspólnego rozumienia, jak powstał problem i co go podtrzymuje. To ona, Twoje cele oraz diagnoza, jeśli została postawiona, pomagają dobrać metody i protokoły CBT do Twoich potrzeb. Diagnoza nie jest warunkiem rozpoczęcia terapii." },
          { title: "Wspólne cele i konkretna praca", text: "Sesje mają strukturę i cele, do których regularnie wracamy. Częścią terapii może być praca między spotkaniami: obserwacje, ćwiczenia, eksperymenty behawioralne lub wypróbowanie nowego sposobu działania. Ustalamy je wspólnie i sprawdzamy, co pomaga." },
          { title: "Więcej możliwości reagowania", text: "CBT jest terapią aktywną. Nie polega na mówieniu Ci, co masz myśleć, ani na przekonywaniu do pozytywnego myślenia. Uczymy się rozpoznawać wzorce myślenia i zachowania, sprawdzać ich trafność i użyteczność oraz budować inne sposoby reagowania." },
        ],
        model: {
          "label": "Zobacz na przykładzie",
          "title": "Jedna sytuacja. Różne możliwości.",
          "intro": "Znaczenie, jakie nadajemy sytuacji, wiąże się z tym, co czujemy i jak reagujemy. Zmień przykład i sprawdź, jak te elementy mogą na siebie wpływać.",
          "sceneLabel": "Wybierz sytuację",
          "perspectiveLabel": "Przyjrzyj się interpretacji",
          "perspectives": [
            "Pierwsza myśl",
            "Inne spojrzenie"
          ],
          "diagramLabel": "Model ABC: sytuacja, myśli i przekonania oraz konsekwencje",
          "hint": "Kliknij element modelu, aby poznać go bliżej.",
          "consequences": "Konsekwencje",
          "cycleLabel": "Elementy wzajemnie na siebie wpływają",
          "detailLabel": "Przyjrzyjmy się temu",
          "questionLabel": "Pytanie do refleksji",
          "updated": "Model zaktualizowany.",
          "note": "To przykładowe reakcje, nie diagnoza ani przewidywanie Twoich odczuć. Inna interpretacja nie musi od razu zmienić emocji czy napięcia. W terapii szukamy spojrzenia opartego na faktach, a nie myślenia na siłę pozytywnego.",
          "sourceLabel": "Na podstawie modelu ABC Alberta Ellisa",
          "sourceUrl": "https://albertellis.org/rebt-in-the-context-of-modern-psychological-research/",
          "nodes": [
            {
              "id": "situation",
              "letter": "A",
              "label": "Sytuacja",
              "explanation": "Zaczynamy od tego, co się wydarzyło. Oddzielamy obserwowalne fakty od znaczenia, które im przypisujemy.",
              "question": "Co mogłaby zarejestrować kamera, bez domyślania się intencji?"
            },
            {
              "id": "belief",
              "letter": "B",
              "label": "Myśli i przekonania",
              "explanation": "To sposób, w jaki rozumiemy zdarzenie: nasze przewidywania, oceny i przekonania o sobie, innych lub świecie. Myśl może wydawać się pewnikiem, choć nie jest faktem.",
              "question": "Co przemawia za tą myślą, a co może wskazywać na inne wyjaśnienie?"
            },
            {
              "id": "emotion",
              "letter": "C",
              "label": "Emocje",
              "explanation": "Emocje są częścią naszej reakcji. Najpierw próbujemy je rozpoznać i nazwać. Nie musimy ich oceniać ani natychmiast zmieniać.",
              "question": "Jak nazwiesz to uczucie i jak silne jest w tej chwili?"
            },
            {
              "id": "behaviour",
              "letter": "C",
              "label": "Zachowanie",
              "explanation": "To, co robimy lub czego unikamy, może przynosić chwilową ulgę, podtrzymywać trudność albo dawać nowe doświadczenia. Przyglądamy się skutkom w krótszej i dłuższej perspektywie.",
              "question": "Co daje mi ta reakcja teraz, a jak wpływa na mnie później?"
            },
            {
              "id": "body",
              "letter": "C",
              "label": "Reakcje ciała",
              "explanation": "Napięcie mięśni, oddech czy bicie serca również są częścią reakcji. To, jak odczytujemy te sygnały, może z kolei wpływać na nasze myśli i emocje.",
              "question": "Co zauważam w ciele i jakie znaczenie temu nadaję?"
            }
          ],
          "scenarios": [
            {
              "id": "message",
              "label": "Brak odpowiedzi",
              "situation": "Od kilku godzin nie ma odpowiedzi na moją wiadomość.",
              "views": [
                {
                  "belief": "„Ignoruje mnie. To znaczy, że nie jestem ważną osobą.”",
                  "emotion": "Niepokój, smutek, poczucie odrzucenia.",
                  "body": "Ścisk w żołądku, napięte ramiona.",
                  "behaviour": "Co chwilę sprawdzam telefon i ponownie czytam wiadomość."
                },
                {
                  "belief": "„Nie wiem, skąd ta cisza. Brak odpowiedzi nie określa mojej wartości.”",
                  "emotion": "Niepewność i niepokój mogą nadal być obecne.",
                  "body": "Napięcie może pozostać, nawet gdy odkładam telefon.",
                  "behaviour": "Wracam do swoich zajęć. Jeśli to ważne, później dopytuję."
                }
              ]
            },
            {
              "id": "conversation",
              "label": "Rozmowa w pracy",
              "situation": "Osoba z pracy prosi mnie o rozmowę, nie podając tematu.",
              "views": [
                {
                  "belief": "„Na pewno coś jest nie tak. Nie mogę popełniać błędów.”",
                  "emotion": "Lęk, wstyd jeszcze przed rozmową.",
                  "body": "Szybsze bicie serca, napięcie w brzuchu.",
                  "behaviour": "Odkładam rozmowę i układam w głowie kolejne wyjaśnienia."
                },
                {
                  "belief": "„Nie znam tematu. Nawet jeśli chodzi o błąd, mogę szukać rozwiązania.”",
                  "emotion": "Obawa i ciekawość tego, czego dotyczy rozmowa.",
                  "body": "Serce nadal może bić szybciej.",
                  "behaviour": "Pytam o temat i idę na rozmowę mimo niepewności."
                }
              ]
            },
            {
              "id": "overload",
              "label": "Dużo obowiązków",
              "situation": "Pod koniec dnia kilka zadań wciąż czeka na zrobienie.",
              "views": [
                {
                  "belief": "„Muszę zrobić wszystko. Jeśli nie daję rady, zawodzę.”",
                  "emotion": "Przytłoczenie, poczucie winy, frustracja.",
                  "body": "Zmęczenie, zaciśnięta szczęka i napięty kark.",
                  "behaviour": "Rezygnuję z przerwy i próbuję robić kilka rzeczy naraz."
                },
                {
                  "belief": "„Mam ograniczony czas i energię. Nie wszystko musi być zrobione dziś.”",
                  "emotion": "Frustracja może pozostać, obok poczucia większego wpływu.",
                  "body": "Zmęczenie nadal jest sygnałem, że potrzebuję odpoczynku.",
                  "behaviour": "Wybieram jedno ważne zadanie, resztę przekładam lub proszę o pomoc."
                }
              ]
            },
            {
              "id": "rumination",
              "label": "Powrót do rozmowy",
              "situation": "Wieczorem przypominam sobie własną wypowiedź ze spotkania.",
              "views": [
                {
                  "belief": "„To zabrzmiało głupio. Muszę ustalić, co wszyscy o mnie pomyśleli.”",
                  "emotion": "Wstyd, niepokój, żal do siebie.",
                  "body": "Napięcie, trudność z wyciszeniem przed snem.",
                  "behaviour": "Odtwarzam rozmowę w głowie, szukając pewności, której nie znajduję."
                },
                {
                  "belief": "„Nie znam myśli innych. Jedna wypowiedź nie określa mnie jako osoby.”",
                  "emotion": "Skrępowanie i niepewność nie muszą od razu zniknąć.",
                  "body": "Pobudzenie może jeszcze przez pewien czas się utrzymywać.",
                  "behaviour": "Zauważam powracającą analizę i kieruję uwagę na to, co robię teraz."
                }
              ]
            }
          ]
        },
        partnershipTitle: "Ty znasz teren. Ja znam narzędzia.",
        partnershipText: "Terapię można porównać do wspólnego wejścia na górę. Ty znasz własne doświadczenia, historię i to, co jest dla Ciebie ważne. Ja wnoszę wiedzę o CBT, mapy i narzędzia. Kierunek i tempo ustalamy wspólnie, a po drodze sprawdzamy, co działa i co wymaga zmiany.",
        learnMore: "Jak wygląda pierwsze spotkanie?",
      },
      consultation: {
        label: "Pierwsza konsultacja",
        title: "Pierwsze spotkanie służy zrozumieniu, z czym przychodzisz.",
        paragraphs: [
          "Porozmawiamy o tym, co skłoniło Cię do rozpoczęcia terapii, jak trudność wpływa na Twoje życie i czego oczekujesz od naszej pracy.",
          "Zapytam również o wcześniejsze leczenie, terapię oraz ewentualne diagnozy. Nie potrzebujesz przygotowanej historii ani diagnozy, żeby zacząć tę rozmowę.",
          "Opowiem Ci, jak pracuję, przedstawię zasady współpracy i odpowiem na pytania. Pierwsza konsultacja jest początkiem wspólnego rozpoznawania problemu.",
        ],
        highlight: "Pierwsza konsultacja nie zobowiązuje Cię do rozpoczęcia terapii.",
        ending: "Po konsultacji może się okazać, że CBT nie jest dla Ciebie odpowiednią formą pomocy albo że wolisz rozpocząć pracę z innym terapeutą. Omówimy to otwarcie i zastanowimy się nad możliwymi dalszymi krokami.",
        meta: `Pierwsza konsultacja · ${consultation.minutes} min · Online · ${consultation.pln} zł`,
      },
      cooperation: {
        title: "Plan terapii tworzymy wspólnie.",
        intro: [
          "Plan opieramy na zgłaszanych trudnościach, Twoich celach, diagnozie, jeśli została postawiona, oraz indywidualnej konceptualizacji, czyli rozumieniu tego, co podtrzymuje problem.",
          "W przypadku wielu zaburzeń możemy korzystać ze sprawdzonych protokołów CBT. Są mapą pracy, która pomaga dobierać interwencje. Tempo, konkretne ćwiczenia i cele dostosowujemy do Twojej sytuacji.",
        ],
        steps: [
          {
            title: "Ustalamy kierunek",
            text: "Porządkujemy rozumienie problemu i wybieramy cele, które mają znaczenie dla Ciebie.",
          },
          {
            title: "Próbujemy i obserwujemy",
            text: "Rozmawiamy o konkretnych sytuacjach, poznajemy sposoby radzenia sobie i planujemy niewielkie działania do wypróbowania poza sesją.",
          },
          {
            title: "Sprawdzamy postępy",
            text: "Wracamy do ustalonych celów. Rozmawiamy o zmianach, trudnościach i o tym, co trzeba dostosować w naszej pracy.",
          },
          {
            title: "Budujemy samodzielność",
            text: "Podsumowujemy to, co okazało się pomocne, i zastanawiamy się, jak korzystać z tych doświadczeń po zakończeniu regularnych spotkań.",
          },
        ],
        independenceTitle: "Terapia, która ma prowadzić do coraz większej samodzielności.",
        independence: [
          "CBT jest zwykle terapią ograniczoną w czasie. Nie istnieje jednak jedna właściwa liczba sesji dla wszystkich. Długość pracy zależy od trudności, ich historii, Twoich celów i tego, co dzieje się w trakcie terapii.",
          "Jednym z celów jest rozwijanie umiejętności, z których możesz korzystać również bez terapeuty: rozpoznawania własnych schematów i reagowania na trudne myśli, emocje i sytuacje. Zakończenie terapii planujemy wspólnie, uwzględniając to, jak korzystać z tych umiejętności dalej.",
        ],
      },
      pricing: {
        label: "Organizacja i cennik",
        title: "Psychoterapia online. Organizacja i ceny.",
        intro: "Do rozmowy potrzebujesz stabilnego połączenia z internetem oraz miejsca, w którym możesz mówić swobodnie i zadbać o prywatność. Spotkania prowadzę po polsku i angielsku.",
        items: [
          { title: `Pierwsza konsultacja · ${consultation.minutes} min`, price: `${consultation.pln} zł` },
          { title: `Psychoterapia CBT · ${psychotherapy.minutes} min`, price: `${psychotherapy.pln} zł` },
        ],
        languages: "Cena jest taka sama dla sesji po polsku i angielsku.",
        note: "Przed umówieniem spotkania napisz, jeśli chcesz zapytać o sposób połączenia, płatność lub zmianę terminu.",
        cta: "Umów pierwszą konsultację",
      },
      faq: {
        label: "Pytania przed rozpoczęciem",
        title: "Być może zastanawiasz się jeszcze…",
        showAll: "Zobacz wszystkie pytania",
        showLess: "Pokaż mniej pytań",
        // TODO: frequency, payment, cancellation/no-shows, video platform and
        // practice-specific arrangements for medication/psychiatric care.
        // Keep these questions off the live page until Sandra confirms answers.
        items: [
          {
            question: "Czy muszę mieć diagnozę?",
            answer: "Nie. Możesz zgłosić się na konsultację bez diagnozy. Jeśli została już postawiona, uwzględnimy ją obok Twoich celów i indywidualnego rozumienia problemu przy planowaniu terapii.",
          },
          {
            question: "Czy mogę przyjść, jeśli nie wiem, jak nazwać swój problem?",
            answer: "Tak. Nie musisz mieć gotowego opisu ani samodzielnie rozpoznawać, co się z Tobą dzieje. Konsultację możemy zacząć od tego, co ostatnio jest trudne i co skłoniło Cię do szukania pomocy.",
          },
          {
            question: "Jak długo trwa terapia?",
            answer: "Konsultacja i sesja psychoterapii trwają po 50 minut. CBT jest zwykle ograniczona w czasie, ale nie ma jednej właściwej liczby sesji. Długość pracy zależy od trudności, ich historii, celów i przebiegu terapii. Plan omawiamy wspólnie i regularnie sprawdzamy postępy.",
          },
          {
            question: "Czy pomiędzy spotkaniami będę wykonywać ćwiczenia?",
            answer: "Tak. W CBT bardzo ważnym elementem jest praca własna pomiędzy sesjami. Może obejmować obserwowanie określonych sytuacji, zapisywanie myśli albo wypróbowanie nowego sposobu działania. Ustalamy ją wspólnie i dopasowujemy do Twojej sytuacji oraz możliwości.",
          },
          {
            id: "certification",
            question: "Co oznacza, że jesteś w trakcie certyfikacji?",
            answer: "Jestem na trzecim roku czteroletniej Szkoły Psychoterapii Poznawczo-Behawioralnej WSB-NLU. Ukończyłam co najmniej dwa lata szkolenia, co zostało potwierdzone zaświadczeniem wydanym przez podmiot prowadzący szkolenie. Uczestniczę również w superwizji psychoterapii.\n\nPosiadam wykształcenie magisterskie i spełniam warunki określone dla osoby ubiegającej się o certyfikat psychoterapeuty, o których mowa w art. 5 ust. 3 pkt 4 ustawy z dnia 19 sierpnia 1994 r. o ochronie zdrowia psychicznego.\n\nPsychoterapię prowadzę w trakcie szkolenia, poddając swoją pracę regularnej superwizji. Dokumenty potwierdzające etap szkolenia oraz udział w superwizji są dostępne do wglądu.",
          },
          {
            question: "Czy rozmowy są poufne?",
            answer: "Przed rozpoczęciem współpracy omówimy zasady poufności, jej ograniczenia oraz sposób ochrony Twoich danych. Możesz zapytać o te kwestie także przed umówieniem pierwszego spotkania.",
          },
          {
            question: "Czy pracujesz tylko z kobietami?",
            answer: "Nie. Prowadzę psychoterapię osób dorosłych niezależnie od płci. Zdrowie psychiczne kobiet jest obszarem mojego szczególnego zainteresowania zawodowego.",
          },
          {
            question: "Co, jeśli podczas spotkania nie będę wiedzieć, co powiedzieć?",
            answer: "Możesz mi o tym powiedzieć. Nie oczekuję przygotowanej opowieści. Pomogę rozpocząć rozmowę, zadając pytania, a jeśli potrzebujesz chwili, możemy się zatrzymać.",
          },
          {
            question: "Czy mogę skorzystać ze spotkań, mieszkając za granicą?",
            answer: "Tak. Ponieważ pracujemy online, nie ogranicza nas konkretny kraj. Jeśli terapia może być prowadzona po polsku lub angielsku, możemy współpracować niezależnie od tego, gdzie mieszkasz.",
          },
          {
            question: "Co, jeśli nie będę czuć, że ta współpraca mi odpowiada?",
            answer: "Możesz o tym powiedzieć. Porozmawiamy o tym, co jest trudne i czy można coś zmienić w sposobie naszej pracy. Możesz też zdecydować, że nie chcesz kontynuować spotkań.",
          },
        ],
      },
      blog: {
        title: "Możesz najpierw poczytać.",
        intro: "Znajdziesz tu krótkie teksty o terapii CBT, codziennych trudnościach i rozpoczynaniu współpracy. Możesz zajrzeć do nich niezależnie od tego, czy planujesz umówić spotkanie.",
        viewAll: "Wszystkie artykuły",
        readMore: "Czytaj więcej",
      },
      cta: {
        label: "Kontakt",
        title: "Możemy zacząć od jednej rozmowy.",
        subtitle: "Nie musisz teraz podejmować decyzji o całej terapii. Pierwsza konsultacja jest okazją, żeby opowiedzieć o swojej sytuacji, zadać pytania i sprawdzić, czy chcesz pracować właśnie ze mną.",
        button: "Umów pierwszą konsultację",
        emailLabel: "Masz pytanie przed rezerwacją? Napisz do mnie.",
        phoneLabel: "Możesz też zadzwonić:",
        emailNote: "W pierwszej wiadomości nie musisz szczegółowo opisywać swojej sytuacji.",
      },
      footer: {
        description: "Psychoterapia poznawczo-behawioralna osób dorosłych online, po polsku i angielsku.",
        linksTitle: "Na stronie",
        contactTitle: "Kontakt",
        rights: "Wszelkie prawa zastrzeżone.",
        urgentTitle: "Potrzebujesz pilnej pomocy?",
        urgentText: "Ta strona i kontakt mailowy nie służą do uzyskiwania pomocy w nagłym kryzysie. W sytuacji bezpośredniego zagrożenia życia lub zdrowia zadzwoń pod 112. W Polsce możesz również skontaktować się z bezpłatnym, całodobowym Centrum Wsparcia pod numerem 800 70 2222. Jeśli przebywasz za granicą, skorzystaj z lokalnego numeru alarmowego lub lokalnej pomocy kryzysowej.",
        privacyLabel: "Polityka prywatności",
        termsLabel: "Zasady współpracy",
      },
    },
    EN: {
      nav: {
        help: "How I can help",
        about: "About me",
        therapy: "How therapy works",
        pricing: "Fees",
        contact: "Contact",
        faq: "Questions",
        bookButton: "Book an initial consultation",
      },
      hero: {
        line1: "Understand your thoughts.",
        line2: "Respond in new ways.",
        lines: [["Understand", "your thoughts."], ["Respond", "in new ways."]],
        description: "I provide cognitive behavioural psychotherapy for adults online, in Polish and English. I work with anxiety, low mood, stress and overthinking that get in the way of everyday life. Together, we explore what keeps these difficulties going and try out changes in how you think and respond.",
        cta: "Book an initial consultation",
        scroll: "Scroll down",
      },
      help: {
        title: "When it’s hard to rest and everyday life feels overwhelming.",
        subtitle: "You don’t always need a name for what is happening. It may begin with tension, avoidance, low energy, racing thoughts or a sense that everyday life is becoming harder to manage.",
        explore: "See what we can work on together",
        discover: "Take a closer look",
        keepOpen: "Keep open",
        returnToSituation: "Back to the situation",
        workOn: "Something we can work on",
        topics: [
          {
            id: "anxiety",
            experience: "You put off situations that make you tense.",
            title: "Anxiety and worry",
            description: "You worry, expect the worst and avoid situations you would like to take part in. I also work with people who have already been diagnosed with an anxiety disorder.",
          },
          {
            id: "stress",
            experience: "Even in a quiet moment, it’s hard to switch off.",
            title: "Stress and overwhelm",
            description: "There is always something to do, something to remember or someone’s expectations to meet. Pressure and tension persist, and you feel constantly on alert.",
          },
          {
            id: "mood",
            experience: "Things you used to enjoy feel less rewarding.",
            title: "Low mood and depression",
            description: "Energy is low, you withdraw from activities and everyday tasks take more effort. Therapy can address both low mood and depression.",
          },
          {
            id: "overthinking",
            experience: "Your thoughts keep returning to the same things.",
            title: "Overthinking",
            description: "You replay conversations, go over decisions and wonder what you should have done differently. You look for answers, but thinking it through again doesn’t bring relief.",
          },
        ],
        closing: "During a consultation, we will explore how these difficulties affect your life. We will identify what matters most to you and what you would like to work on.",
        diagnosis: "You don’t need a diagnosis to arrange a consultation. If you already have one, we will take it into account when planning therapy.",
        womenTitle: "Women’s mental health is a particular interest of mine.",
        womenInclusive: "But I provide psychotherapy for adults of all genders!",
        womenIntro: "I pay attention to experiences and changes that can be overlooked when mental health difficulties are considered without the wider context of a woman’s life.",
        womenLifeTitle: "Postpartum experiences, perimenopause and menopause",
        womenText: "I am interested in how you experience these stages of life and how they relate to your emotions, daily functioning, work, relationships and sense of self. Therapy can make room for that context, your needs and what feels difficult now.",
        womenAdhdTitle: "ADHD in women",
        womenAdhdText: "There is also space to explore the experience of ADHD: managing everyday life, feeling overwhelmed, relationships and the way you see yourself. Together, we can understand what is difficult and look for approaches that fit your circumstances.",
      },
      about: {
        name: "Sandra Machoń, MSc",
        title: "About me",
        subtitle: "Psychotherapy grounded in a method, shaped around you",
        contactTitle: "Would you like to ask something before booking a consultation?",
        emailLabel: "Email",
        phoneLabel: "Phone",
        paragraphs: [
          "Hi, I’m Sandra Machoń. I am a psychotherapist working towards certification. I provide cognitive behavioural psychotherapy for adults online, in Polish and English.",
          "I am in the third year of the four-year programme at the WSB-NLU School of Cognitive Behavioural Psychotherapy. I work under supervision.",
          "I worked as a research assistant in cognitive neuroscience. My research concerned the relationship between childhood trauma and brain structure, and the role of emotional regulation in addiction.",
          "This scientific background is one reason I value CBT: the work draws on a psychological model, available research and an individual understanding of each person’s difficulties. Your experiences, goals and feedback on what helps shape the direction of therapy.",
        ],
        educationTitle: "Education and training",
        education: [
          "Academic education completed in London: a BSc in Psychology at the University of Roehampton and a master’s degree (MSc) in Neuroscience at King’s College London.",
          "Psychotherapy training: year three of the four-year CBT programme at WSB-NLU. The school’s programme is accredited by Polskie Stowarzyszenie Psychologów, Psychoterapeutów i Lekarzy (PSPPiL, the Polish Association of Psychologists, Psychotherapists and Physicians) and the Professional School of Health Sciences (PSoHS). These accreditations apply to the training programme. I am still in training and have not yet obtained a psychotherapy certification.",
          "I have also completed training in affirmative support for LGBT+ people.",
        ],
        schoolLink: "https://www.wsb-nlu.edu.pl/pl/szkola-psychoterapii-wsb-nlu-studia-podyplomowe",
        schoolLinkLabel: "School and accreditation details on the WSB-NLU website",
      },
      therapy: {
        title: "CBT has a structure. You’re not a template.",
        intro: "Cognitive behavioural therapy is grounded in research. Its methods are developed and tested, and evidence-based treatment approaches exist for many difficulties and mental health conditions.",
        principles: [
          { title: "Understanding your situation", text: "We start with an individual formulation: a shared understanding of how a problem developed and what keeps it going. Alongside your goals and any existing diagnosis, this helps us choose CBT methods and protocols that fit your needs. A diagnosis is not required to begin therapy." },
          { title: "Shared goals and practical work", text: "Sessions have a structure and goals that we review regularly. Therapy may also include work between sessions: observations, exercises, behavioural experiments or trying a new way of responding. We plan these together and explore what helps." },
          { title: "More ways to respond", text: "CBT is an active therapy. It is not about telling you what to think or persuading you to think positively. We learn to recognise patterns of thinking and behaviour, examine how accurate and helpful they are, and develop different ways to respond." },
        ],
        model: {
          "label": "Explore an example",
          "title": "One situation. Different possibilities.",
          "intro": "The meaning we give a situation connects with how we feel and respond. Choose an example and explore how these elements can influence one another.",
          "sceneLabel": "Choose a situation",
          "perspectiveLabel": "Explore an interpretation",
          "perspectives": [
            "First thought",
            "Another perspective"
          ],
          "diagramLabel": "ABC model: situation, thoughts and beliefs, and consequences",
          "hint": "Select an element of the model to explore it.",
          "consequences": "Consequences",
          "cycleLabel": "These elements influence one another",
          "detailLabel": "A closer look",
          "questionLabel": "A question to reflect on",
          "updated": "Model updated.",
          "note": "These are possible responses, not a diagnosis or a prediction of your feelings. A different interpretation may not immediately change emotions or tension. In therapy, we look for a perspective grounded in facts, rather than forcing positive thoughts.",
          "sourceLabel": "Based on Albert Ellis’s ABC model",
          "sourceUrl": "https://albertellis.org/rebt-in-the-context-of-modern-psychological-research/",
          "nodes": [
            {
              "id": "situation",
              "letter": "A",
              "label": "Situation",
              "explanation": "We start with what happened, separating observable facts from the meaning we give them.",
              "question": "What could a camera record, without guessing anyone’s intentions?"
            },
            {
              "id": "belief",
              "letter": "B",
              "label": "Thoughts and beliefs",
              "explanation": "This is how we understand an event: predictions, judgements and beliefs about ourselves, others or the world. A thought can feel certain without being a fact.",
              "question": "What supports this thought, and what might point to a different explanation?"
            },
            {
              "id": "emotion",
              "letter": "C",
              "label": "Emotions",
              "explanation": "Emotions are part of our response. We begin by recognising and naming them, without needing to judge or immediately change them.",
              "question": "What would I call this feeling, and how strong is it right now?"
            },
            {
              "id": "behaviour",
              "letter": "C",
              "label": "Behaviour",
              "explanation": "What we do or avoid may bring brief relief, keep a difficulty going or offer new experiences. We explore both the short-term and longer-term effects.",
              "question": "What does this response give me now, and how does it affect me later?"
            },
            {
              "id": "body",
              "letter": "C",
              "label": "Body sensations",
              "explanation": "Muscle tension, breathing and heartbeat are part of our response too. How we interpret these sensations can, in turn, influence our thoughts and emotions.",
              "question": "What do I notice in my body, and what meaning am I giving it?"
            }
          ],
          "scenarios": [
            {
              "id": "message",
              "label": "No reply",
              "situation": "Several hours have passed without a reply to my message.",
              "views": [
                {
                  "belief": "“They’re ignoring me. That means I don’t matter.”",
                  "emotion": "Anxiety, sadness, a sense of rejection.",
                  "body": "A knot in my stomach, tense shoulders.",
                  "behaviour": "I keep checking my phone and rereading the message."
                },
                {
                  "belief": "“I don’t know why they haven’t replied. Their silence doesn’t define my worth.”",
                  "emotion": "Uncertainty and anxiety may still be there.",
                  "body": "Tension may remain even when I put my phone down.",
                  "behaviour": "I return to my activities. If it matters, I follow up later."
                }
              ]
            },
            {
              "id": "conversation",
              "label": "A conversation at work",
              "situation": "Someone at work asks to speak with me, without saying what about.",
              "views": [
                {
                  "belief": "“Something must be wrong. I must never make mistakes.”",
                  "emotion": "Anxiety and shame before we have even spoken.",
                  "body": "A faster heartbeat, tension in my stomach.",
                  "behaviour": "I put off the conversation and rehearse explanations in my head."
                },
                {
                  "belief": "“I don’t know the topic. Even if I made a mistake, I can look for a solution.”",
                  "emotion": "Concern and curiosity about what we will discuss.",
                  "body": "My heart may still be beating faster.",
                  "behaviour": "I ask what it is about and have the conversation despite uncertainty."
                }
              ]
            },
            {
              "id": "overload",
              "label": "Too much to do",
              "situation": "At the end of the day, several tasks are still unfinished.",
              "views": [
                {
                  "belief": "“I must do everything. If I can’t keep up, I’m failing.”",
                  "emotion": "Overwhelm, guilt and frustration.",
                  "body": "Fatigue, a clenched jaw and a tense neck.",
                  "behaviour": "I skip a break and try to do several things at once."
                },
                {
                  "belief": "“My time and energy are limited. Not everything has to be done today.”",
                  "emotion": "Frustration may remain, alongside a greater sense of agency.",
                  "body": "Fatigue still signals a need for rest.",
                  "behaviour": "I choose one important task and postpone others or ask for help."
                }
              ]
            },
            {
              "id": "rumination",
              "label": "Replaying a conversation",
              "situation": "In the evening, I remember something I said at a meeting.",
              "views": [
                {
                  "belief": "“That sounded stupid. I must work out what everyone thought of me.”",
                  "emotion": "Shame, anxiety and self-reproach.",
                  "body": "Tension and difficulty settling before sleep.",
                  "behaviour": "I replay the conversation, looking for certainty I cannot find."
                },
                {
                  "belief": "“I can’t read other people’s minds. One remark doesn’t define me.”",
                  "emotion": "Embarrassment and uncertainty may not disappear straight away.",
                  "body": "A sense of arousal may linger for a while.",
                  "behaviour": "I notice the repeated analysis and redirect my attention to what I’m doing now."
                }
              ]
            }
          ]
        },
        partnershipTitle: "You know the terrain. I bring the tools.",
        partnershipText: "Therapy can be like climbing a mountain together. You know your experiences, your history and what matters to you. I bring knowledge of CBT, maps and tools. We agree on the direction and pace together, checking along the way what works and what needs to change.",
        learnMore: "What happens at the first meeting?",
      },
      consultation: {
        label: "Your first consultation",
        title: "The first meeting helps us understand what brings you here.",
        paragraphs: [
          "We’ll talk about what led you to consider therapy, how the difficulty affects your life and what you hope to get from our work together.",
          "I’ll also ask about previous treatment, therapy and any diagnoses. You don’t need a prepared history or a diagnosis to begin this conversation.",
          "I’ll explain how I work, discuss the practical arrangements and answer your questions. The first consultation is the beginning of understanding the problem together.",
        ],
        highlight: "An initial consultation does not commit you to starting therapy.",
        ending: "After the consultation, you may decide that CBT is not the right form of support for you or that you would prefer to work with another therapist. We can discuss this openly and consider possible next steps.",
        meta: `Initial consultation · ${consultation.minutes} min · Online · PLN ${consultation.pln}`,
      },
      cooperation: {
        title: "We plan therapy together.",
        intro: [
          "The plan draws on your difficulties, your goals, any existing diagnosis and an individual formulation, meaning our shared understanding of what keeps the problem going.",
          "For many conditions, we can use established CBT treatment protocols. These provide a map for choosing interventions. We adapt the pace, specific exercises and goals to your circumstances.",
        ],
        steps: [
          {
            title: "Agree on a direction",
            text: "We bring together our understanding of the problem and choose goals that matter to you.",
          },
          {
            title: "Try things and observe",
            text: "We discuss specific situations, explore ways of coping and plan small actions to try outside our sessions.",
          },
          {
            title: "Review progress",
            text: "We return to the goals we agreed on. We talk about changes, difficulties and what we need to adjust in our work.",
          },
          {
            title: "Build independence",
            text: "We reflect on what has been helpful and consider how you can draw on these experiences after regular meetings come to an end.",
          },
        ],
        independenceTitle: "Therapy that helps you become increasingly independent.",
        independence: [
          "CBT is usually time-limited, but there is no single right number of sessions. The length of therapy depends on the difficulties, their history, your goals and how the work develops.",
          "One aim is to develop skills you can use without a therapist: recognising your own patterns and responding to difficult thoughts, feelings and situations. We plan the ending together, including how you can keep using these skills afterwards.",
        ],
      },
      pricing: {
        label: "Practical details and fees",
        title: "Online psychotherapy. Practical details and fees.",
        intro: "You’ll need a stable internet connection and a private space where you feel able to speak freely. Sessions are available in Polish and English.",
        items: [
          { title: `Initial consultation · ${consultation.minutes} min`, price: `PLN ${consultation.pln}` },
          { title: `CBT psychotherapy · ${psychotherapy.minutes} min`, price: `PLN ${psychotherapy.pln}` },
        ],
        languages: "The fee is the same for sessions in Polish and English.",
        note: "Before arranging a meeting, please get in touch if you’d like to ask about how to connect, payment or changing an appointment.",
        cta: "Book an initial consultation",
      },
      faq: {
        label: "Questions before getting started",
        title: "You might still be wondering…",
        showAll: "See all questions",
        showLess: "Show fewer questions",
        // Unconfirmed practical policies are documented in CONTENT-NOTES.md.
        items: [
          {
            question: "Do I need a diagnosis?",
            answer: "No. You can arrange a consultation without a diagnosis. If you already have one, we will consider it alongside your goals and our individual understanding of the problem when planning therapy.",
          },
          {
            question: "Can I come if I don’t know how to describe my problem?",
            answer: "Yes. You don’t need a prepared description or a diagnosis of what you’re going through. We can start with what has been difficult lately and what led you to seek support.",
          },
          {
            question: "How long does therapy take?",
            answer: "The consultation and each psychotherapy session last 50 minutes. CBT is usually time-limited, but there is no set number of sessions. The length depends on the difficulties, their history, your goals and how therapy develops. We discuss the plan together and review progress regularly.",
          },
          {
            question: "Will I be doing exercises between meetings?",
            answer: "Yes. In CBT, work between sessions is a very important part of therapy. It may include noticing particular situations, writing down thoughts or trying a different way of responding. We agree on it together and adapt it to your situation and capacity.",
          },
          {
            id: "certification",
            question: "What does it mean that you are working towards certification?",
            answer: "I am in the third year of the four-year programme at the WSB-NLU School of Cognitive Behavioural Psychotherapy. I have completed at least two years of training, as confirmed by a certificate issued by the training provider. I also participate in psychotherapy supervision.\n\nI hold a master’s degree and meet the requirements for a person applying for a psychotherapist certificate, as referred to in Article 5(3)(4) of the Polish Mental Health Protection Act of 19 August 1994.\n\nI provide psychotherapy while in training and regularly submit my work for supervision. Documents confirming my stage of training and participation in supervision are available for inspection.",
          },
          {
            question: "Are our conversations confidential?",
            answer: "Before we begin working together, we’ll discuss confidentiality, its limits and how your data is protected. You can also ask about these matters before arranging your first meeting.",
          },
          {
            question: "Do you only work with women?",
            answer: "No. I provide psychotherapy for adults of all genders. Women’s mental health is a particular professional interest of mine.",
          },
          {
            question: "What if I don’t know what to say during the meeting?",
            answer: "You can tell me that. I don’t expect a prepared story. I’ll help us begin by asking questions, and we can pause whenever you need a moment.",
          },
          {
            question: "Can I attend sessions if I live abroad?",
            answer: "Yes. Because we work online, we are not limited to a particular country. If therapy can be conducted in Polish or English, we can work together wherever you live.",
          },
          {
            question: "What if working together doesn’t feel right for me?",
            answer: "You can tell me. We’ll discuss what feels difficult and whether we can change anything about the way we work. You can also decide that you don’t want to continue.",
          },
        ],
      },
      blog: {
        title: "You can start by reading.",
        intro: "Here you’ll find short articles about CBT, everyday difficulties and getting started with therapy. You’re welcome to explore them whether or not you’re thinking of booking a meeting.",
        viewAll: "All articles",
        readMore: "Read more",
      },
      cta: {
        label: "Contact",
        title: "We can start with one conversation.",
        subtitle: "You don’t have to decide about a whole course of therapy now. An initial consultation is a chance to talk about your situation, ask questions and see whether you would like to work with me.",
        button: "Book an initial consultation",
        emailLabel: "Have a question before booking? Get in touch.",
        phoneLabel: "You can also call:",
        emailNote: "You don’t need to describe your situation in detail in your first email.",
      },
      footer: {
        description: "Cognitive behavioural psychotherapy for adults online, in Polish and English.",
        linksTitle: "Explore",
        contactTitle: "Contact",
        rights: "All rights reserved.",
        urgentTitle: "Need urgent support?",
        urgentText: "This website and email address are not crisis services. If someone’s life or health is in immediate danger in Poland, call 112. You can also contact Poland’s free, 24-hour Support Centre on 800 70 2222. If you are abroad, use the local emergency number or a local crisis support service.",
        privacyLabel: "Privacy policy",
        termsLabel: "Working together: terms",
      },
    },
  };
})();
