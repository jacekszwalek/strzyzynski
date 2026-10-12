# Treści do uzupełnienia — lista zakupów

Ten dokument to kompletna lista wszystkiego, co trzeba dostarczyć, żeby
zamienić szkielet strony w gotową publikację. Pogrupowane po stronach.
Każdy plik wymieniony niżej ma już swój placeholder w repozytorium (SVG
z opisem dla zdjęć, cichy plik MP3 dla audio) — strona działa już teraz,
tylko z zastępczą treścią.

Jak podmienić poszczególne elementy krok po kroku opisuje `README.md`.

---

## 1. Zdjęcia — 14 sztuk

Wszystkie trafiają do katalogu `img/`. Format docelowy: WebP + JPG (ten sam
kadr w obu formatach, ta sama nazwa pliku, różne rozszerzenie) — po dodaniu
podmień w `data/rzezby.js` rozszerzenie z `.svg` na `.webp` przy odpowiednim
polu (patrz README, sekcja "Jak podmienić zdjęcie").

| Plik (placeholder) | Proporcje | Gdzie się pojawia |
|---|---|---|
| `lawka-prusa-mini.svg` | 400×300 (4:3) | miniatura na mapie, liście, kafelku strony głównej |
| `lawka-prusa-1.svg` | 800×600 (4:3) | podstrona rzeźby — pierwsze zdjęcie w opisie |
| `lawka-prusa-2.svg` | 800×600 (4:3) | podstrona rzeźby — drugie zdjęcie w opisie |
| `drzewo-genealogiczne-mini.svg` | 400×300 | miniatura |
| `drzewo-genealogiczne-1.svg` | 800×600 | zdjęcie 1 w opisie |
| `drzewo-genealogiczne-2.svg` | 800×600 | zdjęcie 2 w opisie |
| `kawiarnia-ewelina-mini.svg` | 400×300 | miniatura |
| `kawiarnia-ewelina-1.svg` | 800×600 | zdjęcie 1 w opisie |
| `kawiarnia-ewelina-2.svg` | 800×600 | zdjęcie 2 w opisie |
| `pomnik-wojtyla-mini.svg` | 400×300 | miniatura |
| `pomnik-wojtyla-1.svg` | 800×600 | zdjęcie 1 w opisie — widok całości pomnika |
| `pomnik-wojtyla-2.svg` | 800×600 | zdjęcie 2 w opisie — zbliżenie na tablicę pamiątkową |
| `stanislaw-strzyzynski-portret.svg` | 480×600 (pionowe) | biogram na stronie głównej |
| `zbigniew-strzyzynski-avatar.svg` | 200×200 (kwadrat) | podpis "Opowiada Zbigniew Strzyżyński" na każdej podstronie rzeźby |

Opcjonalnie: `og-cover.jpg` (1200×630) — obecnie wygenerowany prosty
placeholder tekstowy używany w podglądach na Facebooku/WhatsAppie. Można
podmienić na złożenie z prawdziwym zdjęciem, gdy będzie dostępne.

---

## 2. Nagrania — 4 sztuki + transkrypcje

Dla każdej rzeźby: **jedno nagranie** (wideo z YouTube **lub** plik audio MP3)
plus transkrypcja tekstowa.

| Rzeźba | Co dostarczyć |
|---|---|
| Ławeczka Bolesława Prusa | Nagranie (ID filmu YouTube → `data/rzezby.js`, pole `youtubeId`, obecnie `VIDEO_ID_PLACEHOLDER`) **lub** plik `audio/lawka-prusa.mp3` + transkrypcja |
| Drzewo genealogiczne | jw. → `audio/drzewo-genealogiczne.mp3` |
| Pomnik kardynała Karola Wojtyły | jw. → `audio/pomnik-wojtyla.mp3` |
| Panna z Rybą (kawiarnia Ewelina) | jw. → `audio/kawiarnia-ewelina.mp3` |

