/**
 * data/rzezby.js — jedyne źródło prawdy o rzeźbach na trasie spaceru.
 *
 * Używane przez: mapę (js/map.js), listę kafelków na stronie głównej,
 * podstrony rzeźb (nawigacja prev/next), generator kodów QR (qr/generator.html).
 *
 * WAŻNE — ścieżki do plików (miniatura, zdjecia[].src, media.audioSrc):
 * zapisane tak, jakby strona była w katalogu głównym (np. "./img/plik.webp").
 * Kod odczytujący te dane (js/main.js: resolveAsset()) sam zamienia
 * wiodące "./" na "../", jeśli strona jest w podkatalogu /en/.
 * Dzięki temu ten plik wygląda identycznie niezależnie od języka strony,
 * która go wczytuje — nie trzeba go duplikować.
 *
 * Współrzędne (pole wspolrzedne) pochodzą z pomiaru GPS w terenie
 * (2026-10-12). Jeśli przy którymś punkcie pojawi się komentarz
 * "ZWERYFIKOWAĆ W TERENIE", oznacza to współrzędne wciąż namierzone
 * zdalnie, wymagające potwierdzenia przed drukiem tabliczek QR.
 *
 * Pola tekstowe z placeholderem "<!-- EN TRANSLATION NEEDED -->" to treści
 * historyczne/opisowe czekające na tłumacza. Pola z "<!-- DO UZUPEŁNIENIA -->"
 * to szkic roboczy oparty na dostępnych faktach — do weryfikacji i uzupełnienia
 * przed publikacją. Zobacz też: TRESCI-DO-UZUPELNIENIA.md.
 */

