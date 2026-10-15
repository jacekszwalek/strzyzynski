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
| `panna-z-ryba-mini.svg` | 400×300 (4:3) | miniatura — pineska na mapie i kafelek na stronie głównej |
| `panna-z-ryba-1.svg` | 800×600 (4:3) | zdjęcie 1 w opisie |
| `panna-z-ryba-2.svg` | 800×600 (4:3) | zdjęcie 2 w opisie |
| `kamien-papieski-mini.svg` | 400×300 (4:3) | miniatura — pineska na mapie i kafelek na stronie głównej |
| `kamien-papieski-1.svg` | 800×600 (4:3) | zdjęcie 1 w opisie — widok całości pomnika |
| `kamien-papieski-2.svg` | 800×600 (4:3) | zdjęcie 2 w opisie — zbliżenie na tablicę pamiątkową |
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

## 2. Nagrania

### 2a. Film wprowadzający na stronie startowej — DO DOSTARCZENIA

Decyzja: podstrony poszczególnych rzeźb mają **tylko pliki audio**
(self-hosted, w katalogu `audio/`), bez wideo. Jedyne wideo na całej
witrynie to **film wprowadzający na stronie startowej** (`index.html` /
`en/index.html`, sekcja `.video-wrap`) — ten film jeszcze nie istnieje,
obecnie wyświetla się placeholder `VIDEO_ID_PLACEHOLDER`.

