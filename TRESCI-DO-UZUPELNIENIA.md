# Treści do uzupełnienia

*Stan na 2026-10-16 — ten dokument jest aktualizowany na bieżąco, w miarę
jak przesyłane są nowe materiały. Jeśli coś z listy wygląda jako już
zrobione na stronie, a wciąż figuruje tutaj jako otwarte — to znaczy, że
dokument nie został jeszcze zaktualizowany; zgłoś to, żeby poprawić.*

Ten dokument to kompletna lista wszystkiego, co trzeba dostarczyć, żeby
zamienić szkielet strony w gotową publikację. Pogrupowane po stronach,
z przypisaną osobą odpowiedzialną za każde otwarte zadanie.

Jak podmienić poszczególne elementy krok po kroku opisuje `README.md`.

---

## Podział odpowiedzialności — skrót

- **Jacek** — strona i infrastruktura (kod, hosting, domena, generator QR,
  decyzje techniczne/wizualne na stronie).
- **Michał** — generowanie/druk kodów QR, ulotki i materiały reklamowe.
- **Magda** — film wprowadzający i nagrania audio przy rzeźbach.
- **Dorota** — materiały źródłowe, nieścisłości i wątpliwości do
  wyjaśnienia, zdjęcia oraz decyzje projektowe do podjęcia.

### Otwarte zadania per osoba

**Jacek**
- Wykupienie i podłączenie domeny `sladamistrzyzynskiego.pl` (CNAME, DNS),
  podmiana adresu w `sitemap.xml`/`robots.txt` po jej uruchomieniu (sekcja 6).
- Ostateczna weryfikacja wymogów logotypów/oznaczeń względem umowy
  grantowej, nie tylko „Niezbędnika Realizatora" (sekcja 3, sekcja 10).
- Decyzje projektowe: forma prezentacji przystanków na stronie głównej,
  opis sekcji „Jak korzystać ze spaceru" (sekcja 9).