var RZEZBY = [
  {
    id: "laweczka-prusa",
    nrTrasy: 1,

    slug: { pl: "laweczka-prusa", en: "prus-bench" },

    tytul: {
      pl: "Ławeczka Prusa",
      en: "Prus Bench"
    },
    // Pełny tytuł widoczny na samej podstronie (<title> i <h1>) — w menu
    // i na kafelkach zostaje krótkie "Ławeczka Prusa" (pole tytul).
    tytulStrony: {
      pl: "Ławeczka Bolesława Prusa",
      en: "Bolesław Prus Bench"
    },

    // Prawdziwa transkrypcja nagrania (od Zbigniewa Strzyżyńskiego) —
    // jeśli obecna, zastępuje domyślny placeholder "Lorem ipsum" w
    // sekcji transkrypcji na tej konkretnej podstronie. Sformatowana
    // (interpunkcja, podział na akapity) na podstawie tekstu dostarczonego
    // i poprawionego przez właściciela repozytorium — treść słowna bez zmian.
    transkrypcja: {
      pl: `<p>Ławeczka Bolesława Prusa powstała w 2002 roku z inicjatywy Haliny Bukowskiej, prezes Towarzystwa Przyjaciół Nałęczowa i kierowniczki Muzeum Bolesława Prusa, przy wsparciu finansowym Rady Miasta Nałęczów i ówczesnego burmistrza Wojciecha Wójcika.</p>
        <p>Ojciec przygotowywał trzy projekty w gipsie, przedstawiające różne usadowienie na ławce sylwetki Bolesława Prusa. Wybrano jedną propozycję, następnie wspólnie wykonywaliśmy w glinie naturalnej wielkości model. Ja zajmowałem się wstępnym wykonaniem całości postaci, ojciec zajmował się całą głową — wykonał tę głowę, zajmował się szczegółami.</p>
        <p>Po wykonaniu modelu i akceptacji przez zamawiających robiliśmy odlewy i pracowaliśmy nad formami gipsowymi — tych form było około 30. Następnie wykonaliśmy odlew gipsowy, który pojechał do odlewni w Rzeszowie — tam wykonano pomnik z brązu.</p>
        <p>Początkowo ławeczka stała przed Pałacem Małachowskich, gdzie mieściło się wtedy Muzeum Bolesława Prusa. Obecnie ławeczka znajduje się również w bardzo atrakcyjnym miejscu — przy stawie, przed sanatorium księcia Józefa.</p>
        <p>Jeżeli Państwo są w tym miejscu, to warto jeszcze odwiedzić palmiarnię. Znajdują się tam dwa popiersia wykonane przez ojca. Pierwsze z nich to popiersie Władysława Tatarkiewicza, filozofa, estetyka — pozował on ojcu na jednym z balkonów w sanatorium rolniczym. Druga rzeźba przedstawia popiersie dra Wacława Szczepińskiego, osoby bardzo zasłużonej dla Nałęczowa, lekarza naczelnego uzdrowiska.</p>
        <p>Te i inne rzeźby znajdujące się w palmiarni powstały podczas pleneru rzeźbiarskiego „Postacie Nałęczowa” w 1978 roku.</p>`,
      en: `<p>The Bolesław Prus Bench was created in 2002 on the initiative of Halina Bukowska, president of the Towarzystwo Przyjaciół Nałęczowa (Society of Friends of Nałęczów) and head of the Bolesław Prus Museum, with financial support from the Nałęczów City Council and the then mayor, Wojciech Wójcik.</p>
        <p>My father prepared three plaster designs showing different poses of Bolesław Prus's figure on the bench. One proposal was chosen, and we then worked together on a full-size model in clay. I handled the initial execution of the whole figure, while my father worked on the entire head — he made the head himself and took care of the details.</p>
        <p>After finishing the model and getting the clients' approval, we made the casts and worked on plaster moulds — there were about 30 of them. We then made the plaster cast, which travelled to the foundry in Rzeszów — there the monument was cast in bronze.</p>
        <p>At first, the bench stood in front of the Małachowski Palace, where the Bolesław Prus Museum was located at the time. Today the bench also stands in a very attractive spot — by the pond, in front of the Prince Józef Sanatorium.</p>
        <p>If you happen to be in this spot, it is also worth visiting the Palm House. There you will find two busts made by my father. The first is a bust of Władysław Tatarkiewicz, a philosopher and aesthetician, who sat for my father on one of the balconies of the agricultural workers' sanatorium. The other sculpture is a bust of Dr. Wacław Szczepiński, a man of great merit for Nałęczów, the resort's chief physician.</p>
        <p>These and other sculptures in the Palm House were created during the sculpture symposium „Figures of Nałęczów" in 1978.</p>`
    },

    rok: 2002,
    dataOdsloniecia: {
      pl: "niedziela, 20 października 2002 — w 120. rocznicę pierwszego przyjazdu Bolesława Prusa do Nałęczowa",
      en: "Sunday, 20 October 2002 — the 120th anniversary of Bolesław Prus's first visit to Nałęczów"
    },

    material: { pl: "brąz", en: "bronze" },

    autorzy: {
      pl: "Stanisław Strzyżyński wspólnie z synem Zbigniewem Strzyżyńskim",
      en: "Stanisław Strzyżyński together with his son Zbigniew Strzyżyński"
    },
    wspolautorstwoWyeksponowac: true,

    lokalizacja: {
      pl: "Park Zdrojowy, przy Pałacu Małachowskich",
      en: "Spa Park (Park Zdrojowy), by the Małachowski Palace (Pałac Małachowskich)"
    },
    adres: "Aleja St. Małachowskiego 3, 24-140 Nałęczów",

    dojazd: {
      pl: "Wejdź do Parku Zdrojowego od strony Pałacu Małachowskich. Ławeczka stoi przy głównej alejce, w pobliżu stawu i pijalni wód, bardzo blisko Alejki Strzyżyńskiego (punkt 2 tej trasy). Uwaga: w parku stoją dwa pomniki Bolesława Prusa — popiersie oraz ta ławeczka z siedzącą postacią — łatwo je pomylić.",
      en: "Enter the Spa Park from the side of the Małachowski Palace. The bench stands by the main path, near the pond and the pump room, very close to Strzyżyński Alley (stop 2 on this route). Note: there are two monuments to Bolesław Prus in the park — a bust and this bench with a seated figure — it is easy to confuse the two."
    },

    wspolrzedne: [51.2870007258462, 22.208436990572082], // pomiar GPS w terenie, 2026-10-12

    media: {
      typ: "audio",
      youtubeId: "VIDEO_ID_PLACEHOLDER",
      audioSrc: "./audio/laweczka-prusa.mp3"
    },

    miniatura: "./img/laweczka-prusa-mini.svg",
    zdjecia: [
      {
        src: "./img/laweczka-prusa-1.svg",
        w: 800,
        h: 600,
        alt: {
          pl: "Ławeczka Bolesława Prusa w Parku Zdrojowym w Nałęczowie — siedząca postać pisarza w meloniku",
          en: "The Bolesław Prus Bench in the Spa Park in Nałęczów — a seated figure of the writer in a bowler hat"
        },
        podpis: {
          pl: "Ławeczka Bolesława Prusa, brąz, 2002 <!-- DO UZUPEŁNIENIA: podpis fotografa/źródło -->",
          en: "The Bolesław Prus Bench, bronze, 2002 <!-- DO UZUPEŁNIENIA: podpis fotografa/źródło -->"
        }
      },
      {
        src: "./img/laweczka-prusa-2.svg",
        w: 800,
        h: 600,
        alt: {
          pl: "Zbliżenie na dłoń Bolesława Prusa opartą na książce",
          en: "Close-up of Bolesław Prus's hand resting on a book"
        },
        podpis: {
          pl: "Detal rzeźby — dłoń na książce <!-- DO UZUPEŁNIENIA -->",
          en: "Detail of the sculpture — hand on a book <!-- DO UZUPEŁNIENIA -->"
        }
      }
    ],

    dostepnosc: {
      pl: "Utwardzona alejka parkowa, bez schodów. W pobliżu ławki do odpoczynku. // DO ZWERYFIKOWANIA W TERENIE",
      en: "A paved park path, no steps. Benches for resting nearby. // TO VERIFY ON SITE"
    },

    opisKrotki: {
      pl: "Siedząca postać pisarza w meloniku, z dłonią opartą na książce — jedyne dzieło na trasie, które Stanisław Strzyżyński stworzył wspólnie z synem Zbigniewem.",
      en: "A seated figure of the writer in a bowler hat, hand resting on a book — the only work on the route that Stanisław Strzyżyński created together with his son Zbigniew."
    },

    opisPelny: {
      pl: [
        "Ławeczka Bolesława Prusa stanęła w Parku Zdrojowym w niedzielę 20 października 2002 roku, w 120. rocznicę pierwszego przyjazdu pisarza do Nałęczowa. Brązowa figura przedstawia siedzącego Prusa w charakterystycznym meloniku, z dłonią spoczywającą na książce — jakby na chwilę przerwał lekturę, by odpocząć w cieniu parkowych alei. <!-- DO UZUPEŁNIENIA: okoliczności powstania, fundator, przebieg odsłonięcia -->",
        "To jedyne dzieło na tej trasie, które Stanisław Strzyżyński wykonał wspólnie z synem Zbigniewem Strzyżyńskim, urodzonym w Nałęczowie w 1955 roku — tym samym, który opowiada o ojcu i jego twórczości w nagraniach towarzyszących temu spacerowi. Słuchając jego głosu przy tej rzeźbie, słyszymy więc relację nie tylko syna, ale i współtwórcy. <!-- DO UZUPEŁNIENIA: szczegóły współpracy ojca i syna przy tej realizacji -->",
        "W parku znajdują się dwa upamiętnienia Bolesława Prusa — popiersie oraz ta ławeczka. Nałęczów odwiedzał pisarz wielokrotnie, a uzdrowisko wywarło wpływ na jego twórczość. <!-- DO UZUPEŁNIENIA: związki Prusa z Nałęczowem, kontekst literacki -->"
      ],
      en: [
        "The Bolesław Prus Bench was unveiled in the Spa Park on Sunday, 20 October 2002, on the 120th anniversary of the writer's first visit to Nałęczów. The bronze figure shows Prus seated in his characteristic bowler hat, hand resting on a book — as if he had paused his reading for a moment to rest in the shade of the park's avenues. <!-- DO UZUPEŁNIENIA: okoliczności powstania, fundator, przebieg odsłonięcia -->",
        "This is the only work on this route that Stanisław Strzyżyński made together with his son Zbigniew Strzyżyński, born in Nałęczów in 1955 — the same person who tells the story of his father and his work in the recordings accompanying this walk. Listening to his voice at this sculpture, we therefore hear not only a son's account, but a co-creator's. <!-- DO UZUPEŁNIENIA: szczegóły współpracy ojca i syna przy tej realizacji -->",
        "There are two memorials to Bolesław Prus in the park — a bust and this bench. The writer visited Nałęczów many times, and the spa town left its mark on his work. <!-- DO UZUPEŁNIENIA: związki Prusa z Nałęczowem, kontekst literacki -->"
      ]
    },

    tonPowazny: false
  },

  {
    id: "drzewo-genealogiczne",
    nrTrasy: 2,

    slug: { pl: "alejka-strzyzynskiego", en: "strzyzynski-alley" },

    tytul: {
      pl: "Alejka Strzyżyńskiego",
      en: "Strzyżyński Alley"
    },
    // Pełny tytuł widoczny na samej podstronie (<title> i <h1>) — w menu
    // i na kafelkach zostaje krótkie "Alejka Strzyżyńskiego" (pole tytul).
    tytulStrony: {
      pl: "Alejka Stanisława Strzyżyńskiego - rzeźba Drzewo genealogiczne",
      en: "Stanisław Strzyżyński Alley"
    },

    rok: 1977,
    dataOdsloniecia: { pl: null, en: null },

    material: { pl: "sztuczny kamień", en: "artificial stone" },

    autorzy: {
      pl: "Stanisław Strzyżyński",
      en: "Stanisław Strzyżyński"
    },
    wspolautorstwoWyeksponowac: false,

    lokalizacja: {
      pl: "Aleja Stanisława Strzyżyńskiego, Park Zdrojowy",
      en: "Stanisław Strzyżyński Alley (Aleja Stanisława Strzyżyńskiego), Spa Park"
    },
    adres: "Aleja Stanisława Strzyżyńskiego, 24-140 Nałęczów",

    dojazd: {
      pl: "Rzeźba stoi wzdłuż Alei Stanisława Strzyżyńskiego w Parku Zdrojowym — alei noszącej imię autora — kilkadziesiąt metrów od Ławeczki Prusa (punkt 1 tej trasy).",
      en: "The sculpture stands along Stanisław Strzyżyński Alley in the Spa Park — an alley named after the artist himself — a few dozen metres from the Prus Bench (stop 1 on this route)."
    },

    wspolrzedne: [51.28714555955893, 22.21240346246493], // pomiar GPS w terenie, 2026-10-12

    media: {
      typ: "audio",
      youtubeId: "VIDEO_ID_PLACEHOLDER",
      audioSrc: "./audio/drzewo-genealogiczne.mp3"
    },

    miniatura: "./img/drzewo-genealogiczne-mini.svg",
    zdjecia: [
      {
        src: "./img/drzewo-genealogiczne-1.svg",
        w: 800,
        h: 600,
        alt: {
          pl: "Drzewo genealogiczne — abstrakcyjna, organiczna forma rzeźbiarska w Alei Stanisława Strzyżyńskiego",
          en: "Family Tree — an abstract, organic sculptural form in Stanisław Strzyżyński Alley"
        },
        podpis: {
          pl: "Drzewo genealogiczne, sztuczny kamień, 1977 <!-- DO UZUPEŁNIENIA -->",
          en: "Family Tree, artificial stone, 1977 <!-- DO UZUPEŁNIENIA -->"
        }
      },
      {
        src: "./img/drzewo-genealogiczne-2.svg",
        w: 800,
        h: 600,
        alt: {
          pl: "Zbliżenie na fakturę rzeźby Drzewo genealogiczne",
          en: "Close-up of the texture of the Family Tree sculpture"
        },
        podpis: {
          pl: "Detal faktury sztucznego kamienia <!-- DO UZUPEŁNIENIA -->",
          en: "Detail of the artificial stone's texture <!-- DO UZUPEŁNIENIA -->"
        }
      }
    ],

    dostepnosc: {
      pl: "Utwardzona alejka parkowa, teren płaski, bez schodów. // DO ZWERYFIKOWANIA W TERENIE",
      en: "A paved park path, flat ground, no steps. // TO VERIFY ON SITE"
    },

    opisKrotki: {
      pl: "Abstrakcyjna, organiczna forma stylizowana na drzewo — symbol więzów rodzinnych i ciągłości pokoleń, w alei noszącej imię artysty.",
      en: "An abstract, organic form stylised as a tree — a symbol of family ties and the continuity of generations, in an alley named after the artist."
    },

    opisPelny: {
      pl: [
        "Drzewo genealogiczne to abstrakcyjna, organiczna forma rzeźbiarska powstała w 1977 roku, wykonana ze sztucznego kamienia. Rozgałęziający się kształt przywołuje na myśl konar drzewa i jest odczytywany jako symbol więzów rodzinnych, ciągłości pokoleń i splatających się ludzkich losów. <!-- DO UZUPEŁNIENIA: okoliczności powstania, symbolika w interpretacji autora -->",
        "Rzeźba stoi w Alei Stanisława Strzyżyńskiego w Parku Zdrojowym — alei, która nosi imię samego artysty. To szczególny, rzadko spotykany zbieg okoliczności: twórca spaceruje po parku razem z odwiedzającymi, obecny nie tylko w swoich dziełach, ale i w nazwie miejsca. <!-- DO UZUPEŁNIENIA: historia nadania nazwy alei -->",
        "Forma dzieła pozostaje otwarta na interpretację — dla jednych to genealogiczne drzewo rodu, dla innych uniwersalny symbol wzrostu i wzajemnych powiązań. <!-- DO UZUPEŁNIENIA: kontekst w twórczości Strzyżyńskiego, ewentualne inne realizacje o podobnej tematyce -->"
      ],
      en: [
        "Family Tree is an abstract, organic sculptural form created in 1977, made of artificial stone. Its branching shape evokes the bough of a tree and is read as a symbol of family ties, the continuity of generations, and intertwining human fates. <!-- DO UZUPEŁNIENIA: okoliczności powstania, symbolika w interpretacji autora -->",
        "The sculpture stands in Stanisław Strzyżyński Alley in the Spa Park — an alley that bears the artist's own name. It is a special, rarely seen coincidence: the creator walks through the park together with visitors, present not only in his works but also in the name of the place. <!-- DO UZUPEŁNIENIA: historia nadania nazwy alei -->",
        "The form of the work remains open to interpretation — for some it is a family's genealogical tree, for others a universal symbol of growth and interconnection. <!-- DO UZUPEŁNIENIA: kontekst w twórczości Strzyżyńskiego, ewentualne inne realizacje o podobnej tematyce -->"
      ]
    },

    tonPowazny: false
  },

  {
    id: "kawiarnia-ewelina",
    nrTrasy: 4,

    slug: { pl: "panna-z-ryba", en: "maiden-with-a-fish" },

    tytul: {
      pl: "Panna z rybą",
      en: "The Maiden with a Fish"
    },
    // Pełny tytuł widoczny na samej podstronie (<title> i <h1>) — w menu
    // i na kafelkach zostaje krótkie "Panna z rybą" (pole tytul).
    tytulStrony: {
      pl: "Rzeźba Panna z rybą przy Kawiarni Ewelina",
      en: "The Maiden with a Fish at Ewelina Café"
    },

    // Prawdziwa transkrypcja nagrania (od Zbigniewa Strzyżyńskiego) —
    // jeśli obecna, zastępuje domyślny placeholder "Lorem ipsum" w
    // sekcji transkrypcji na tej konkretnej podstronie. Sformatowana
    // (interpunkcja, podział na akapity) na podstawie tekstu dostarczonego
    // przez właściciela repozytorium — treść słowna bez zmian.
    transkrypcja: {
      pl: `<p>Panna z rybą, umieszczona w fontannie w ogrodzie znanej i lubianej kawiarni Ewelina, powstała w 1979 roku. Zamówiła ją ówczesna właścicielka kawiarni — Ewelina Bartosiewicz. Projekty Panny z rybą ojciec robił już w latach 50-tych. Zachowały się też zdjęcia małych, gipsowych projektów rzeźby.</p>
        <p>W ogrodzie mogą Państwo zobaczyć też wiele innych rzeźb — zarówno plenerowych, jak i we wnętrzu portretowych. Wyrzeźbił m.in. właścicielkę, Ewelinę Bartosiewicz. Znajduje się tam też głowa Władysława Tatarkiewicza, którego rzeźbił z natury — z tej właśnie głowy później wykonywał ponadnaturalnej wielkości popiersie, które znajduje się w palmiarni w Parku Zdrojowym.</p>
        <p>Jeżeli Państwo pójdą kawałek dalej, ulicą Lipową, po prawej stronie widoczna będzie uliczka Bolesława Prusa. Tam znajduje się dom i pracownia Stanisława Strzyżyńskiego.</p>
        <p>Jeżeli będą Państwo chcieli zajrzeć do pracowni i obejrzeć rzeźby z bliska — zapraszam do kontaktu telefonicznego i umówienia wizyty. Do zobaczenia w pracowni Stanisława Strzyżyńskiego.</p>`,
      en: `<p>The Maiden with a Fish, placed in the fountain in the garden of the well-known and much-loved Ewelina café, was created in 1979. It was commissioned by the café's owner at the time — Ewelina Bartosiewicz. My father had already made designs for the Maiden with a Fish back in the 1950s. Photographs of the small plaster designs of the sculpture have also survived.</p>
        <p>In the garden you can also see many other sculptures — both outdoor pieces and, inside, portrait busts. Among others, he sculpted the owner, Ewelina Bartosiewicz. There is also a head of Władysław Tatarkiewicz, whom he sculpted from life — it was from this very head that he later made the larger-than-life bust now in the Palm House in the Spa Park.</p>
        <p>If you walk a little further along Lipowa Street, you'll see Bolesław Prus Lane on the right. That is where Stanisław Strzyżyński's house and studio are located.</p>
        <p>If you would like to stop by the studio and see the sculptures up close — you're welcome to get in touch by phone and arrange a visit. See you at Stanisław Strzyżyński's studio.</p>`
    },

    rok: 1979, // z transkrypcji nagrania (Zbigniew Strzyżyński)
    dataOdsloniecia: { pl: null, en: null },

    material: { pl: null, en: null }, // DO UZUPEŁNIENIA — materiał rzeźby Panna z Rybą nieustalony

    autorzy: {
      pl: "Stanisław Strzyżyński",
      en: "Stanisław Strzyżyński"
    },
    wspolautorstwoWyeksponowac: false,

    // Opis strony skupia się na rzeźbie Panna z Rybą (stojącej w fontannie
    // na terenie kawiarni), nie na samej kawiarni.
    lokalizacja: {
      pl: "Fontanna przed willą „Pod Matką Boską”, w której mieści się kawiarnia Ewelina",
      en: "Fountain in front of the \"Pod Matką Boską\" villa (\"Under the Mother of God\"), home to the Ewelina café"
    },
    adres: "ul. Lipowa 16, 24-140 Nałęczów",

    dojazd: {
      pl: "Z Parku Zdrojowego kieruj się w stronę ulicy Lipowej. Willa „Pod Matką Boską” z kawiarnią Ewelina i fontanną z rzeźbą stoi pod numerem 16.",
      en: "From the Spa Park, head towards Lipowa Street. The \"Pod Matką Boską\" villa, home to Ewelina café and the fountain with the sculpture, stands at number 16."
    },

    wspolrzedne: [51.28521977620118, 22.218260265804872], // pomiar GPS w terenie, 2026-10-12

    infoPraktyczne: {
      pl: "To jedyny punkt trasy z kawą, toaletą i miejscem do siedzenia. Kawiarnia Ewelina czynna codziennie 10:00–21:00 // GODZINY DO ZWERYFIKOWANIA PRZED PUBLIKACJĄ",
      en: "This is the only stop on the route with coffee, a toilet and seating. Ewelina café is open daily 10:00–21:00 // HOURS TO VERIFY BEFORE PUBLICATION"
    },

    media: {
      typ: "audio",
      youtubeId: "VIDEO_ID_PLACEHOLDER",
      audioSrc: "./audio/kawiarnia-ewelina.mp3"
    },

    miniatura: "./img/kawiarnia-ewelina-mini.svg",
    zdjecia: [
      {
        src: "./img/kawiarnia-ewelina-1.svg",
        w: 800,
        h: 600,
        alt: {
          pl: "Rzeźba Panna z Rybą w fontannie przed willą Pod Matką Boską",
          en: "The Maiden with a Fish sculpture in the fountain in front of the Pod Matką Boską villa"
        },
        podpis: {
          pl: "Panna z Rybą w fontannie przed kawiarnią Ewelina <!-- DO UZUPEŁNIENIA -->",
          en: "The Maiden with a Fish in the fountain in front of Ewelina café <!-- DO UZUPEŁNIENIA -->"
        }
      },
      {
        src: "./img/kawiarnia-ewelina-2.svg",
        w: 800,
        h: 600,
        alt: {
          pl: "Ogródek kawiarni Ewelina przed willą Pod Matką Boską",
          en: "The garden of Ewelina café in front of the Pod Matką Boską villa"
        },
        podpis: {
          pl: "Kawiarnia Ewelina, ul. Lipowa 16 <!-- DO UZUPEŁNIENIA -->",
          en: "Ewelina café, 16 Lipowa Street <!-- DO UZUPEŁNIENIA -->"
        }
      }
    ],

    dostepnosc: {
      pl: "Teren przed willą częściowo utwardzony. Kawiarnia oferuje miejsca siedzące i toaletę wewnątrz budynku. // DO ZWERYFIKOWANIA W TERENIE",
      en: "The area in front of the villa is partially paved. The café offers seating and a toilet inside the building. // TO VERIFY ON SITE"
    },

    opisKrotki: {
      pl: "Rzeźba w fontannie przed willą „Pod Matką Boską” — i jedyny przystanek na trasie z kawą, toaletą i miejscem do odpoczynku.",
      en: "A sculpture in the fountain in front of the \"Pod Matką Boską\" villa — and the only stop on the route with coffee, a toilet and a place to rest."
    },

    opisPelny: {
      pl: [
        "Panna z Rybą to rzeźba osadzona w fontannie przed willą „Pod Matką Boską” przy ulicy Lipowej 16, w której dziś mieści się kawiarnia Ewelina. <!-- DO UZUPEŁNIENIA: rok powstania, materiał, okoliczności powstania, opis formy rzeźby -->",
        "To jedyny punkt tej trasy, przy którym można usiąść, wypić kawę i skorzystać z toalety — dla starszych odwiedzających to praktyczna informacja, nie tylko ciekawostka. Kawiarnia Ewelina jest czynna codziennie. <!-- GODZINY OTWARCIA DO ZWERYFIKOWANIA PRZED PUBLIKACJĄ -->",
        "<!-- DO UZUPEŁNIENIA: historia willi „Pod Matką Boską”, jej rola w uzdrowiskowej zabudowie Nałęczowa -->"
      ],
      en: [
        "The Maiden with a Fish is a sculpture set in the fountain in front of the \"Pod Matką Boską\" villa at 16 Lipowa Street, now home to Ewelina café. <!-- DO UZUPEŁNIENIA: rok powstania, materiał, okoliczności powstania, opis formy rzeźby -->",
        "This is the only stop on this route where you can sit down, have a coffee and use a toilet — for older visitors, that's practical information, not just a curiosity. Ewelina café is open every day. <!-- GODZINY OTWARCIA DO ZWERYFIKOWANIA PRZED PUBLIKACJĄ -->",
        "<!-- DO UZUPEŁNIENIA: historia willi „Pod Matką Boską”, jej rola w uzdrowiskowej zabudowie Nałęczowa -->"
      ]
    },

    tonPowazny: false
  },

  {
    id: "pomnik-wojtyla",
    nrTrasy: 3,

    slug: { pl: "kamien-papieski", en: "papal-stone" },

    tytul: {
      pl: "Kamień papieski",
      en: "Papal Stone"
    },
    // Pełny tytuł widoczny na samej podstronie (<title> i <h1>) — w menu
    // i na kafelkach zostaje krótkie "Kamień papieski" (pole tytul).
    tytulStrony: {
      pl: "Kamień papieski - Pomnik upamiętniający pobyt kard. Karola Wojtyły",
      en: "Papal Stone"
    },

    // Prawdziwa transkrypcja nagrania (od Zbigniewa Strzyżyńskiego) —
    // jeśli obecna, zastępuje domyślny placeholder "Lorem ipsum" w
    // sekcji transkrypcji na tej konkretnej podstronie. Sformatowana
    // (interpunkcja, podział na akapity) na podstawie tekstu dostarczonego
    // przez właściciela repozytorium — treść słowna bez zmian.
    transkrypcja: {
      pl: `<p>Kamień papieski wraz z tablicą poświęconą pobytom kardynała Karola Wojtyły w Nałęczowie powstał w 1999 roku.</p>
        <p>Kardynał Karol Wojtyła przyjeżdżał do Nałęczowa w latach 60-tych, ostatni raz był tu w 1976 roku. Prywatnie mieszkał u księży Salwatorianów i odprawiał mszę w kaplicy św. Karola Boromeusza. Lubił spacerować po wąwozach lessowych. Jego najbardziej lubianym wąwozem był wąwóz łukoszyński, obecnie często zwany potocznie papieskim.</p>
        <p>Inicjatorem powstania tej tablicy był przewodniczący Rady Miejskiej w Nałęczowie, Tadeusz Adamczyk. Uroczyste odsłonięcie nastąpiło w 21. rocznicę pontyfikatu Jana Pawła II.</p>
        <p>Stanisław Strzyżyński wykonał także kilkadziesiąt figur sakralnych, które można zobaczyć w całej Polsce. W Nałęczowie, obok kaplicy św. Karola Boromeusza, znajduje się figura Matki Bożej Róży Duchownej oraz pomnik Maksymiliana Kolbego, który wykonaliśmy wspólnie. Wielkim wyzwaniem dla nas obu było wyrzeźbienie sześciometrowej figury Chrystusa Zbawiciela dla Marka Kotańskiego, przeznaczonej dla Markotu w Warszawie.</p>
        <p>Dla ojca sztuka sakralna była bardzo ważna. Całe życie poszukiwał Boga i umacniał wiarę, co miało dla niego duże znaczenie. Tak samo ważny był dla niego człowiek, który był w centrum jego zainteresowania — w całej jego twórczości widać człowieka i stojące za tym człowiekiem poszukiwanie Boga.</p>`,
      en: `<p>The Papal Stone, together with the plaque dedicated to Cardinal Karol Wojtyła's stays in Nałęczów, was created in 1999.</p>
        <p>Cardinal Karol Wojtyła came to Nałęczów in the 1960s, and was here for the last time in 1976. He stayed privately with the Salvatorian priests and celebrated Mass in the Chapel of St. Charles Borromeo. He liked to walk through the loess ravines. His favourite ravine was the Łukoszyn ravine, now often informally called the Papal Ravine.</p>
        <p>The initiative to create this plaque came from Tadeusz Adamczyk, chairman of the Nałęczów City Council. The official unveiling took place on the 21st anniversary of John Paul II's pontificate.</p>
        <p>Stanisław Strzyżyński also made several dozen sacred figures that can be seen all over Poland. In Nałęczów, next to the Chapel of St. Charles Borromeo, there is a figure of Our Lady of the Mystical Rose and a monument to Maximilian Kolbe, which we made together. A great challenge for both of us was carving the six-metre figure of Christ the Saviour for Marek Kotański, intended for Markot in Warsaw.</p>
        <p>Sacred art was very important to my father. His whole life, he searched for God and strengthened his faith, which mattered a great deal to him. The human being was just as important to him and was at the centre of his interest — throughout his work you can see the human being, and behind that person, the search for God.</p>`
    },

    rok: 1999, // z transkrypcji nagrania (Zbigniew Strzyżyński)
    dataOdsloniecia: { pl: null, en: null },

    material: {
      pl: "głaz narzutowy, płyta odlana z brązu",
      en: "glacial boulder, plaque cast in bronze"
    },

    autorzy: {
      pl: "Stanisław Strzyżyński wspólnie z synem Zbigniewem Strzyżyńskim",
      en: "Stanisław Strzyżyński together with his son Zbigniew Strzyżyński"
    },
    wspolautorstwoWyeksponowac: true,

    lokalizacja: {
      pl: "Przy wyjściu z Parku Zdrojowego",
      en: "By an exit from the Spa Park (Park Zdrojowy)"
    },
    adres: "Wyjście z Parku Zdrojowego, 24-140 Nałęczów", // DO ZWERYFIKOWANIA — dokładny adres/nazwa ulicy

    dojazd: {
      pl: "Idąc od Alejki Strzyżyńskiego (punkt 2 tej trasy) w głąb parku, pomnik z tablicą stoi przy jednym z wyjść z Parku Zdrojowego, w kierunku kawiarni Ewelina (punkt 4).",
      en: "Walking from Strzyżyński Alley (stop 2 on this route) further into the park, the monument with the plaque stands by one of the exits from the Spa Park, towards Ewelina café (stop 4)."
    },

    wspolrzedne: [51.285452819939685, 22.212785832706324], // pomiar GPS w terenie, 2026-10-12

    media: {
      typ: "audio",
      youtubeId: "VIDEO_ID_PLACEHOLDER",
      audioSrc: "./audio/pomnik-wojtyla.mp3"
    },

    miniatura: "./img/pomnik-wojtyla-mini.svg",
    zdjecia: [
      {
        src: "./img/pomnik-wojtyla-1.svg",
        w: 800,
        h: 600,
        alt: {
          pl: "Pomnik z tablicą upamiętniającą pobyt kardynała Karola Wojtyły w Nałęczowie, przy wyjściu z Parku Zdrojowego",
          en: "A monument with a plaque commemorating Cardinal Karol Wojtyła's stays in Nałęczów, by an exit from the Spa Park"
        },
        podpis: {
          pl: "Pomnik kardynała Karola Wojtyły, głaz narzutowy, 1999",
          en: "The monument to Cardinal Karol Wojtyła, glacial boulder, 1999"
        }
      },
      {
        src: "./img/pomnik-wojtyla-2.svg",
        w: 800,
        h: 600,
        alt: {
          pl: "Zbliżenie na tablicę pamiątkową przy pomniku kardynała Karola Wojtyły",
          en: "Close-up of the commemorative plaque by the monument to Cardinal Karol Wojtyła"
        },
        podpis: {
          pl: "Treść tablicy pamiątkowej <!-- DO UZUPEŁNIENIA -->",
          en: "Text of the commemorative plaque <!-- DO UZUPEŁNIENIA -->"
        }
      }
    ],

    dostepnosc: {
      pl: "Utwardzona alejka przy wyjściu z parku, bez schodów. // DO ZWERYFIKOWANIA W TERENIE",
      en: "A paved path by the park exit, no steps. // TO VERIFY ON SITE"
    },

    opisKrotki: {
      pl: "Pomnik i tablica przypominające o pobycie kardynała Karola Wojtyły w Nałęczowie, przy jednym z wyjść z Parku Zdrojowego.",
      en: "A monument and plaque recalling Cardinal Karol Wojtyła's stays in Nałęczów, by one of the exits from the Spa Park."
    },

    opisPelny: {
      pl: [
        "Przy jednym z wyjść z Parku Zdrojowego stoi pomnik z tablicą upamiętniającą pobyt w Nałęczowie kardynała Karola Wojtyły — późniejszego papieża Jana Pawła II. Pomnik wykonał Stanisław Strzyżyński wspólnie z synem Zbigniewem. <!-- DO UZUPEŁNIENIA: dokładna data i okoliczności wizyty, treść tablicy -->",
        "Dla wielu odwiedzających to krótki przystanek na zadumę, zanim trasa prowadzi dalej, do kawiarni Ewelina. <!-- DO UZUPEŁNIENIA -->"
      ],
      en: [
        "By one of the exits from the Spa Park stands a monument with a plaque commemorating Cardinal Karol Wojtyła's stays in Nałęczów — the future Pope John Paul II. The monument was made by Stanisław Strzyżyński together with his son Zbigniew. <!-- DO UZUPEŁNIENIA: dokładna data i okoliczności wizyty, treść tablicy -->",
        "For many visitors, this is a brief stop for reflection before the route continues on to Ewelina café. <!-- DO UZUPEŁNIENIA -->"
      ]
    },

    tonPowazny: false
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = RZEZBY;
}
