# Treści do uzupełnienia

*Stan na 2026-10-21 — ten dokument jest aktualizowany na bieżąco, w miarę
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
- **Michał** — druk kodów QR, ulotki i materiały reklamowe.
- **Magda** — film wprowadzający i nagrania audio przy rzeźbach.
- **Dorota** — materiały źródłowe, nieścisłości i wątpliwości do
  wyjaśnienia, zdjęcia oraz decyzje projektowe do podjęcia.

### Otwarte zadania per osoba

**Jacek**
- ZROBIONE: domena `sladamistrzyzynskiego.pl` działa (DNS skonfigurowany
  w panelu webd.pl, plik `CNAME` w repo, `sitemap.xml`/`robots.txt`
  zaktualizowane) — patrz sekcja 6. ZROBIONE: link do generatora kodów QR
  usunięty ze stopki wszystkich stron (decyzja podjęta i wykonana).
  Zostaje do sprawdzenia: czy działa HTTPS (zielona kłódka).
- Decyzje projektowe: forma prezentacji przystanków na stronie głównej,
  opis sekcji „Jak korzystać ze spaceru" (sekcja 9).
- Nie krytyczne: pod filmem wprowadzającym nadal pokazują się
  automatyczne napisy YouTube, mimo `cc_load_policy=0` — do sprawdzenia
  w YouTube Studio, nie blokuje publikacji (sekcja 2a).

**Michał**
- Pobranie kodów QR z
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
- ZROBIONE: 14 zdjęć rzeźb dostarczone i umieszczone na stronie
  (miniatury w dymku mapy + zdjęcia w opisach każdej podstrony, patrz
  sekcja 1). Zostaje tylko: prawdziwe zdjęcie Zbigniewa Strzyżyńskiego
  do awatara (sekcja 1) — wciąż placeholder.
- Doprecyzowanie faktów i źródeł w opisach (sekcja 3) — część już
  dostarczona i wdrożona przez właściciela repozytorium (treść
  edytorska poprawiona w PL i zsynchronizowana z EN), reszta zostaje
  otwarta:
  - treści na stronę startową (dodatkowe fakty z okresu studiów,
    szczegóły okoliczności przeprowadzki do Nałęczowa, pełny wykaz
    najważniejszych realizacji, więcej kontekstu wokół konkursu na
    Pomnik Walki i Męczeństwa na Majdanku) — nadal otwarte,
  - Ławeczka Prusa — wzbogacenie krótszego opisu redakcyjnego
    (`opisPelny`) o okoliczności powstania/fundatora, szczegóły
    współpracy ojca i syna, związki Prusa z Nałęczowem, kontekst
    literacki — nadal otwarte,
  - Drzewo genealogiczne — **ZROBIONE**: opis (`opisPelny`) przepisany
    na ostateczną treść (symbolika, współorganizacja pleneru,
    lokalizacja), bez otwartych `DO UZUPEŁNIENIA`,
  - Panna z rybą — **ZROBIONE: materiał rzeźby ustalony** (sztuczny
    marmur). Nadal otwarte: historia willi „Pod Matką Boską",
  - Kamień papieski — **częściowo zrobione**: lokalizacja uzupełniona
    o „w pobliżu Pałacu Małachowskich". Nadal otwarte: dokładna data
    i okoliczności pobytu kardynała w Nałęczowie, treść tablicy
    pamiątkowej, dokładny adres/nazwa ulicy,
  - O projekcie — **ZROBIONE**: Cel, Podziękowania (z imionami
    wolontariuszek) i informacja o finansowaniu gotowe. Nadal otwarte:
    pełny opis roli Fundacji Sztuka i Dom w sekcji „Kto tworzy ten
    projekt".
- **ZROBIONE, decyzja podjęta: sekcja „Źródła"** na stronie O projekcie
  (PL+EN) — usunięta ze strony (nie uzupełniana konkretnymi źródłami).
- **ZROBIONE: logo i social media Fundacji Sztuka i Dom** dodane na
  stronie O projekcie/About (PL+EN) — logo w sekcji „Kto tworzy ten
  projekt", linki do strony WWW, Facebooka i Instagrama jako graficzne
  ikony dopasowane do stylistyki strony.
- Weryfikacja warunków dofinansowania: Jacek sprawdził wymogi dotyczące
  informacji o finansowaniu i uważa, że są spełnione. Pozostaje:
  przesłać link do strony w obecnym kształcie (O projekcie i stopka)
  do finansującego projekt, żeby potwierdził, czy forma jest
  wystarczająca (sekcja 3).