Transkrypcje wklejamy w `<details class="transcript">` na każdej podstronie
(obecnie placeholder `DO UZUPEŁNIENIA` / `EN TRANSLATION NEEDED`) — patrz
README, sekcja "Jak wgrać audio / wstawić film z YouTube".

---

## 3. Teksty — biogram i opisy rzeźb (szkic gotowy do redakcji)

Wszystkie poniższe miejsca są już wypełnione **roboczym szkicem** opartym na
faktach przekazanych na starcie projektu i oznaczone komentarzem
`<!-- DO UZUPEŁNIENIA -->` w miejscach wymagających dopracowania, źródeł lub
dodatkowych szczegółów. Szukaj tego komentarza w plikach `*.html` oraz
w `data/rzezby.js`.

- **Strona główna** (`index.html`) — biogram Stanisława Strzyżyńskiego,
  4 podsekcje: Młodość i wykształcenie, Nałęczów, Twórczość, Poza Nałęczowem.
- **Ławeczka Prusa** (`lawka-prusa.html`) — okoliczności powstania, fundator,
  przebieg odsłonięcia, szczegóły współpracy ojca i syna, związki Prusa
  z Nałęczowem.
- **Drzewo genealogiczne** (`drzewo-genealogiczne.html`) — okoliczności
  powstania, historia nadania nazwy alei, kontekst w twórczości artysty.
- **Panna z Rybą** (`kawiarnia-ewelina.html`) — **rok powstania i materiał
  rzeźby są nieznane i wymagają ustalenia** (obecnie `null` w danych),
  opis formy rzeźby, historia willi „Pod Matką Boską", **godziny otwarcia
  kawiarni do zweryfikowania przed publikacją**.
- **Pomnik kardynała Karola Wojtyły** (`pomnik-wojtyla.html`) — **priorytet:
  potwierdzić, czy autorem pomnika jest Stanisław Strzyżyński** (pole
  `autorzy` w `data/rzezby.js` jest obecnie `null` — jeśli to nie jego
  dzieło, warto to wyraźnie zaznaczyć w opisie, żeby nie przypisywać mu
  autorstwa). Dodatkowo: rok powstania, materiał, data i okoliczności
  pobytu kardynała w Nałęczowie, treść tablicy pamiątkowej, dokładny adres.
- **O projekcie** (`o-projekcie.html`) — rozwinięcie celu projektu, pełny
  opis roli Fundacji Dom i Sztuka, podziękowania, informacja o finansowaniu,
  lista źródeł, docelowy e-mail i telefon kontaktowy (obecnie placeholder
  `kontakt@naleczow-strzyzynski.pl` / `+48 000 000 000`).

---

## 4. Tłumaczenie na angielski

Wersja angielska (`en/`) ma już przetłumaczony cały interfejs (nawigacja,
przyciski, nagłówki), ale **treści historyczne — biogram i opisy rzeźb —
czekają na tłumacza**. W kodzie źródłowym stron (Ctrl+F / "Znajdź na
stronie") szukaj:

- `<!-- EN TRANSLATION NEEDED -->` — brakujący akapit lub zdanie,
- tekstu „Photo — caption pending translation" — brakujący opis (`alt`) zdjęcia.

Dotyczy plików: `en/index.html`, `en/lawka-prusa.html` *(oraz pozostałe
podstrony rzeźb w `en/`)*, `en/about.html`, a także pól `en` w
`data/rzezby.js` (opisy krótkie/pełne, podpisy zdjęć, dojazd, dostępność).

---

## 5. Dane do zweryfikowania w terenie

- **Współrzędne wszystkich czterech punktów** pochodzą już z pomiaru GPS
  w terenie (2026-10-12) — nie wymagają dalszej weryfikacji.
- **Autorstwo pomnika kardynała Karola Wojtyły** — patrz punkt 3 wyżej,
  to najważniejsza otwarta kwestia przed publikacją tego punktu trasy.
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
