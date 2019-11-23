# Lab 05

## Zadanie 1

Na potrzeby kolejnych zadań utwórz komponent **PostMovie** którego zadaniem będzie wyświetlić informacje o filmie.

Komponent powinien bazować na danych przekazanych przez propsy.

Struktura:

```
PostMovie
    Image
    Title
    Description
```

## Zadanie 2

Wykorzystując komponent **PostMovie** wczytaj plik movies.json i wyświetl na ekranie liste wszystkich filmów.
Wykorzystaj do tego metode map() oraz pamiętaj o kluczu.

## Zadanie 3

Dopisz komponent **Rating** który wyświetli ocene w postaci liczby dla każdego z filmu. Wykorzystaj dane z JSONa.

## Zadanie 4

Przerób komponent **Rating** w taki sposób aby prezentował ocene w postaci odpowiedniej liczby gwiazdek.
Przykładowo: 6 gwiazdek dla filmu, który ma ocene 6.

## Zadanie 5

Wykorzystując kod z poprzedniego zadania wyświetl tylko te filmy, których ocena (rating) jest większa niż 6

## Zadanie 6

Wyświetl dwie listy filmów z których jedna będzie zawierała filmy z oceną > 6, a druga pozostałe.

## Zadanie 7

Wyświetl wszystkie filmy pogrupowane wg gatunku (genre).

## Zadanie 8

Dodaj komponent pozwalającay na ocene filmu przez użytkownika.
Wykorzystując event _onCLick_ spraw aby po kliknięciu wybranej gwiazdki użytkownik zobaczył komunikat: "Dziękujemy za oddanie głosu. Twoja ocena: X"

Wykorzystaj gotowy komponent **Rating**
