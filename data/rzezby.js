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
    id: "lawka-prusa",
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

    rok: 2002,
    dataOdsloniecia: {
      pl: "niedziela, 20 października 2002 — w 120. rocznicę pierwszego przyjazdu Bolesława Prusa do Nałęczowa",
      en: "<!-- EN TRANSLATION NEEDED -->"
    },

    material: { pl: "brąz", en: "bronze" },

    autorzy: {
      pl: "Stanisław Strzyżyński wspólnie z synem Zbigniewem Strzyżyńskim (ur. 1955 w Nałęczowie)",
      en: "<!-- EN TRANSLATION NEEDED -->"
    },
    wspolautorstwoWyeksponowac: true,

    lokalizacja: {
      pl: "Park Zdrojowy, przy Pałacu Małachowskich",
      en: "Spa Park (Park Zdrojowy), by the Małachowski Palace (Pałac Małachowskich)"
    },
    adres: "Aleja St. Małachowskiego 3, 24-140 Nałęczów",

    dojazd: {
      pl: "Wejdź do Parku Zdrojowego od strony Pałacu Małachowskich. Ławeczka stoi przy głównej alejce, w pobliżu stawu i pijalni wód, bardzo blisko Alejki Strzyżyńskiego (punkt 2 tej trasy). Uwaga: w parku stoją dwa pomniki Bolesława Prusa — popiersie oraz ta ławeczka z siedzącą postacią — łatwo je pomylić.",
      en: "<!-- EN TRANSLATION NEEDED -->"
    },

    wspolrzedne: [51.2870007258462, 22.208436990572082], // pomiar GPS w terenie, 2026-10-12

    media: {
      typ: "audio",
      youtubeId: "VIDEO_ID_PLACEHOLDER",
      audioSrc: "./audio/lawka-prusa.mp3"
    },

    miniatura: "./img/lawka-prusa-mini.svg",
    zdjecia: [
      {
        src: "./img/lawka-prusa-1.svg",
        w: 800,
        h: 600,
        alt: {
          pl: "Ławeczka Bolesława Prusa w Parku Zdrojowym w Nałęczowie — siedząca postać pisarza w meloniku",
          en: "<!-- EN TRANSLATION NEEDED -->"
        },
        podpis: {
          pl: "Ławeczka Bolesława Prusa, brąz, 2002 <!-- DO UZUPEŁNIENIA: podpis fotografa/źródło -->",
          en: "<!-- EN TRANSLATION NEEDED -->"
        }
      },
      {
        src: "./img/lawka-prusa-2.svg",
        w: 800,
        h: 600,
        alt: {
          pl: "Zbliżenie na dłoń Bolesława Prusa opartą na książce",
          en: "<!-- EN TRANSLATION NEEDED -->"
        },
        podpis: {
          pl: "Detal rzeźby — dłoń na książce <!-- DO UZUPEŁNIENIA -->",
          en: "<!-- EN TRANSLATION NEEDED -->"
        }
      }
    ],

    dostepnosc: {
      pl: "Utwardzona alejka parkowa, bez schodów. W pobliżu ławki do odpoczynku. // DO ZWERYFIKOWANIA W TERENIE",
      en: "<!-- EN TRANSLATION NEEDED -->"
    },

    opisKrotki: {
      pl: "Siedząca postać pisarza w meloniku, z dłonią opartą na książce — jedyne dzieło na trasie, które Stanisław Strzyżyński stworzył wspólnie z synem Zbigniewem.",
      en: "<!-- EN TRANSLATION NEEDED -->"
    },

    opisPelny: {
      pl: [
        "Ławeczka Bolesława Prusa stanęła w Parku Zdrojowym w niedzielę 20 października 2002 roku, w 120. rocznicę pierwszego przyjazdu pisarza do Nałęczowa. Brązowa figura przedstawia siedzącego Prusa w charakterystycznym meloniku, z dłonią spoczywającą na książce — jakby na chwilę przerwał lekturę, by odpocząć w cieniu parkowych alei. <!-- DO UZUPEŁNIENIA: okoliczności powstania, fundator, przebieg odsłonięcia -->",
        "To jedyne dzieło na tej trasie, które Stanisław Strzyżyński wykonał wspólnie z synem Zbigniewem Strzyżyńskim, urodzonym w Nałęczowie w 1955 roku — tym samym, który opowiada o ojcu i jego twórczości w nagraniach towarzyszących temu spacerowi. Słuchając jego głosu przy tej rzeźbie, słyszymy więc relację nie tylko syna, ale i współtwórcy. <!-- DO UZUPEŁNIENIA: szczegóły współpracy ojca i syna przy tej realizacji -->",
        "W parku znajdują się dwa upamiętnienia Bolesława Prusa — popiersie oraz ta ławeczka. Nałęczów odwiedzał pisarz wielokrotnie, a uzdrowisko wywarło wpływ na jego twórczość. <!-- DO UZUPEŁNIENIA: związki Prusa z Nałęczowem, kontekst literacki -->"
      ],
      en: ["<!-- EN TRANSLATION NEEDED -->"]
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
      pl: "Alejka Stanisława Strzyżyńskiego",
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
      en: "<!-- EN TRANSLATION NEEDED -->"
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
          en: "<!-- EN TRANSLATION NEEDED -->"
        },
        podpis: {
          pl: "Drzewo genealogiczne, sztuczny kamień, 1977 <!-- DO UZUPEŁNIENIA -->",
          en: "<!-- EN TRANSLATION NEEDED -->"
        }
      },
      {
        src: "./img/drzewo-genealogiczne-2.svg",
        w: 800,
        h: 600,
        alt: {
          pl: "Zbliżenie na fakturę rzeźby Drzewo genealogiczne",
          en: "<!-- EN TRANSLATION NEEDED -->"
        },
        podpis: {
          pl: "Detal faktury sztucznego kamienia <!-- DO UZUPEŁNIENIA -->",
          en: "<!-- EN TRANSLATION NEEDED -->"
        }
      }
    ],

    dostepnosc: {
      pl: "Utwardzona alejka parkowa, teren płaski, bez schodów. // DO ZWERYFIKOWANIA W TERENIE",
      en: "<!-- EN TRANSLATION NEEDED -->"
    },

    opisKrotki: {
      pl: "Abstrakcyjna, organiczna forma stylizowana na drzewo — symbol więzów rodzinnych i ciągłości pokoleń, w alei noszącej imię artysty.",
      en: "<!-- EN TRANSLATION NEEDED -->"
    },

    opisPelny: {
      pl: [
        "Drzewo genealogiczne to abstrakcyjna, organiczna forma rzeźbiarska powstała w 1977 roku, wykonana ze sztucznego kamienia. Rozgałęziający się kształt przywołuje na myśl konar drzewa i jest odczytywany jako symbol więzów rodzinnych, ciągłości pokoleń i splatających się ludzkich losów. <!-- DO UZUPEŁNIENIA: okoliczności powstania, symbolika w interpretacji autora -->",
        "Rzeźba stoi w Alei Stanisława Strzyżyńskiego w Parku Zdrojowym — alei, która nosi imię samego artysty. To szczególny, rzadko spotykany zbieg okoliczności: twórca spaceruje po parku razem z odwiedzającymi, obecny nie tylko w swoich dziełach, ale i w nazwie miejsca. <!-- DO UZUPEŁNIENIA: historia nadania nazwy alei -->",
        "Forma dzieła pozostaje otwarta na interpretację — dla jednych to genealogiczne drzewo rodu, dla innych uniwersalny symbol wzrostu i wzajemnych powiązań. <!-- DO UZUPEŁNIENIA: kontekst w twórczości Strzyżyńskiego, ewentualne inne realizacje o podobnej tematyce -->"
      ],
      en: ["<!-- EN TRANSLATION NEEDED -->"]
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
      pl: "Panna z rybą przy Kawiarni Ewelina",
      en: "The Maiden with a Fish at Ewelina Café"
    },

    rok: null, // DO UZUPEŁNIENIA — rok powstania rzeźby Panna z Rybą nieustalony
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
      en: "<!-- EN TRANSLATION NEEDED -->"
    },

    wspolrzedne: [51.28521977620118, 22.218260265804872], // pomiar GPS w terenie, 2026-10-12

    infoPraktyczne: {
      pl: "To jedyny punkt trasy z kawą, toaletą i miejscem do siedzenia. Kawiarnia Ewelina czynna codziennie 10:00–21:00 // GODZINY DO ZWERYFIKOWANIA PRZED PUBLIKACJĄ",
      en: "<!-- EN TRANSLATION NEEDED -->"
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
          en: "<!-- EN TRANSLATION NEEDED -->"
        },
        podpis: {
          pl: "Panna z Rybą w fontannie przed kawiarnią Ewelina <!-- DO UZUPEŁNIENIA -->",
          en: "<!-- EN TRANSLATION NEEDED -->"
        }
      },
      {
        src: "./img/kawiarnia-ewelina-2.svg",
        w: 800,
        h: 600,
        alt: {
          pl: "Ogródek kawiarni Ewelina przed willą Pod Matką Boską",
          en: "<!-- EN TRANSLATION NEEDED -->"
        },
        podpis: {
          pl: "Kawiarnia Ewelina, ul. Lipowa 16 <!-- DO UZUPEŁNIENIA -->",
          en: "<!-- EN TRANSLATION NEEDED -->"
        }
      }
    ],

    dostepnosc: {
      pl: "Teren przed willą częściowo utwardzony. Kawiarnia oferuje miejsca siedzące i toaletę wewnątrz budynku. // DO ZWERYFIKOWANIA W TERENIE",
      en: "<!-- EN TRANSLATION NEEDED -->"
    },

    opisKrotki: {
      pl: "Rzeźba w fontannie przed willą „Pod Matką Boską” — i jedyny przystanek na trasie z kawą, toaletą i miejscem do odpoczynku.",
      en: "<!-- EN TRANSLATION NEEDED -->"
    },

    opisPelny: {
      pl: [
        "Panna z Rybą to rzeźba osadzona w fontannie przed willą „Pod Matką Boską” przy ulicy Lipowej 16, w której dziś mieści się kawiarnia Ewelina. <!-- DO UZUPEŁNIENIA: rok powstania, materiał, okoliczności powstania, opis formy rzeźby -->",
        "To jedyny punkt tej trasy, przy którym można usiąść, wypić kawę i skorzystać z toalety — dla starszych odwiedzających to praktyczna informacja, nie tylko ciekawostka. Kawiarnia Ewelina jest czynna codziennie. <!-- GODZINY OTWARCIA DO ZWERYFIKOWANIA PRZED PUBLIKACJĄ -->",
        "<!-- DO UZUPEŁNIENIA: historia willi „Pod Matką Boską”, jej rola w uzdrowiskowej zabudowie Nałęczowa -->"
      ],
      en: ["<!-- EN TRANSLATION NEEDED -->"]
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
    // i na kafelkach zostaje krótkie "Kamień papieski" (pole tytul) — tu
    // identyczny, bo ta nazwa nie ma dłuższej/krótszej wersji.
    tytulStrony: {
      pl: "Kamień papieski",
      en: "Papal Stone"
    },

    rok: null, // DO UZUPEŁNIENIA — rok powstania nieustalony
    dataOdsloniecia: { pl: null, en: null },

    material: { pl: null, en: null }, // DO UZUPEŁNIENIA — materiał nieustalony

    autorzy: {
      pl: null, // DO USTALENIA — czy autorem jest Stanisław Strzyżyński, do potwierdzenia przed publikacją
      en: null
    },
    wspolautorstwoWyeksponowac: false,

    lokalizacja: {
      pl: "Przy wyjściu z Parku Zdrojowego",
      en: "By an exit from the Spa Park (Park Zdrojowy)"
    },
    adres: "Wyjście z Parku Zdrojowego, 24-140 Nałęczów", // DO ZWERYFIKOWANIA — dokładny adres/nazwa ulicy

    dojazd: {
      pl: "Idąc od Alejki Strzyżyńskiego (punkt 2 tej trasy) w głąb parku, pomnik z tablicą stoi przy jednym z wyjść z Parku Zdrojowego, w kierunku kawiarni Ewelina (punkt 4).",
      en: "<!-- EN TRANSLATION NEEDED -->"
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
          en: "<!-- EN TRANSLATION NEEDED -->"
        },
        podpis: {
          pl: "Pomnik kardynała Karola Wojtyły <!-- DO UZUPEŁNIENIA: rok, materiał, autor -->",
          en: "<!-- EN TRANSLATION NEEDED -->"
        }
      },
      {
        src: "./img/pomnik-wojtyla-2.svg",
        w: 800,
        h: 600,
        alt: {
          pl: "Zbliżenie na tablicę pamiątkową przy pomniku kardynała Karola Wojtyły",
          en: "<!-- EN TRANSLATION NEEDED -->"
        },
        podpis: {
          pl: "Treść tablicy pamiątkowej <!-- DO UZUPEŁNIENIA -->",
          en: "<!-- EN TRANSLATION NEEDED -->"
        }
      }
    ],

    dostepnosc: {
      pl: "Utwardzona alejka przy wyjściu z parku, bez schodów. // DO ZWERYFIKOWANIA W TERENIE",
      en: "<!-- EN TRANSLATION NEEDED -->"
    },

    opisKrotki: {
      pl: "Pomnik i tablica przypominające o pobycie kardynała Karola Wojtyły w Nałęczowie, przy jednym z wyjść z Parku Zdrojowego.",
      en: "<!-- EN TRANSLATION NEEDED -->"
    },

    opisPelny: {
      pl: [
        "Przy jednym z wyjść z Parku Zdrojowego stoi pomnik z tablicą upamiętniającą pobyt w Nałęczowie kardynała Karola Wojtyły — późniejszego papieża Jana Pawła II. <!-- DO UZUPEŁNIENIA: data i okoliczności wizyty, treść tablicy, rok powstania pomnika -->",
        "<!-- DO UZUPEŁNIENIA: czy pomnik jest dziełem Stanisława Strzyżyńskiego — do potwierdzenia przed publikacją; jeśli nie, dostosować opis tak, by nie przypisywać mu autorstwa -->",
        "Dla wielu odwiedzających to krótki przystanek na zadumę, zanim trasa prowadzi dalej, do kawiarni Ewelina. <!-- DO UZUPEŁNIENIA -->"
      ],
      en: ["<!-- EN TRANSLATION NEEDED -->"]
    },

    tonPowazny: false
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = RZEZBY;
}
