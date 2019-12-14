# Lab 07

https://reacttraining.com/react-router/web/guides/quick-start

## Zadanie 1

W zad01 masz dostępne 3 komponenty `HomePage` `AboutPage` `ContactPage`. Aktualnie widoczne sa wszystkie na raz. Wykorzystujac Routing spraw aby byly dostepne tylko pod dedykowanymi adresami URL.
Sciezki pod ktorymi powinny byc dostepne to: `/`, `/about`, `/contact`

Dodaj do projektu i wykorzystaj `react-router-dom`. Użyj `BrowserRouter`.

## Zadanie 2

Do poprzedniego zadania stworz i dodaj komponent Menu, ktory bedzie zawieral linki prowadzace do dostepnych podstron.

Podczas nawigacji strona nie powinna przeladowywac sie w calosci.

Link prowadzacy do aktywnej podstrony powinien byc w jakiś sposób wyrozniony. Wykorzystaj `activeStyle` lub `activeClassName`

## Zadanie 3

Użyty w Zadaniu 1 BrowserRouter zastap HashRouter oraz MemoryRouter i zaobserwuj roznice.

## Zadanie 4

Stworz komponent `MoviesListPage`, ktory wyswietli tylko tytuly wszystkich filmow. Lista powinna byc dostepna pod adresem `/movies`
Wykorzystaj `MoviesService.getMovies()` (src/services/movies.service.js) aby pobrać dane o wszystkich filmach.

Nie pobieraj danych bezpośrednio z pliku json.

## Zadanie 5

Spraw aby tytul filmu z poprzedniego zadania byl linkiem prowadzacym do widoku szczegolow wybranego filmu.

Na potrzeby tego zadania stworz komponent `MovieDetailsPage`, ktory bedzie dostepny pod adresem /movie/:id.

Do pobrania szczegolow filmu uzyj `MoviesService.getMovieById(id)`.

ID wybranego filmu powinno pochodzic z adresu url.

## Zadanie 6

Do komponentu `MovieDetailsPage` dodaj przycisk, ktory cofnie uzytkownika do poprzedniego widoku.

https://reacttraining.com/react-router/web/api/history

## Zadanie 7

Zaobserwuj co sie stanie gdy przekazemy w parametrze nieistnejacy ID.

Wykorzystaj Redirect i przekieruj uzytkownika do listy filmow.

## Zadanie 8

Wykorzystujac React Refs spraw aby po wejsciu w \contact kursor byl ustawiony w polu input (focus), a po wcisnieciu przycisku SEND pojawił sie alert "Dziękujemy, skontaktujemy się z Toba pod adresem: podany@adres.email"