- Potwierdzenie w terenie: współrzędne GPS, opisy dostępności (sekcja 5).
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
| `laweczka-prusa-mini.jpg` | 300×400 (pionowe, 3:4) | miniaturka w dymku mapy na stronie głównej (po kliknięciu pinezki) — **ZROBIONE**, prawdziwe zdjęcie, przycięte z dostarczonego kadru |
| `laweczka-prusa-1.jpg` | 1024×768 (4:3) | podstrona rzeźby — pierwsze zdjęcie w opisie — **ZROBIONE**, prawdziwe zdjęcie |
| `laweczka-prusa-2.jpg` | 733×1100 (pionowe) | podstrona rzeźby — drugie zdjęcie w opisie — **ZROBIONE**, zbliżenie na twarz pomnika |
| `drzewo-genealogiczne-mini.jpg` | 300×400 (pionowe, 3:4) | miniaturka w dymku mapy — **ZROBIONE**, przycięte z poziomego kadru dostarczonego przez Jacka |
| `drzewo-genealogiczne-1.jpg` | 1024×683 (4:3) | zdjęcie 1 w opisie — **ZROBIONE**, prawdziwe zdjęcie |
| `drzewo-genealogiczne-2.jpg` | 785×1100 (pionowe) | zdjęcie 2 w opisie — **ZROBIONE**, detal faktury |
| `drzewo-genealogiczne-3.jpg` | 785×1100 (pionowe) | zdjęcie 3 w opisie — **ZROBIONE**, jeden z zachowanych projektów rzeźby w pracowni |
| `panna-z-ryba-mini.jpg` | 300×400 (pionowe, 3:4) | miniaturka w dymku mapy — **ZROBIONE**, przycięte z dostarczonego kadru |
| `panna-z-ryba-1.jpg` | 733×1100 (pionowe) | zdjęcie 1 w opisie — **ZROBIONE**, prawdziwe zdjęcie |
| `panna-z-ryba-2.jpg` | 733×1100 (pionowe) | zdjęcie 2 w opisie — **ZROBIONE**, detal twarzy i ryby |
| `panna-z-ryba-3.jpg` | 825×1100 (pionowe) | zdjęcie 3 w opisie — **ZROBIONE**, detal z profilu |
| `kamien-papieski-mini.jpg` | 300×400 (pionowe, 3:4) | miniaturka w dymku mapy — **ZROBIONE**, przycięte z dostarczonego kadru |
| `kamien-papieski-1.jpg` | 825×1100 (pionowe) | zdjęcie 1 w opisie — widok całości pomnika — **ZROBIONE**, prawdziwe zdjęcie |
| `kamien-papieski-2.jpg` | 1024×768 (4:3) | zdjęcie 2 w opisie — zbliżenie na herb papieski i tablicę pamiątkową — **ZROBIONE**, prawdziwe zdjęcie |
| `stanislaw-strzyzynski-portret.jpg` | 640×870 (pionowe) | biogram na stronie głównej — **ZROBIONE**, prawdziwe zdjęcie dostarczone przez Jacka |
| `zbigniew-strzyzynski-avatar.png` | 200×200 (okrągłe, biała obwódka, przezroczyste tło poza kołem) | podpis „Opowiada Zbigniew Strzyżyński" na każdej podstronie rzeźby — widoczny tylko w widoku desktopowym, na mobile zostaje czysty tekst. **Obecne zdjęcie to zbliżenie na twarz z dostarczonego zdjęcia przykładowego — nie jest to prawdziwe zdjęcie Zbigniewa Strzyżyńskiego — do podmiany na prawdziwe, docelowe zdjęcie.** |

Karuzela punktów pod mapą na stronie głównej (`#location-list`) jest
tekstowa, bez miniatur — zdjęcia pojawiają się tylko w dymku mapy po
kliknięciu pinezki (zobacz wiersze „miniaturka w dymku mapy" wyżej).

Jacek dostarczył też trzy dodatkowe zdjęcia Stanisława Strzyżyńskiego,
na razie nigdzie na stronie nieużyte — czekają na decyzję, gdzie je
wykorzystać (np. przy opisach rzeźb albo w sekcji biogramu):
`img/studia.jpg`, `img/w-pracowni.jpg`, `img/z-jezusem.jpg`. Oryginał
portretu w pełnej rozdzielczości też zostaje w repo jako
`img/portret.jpg` (na stronie używana jest jego pomniejszona,
zoptymalizowana wersja — `stanislaw-strzyzynski-portret.jpg`).

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
mobilkę) osadzony na stronie głównej — osobne nagrania dla każdej
wersji językowej: PL `https://youtube.com/shorts/amiOJRqWpm0`, EN
`https://youtube.com/shorts/3lmrVAe7QSM`. Kontener wideo dostał osobny
wariant CSS (`.video-wrap--portrait`, proporcje 9:16, ograniczona
szerokość), żeby pionowy film nie rozciągał się na pełną szerokość
strony na dużym ekranie.