**Michał**
- Generowanie/pobranie kodów QR z
  [`qr/generator.html`](https://jacekszwalek.github.io/strzyzynski/qr/generator.html)
  do wykorzystania na pocztówce/ulotce (sekcja 7).
- Projekt ulotki/pocztówki promującej spacer — format, treść, zdjęcia,
  kod QR (sekcja 8).
- Zlecenie wydruku (sekcja 8).
- Podpowiedź/propozycja favicon strony (sekcja 9).

**Magda**
- Zastanowić się, czy rozszerzyć nagranie przy rzeźbie „Drzewo
  genealogiczne" o pozostałą część wypowiedzi — może być już po
  wydaniu projektu, nie blokuje publikacji (sekcja 2b).

**Dorota**
- 14 zdjęć rzeźb + prawdziwe zdjęcie Zbigniewa Strzyżyńskiego (sekcja 1).
- Doprecyzowanie faktów i źródeł w opisach (sekcja 3):
  - treści na stronę startową (dodatkowe fakty z okresu studiów,
    szczegóły okoliczności przeprowadzki do Nałęczowa, pełny wykaz
    najważniejszych realizacji, więcej kontekstu wokół konkursu na
    Pomnik Walki i Męczeństwa na Majdanku),
  - Ławeczka Prusa — wzbogacenie krótszego opisu redakcyjnego
    (`opisPelny`) o szczegóły z transkrypcji, związki Prusa
    z Nałęczowem, kontekst literacki,
  - Drzewo genealogiczne — okoliczności powstania rzeźby (więcej
    szczegółów niż plener), historia nadania nazwy alei, kontekst
    w twórczości artysty,
  - Panna z rybą — materiał rzeźby (nieznany), historia willi „Pod
    Matką Boską",
  - Kamień papieski — dokładna data i okoliczności pobytu kardynała
    w Nałęczowie, treść tablicy pamiątkowej, dokładny adres,
  - O projekcie — rozwinięcie celu projektu, pełny opis roli
    Fundacji Sztuka i Dom, podziękowania, informacja o finansowaniu.
- Decyzja: sekcja „Źródła" na stronie O projekcie (PL+EN) — uzupełnić
  konkretnymi źródłami albo usunąć sekcję, jeśli ich nie będzie
  (sekcja 3).
- Potwierdzenie w terenie: współrzędne GPS, materiał rzeźby Panna
  z rybą, opisy dostępności (sekcja 5).
- Decyzja o wielkości pierwszego nakładu ulotki/pocztówki (sekcja 8).
- Decyzja projektowa: napis w nagłówku strony (sekcja 9).
- Weryfikacja i akceptacja wizualnej części oraz treści po naniesieniu
  zmian po spacerze wolontariuszek.

---

## 1. Zdjęcia — 14 sztuk

**Odpowiedzialność: Dorota** (dostarczenie materiału); wgranie na stronę
po stronie technicznej robi Jacek.

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

### 2a. Film wprowadzający na stronie startowej — ZROBIONE

Decyzja: podstrony poszczególnych rzeźb mają tylko pliki audio, bez wideo.
Jedyne wideo na całej witrynie to film wprowadzający na stronie startowej.

**ZROBIONE:** film wprowadzający (YouTube Shorts, nagrany pionowo pod
mobilkę) osadzony na stronie głównej (PL+EN) —
`https://youtube.com/shorts/z0iN41PoBO4`. Kontener wideo dostał osobny
wariant CSS (`.video-wrap--portrait`, proporcje 9:16, ograniczona
szerokość), żeby pionowy film nie rozciągał się na pełną szerokość
strony na dużym ekranie.

### 2b. Nagrania przy rzeźbach — audio i transkrypcje, 4 z 4 ZROBIONE

Dla każdej rzeźby: plik audio MP3 plus transkrypcja tekstowa (PL + EN).

| Rzeźba | Status |
|---|---|
| Ławeczka Bolesława Prusa | **ZROBIONE** |
| Panna z rybą (kawiarnia Ewelina) | **ZROBIONE** |
| Kamień papieski | **ZROBIONE** |
| Drzewo genealogiczne | **ZROBIONE** — nagranie (1:28, `audio/drzewo-genealogiczne.mp3`) i transkrypcja (PL + EN) |

Treść transkrypcji wpisujemy bez zmian w stosunku do nagrania — dozwolone
są tylko poprawki interpunkcji i podział na akapity.

**Do rozważenia (Magda), nie blokuje publikacji:** użyte w transkrypcji
nagranie „Drzewo genealogiczne" to tylko fragment wypowiedzi Zbigniewa
Strzyżyńskiego — do zastanowienia, czy warto nagranie (i transkrypcję)
rozszerzyć o pozostałą część wypowiedzi. Może poczekać do czasu po
wydaniu projektu.

---

## 3. Teksty — biogram i opisy rzeźb (szkic gotowy do redakcji)

**Odpowiedzialność: Dorota** (fakty, źródła, doprecyzowania); weryfikacja
logotypów/oznaczeń grantowych względem umowy — **Jacek**.

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
- **Drzewo genealogiczne**
  (`drzewo-genealogiczne/index.html`, adres `/drzewo-genealogiczne/`) —
  **ZROBIONE, ostateczna decyzja nazewnicza podjęta:** nazwa krótka
  (menu/kafelki) i adres podstrony to teraz "Drzewo genealogiczne" /
  `/drzewo-genealogiczne/` (wcześniej kolejno: "Alejka Strzyżyńskiego" /
  `/alejka-strzyzynskiego/`, potem "Aleja Strzyżyńskiego" /
  `/aleja-strzyzynskiego/`), nazwa długa (tytuł podstrony) to "Rzeźba
  Drzewo genealogiczne w Alei Stanisława Strzyżyńskiego". W opisach i
  wskazówkach dojazdu alej nadal nazywana jest "Aleją Strzyżyńskiego" —
  zmienia się tylko nazwa samego przystanku/rzeźby, nie nazwa alei.
  Zmiana obejmuje też pliki (audio, zdjęcia) i wszystkie linki w
  nawigacji oraz `sitemap.xml`.
  Dodane fakty (na podstawie informacji od Doroty Strzyżyńskiej): plener,
  w ramach którego powstała rzeźba, zorganizował Jarosław Olejnicki,
  prezes Towarzystwa Przyjaciół Nałęczowa, a wzdłuż alei stoją tablice
  z biografią artysty.
  Do dalszego dostarczenia (**Dorota**, poza nagraniem — patrz sekcja 2b,
  to **Magda**):
  - okoliczności powstania rzeźby (więcej szczegółów niż plener),
  - historia nadania nazwy alei,
  - kontekst w twórczości artysty,
  - nagranie i transkrypcja (patrz sekcja 2) — po ich dostarczeniu opis
    będzie można wzbogacić podobnie jak przy innych rzeźbach.
- **Panna z rybą** (`panna-z-ryba/index.html`, adres `/panna-z-ryba/`) —
  rok powstania już potwierdzony (1979, z transkrypcji nagrania). Do
  dostarczenia:
  - **ZROBIONE, numer telefonu dodany**: 508 244 607, w nowej sekcji
    „Zaproszenie do pracowni" tuż pod nagraniem (PL i EN). Na końcu
    transkrypcji (PL i EN) dodana jest też krótka notka wskazująca, że
    numer znajduje się w dalszej części strony,
  - materiał rzeźby (`material` w danych ma wartość `null`) — nieznany,
  - historia willi „Pod Matką Boską".

  Godziny otwarcia kawiarni Ewelina — **ZROBIONE, decyzja podjęta**:
  nie zostały zweryfikowane, więc zgodnie z decyzją właściciela
  repozytorium ta informacja została usunięta ze strony (nie podajemy
  niesprawdzonych godzin).
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
  - pełny opis roli Fundacji Sztuka i Dom,
  - podziękowania,
  - informacja o finansowaniu.

  **Decyzja do podjęcia: sekcja „Źródła" (PL+EN).** Obecnie zawiera
  jedną ogólną pozycję („Materiały i wspomnienia udostępnione przez
  Zbigniewa Strzyżyńskiego") i dwa całkowicie puste miejsca
  (`<!-- DO UZUPEŁNIENIA -->`) na: publikacje/artykuły/strony instytucji
  wykorzystane przy opracowaniu opisów oraz źródło danych o pomniku
  kardynała Karola Wojtyły. Albo uzupełnić te pozycje konkretnymi
  źródłami, albo — jeśli realnych źródeł do podania nie będzie — usunąć
  całą sekcję „Źródła" ze strony (PL+EN), żeby nie zostawiać na
  opublikowanej stronie pustego nagłówka bez treści.

  **ZROBIONE, nazwa projektu:** sekcja „Część większego projektu" (PL+EN)
  uzupełniona o pełną nazwę inicjatywy — „Cyfrowy spacer śladami artysty
  rzeźbiarza Stanisława Strzyżyńskiego" — tę samą, która figuruje już w
  sekcji „Partnerzy i finansowanie".

  **ZROBIONE, warunki dotacji wdrożone na podstawie dokumentu
  „Niezbędnik Realizatora" (MRW 2026):** zgodnie z opisanym tam
  obowiązkowym oznaczeniem materiałów ze zdjęciami dodano — w stopce
  każdej podstrony (PL+EN) oraz w sekcji „Partnerzy i finansowanie" na
  stronie O projekcie (PL+EN) — logotypy Komitetu ds. Pożytku
  Publicznego, NIW i Międzynarodowego Roku Wolontariatu 2026, obowiązkowy
  napis „Sfinansowano ze środków Narodowego Instytutu Wolności…”, pełną
  nazwę inicjatywy oraz logotypy i nazwy Regionalnych Operatorów Projektu
  (Bieszczadzki Uniwersytet Ludowy, Sursum Corda, Fundacja Bieszczadzka).
  **Uwaga (Jacek): właściciel repozytorium zweryfikuje te wymagania jeszcze
  raz bezpośrednio w umowie grantowej i może przesłać poprawki** — to, co
  jest teraz na stronie, opiera się na ogólnym dokumencie dla
  realizatorów, nie na samej umowie.

  (Strona nie ma już sekcji kontaktowej — usunięta na prośbę właściciela
  repozytorium.)

---

## 4. Tłumaczenie na angielski — ZROBIONE (w zakresie dostępnych treści)

**Odpowiedzialność: brak otwartego zadania** — tłumaczenie nowych faktów
dogrywa się automatycznie przy okazji dostarczania ich przez Dorotę
(sekcja 3) i Magdę (sekcja 2b, Drzewo genealogiczne).

Interfejs (nawigacja, przyciski, nagłówki), biogram na stronie głównej,
opisy i transkrypcje rzeźb oraz strona „O projekcie" są już przetłumaczone
na angielski.

Pojedyncze `<!-- EN TRANSLATION NEEDED -->`, które wciąż można znaleźć
w kodzie (`en/about/index.html`, komentarz w nagłówku `data/rzezby.js`),
**nie oznaczają brakującego tłumaczenia** — oznaczają ten sam otwarty fakt,
który czeka na ustalenie również w wersji polskiej (patrz sekcje 3 i 5).
Przykłady: materiał rzeźby Panna z rybą, treść tablicy pamiątkowej przy
Kamieniu papieskim, lista źródeł i dodatkowe podziękowania na stronie
„O projekcie". Gdy taki fakt zostanie dostarczony po polsku, wersję
angielską warto dopisać przy tej samej okazji.

Jedyny realny wyjątek: **Drzewo genealogiczne** nie ma jeszcze żadnego
nagrania ani transkrypcji (patrz sekcja 2) — więc nie ma też czego
tłumaczyć, dopóki polski tekst nie powstanie.

---

## 5. Dane do zweryfikowania w terenie

**Odpowiedzialność: Dorota**

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

---

## 6. Domena i adresy

**Odpowiedzialność: Jacek**

Wdrożenie na GitHub Pages jest zrobione — strona działa pod
`https://jacekszwalek.github.io/strzyzynski/`, a ten adres jest już
wpisany w `qr/base-url.js`, `sitemap.xml` i `robots.txt`.

**ZROBIONE, decyzja podjęta: domena `sladamistrzyzynskiego.pl`.**
`qr/base-url.js` został już podmieniony na ten adres.

**Wciąż do zrobienia (poza Claude, krok zewnętrzny):**
- wykupienie domeny `sladamistrzyzynskiego.pl`,
- podłączenie jej do GitHub Pages: dodanie pliku `CNAME` w repozytorium
  (do ustalenia w kolejnym kroku, gdy domena będzie wykupiona) oraz
  konfiguracja DNS u rejestratora domeny,
- podmiana adresu w `sitemap.xml` i `robots.txt` — **dopiero gdy domena
  faktycznie działa**, żeby nie zepsuć wyszukiwania i nawigacji na
  aktualnie żywej stronie `github.io` w międzyczasie.

**Ta decyzja odblokowuje projekt kodów QR** (patrz sekcja 7 niżej) — kody
QR mogą teraz być projektowane pod docelowy adres.

---

## 7. Kody QR

**Odpowiedzialność: Jacek** (narzędzie generatora — zrobione);
**Michał** (wygenerowanie/pobranie kodów do wykorzystania na materiałach
promocyjnych, patrz sekcja 8).

**ZROBIONE:** obie decyzje blokujące projekt kodów QR zostały podjęte —
domena (`sladamistrzyzynskiego.pl`, patrz sekcja 6) i finalny adres
podstrony Drzewo genealogiczne (`/drzewo-genealogiczne/`, patrz sekcja 3).

**ZROBIONE, decyzja podjęta: tabliczki z kodem QR przy każdej rzeźbie są
skasowane z planu.** Kody QR będą rozprowadzane wyłącznie przez
pocztówkę/ulotkę (patrz sekcja 8) — nie będzie fizycznych tabliczek
z kodem QR montowanych przy rzeźbach w terenie. Teksty na stronie
głównej ("Jak korzystać ze spaceru") zostały poprawione, żeby nie
odwoływały się do skanowania kodu przy rzeźbie.

Narzędzie [`qr/generator.html`](https://jacekszwalek.github.io/strzyzynski/qr/generator.html)
jest już gotowe (link prowadzi do aktualnego adresu `github.io` — zmieni
się na `sladamistrzyzynskiego.pl/qr/generator.html`, gdy docelowa domena
zacznie działać, patrz sekcja 6) i rozbudowane o:
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

**ZROBIONE, naprawiony błąd śledzenia:** kody QR dla poszczególnych
rzeźb (wersja PL) koniecznie koduje teraz adres `<slug>-qr.html`
(krótkie przekierowanie), tak jak było ustalone — wcześniej generator
błędnie kodował bezpośrednio czysty adres `<slug>/`, co omijało stuby
śledzące i uniemożliwiało odróżnienie w Cloudflare Web Analytics wejść
ze skanowania kodu od wejść wpisanych wprost. Pod każdym kodem wciąż
wyświetla się czysty, docelowy adres (wygodny do ręcznego wpisania).

---

## 8. Materiały promocyjne (druk)

**Odpowiedzialność: Michał** (projekt i zlecenie wydruku);
**Dorota** (decyzja o wielkości nakładu)

- **Priorytet: zaprojektować ulotkę/pocztówkę promującą inicjatywę
  i projekt** — materiał do rozdawania/wykładania, promujący wirtualny
  spacer. Potrzebne ustalenia: format, treść, zdjęcia, kod QR (patrz
  sekcja 7 — projekt kodu QR jest zablokowany do czasu decyzji
  o domenie).
- **Zlecenie wydruku** (Michał) — gdy projekt ulotki/pocztówki i plakatu
  będzie gotowy, trzeba zlecić wydruk u drukarni.
- **Decyzja o wielkości pierwszego nakładu** (Dorota).

---

## 9. Decyzje projektowe do podjęcia

- **Forma prezentacji przystanków na stronie głównej** —
  **Odpowiedzialność: Jacek**. Obecnie krótka lista/siatka przystanków na
  stronie startowej. Do zdecydowania: czy mają to być kafelki ze
  zdjęciami (jak obecnie), czy numerowane boxy bez zdjęć (prostsze,
  szybciej się ładują, ale mniej zachęcające wizualnie).
- **Precyzyjny opis sekcji „Jak korzystać ze spaceru"** (kroki 1, 2,
  3… na stronie startowej) — **Odpowiedzialność: Jacek**. Obecny opis
  jest zbyt ogólny. Do uzupełnienia/doprecyzowania:
  - że kolejność kroków ma znaczenie (np. najpierw obejrzeć film
    wprowadzający, potem wyruszyć na spacer),
  - że na stronie głównej jest film wprowadzający (YouTube), a na
    podstronach poszczególnych rzeźb jest tylko audio (patrz sekcja 2a/2b)
    — to rozróżnienie warto wprost wytłumaczyć odwiedzającemu, żeby nie
    szukał filmu przy rzeźbie.
- **Napis na górze strony (nagłówek/logo serwisu)** —
  **Odpowiedzialność: Dorota**. Do ustalenia, co ma figurować na samej
  górze strony, zarówno w wersji mobilnej, jak i desktopowej: sam tekst
  (nazwa serwisu), grafika/logo, czy jedno i drugie razem.
- **Favicon** — **Odpowiedzialność: Dorota**, z propozycją od Michała.
  Czy Michał może podpowiedzieć, co umieścić jako favicon (mała ikonka
  strony widoczna w karcie przeglądarki)? Obecny plik to placeholder.

---

## 10. Logotypy partnerów — ZROBIONE

**Odpowiedzialność: Jacek** (ewentualna korekta po weryfikacji umowy
grantowej, patrz sekcja 3)

Dawne puste miejsca na logotypy (`.partner-logo-slot`) zostały zastąpione
rzeczywistymi obrazami: `img/logotypy-dofinansowanie.png` (Komitet ds.
Pożytku Publicznego, NIW, Międzynarodowy Rok Wolontariatu 2026) oraz
`img/logotypy-operatorzy.png` (Bieszczadzki Uniwersytet Ludowy, Sursum
Corda, Fundacja Bieszczadzka) — patrz sekcja 3, „O projekcie". Jeśli
umowa grantowa (patrz uwaga w sekcji 3) będzie wymagać innych
logotypów/układu, trzeba będzie podmienić te pliki.
