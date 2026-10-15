# Treści do uzupełnienia

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

## 1. Zdjęcia — 14 sztuk

Wszystkie trafiają do katalogu `img/`. Format docelowy: WebP + JPG (ten sam
kadr w obu formatach, ta sama nazwa pliku, różne rozszerzenie) — po dodaniu
podmień w `data/rzezby.js` rozszerzenie z `.svg` na `.webp` przy odpowiednim
polu (patrz README, sekcja "Jak podmienić zdjęcie"). Wyjątek: awatar
Zbigniewa (`zbigniew-strzyzynski-avatar.png`) to PNG z przezroczystym tłem
poza kołem — ta sama zasada formatu nie ma tu zastosowania.

| Plik (placeholder) | Proporcje | Gdzie się pojawia |
|---|---|---|
| `laweczka-prusa-mini.svg` | 400×300 (4:3) | miniatura — pineska na mapie (220×165) i kafelek na stronie głównej |
| `laweczka-prusa-1.svg` | 800×600 (4:3) | podstrona rzeźby — pierwsze zdjęcie w opisie |
| `laweczka-prusa-2.svg` | 800×600 (4:3) | podstrona rzeźby — drugie zdjęcie w opisie |
| `alejka-strzyzynskiego-mini.svg` | 400×300 (4:3) | miniatura — pineska na mapie i kafelek na stronie głównej |
| `alejka-strzyzynskiego-1.svg` | 800×600 (4:3) | zdjęcie 1 w opisie |
| `alejka-strzyzynskiego-2.svg` | 800×600 (4:3) | zdjęcie 2 w opisie |
| `panna-z-ryba-mini.svg` | 400×300 (4:3) | miniatura — pineska na mapie i kafelek na stronie głównej |
| `panna-z-ryba-1.svg` | 800×600 (4:3) | zdjęcie 1 w opisie |
| `panna-z-ryba-2.svg` | 800×600 (4:3) | zdjęcie 2 w opisie |
| `kamien-papieski-mini.svg` | 400×300 (4:3) | miniatura — pineska na mapie i kafelek na stronie głównej |
| `kamien-papieski-1.svg` | 800×600 (4:3) | zdjęcie 1 w opisie — widok całości pomnika |
| `kamien-papieski-2.svg` | 800×600 (4:3) | zdjęcie 2 w opisie — zbliżenie na tablicę pamiątkową |
| `stanislaw-strzyzynski-portret.svg` | 480×600 (pionowe, 4:5) | biogram na stronie głównej |
| `zbigniew-strzyzynski-avatar.png` | 200×200 (okrągłe, biała obwódka, przezroczyste tło poza kołem) | podpis „Opowiada Zbigniew Strzyżyński" na każdej podstronie rzeźby — widoczny tylko w widoku desktopowym, na mobile zostaje czysty tekst. **Obecne zdjęcie to zbliżenie na twarz z dostarczonego zdjęcia przykładowego — nie jest to prawdziwe zdjęcie Zbigniewa Strzyżyńskiego — do podmiany na prawdziwe, docelowe zdjęcie.** |

Lista na stronie głównej/mapie (`#location-list`, lista rzeźb pod mapą)
jest tekstowa, bez miniatur — nie potrzebuje więc osobnego zdjęcia.

Opcjonalnie: `og-cover.jpg` (1200×630) — to duże zdjęcie, które pojawia
się automatycznie, gdy ktoś wklei link do tej strony w Messengerze,
WhatsAppie, Facebooku czy na X/Twitterze — razem z tytułem i krótkim
opisem, jako podgląd tego, co kryje się pod linkiem (tak jak przy
wklejaniu linku do artykułu czy filmu). Obecnie jest to prosty,
wygenerowany placeholder z samym tekstem. Można podmienić na złożenie
z prawdziwym zdjęciem (np. kolaż kilku rzeźb), gdy będzie dostępne —
ale strona działa poprawnie i bez tego.

---

## 2. Nagrania

### 2a. Film wprowadzający na stronie startowej — DO DOSTARCZENIA

Decyzja: podstrony poszczególnych rzeźb mają tylko pliki audio, bez wideo.
Jedyne wideo na całej witrynie to film wprowadzający na stronie startowej
— ten film jeszcze nie istnieje. Będzie osadzony z YouTube.

Do dostarczenia: nagranie wprowadzające do wirtualnego spaceru, wgrane na
YouTube.

### 2b. Nagrania przy rzeźbach — audio, 3 z 4 ZROBIONE, 1 w toku

Dla każdej rzeźby: plik audio MP3 plus transkrypcja tekstowa (PL + EN).