**Do zrobienia (Jacek), nie krytyczne, nie blokuje publikacji:** pod
filmem nadal wyświetlają się automatycznie wygenerowane przez YouTube
napisy, mimo ustawionego w adresie embed parametru `cc_load_policy=0`.
Napisy są już wypalone na stałe w samym materiale, więc się dublują.
Najpewniej wymaga to wyłączenia/usunięcia ścieżki napisów bezpośrednio
w YouTube Studio przy tym filmie (ustawienie `cc_load_policy` w adresie
nie wystarcza, jeśli film ma tam ustawione pokazywanie napisów
domyślnie) — jeszcze nie sprawdzone, które dokładnie ustawienie to
powoduje.

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
  Strzyżyńskiego. **ZROBIONE (wersja PL)** — treść nadpisana danymi z
  przesłanej przez Dorotę skorygowanej biografii
  (`Biografia_Stanislaw_Strzyzynski_korekta.docx`): pełny wykaz
  realizacji, kontekst konkursu na Pomnik Walki i Męczeństwa na
  Majdanku, nowa sekcja „Nagrody i odznaczenia" oraz informacja o
  nazwaniu alei w czerwcu 2026. **Do zrobienia:** przetłumaczyć te same
  zmiany na wersję angielską (`en/index.html`), która wciąż ma starszą,
  krótszą treść bez tej sekcji.
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
  **ZROBIONE, opis (`opisPelny`) przepisany na ostateczną treść:**
  symbolika rzeźby (owalny kształt jako ziarno, z którego kiełkuje
  nowe życie), współorganizacja pleneru przez Stanisława Strzyżyńskiego
  i Jarosława Olejnickiego (prezesa Towarzystwa Przyjaciół Nałęczowa,
  wzdłuż alei stoją tablice z jego biografią), lokalizacja przy Alei
  Stanisława Strzyżyńskiego. Bez otwartych `DO UZUPEŁNIENIA` w opisie.
  Nagranie i transkrypcja — **ZROBIONE** (patrz sekcja 2b).
- **Panna z rybą** (`panna-z-ryba/index.html`, adres `/panna-z-ryba/`) —
  rok powstania już potwierdzony (1979, z transkrypcji nagrania).
  - **ZROBIONE, numer telefonu dodany**: 508 244 607, w nowej sekcji
    „Zaproszenie do pracowni" tuż pod nagraniem (PL i EN). Na końcu
    transkrypcji (PL i EN) dodana jest też krótka notka wskazująca, że
    numer znajduje się w dalszej części strony,
  - **ZROBIONE, materiał ustalony:** sztuczny marmur (PL i EN),
  - Nadal otwarte: historia willi „Pod Matką Boską".

  Godziny otwarcia kawiarni Ewelina — **ZROBIONE, decyzja podjęta**:
  nie zostały zweryfikowane, więc zgodnie z decyzją właściciela
  repozytorium ta informacja została usunięta ze strony (nie podajemy
  niesprawdzonych godzin).
- **Kamień papieski** (`kamien-papieski/index.html`, adres
  `/kamien-papieski/`) — rok powstania, materiał i autorstwo już
  potwierdzone (transkrypcja nagrania + wiadomość właściciela
  repozytorium). **ZROBIONE:** lokalizacja uzupełniona o „w pobliżu
  Pałacu Małachowskich" (PL i EN). Nadal otwarte:
  - dokładna data i okoliczności pobytu kardynała w Nałęczowie,
  - treść tablicy pamiątkowej,
  - dokładny adres/nazwa ulicy.
