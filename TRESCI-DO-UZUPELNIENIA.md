# Treści do uzupełnienia — lista zakupów

*Stan na 2026-10-15 — ten dokument jest aktualizowany na bieżąco, w miarę
jak przesyłane są nowe materiały. Jeśli coś z listy wygląda jako już
zrobione na stronie, a wciąż figuruje tutaj jako otwarte — to znaczy, że
dokument nie został jeszcze zaktualizowany; zgłoś to, żeby poprawić.*

Ten dokument to kompletna lista wszystkiego, co trzeba dostarczyć, żeby
zamienić szkielet strony w gotową publikację. Pogrupowane po stronach.
Każdy plik wymieniony niżej ma już swój placeholder w repozytorium (SVG
z opisem dla zdjęć, cichy plik MP3 dla audio) — strona działa już teraz,
tylko z zastępczą treścią.

Jak podmienić poszczególne elementy krok po kroku opisuje `README.md`.

---

## 1. Zdjęcia — 13 sztuk

Wszystkie trafiają do katalogu `img/`. Format docelowy: WebP + JPG (ten sam
kadr w obu formatach, ta sama nazwa pliku, różne rozszerzenie) — po dodaniu
podmień w `data/rzezby.js` rozszerzenie z `.svg` na `.webp` przy odpowiednim
polu (patrz README, sekcja "Jak podmienić zdjęcie").

| Plik (placeholder) | Proporcje | Gdzie się pojawia |
|---|---|---|
| `laweczka-prusa-mini.svg` | 400×300 (4:3) | miniatura — pineska na mapie (220×165) i kafelek na stronie głównej |
| `laweczka-prusa-1.svg` | 800×600 (4:3) | podstrona rzeźby — pierwsze zdjęcie w opisie |
| `laweczka-prusa-2.svg` | 800×600 (4:3) | podstrona rzeźby — drugie zdjęcie w opisie |
| `drzewo-genealogiczne-mini.svg` | 400×300 (4:3) | miniatura — pineska na mapie i kafelek na stronie głównej |
| `drzewo-genealogiczne-1.svg` | 800×600 (4:3) | zdjęcie 1 w opisie |
| `drzewo-genealogiczne-2.svg` | 800×600 (4:3) | zdjęcie 2 w opisie |
| `kawiarnia-ewelina-mini.svg` | 400×300 (4:3) | miniatura — pineska na mapie i kafelek na stronie głównej |
| `kawiarnia-ewelina-1.svg` | 800×600 (4:3) | zdjęcie 1 w opisie |
| `kawiarnia-ewelina-2.svg` | 800×600 (4:3) | zdjęcie 2 w opisie |
| `pomnik-wojtyla-mini.svg` | 400×300 (4:3) | miniatura — pineska na mapie i kafelek na stronie głównej |
| `pomnik-wojtyla-1.svg` | 800×600 (4:3) | zdjęcie 1 w opisie — widok całości pomnika |
| `pomnik-wojtyla-2.svg` | 800×600 (4:3) | zdjęcie 2 w opisie — zbliżenie na tablicę pamiątkową |
| `stanislaw-strzyzynski-portret.svg` | 480×600 (pionowe, 4:5) | biogram na stronie głównej |

Lista na stronie głównej/mapie (`#location-list`) jest tekstowa, bez
miniatur — nie potrzebuje więc osobnego zdjęcia.

Usunięto z listy: `zbigniew-strzyzynski-avatar.svg` (200×200) — podpis
"Opowiada Zbigniew Strzyżyński" na podstronach rzeźb jest w obecnym
designie czysto tekstowy (`.narrator-byline`, bez awatara), więc ten plik
nie jest już potrzebny.

Opcjonalnie: `og-cover.jpg` (1200×630) — obecnie wygenerowany prosty
placeholder tekstowy używany w podglądach na Facebooku/WhatsAppie. Można
podmienić na złożenie z prawdziwym zdjęciem, gdy będzie dostępne.

---

## 2. Nagrania — 3 z 4 ZROBIONE, 1 w toku

Dla każdej rzeźby: **jedno nagranie** (wideo z YouTube **lub** plik audio MP3)
plus transkrypcja tekstowa (PL + EN).

| Rzeźba | Status |
|---|---|
| Ławeczka Bolesława Prusa | **ZROBIONE** — `audio/laweczka-prusa.mp3` + transkrypcja PL/EN |
| Panna z rybą (kawiarnia Ewelina) | **ZROBIONE** — `audio/kawiarnia-ewelina.mp3` + transkrypcja PL/EN |
| Kamień papieski | **ZROBIONE** — `audio/pomnik-wojtyla.mp3` + transkrypcja PL/EN |
| Alejka Stanisława Strzyżyńskiego | **W TOKU** — wciąż potrzebne: nagranie (ID filmu YouTube → `data/rzezby.js`, pole `youtubeId`, obecnie `VIDEO_ID_PLACEHOLDER`, **lub** plik `audio/drzewo-genealogiczne.mp3`) + transkrypcja |

Transkrypcja trafia do pola `transkrypcja: { pl, en }` przy danej rzeźbie
w `data/rzezby.js` — treść nagrania bez zmian, dozwolone tylko poprawki
interpunkcji i podział na akapity. Podstrony generują się z tego pola
automatycznie, bez ręcznej edycji HTML każdej strony.

---

## 3. Teksty — biogram i opisy rzeźb (szkic gotowy do redakcji)