| Rzeźba | Status |
|---|---|
| Ławeczka Bolesława Prusa | **ZROBIONE** |
| Panna z rybą (kawiarnia Ewelina) | **ZROBIONE** |
| Kamień papieski | **ZROBIONE** |
| Alejka Stanisława Strzyżyńskiego | **W TOKU** — wciąż potrzebne nagranie i transkrypcja |

Treść transkrypcji wpisujemy bez zmian w stosunku do nagrania — dozwolone
są tylko poprawki interpunkcji i podział na akapity.

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
- **Alejka Stanisława Strzyżyńskiego / Drzewo genealogiczne**
  (`alejka-strzyzynskiego/index.html`, adres `/alejka-strzyzynskiego/`) —
  do dostarczenia:
  - okoliczności powstania rzeźby,
  - historia nadania nazwy alei,
  - kontekst w twórczości artysty,
  - nagranie i transkrypcja (patrz sekcja 2) — po ich dostarczeniu opis
    będzie można wzbogacić podobnie jak przy innych rzeźbach,
  - **decyzja (nie materiał do dostarczenia) — nazewnictwo tego
    przystanku:** potrzebne potwierdzenie, jak ma być prezentowany ten
    przystanek — jako "Alejka Stanisława Strzyżyńskiego" czy jako "Drzewo
    genealogiczne"? Obecnie: nazwa krótka (menu/kafelki) to "Alejka
    Strzyżyńskiego", nazwa długa (tytuł podstrony) to "Alejka Stanisława
    Strzyżyńskiego - rzeźba Drzewo genealogiczne". Jacek: uważa, że
    atrakcją jest rzeźba, a nie sama alejka — do rozważenia zamiana
    akcentu (np. krótka nazwa "Drzewo genealogiczne", długa z alejką jako
    kontekstem, albo odwrotnie). Potrzebne są **obie wersje nazwy**:
    krótka (do menu) i długa (na podstronę, `<title>`/`<h1>`) — w PL
    i EN. **Tę decyzję trzeba podjąć teraz, przed ustaleniem adresów
    i wydrukiem kodów QR — później nie powinno się już tego zmieniać.**