- **O projekcie** (`o-projekcie/index.html`, adres `/o-projekcie/`) —
  **ZROBIONE:**
  - rozwinięcie celu projektu (sekcja „Cel projektu"),
  - podziękowania (dla Zbigniewa Strzyżyńskiego i wolontariuszek
    Fundacji, z imionami),
  - informacja o finansowaniu,
  - logo Fundacji Sztuka i Dom oraz linki (strona WWW, Facebook,
    Instagram) jako graficzne ikony w sekcji „Kto tworzy ten projekt".

  Nadal otwarte: pełny opis roli Fundacji Sztuka i Dom (skład zespołu,
  historia współpracy) w tej samej sekcji.

  **ZROBIONE, decyzja podjęta: sekcja „Źródła" (PL+EN) usunięta ze
  strony** — nie było konkretnych źródeł do podania, więc sekcja
  (pusty nagłówek + dwa `<!-- DO UZUPEŁNIENIA -->`) została całkiem
  skasowana zamiast zostać uzupełniona.

  **ZROBIONE, decyzja podjęta: sekcja „Część większego projektu" (PL+EN)
  usunięta ze strony** — treść się powtarzała z sekcją „Partnerzy
  i finansowanie" (ta sama pełna nazwa inicjatywy), więc całą sekcję
  usunięto zamiast ją zostawiać.

  **ZROBIONE, warunki dotacji wdrożone na podstawie dokumentu
  „Niezbędnik Realizatora" (MRW 2026):** zgodnie z opisanym tam
  obowiązkowym oznaczeniem materiałów ze zdjęciami dodano — w stopce
  każdej podstrony (PL+EN) oraz w sekcji „Partnerzy i finansowanie" na
  stronie O projekcie (PL+EN) — logotypy Komitetu ds. Pożytku
  Publicznego, NIW i Międzynarodowego Roku Wolontariatu 2026, obowiązkowy
  napis „Sfinansowano ze środków Narodowego Instytutu Wolności…”, pełną
  nazwę inicjatywy oraz logotypy i nazwy Regionalnych Operatorów Projektu
  (Bieszczadzki Uniwersytet Ludowy, Sursum Corda, Fundacja Bieszczadzka).
  **Do zrobienia (Dorota): potwierdzenie u finansującego.** To, co jest
  teraz na stronie, opiera się na ogólnym dokumencie dla realizatorów
  („Niezbędnik Realizatora"), nie na samej umowie grantowej. **Jacek
  sprawdził te wymogi i uważa, że są spełnione** — pozostaje przesłać
  link do strony O projekcie w obecnym kształcie (razem ze stopką)
  do finansującego projekt i poprosić o potwierdzenie, czy ta forma
  jest wystarczająca.

  (Strona nie ma już sekcji kontaktowej — usunięta na prośbę właściciela
  repozytorium.)

---

## 4. Tłumaczenie na angielski — prawie ZROBIONE, jedna luka otwarta

**Odpowiedzialność: Jacek** — przetłumaczyć rozszerzoną treść biogramu
na stronie głównej (patrz niżej). Poza tym: brak otwartego zadania —
tłumaczenie nowych faktów dogrywa się automatycznie przy okazji
dostarczania ich przez Dorotę (sekcja 3).

Interfejs (nawigacja, przyciski, nagłówki), opisy i transkrypcje rzeźb
oraz strona „O projekcie" są już przetłumaczone na angielski i na
bieżąco synchronizowane z poprawkami edytorskimi wprowadzanymi po
polsku.

**Otwarta luka: biogram Stanisława Strzyżyńskiego na stronie głównej.**
Wersja polska (`index.html`) ma pięć sekcji biogramu, łącznie z sekcją
„Nagrody i odznaczenia" dodaną przy ostatniej korekcie treści. Wersja
angielska (`en/index.html`) wciąż ma starszą, krótszą treść — tylko
cztery sekcje, bez odpowiednika „Nagrody i odznaczenia" — do
przetłumaczenia i dogrania.

Pojedyncze `<!-- EN TRANSLATION NEEDED -->`, które wciąż można znaleźć
w kodzie (`en/about/index.html`, komentarz w nagłówku `data/rzezby.js`),
**nie oznaczają brakującego tłumaczenia** — oznaczają ten sam otwarty fakt,
który czeka na ustalenie również w wersji polskiej (patrz sekcje 3 i 5).
Przykłady: historia willi „Pod Matką Boską" przy Pannie z rybą, treść
tablicy pamiątkowej przy Kamieniu papieskim, pełny opis roli Fundacji
na stronie „O projekcie". Gdy taki fakt zostanie dostarczony po polsku,
wersję angielską warto dopisać przy tej samej okazji.

---

## 5. Dane do zweryfikowania w terenie

**Odpowiedzialność: Dorota**

- **Współrzędne wszystkich czterech punktów** (pole `wspolrzedne` w
  `data/rzezby.js`) zostały na razie tylko **odczytane z mapy** —
  **konieczne jest potwierdzenie na żywo, w terenie**, przed wydrukiem
  kodów QR.
- **Opisy dostępności** (`dostepnosc`) przy wszystkich czterech punktach —
  nawierzchnia, schody, ławki, dojazd wózkiem — obecne opisy to szkic do
  potwierdzenia na miejscu.

---

## 6. Domena i adresy

**Odpowiedzialność: Jacek**

**ZROBIONE: domena `sladamistrzyzynskiego.pl` działa.** Strona jest
dostępna pod `https://sladamistrzyzynskiego.pl/` (zamiast dawnego
`https://jacekszwalek.github.io/strzyzynski/`). Zrobione po kolei:
- domena wykupiona u rejestratora webd.pl,
- plik `CNAME` z adresem `sladamistrzyzynskiego.pl` dodany do
  repozytorium — podłącza domenę do GitHub Pages od strony repo,
- rekordy DNS w panelu webd.pl skonfigurowane (4 rekordy A na adresy
  GitHub Pages: `185.199.108.153`, `185.199.109.153`,
  `185.199.110.153`, `185.199.111.153`),
- `qr/base-url.js`, `sitemap.xml` i `robots.txt` wskazują już na nowy
  adres.

**ZROBIONE:** link administracyjny do generatora kodów QR usunięty ze
stopki wszystkich stron (PL+EN) — narzędzie `qr/generator.html` samo
w sobie zostaje w repo (patrz sekcja 7, nadal używane przez Michała do
pobierania kodów), zniknął tylko publiczny link do niego w stopce.

**Zostaje do sprawdzenia:**
- potwierdzić, że działa HTTPS (zielona kłódka w przeglądarce pod
  `https://sladamistrzyzynskiego.pl/`) — GitHub Pages wystawia
  certyfikat automatycznie, zwykle krótko po tym jak DNS zacznie
  działać.

**Ta decyzja odblokowuje projekt kodów QR** (patrz sekcja 7 niżej) — kody
QR mogą teraz być projektowane pod docelowy adres.

---

## 7. Kody QR

**Odpowiedzialność: Jacek** (narzędzie generatora — zrobione);
**Michał** (pobranie kodów do wykorzystania na materiałach
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

- **Forma prezentacji przystanków na stronie głównej** — **ZROBIONE**.
  Przystanki prezentuje numerowana karuzela punktów pod mapą (bez zdjęć —
  miniaturki pojawiają się w dymku mapy po kliknięciu pinezki), ze
  strzałkami nawigacyjnymi i dwukierunkową synchronizacją z mapą.
- **Opis sekcji „Jak korzystać ze spaceru"** (kroki 1, 2, 3… na stronie
  startowej) — **ZROBIONE**, zaakceptowane przez właściciela
  repozytorium.
- **Napis na górze strony (nagłówek/logo serwisu)** —
  **Odpowiedzialność: Dorota**. Do ustalenia, co ma figurować na samej
  górze strony, zarówno w wersji mobilnej, jak i desktopowej: sam tekst
  (nazwa serwisu), grafika/logo, czy jedno i drugie razem.
- **Favicon** — **Odpowiedzialność: Dorota**, z propozycją od Michała.
  Czy Michał może podpowiedzieć, co umieścić jako favicon (mała ikonka
  strony widoczna w karcie przeglądarki)? Obecny plik to placeholder.

---

## 10. Logotypy partnerów — ZROBIONE

Dawne puste miejsca na logotypy (`.partner-logo-slot`) zostały zastąpione
rzeczywistymi obrazami: `img/logotypy-dofinansowanie.png` (Komitet ds.
Pożytku Publicznego, NIW, Międzynarodowy Rok Wolontariatu 2026) oraz
`img/logotypy-operatorzy.png` (Bieszczadzki Uniwersytet Ludowy, Sursum
Corda, Fundacja Bieszczadzka) — patrz sekcja 3, „O projekcie". Jeśli
weryfikacja warunków dofinansowania (patrz sekcja 3, zadanie Doroty)
wykaże potrzebę innych logotypów/układu, trzeba będzie podmienić te
pliki.