Wszystkie poniższe miejsca są już wypełnione **roboczym szkicem** opartym na
faktach przekazanych na starcie projektu i oznaczone komentarzem
`<!-- DO UZUPEŁNIENIA -->` w miejscach wymagających dopracowania, źródeł lub
dodatkowych szczegółów. Szukaj tego komentarza w plikach `*.html` oraz
w `data/rzezby.js`.

- **Strona główna** (`index.html`, adres `/`) — biogram Stanisława
  Strzyżyńskiego, 4 podsekcje: Młodość i wykształcenie, Nałęczów, Twórczość,
  Poza Nałęczowem.
- **Ławeczka Prusa** (`laweczka-prusa/index.html`, adres `/laweczka-prusa/`)
  — fundator, przebieg prac i szczegóły współpracy ojca i syna są już
  opisane w pełnej transkrypcji nagrania (sekcja „Transkrypcja" na
  podstronie). Krótszy opis redakcyjny (`opisPelny` w `data/rzezby.js`)
  nie został jeszcze wzbogacony tymi szczegółami oraz związkami Prusa
  z Nałęczowem — do ewentualnego uzupełnienia, ale nie blokuje publikacji.
- **Alejka Strzyżyńskiego** (`alejka-strzyzynskiego/index.html`, adres
  `/alejka-strzyzynskiego/`) — okoliczności powstania, historia nadania
  nazwy alei, kontekst w twórczości artysty. Czeka też na nagranie
  i transkrypcję (patrz sekcja 2) — po ich dostarczeniu opis będzie
  można wzbogacić podobnie jak przy innych rzeźbach.
- **Panna z rybą** (`panna-z-ryba/index.html`, adres
  `/panna-z-ryba/`) — rok powstania już potwierdzony (1979, z transkrypcji
  nagrania). **Materiał rzeźby wciąż nieznany** (`material` w danych ma
  wartość `null`) — do ustalenia. Historia willi „Pod Matką Boską" wciąż
  do uzupełnienia, **godziny otwarcia kawiarni do zweryfikowania przed
  publikacją**.
- **Kamień papieski** (`kamien-papieski/index.html`, adres
  `/kamien-papieski/`) — rok powstania, materiał i autorstwo już
  potwierdzone (transkrypcja nagrania + wiadomość właściciela
  repozytorium). Pozostaje do uzupełnienia: dokładna data i okoliczności
  pobytu kardynała w Nałęczowie, treść tablicy pamiątkowej, dokładny adres.
- **O projekcie** (`o-projekcie/index.html`, adres `/o-projekcie/`) —
  rozwinięcie celu projektu, pełny opis roli Fundacji Dom i Sztuka,
  podziękowania, informacja o finansowaniu,
  lista źródeł, nazwa i zakres projektu wspomnianego w sekcji „Część
  większego projektu". Strona nie ma już sekcji kontaktowej (usunięta
  na prośbę właściciela repozytorium).

---

## 4. Tłumaczenie na angielski — ZROBIONE (w zakresie dostępnych treści)

Interfejs (nawigacja, przyciski, nagłówki), biogram na stronie głównej,
opisy i transkrypcje rzeźb oraz strona „O projekcie" są już przetłumaczone
na angielski.

Pojedyncze `<!-- EN TRANSLATION NEEDED -->`, które wciąż można znaleźć
w kodzie (`en/about/index.html`, komentarz w nagłówku `data/rzezby.js`),
**nie oznaczają brakującego tłumaczenia** — oznaczają ten sam otwarty fakt,
który czeka na ustalenie również w wersji polskiej (patrz sekcje 3 i 5).
Przykłady: materiał rzeźby Panna z rybą, treść tablicy pamiątkowej przy
Kamieniu papieskim, podziękowania i informacje o finansowaniu na stronie
„O projekcie". Gdy taki fakt zostanie dostarczony po polsku, wersję
angielską warto dopisać przy tej samej okazji.

Jedyny realny wyjątek: **Alejka Stanisława Strzyżyńskiego** nie ma jeszcze
żadnego nagrania ani transkrypcji (patrz sekcja 2) — więc nie ma też czego
tłumaczyć, dopóki polski tekst nie powstanie.

---

## 5. Dane do zweryfikowania w terenie

- **Współrzędne wszystkich czterech punktów** pochodzą już z pomiaru GPS
  w terenie (2026-10-12) — nie wymagają dalszej weryfikacji.
- **Autorstwo pomnika kardynała Karola Wojtyły** — potwierdzone: Stanisław
  Strzyżyński wspólnie z synem Zbigniewem Strzyżyńskim.
- **Opisy dostępności** (`dostepnosc`) przy wszystkich czterech punktach —
  nawierzchnia, schody, ławki, dojazd wózkiem — obecne opisy to szkic do
  potwierdzenia na miejscu.
- **Godziny otwarcia kawiarni Ewelina** — przed publikacją.

---

## 6. Adresy po wdrożeniu na GitHub Pages — ZROBIONE

Strona jest opublikowana pod `https://jacekszwalek.github.io/strzyzynski/`.
Adres jest już wpisany w `qr/base-url.js`, `sitemap.xml` i `robots.txt`.

---

## 7. Logotypy partnerów

Na stronie „O projekcie" są trzy puste miejsca na logotypy (`.partner-logo-slot`).
Podmień je na obrazy, gdy będą znane nazwy partnerów/finansujących.