- **Panna z rybą** (`panna-z-ryba/index.html`, adres `/panna-z-ryba/`) —
  rok powstania już potwierdzony (1979, z transkrypcji nagrania). Do
  dostarczenia:
  - **priorytet, decyzja do podjęcia: numer telefonu** — transkrypcja
    nagrania (sekcja „Transkrypcja" na tej podstronie, PL i EN) zaprasza
    do kontaktu telefonicznego w celu umówienia wizyty w pracowni
    („Zapraszam do kontaktu telefonicznego i umówienia wizyty"), ale na
    stronie nigdzie nie podano numeru. **Do wyboru jedno z dwóch:**
    (a) dostarczyć ogólnodostępny numer telefonu i umieścić go w
    widocznym miejscu na tej podstronie (np. przy transkrypcji albo
    w sekcji „Informacje praktyczne") — w obu wersjach językowych, albo
    (b) usunąć to zaproszenie do kontaktu telefonicznego z nagrania —
    co oznacza też **zmianę transkrypcji** (PL i EN), żeby nie
    wspominała już o telefonie, skoro na stronie nie będzie żadnego
    numeru do podania,
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
    projektu",
  - **priorytet: warunki uzyskania dotacji na ten projekt** — trzeba
    dostarczyć, czego dokładnie wymaga dotacja/grant, pod którym projekt
    powstaje. W szczególności: co dotacja wymaga, żeby znalazło się na
    stronie (np. logotyp finansującego, informacja o źródle
    finansowania, konkretne sformułowanie) i gdzie dokładnie — czy ma
    być widoczne na stronie głównej, czy wystarczy sekcja „O projekcie",
    czy ma być też w stopce każdej podstrony; jakiej wielkości i w jakim
    formacie ma być logotyp/informacja; czy wymagane jest umieszczenie
    danych kontaktowych (łącznie z numerem telefonu?) — jeśli tak, to
    gdzie (tylko w stopce, czy osobna sekcja) i czy mają to być dane do
    Fundacji Dom i Sztuka / sztukaidom.com, czy bezpośrednio do
    Zbigniewa Strzyżyńskiego.

  (Strona nie ma już sekcji kontaktowej — usunięta na prośbę właściciela
  repozytorium — ale patrz punkt wyżej: warunki dotacji mogą wymagać jej
  przywrócenia w innej formie.)

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

## 6. Domena i adresy

Wdrożenie na GitHub Pages jest zrobione — strona działa pod
`https://jacekszwalek.github.io/strzyzynski/`, a ten adres jest już
wpisany w `qr/base-url.js`, `sitemap.xml` i `robots.txt`.

**Priorytet, decyzja do podjęcia: czy zostajemy przy adresie
`github.io`, czy kupujemy własną domenę?** Propozycje nazw domeny (do
wyboru lub zaproponowania własnej):
- `sladamistrzyzynskiego.pl`
- `sladamiartysty.pl`
- `spacerstrzyzynskiego.pl`
- `spacer.strzyzynski.pl`

Gdy domena zostanie wybrana i kupiona, trzeba: podmienić adres w
`qr/base-url.js`, `sitemap.xml` i `robots.txt`, oraz skonfigurować ją
w ustawieniach GitHub Pages repozytorium (plik `CNAME`).

**Ta decyzja blokuje projekt kodów QR** (patrz sekcja 7 niżej) — kody QR
kodują bezpośrednio adres strony, więc ich ostateczny projekt/wydruk nie
powinien powstać, dopóki adres nie jest już ostatecznie ustalony.

---

## 7. Kody QR — projekt zablokowany do czasu dwóch decyzji

Zanim kody QR będą gotowe do finalnego zaprojektowania i wydruku,
potrzebne są **dwie decyzje**:
1. **Domena/adres strony** (patrz sekcja 6) — każdy kod QR koduje
   bezpośrednio pełny adres URL; zmiana domeny po wydruku oznacza, że
   wydrukowane kody przestają działać.
2. **Finalny adres podstrony Alejka Strzyżyńskiego / Drzewo
   genealogiczne** (patrz sekcja 3) — ten punkt trasy wciąż czeka na
   decyzję nazewniczą, od której zależy, czy adres `/alejka-strzyzynskiego/`
   zostanie, czy się zmieni.

Narzędzie `qr/generator.html` jest już gotowe i rozbudowane o:
- podgląd i pobieranie kodów QR dla wszystkich rzeźb (PL + EN),
- osobną sekcję z kodem QR wejścia na samą stronę główną (PL + EN),
- osobną sekcję z kodem QR na plakat (prowadzi przez krótkie
  przekierowanie, żeby dało się policzyć w statystykach osobno wejścia
  z plakatu),
- generator kodu QR dla dowolnego własnego adresu — z wyraźnym
  ostrzeżeniem, że taki kod nie zadziała, dopóki ktoś nie stworzy
  faktycznej strony pod tym adresem.

Wszystko w tym narzędziu automatycznie korzysta z adresu ustawionego
w `qr/base-url.js` — nie trzeba niczego przepisywać ręcznie po zmianie
domeny.

---

## 8. Materiały promocyjne (druk)

- **Priorytet: zaprojektować ulotkę/pocztówkę promującą inicjatywę
  i projekt** — materiał do rozdawania/wykładania, promujący wirtualny
  spacer. Potrzebne ustalenia: format, treść, zdjęcia, kod QR (patrz
  sekcja 7 — projekt kodu QR jest zablokowany do czasu decyzji
  o domenie).
- **Zlecenie wydruku** — gdy projekt ulotki/pocztówki i plakatu będzie
  gotowy, trzeba zlecić wydruk u drukarni oraz podjąć decyzję
  o wielkości pierwszego nakładu.

---

## 9. Decyzje projektowe do podjęcia

- **Forma prezentacji przystanków na stronie głównej** — obecnie krótka
  lista/siatka przystanków na stronie startowej. Do zdecydowania: czy
  mają to być kafelki ze zdjęciami (jak obecnie), czy numerowane boxy
  bez zdjęć (prostsze, szybciej się ładują, ale mniej zachęcające
  wizualnie).
- **Precyzyjny opis sekcji „Jak korzystać ze spaceru"** (kroki 1, 2,
  3… na stronie startowej) — obecny opis jest zbyt ogólny. Do
  uzupełnienia/doprecyzowania:
  - że kolejność kroków ma znaczenie (np. najpierw obejrzeć film
    wprowadzający, potem wyruszyć na spacer),
  - że na stronie głównej jest film wprowadzający (YouTube), a na
    podstronach poszczególnych rzeźb jest tylko audio (patrz sekcja 2a/2b)
    — to rozróżnienie warto wprost wytłumaczyć odwiedzającemu, żeby nie
    szukał filmu przy rzeźbie.
- **Napis na górze strony (nagłówek/logo serwisu)** — do ustalenia, co
  ma figurować na samej górze strony, zarówno w wersji mobilnej, jak
  i desktopowej: sam tekst (nazwa serwisu), grafika/logo, czy jedno
  i drugie razem.
- **Favicon** — czy Michał może podpowiedzieć, co umieścić jako favicon
  (mała ikonka strony widoczna w karcie przeglądarki)? Obecny plik to
  placeholder.

---

## 10. Logotypy partnerów

Na stronie „O projekcie" są trzy puste miejsca na logotypy (`.partner-logo-slot`).
Podmień je na obrazy, gdy będą znane nazwy partnerów/finansujących.