Ten film **będzie z YouTube** (tak jak obecna sekcja `.video-wrap` już to
zakłada — osadzenie przez `<iframe>` z `youtube-nocookie.com`). Do
dostarczenia: nagranie wprowadzające do wirtualnego spaceru, wgrane na
YouTube. Po dostarczeniu podmień `VIDEO_ID_PLACEHOLDER` na właściwy
identyfikator filmu w obu plikach (`index.html` i `en/index.html`) —
sposób pozyskania identyfikatora opisuje README, sekcja 4 ("Jak wstawić
film z YouTube"), kroki 1–2; różnica jest tylko taka, że tu podmieniamy
identyfikator bezpośrednio w `index.html`/`en/index.html`, a nie w polu
`media` konkretnej rzeźby w `data/rzezby.js`.

### 2b. Nagrania przy rzeźbach — audio, 3 z 4 ZROBIONE, 1 w toku

Dla każdej rzeźby: **plik audio MP3** plus transkrypcja tekstowa (PL + EN).

| Rzeźba | Status |
|---|---|
| Ławeczka Bolesława Prusa | **ZROBIONE** — `audio/laweczka-prusa.mp3` + transkrypcja PL/EN |
| Panna z rybą (kawiarnia Ewelina) | **ZROBIONE** — `audio/panna-z-ryba.mp3` + transkrypcja PL/EN |
| Kamień papieski | **ZROBIONE** — `audio/kamien-papieski.mp3` + transkrypcja PL/EN |
| Alejka Stanisława Strzyżyńskiego | **W TOKU** — wciąż potrzebny plik `audio/drzewo-genealogiczne.mp3` + transkrypcja |

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
  Strzyżyńskiego. Do dostarczenia (opcjonalnie, nie blokuje publikacji):
  - dodatkowe fakty z okresu studiów,
  - szczegóły okoliczności przeprowadzki do Nałęczowa,
  - pełny wykaz najważniejszych realizacji,
  - więcej kontekstu wokół konkursu na Pomnik Walki i Męczeństwa na Majdanku.
- **Ławeczka Prusa** (`laweczka-prusa/index.html`, adres `/laweczka-prusa/`)
  — fundator, przebieg prac i szczegóły współpracy ojca i syna są już
  opisane w pełnej transkrypcji nagrania (sekcja „Transkrypcja" na
  podstronie). Do dostarczenia (opcjonalnie, nie blokuje publikacji):
  - wzbogacenie krótszego opisu redakcyjnego (`opisPelny` w
    `data/rzezby.js`) tymi samymi szczegółami,
  - związki Prusa z Nałęczowem, kontekst literacki.
- **Panna z rybą** (`panna-z-ryba/index.html`, adres `/panna-z-ryba/`) —
  rok powstania już potwierdzony (1979, z transkrypcji nagrania). Do
  dostarczenia:
  - **priorytet: ogólnodostępny numer telefonu** — transkrypcja nagrania
    (sekcja „Transkrypcja" na tej podstronie, PL i EN) zaprasza do
    kontaktu telefonicznego w celu umówienia wizyty w pracowni
    („Zapraszam do kontaktu telefonicznego i umówienia wizyty"), ale na
    stronie nigdzie nie podano numeru. Trzeba go umieścić w widocznym
    miejscu na tej podstronie (np. przy transkrypcji albo w sekcji
    „Informacje praktyczne") — w obu wersjach językowych,
  - materiał rzeźby (`material` w danych ma wartość `null`) — nieznany,
  - historia willi „Pod Matką Boską",
  - godziny otwarcia kawiarni Ewelina — do zweryfikowania przed
    publikacją.
- **Kamień papieski** (`kamien-papieski/index.html`, adres
  `/kamien-papieski/`) — rok powstania, materiał i autorstwo już
  potwierdzone (transkrypcja nagrania + wiadomość właściciela
  repozytorium). Do dostarczenia:
  - dokładna data i okoliczności pobytu kardynała w Nałęczowie,
  - treść tablicy pamiątkowej,
  - dokładny adres.
- **O projekcie** (`o-projekcie/index.html`, adres `/o-projekcie/`) — do
  dostarczenia:
  - rozwinięcie celu projektu,
  - pełny opis roli Fundacji Dom i Sztuka,
  - podziękowania,
  - informacja o finansowaniu,
  - lista źródeł,
  - nazwa i zakres projektu wspomnianego w sekcji „Część większego
    projektu".

  (Strona nie ma już sekcji kontaktowej — usunięta na prośbę właściciela
  repozytorium.)
- **Alejka Strzyżyńskiego** (`alejka-strzyzynskiego/index.html`, adres
  `/alejka-strzyzynskiego/`) — do dostarczenia:
  - okoliczności powstania rzeźby,
  - historia nadania nazwy alei,
  - kontekst w twórczości artysty.

  Czeka też na nagranie i transkrypcję (patrz sekcja 2) — po ich
  dostarczeniu opis będzie można wzbogacić podobnie jak przy innych
  rzeźbach.
- **Decyzja (nie materiał do dostarczenia) — nazewnictwo przystanku nr 2:**
  potrzebne potwierdzenie, jak ma być prezentowana Alejka Strzyżyńskiego —
  jako "Alejka Stanisława Strzyżyńskiego" czy jako "Drzewo genealogiczne"?
  Obecnie: nazwa krótka (menu/kafelki) to "Alejka Strzyżyńskiego", nazwa
  długa (tytuł podstrony) to "Alejka Stanisława Strzyżyńskiego - rzeźba
  Drzewo genealogiczne". Jacek: uważa, że atrakcją jest rzeźba, a nie sama
  alejka — do rozważenia zamiana akcentu (np. krótka nazwa "Drzewo
  genealogiczne", długa z alejką jako kontekstem, albo odwrotnie).
  Potrzebne są **obie wersje nazwy**: krótka (do menu) i długa (na
  podstronę, `<title>`/`<h1>`) — w PL i EN. **Tę decyzję trzeba podjąć
  teraz, przed ustaleniem adresów i wydrukiem kodów QR — później nie
  powinno się już tego zmieniać.**

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

- **Współrzędne wszystkich czterech punktów** (pole `wspolrzedne` w
  `data/rzezby.js`) zostały na razie tylko **odczytane z mapy** —
  **konieczne jest potwierdzenie na żywo, w terenie**, przed wydrukiem
  kodów QR.
- **Materiał rzeźby Panna z rybą** — brak informacji (`material` w danych
  ma wartość `null`). Do ustalenia, najpewniej przez obejrzenie rzeźby na
  miejscu (patrz też sekcja 3).
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
