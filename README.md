# Nałęczów Stanisława Strzyżyńskiego — wirtualny spacer

Ten dokument tłumaczy krok po kroku, jak obsługiwać tę stronę **bez
znajomości programowania**. Strona to zwykłe pliki HTML/CSS/JavaScript —
nie ma żadnego „budowania" ani instalowania programów. Wystarczy przeglądarka
internetowa i konto na GitHub.com.

Spis treści:

1. [Jak wypchnąć zmiany na GitHub](#1-jak-wypchnąć-zmiany-na-github)
2. [Jak włączyć GitHub Pages](#2-jak-włączyć-github-pages)
3. [Jak podmienić zdjęcie](#3-jak-podmienić-zdjęcie)
4. [Jak wstawić film z YouTube](#4-jak-wstawić-film-z-youtube)
5. [Jak wgrać nagranie audio](#5-jak-wgrać-nagranie-audio)
6. [Jak zmienić tekst](#6-jak-zmienić-tekst)
7. [Jak dodać nową rzeźbę](#7-jak-dodać-nową-rzeźbę)
8. [Jak wydrukować tabliczki QR](#8-jak-wydrukować-tabliczki-qr)
9. [Częste pytania i problemy](#9-częste-pytania-i-problemy)

---

## 1. Jak wypchnąć zmiany na GitHub

Najprostszy sposób — **bez instalowania czegokolwiek** — to edycja plików
wprost na stronie GitHub.com:

1. Wejdź na stronę repozytorium na GitHub.com (adres dostaniesz od osoby,
   która je założyła).
2. Znajdź na liście plik, który chcesz zmienić (np. `index.html`), i kliknij
   w niego.
3. Kliknij ikonę ołówka (**Edit this file**) w prawym górnym rogu.
4. Wprowadź zmiany bezpośrednio w oknie edycji.
5. Zjedź na dół strony, wpisz krótki opis zmiany (np. „Dodaję zdjęcie
   ławeczki Prusa") w polu **Commit changes**.
6. Zaznacz opcję **Commit directly to the `main` branch** i kliknij zielony
   przycisk **Commit changes**.
7. Po chwili (1–2 minuty) zmiana pojawi się automatycznie na opublikowanej
   stronie — patrz punkt 2 poniżej.

**Wgrywanie nowych plików** (zdjęć, nagrań) działa podobnie:

1. Wejdź do właściwego katalogu (np. `img/`).
2. Kliknij **Add file → Upload files**.
3. Przeciągnij pliki z komputera albo kliknij, żeby je wybrać.
4. Na dole wpisz opis zmiany i kliknij **Commit changes**.

> Jeśli wolisz pracować z komputera przez program graficzny, możesz też
> zainstalować [GitHub Desktop](https://desktop.github.com/) — pozwala on
> edytować pliki zwykłym edytorem tekstu na dysku, a potem jednym kliknięciem
> „Push origin" wysłać zmiany na GitHub. Efekt jest identyczny jak przy
> edycji przez przeglądarkę.

---

## 2. Jak włączyć GitHub Pages

To trzeba zrobić **tylko raz**, przy pierwszym uruchomieniu strony:

1. W repozytorium na GitHub.com kliknij zakładkę **Settings** (Ustawienia).
2. W menu po lewej stronie kliknij **Pages**.
3. W sekcji **Build and deployment → Source** wybierz **GitHub Actions**
   (nie „Deploy from a branch" — ten projekt ma gotowy plik
   `.github/workflows/pages.yml`, który sam publikuje stronę).
4. Poczekaj chwilę i odśwież stronę — GitHub pokaże Ci adres publikacji,
   zwykle w formacie:

   ```
   https://TWOJA-NAZWA-UŻYTKOWNIKA.github.io/NAZWA-REPOZYTORIUM/
   ```

5. **Zapisz sobie ten adres** — będzie potrzebny w kroku 8 (kody QR) oraz
   w plikach `qr/base-url.js`, `sitemap.xml` i `robots.txt` (podmień w nich
   placeholder `https://USER.github.io/REPO/` na swój prawdziwy adres —
   patrz `TRESCI-DO-UZUPELNIENIA.md`, sekcja 6).

Każda kolejna zmiana wypchnięta na gałąź `main` (patrz punkt 1) automatycznie
uruchomi publikację od nowa — nie trzeba nic klikać ręcznie.

---

## 3. Jak podmienić zdjęcie

Wszystkie zdjęcia leżą w katalogu `img/`. Na razie są to **szare
placeholdery** (rysunki z opisem, co ma tam trafić) — patrz
`TRESCI-DO-UZUPELNIENIA.md` po pełną listę i wymagane proporcje.

1. Przygotuj zdjęcie w formacie **WebP** (mniejszy plik) **i** dodatkowo
   **JPG** (dla starszych przeglądarek) — ta sama nazwa, dwa rozszerzenia,
   np. `lawka-prusa-1.webp` i `lawka-prusa-1.jpg`. Zachowaj proporcje podane
   w `TRESCI-DO-UZUPELNIENIA.md` (np. 800×600).
2. Wgraj oba pliki do katalogu `img/` (patrz punkt 1 — „Add file → Upload
   files").
3. Otwórz plik `data/rzezby.js` w trybie edycji.
4. Znajdź właściwe miejsce, np.:
   ```js
   miniatura: "./img/lawka-prusa-mini.svg",
   ```
   i zmień rozszerzenie z `.svg` na `.webp`:
   ```js
   miniatura: "./img/lawka-prusa-mini.webp",
   ```
5. To samo zrób dla zdjęć w opisie, np. `src: "./img/lawka-prusa-1.svg"` →
   `src: "./img/lawka-prusa-1.webp"`.
6. Zapisz zmianę (**Commit changes**) — strona automatycznie znajdzie plik
   JPG jako zapasowy dla starszych przeglądarek (nie trzeba nic więcej
   zmieniać).
7. Warto też opisać zdjęcie — w tym samym pliku, przy danym zdjęciu, pole
   `alt` (opis dla osób niewidomych) i `podpis` (widoczny podpis pod
   zdjęciem).

**Portret Stanisława Strzyżyńskiego** i **avatar Zbigniewa Strzyżyńskiego**
podmienia się bezpośrednio w plikach `index.html` / `en/index.html` (portret,
znacznik `<img>` w sekcji biogramu) oraz w kodzie generującym podstrony rzeźb
— najprościej: wgraj plik pod tą samą nazwą co placeholder (np.
`stanislaw-strzyzynski-portret.webp`) i zmień jego wystąpienia w plikach
`.html` tak samo, jak w punkcie 4 powyżej.

---

## 4. Jak wstawić film z YouTube

1. Wrzuć film na YouTube (może być „niepubliczny/unlisted", jeśli nie
   chcesz, by był widoczny w wyszukiwarce YouTube — nadal zadziała na
   stronie).
2. Skopiuj **identyfikator filmu** — to fragment adresu po `watch?v=`,
   np. dla `https://www.youtube.com/watch?v=dQw4w9WgXcQ` identyfikatorem
   jest `dQw4w9WgXcQ`.
3. Otwórz `data/rzezby.js`, znajdź właściwą rzeźbę i pole:
   ```js
   media: {
     typ: "video",
     youtubeId: "VIDEO_ID_PLACEHOLDER",
     ...
   }
   ```
4. Podmień `VIDEO_ID_PLACEHOLDER` na skopiowany identyfikator.
5. Zapisz zmianę. Strona osadza filmy przez `youtube-nocookie.com` (wersja
   YouTube bez śledzenia użytkownika) i nigdy nie uruchamia ich automatycznie.

Jeśli wolisz, żeby na danej podstronie było **i wideo, i osobny odtwarzacz
audio** (np. wideo dla oglądających z domu + osobne, krótsze nagranie audio
na tabliczkę w parku), zmień `typ: "video"` na `typ: "oba"` — pojawi się
wtedy przycisk „Wolę tylko posłuchać".

---

## 5. Jak wgrać nagranie audio

1. Przygotuj plik **MP3**.
2. Wgraj go do katalogu `audio/`, zastępując plik placeholder o tej samej
   nazwie (np. `lawka-prusa.mp3`) — możesz po prostu wgrać nowy plik o
   identycznej nazwie, GitHub zapyta, czy chcesz go nadpisać.
3. Jeśli dana rzeźba ma mieć **tylko audio** (bez wideo), w `data/rzezby.js`
   ustaw:
   ```js
   media: {
     typ: "audio",
     ...
     audioSrc: "./audio/lawka-prusa.mp3"
   }
   ```
4. Odtwarzacz na stronie ma duże przyciski (play/pauza, przewijanie o 15
   sekund, zmianę prędkości) — nie trzeba nic dodatkowo konfigurować.
5. Warto też wkleić transkrypcję nagrania w pliku `.html` danej rzeźby,
   w miejscu:
   ```html
   <div class="transcript-body"><!-- DO UZUPEŁNIENIA: pełna transkrypcja nagrania --></div>
   ```
   — usuń komentarz `<!-- ... -->` i wklej tekst w jego miejsce.

---

## 6. Jak zmienić tekst

Większość tekstów (opisy rzeźb, biogram, informacje praktyczne) leży w pliku
`data/rzezby.js` — to jedno miejsce, z którego strona pobiera dane dla mapy,
kafelków i podstron. Format to zwykły tekst w cudzysłowie, np.:

```js
opisKrotki: {
  pl: "Tu wpisujesz krótki, polski opis.",
  en: "English translation goes here."
},
```

Zasady:

- **Nie usuwaj** przecinków, dwukropków ani cudzysłowów — tylko podmieniaj
  tekst *między* cudzysłowami.
- Jeśli tekst sam zawiera cudzysłów, użyj polskich cudzysłowów „ i "
  (a nie prostego znaku `"`) — inaczej strona się zepsuje.
- Miejsca oznaczone `<!-- DO UZUPEŁNIENIA -->` (polski) albo
  `<!-- EN TRANSLATION NEEDED -->` (angielski) czekają na Twój tekst — po
  prostu zamień cały komentarz na właściwą treść.

Teksty specyficzne dla jednej strony (np. sekcja „O projekcie", kroki „Jak
korzystać ze spaceru") są bezpośrednio w plikach `.html` — edytuje się je
tak samo jak przez edytor GitHub (punkt 1), szukając odpowiedniego akapitu.

---

## 7. Jak dodać nową rzeźbę

1. Otwórz `data/rzezby.js` i skopiuj cały obiekt jednej z istniejących
   rzeźb (od `{` do `},`).
2. Wklej kopię na końcu listy (przed zamykającym `];`) i zmień w niej:
   `id`, `nrTrasy` (kolejny wolny numer), `slug`, `tytul`, dane
   (`rok`, `material`, `lokalizacja`, `adres`, `wspolrzedne`), opisy oraz
   nazwy plików zdjęć/audio.
3. Utwórz dla niej nową podstronę `.html` — najprościej skopiuj istniejący
   plik (np. `lawka-prusa.html`), zmień nazwę na nową (zgodną z polem
   `slug.pl`) i zaktualizuj w nim tytuł, opisy i dane — analogicznie zrób
   kopię `en/prus-bench.html` dla wersji angielskiej.
4. Dodaj link do nowej podstrony w menu nawigacji (`<nav class="site-nav">`)
   na **wszystkich** stronach — najszybciej przez wyszukanie w repozytorium
   (GitHub: klawisz `.` otwiera edytor w przeglądarce z wyszukiwaniem) frazy
   `class="site-nav"` i dopisanie kolejnej pozycji `<li><a href="...">...</a></li>`.
5. Mapa, kafelki na stronie głównej i przyciski „poprzedni/następny punkt"
   **zaktualizują się same** — są generowane automatycznie na podstawie
   `data/rzezby.js`.
6. Dodaj zdjęcia i nagranie zgodnie z punktami 3–5 powyżej.
7. Wygeneruj nowy kod QR — patrz punkt 8.

---

## 8. Jak wydrukować tabliczki QR

1. Upewnij się, że strona jest już opublikowana (punkt 2) i znasz jej adres.
2. Otwórz plik `qr/base-url.js` w trybie edycji i podmień wartość
   `QR_BASE_URL` na swój adres, np.:
   ```js
   var QR_BASE_URL = "https://twoj-login.github.io/naleczow-strzyzynski/";
   ```
   **Uwaga:** adres musi kończyć się ukośnikiem `/`.
3. Zapisz zmianę i poczekaj, aż strona się zaktualizuje (1–2 minuty).
4. Wejdź na `https://TWOJ-ADRES/qr/tabliczki.html` w przeglądarce.
5. Kliknij **🖨 Drukuj arkusz** — otworzy się okno drukowania z gotowym
   układem A4 (bez nagłówka strony, tylko kafelki z kodami).
6. Każdy kafelek zawiera kod QR (min. 5×5 cm), nazwę rzeźby, dwujęzyczną
   instrukcję oraz adres strony **zwykłym tekstem** — na wypadek, gdyby ktoś
   wolał wpisać go ręcznie zamiast skanować.

Jeśli chcesz zapisać same kody QR jako osobne pliki SVG (np. do wysłania do
drukarni albo umieszczenia w innym projekcie graficznym), użyj
`qr/generator.html` — tam znajdziesz podgląd wszystkich kodów (PL i EN)
oraz przycisk **Pobierz wszystkie**.

---

## 9. Częste pytania i problemy

**Zmieniłem/-am plik, ale na stronie nic się nie zmieniło.**
Publikacja trwa 1–2 minuty. Jeśli po 5 minutach dalej nie widać zmiany,
sprawdź w zakładce **Actions** na GitHub, czy ostatni przebieg (workflow)
zakończył się na zielono. Kliknięcie w niego pokaże ewentualny błąd.

**Strona wygląda na zepsutą po zmianie tekstu w `data/rzezby.js`.**
Najczęstsza przyczyna to usunięty przecinek, cudzysłów albo klamra przy
edycji. Cofnij zmianę (GitHub: zakładka **Commits** → wybierz poprzednią
wersję pliku → **Restore this file**) i spróbuj ponownie, zmieniając
wyłącznie tekst między cudzysłowami.

**Mapa się nie ładuje.**
Mapa korzysta z kafelków OpenStreetMap, które wymagają połączenia
z internetem — na słabym zasięgu w parku może się nie wczytać. To
zaplanowane zachowanie: gdyby mapa w ogóle nie zadziałała (np. z powodu
zablokowanego JavaScriptu), pod spodem zawsze widać pełną listę punktów
z linkami — treść jest wtedy nadal dostępna.

**Jak sprawdzić stronę przed publikacją, bez czekania na GitHub?**
Otwórz dowolny plik `.html` bezpośrednio z dysku, dwuklikiem — strona
działa też bez serwera (jedynie mapa i część elementów wymagających
internetu, jak kafelki OpenStreetMap, mogą się nie wczytać w tym trybie).

**Gdzie zgłosić błąd merytoryczny w opisach?**
Patrz strona „O projekcie" → sekcja Kontakt (e-mail / telefon).
