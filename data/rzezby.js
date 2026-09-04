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
 * Współrzędne oznaczone komentarzem "ZWERYFIKOWAĆ W TERENIE" są przybliżone
 * (namierzone zdalnie) i wymagają potwierdzenia telefonem na miejscu przed
 * drukiem tabliczek QR.
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

    slug: { pl: "lawka-prusa.html", en: "prus-bench.html" },

    tytul: {
      pl: "Ławeczka Bolesława Prusa",
      en: "Bolesław Prus Bench (Ławeczka Bolesława Prusa)"
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
      pl: "Wejdź do Parku Zdrojowego od strony Pałacu Małachowskich. Ławeczka stoi przy głównej alejce, w pobliżu stawu i pijalni wód, bardzo blisko Drzewa genealogicznego (punkt 2 tej trasy). Uwaga: w parku stoją dwa pomniki Bolesława Prusa — popiersie oraz ta ławeczka z siedzącą postacią — łatwo je pomylić.",
      en: "<!-- EN TRANSLATION NEEDED -->"
    },

    wspolrzedne: [51.2869847, 22.2084325], // ZWERYFIKOWAĆ W TERENIE — w parku stoją dwa pomniki Prusa, Google zwraca zbliżony punkt

    media: {
      typ: "video",
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

    slug: { pl: "drzewo-genealogiczne.html", en: "genealogy-tree.html" },

    tytul: {
      pl: "Drzewo genealogiczne",
      en: "Genealogical Tree (Drzewo genealogiczne)"
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

    wspolrzedne: [51.286975, 22.2109281],

    media: {
      typ: "video",
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
    nrTrasy: 3,

    slug: { pl: "kawiarnia-ewelina.html", en: "ewelina-cafe.html" },

    tytul: {
      pl: "Panna z Rybą",
      en: "The Girl with a Fish (Panna z Rybą)"
    },

    rok: null, // DO UZUPEŁNIENIA — rok powstania nieustalony
    dataOdsloniecia: { pl: null, en: null },

    material: { pl: null, en: null }, // DO UZUPEŁNIENIA — materiał nieustalony

    autorzy: {
      pl: "Stanisław Strzyżyński",
      en: "Stanisław Strzyżyński"
    },
    wspolautorstwoWyeksponowac: false,

    lokalizacja: {
      pl: "Fontanna przed willą „Pod Matką Boską”, w której mieści się kawiarnia Ewelina",
      en: "Fountain in front of the \"Pod Matką Boską\" villa (\"Under the Mother of God\"), home to the Ewelina café"
    },
    adres: "ul. Lipowa 16, 24-140 Nałęczów",

    dojazd: {
      pl: "Z Parku Zdrojowego kieruj się w stronę ulicy Lipowej. Willa „Pod Matką Boską” z kawiarnią Ewelina i fontanną z rzeźbą stoi pod numerem 16.",
      en: "<!-- EN TRANSLATION NEEDED -->"
    },

    wspolrzedne: [51.2852147, 22.2182552], // ZWERYFIKOWAĆ

    infoPraktyczne: {
      pl: "To jedyny punkt trasy z kawą, toaletą i miejscem do siedzenia. Kawiarnia Ewelina czynna codziennie 10:00–21:00 // GODZINY DO ZWERYFIKOWANIA PRZED PUBLIKACJĄ",
      en: "<!-- EN TRANSLATION NEEDED -->"
    },

    media: {
      typ: "video",
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
    id: "pomnik-ak",
    nrTrasy: 4,

    slug: { pl: "pomnik-ak.html", en: "ak-monument.html" },

    tytul: {
      pl: "Pomnik żołnierzy Armii Krajowej",
      en: "Home Army Soldiers Monument (Pomnik żołnierzy Armii Krajowej)"
    },

    rok: 1996,
    dataOdsloniecia: {
      pl: "19 maja 1996, wraz z mszą polową",
      en: "<!-- EN TRANSLATION NEEDED -->"
    },

    material: { pl: "granit", en: "granite" },

    autorzy: {
      pl: "projekt: Stanisław Strzyżyński; wykonanie: Jan Dudek",
      en: "<!-- EN TRANSLATION NEEDED -->"
    },
    wspolautorstwoWyeksponowac: false,

    lokalizacja: {
      pl: "Skraj Lasu Zakładowego, tzw. polana harcerska",
      en: "Edge of the Zakładowy Forest (Las Zakładowy), the so-called \"scouts' clearing\" (polana harcerska)"
    },
    adres: "ul. Harcerska 10, 24-140 Nałęczów",

    dojazd: {
      pl: "Ok. 0,5 km na południe od centrum ulicą Powstańców 1863 roku. Za mostkiem skręć ok. 200 m w prawo w ulicę Harcerską — pomnik stoi na skraju Lasu Zakładowego, na tzw. polanie harcerskiej.",
      en: "<!-- EN TRANSLATION NEEDED -->"
    },

    wspolrzedne: [51.2814658, 22.2130420],

    media: {
      typ: "video",
      youtubeId: "VIDEO_ID_PLACEHOLDER",
      audioSrc: "./audio/pomnik-ak.mp3"
    },

    miniatura: "./img/pomnik-ak-mini.svg",
    zdjecia: [
      {
        src: "./img/pomnik-ak-1.svg",
        w: 800,
        h: 600,
        alt: {
          pl: "Pomnik żołnierzy Armii Krajowej — krzyż z bloków granitowych na polanie harcerskiej w Nałęczowie",
          en: "<!-- EN TRANSLATION NEEDED -->"
        },
        podpis: {
          pl: "Pomnik żołnierzy AK, granit, 1996 <!-- DO UZUPEŁNIENIA -->",
          en: "<!-- EN TRANSLATION NEEDED -->"
        }
      },
      {
        src: "./img/pomnik-ak-2.svg",
        w: 800,
        h: 600,
        alt: {
          pl: "Zbliżenie na wizerunki orła i kotwicy — symbolu Polski Walczącej — na pomniku AK",
          en: "<!-- EN TRANSLATION NEEDED -->"
        },
        podpis: {
          pl: "Symbole orła i kotwicy Polski Walczącej <!-- DO UZUPEŁNIENIA -->",
          en: "<!-- EN TRANSLATION NEEDED -->"
        }
      }
    ],

    dostepnosc: {
      pl: "Leśna, częściowo nieutwardzona ścieżka; teren nierówny, niedostosowany dla wózków. W pobliżu pomnika ławki. // DO ZWERYFIKOWANIA W TERENIE",
      en: "<!-- EN TRANSLATION NEEDED -->"
    },

    opisKrotki: {
      pl: "Granitowy krzyż z wizerunkami orła i kotwicy, upamiętniający żołnierzy oddziału „Szatana” rozbitego przez NKWD w maju 1945 roku. Miejsce pamięci.",
      en: "<!-- EN TRANSLATION NEEDED -->"
    },

    opisPelny: {
      pl: [
        "Pomnik odsłonięto 19 maja 1996 roku wraz z mszą polową. Ma formę krzyża złożonego z bloków granitowych, z wyrzeźbionymi wizerunkami orła i kotwicy — symbolu Polski Walczącej. Projekt wykonał Stanisław Strzyżyński, realizację — Jan Dudek.",
        "Pomnik upamiętnia żołnierzy oddziału „Szatana” (Tadeusza Orłowskiego), rozbitego 19 maja 1945 roku przez oddział NKWD podczas odwrotu spod Nałęczowa. Zginęło wówczas 17 osób — wśród nich ranni, dobici przez sowietów. Pochowano ich na cmentarzu w Nałęczowie. Była to najkrwawsza partyzancka walka stoczona w okolicach Nałęczowa. <!-- DO UZUPEŁNIENIA: dalsze szczegóły wydarzeń z 19 maja 1945, źródła historyczne do zacytowania -->",
        "To miejsce pamięci, nie atrakcja turystyczna — prosimy o zachowanie powagi podczas odwiedzin."
      ],
      en: ["<!-- EN TRANSLATION NEEDED -->"]
    },

    tonPowazny: true
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = RZEZBY;
}
