# Lab 2 16

## Zadanie 1
Wykorzystaj Zadanie 1 z workspace/lab2-15. Uzywajac `redux-thunk` przerób je w taki sposob, aby po kliknieciu przycisku increase akcja zwiekszenia licznika zostala wykonana z 2 sekundowym opoznieniem.
W kolejnym kroku dodaj warunkowe wysyłanie akcji tak aby licznik nie zwiększał się gdy jego wartosc przekroczy 10.

## Zadanie 2
Wykorzystujac Zadanie 5 z workspace/lab2-12/zadanie/src/App.js. Wykonaj je w taki sposob aby dane o losowym uzytkowniku przechowywane byly w storze. Pamiętaj aby zachowac wszystkie funkcjonalnosci(loader podczas ladowania danych oraz obsługa błędów).

## Zadanie 3
Twoim zdaniem jest wykonanie prostego bloga. Użytkownik powinien mieć możliwość wyświetlania listy postów, widoku pojedyńczego postu oraz widoku w którym będzie mógl dodać nowy post.
Każdy post powinien mieć możliwość przypisania kategorii. 
Strona powinna zawierać routing wg poniższego schematu: 
```
/
/post/:id
/admin
```
Każdy post powinien zawierać tytuł, kategorie do wyboru z listy oraz treść postu. Kategorie tworzone powinny być oddzielnie. 
Dane trzymaj w Redux Store. 

Do generowania identyfikatorow uzyj `node-uuid` https://github.com/kelektiv/node-uuid

## Zadanie 4
Stworz komponent licznika, który można zwiększać i zmniejszać dedykowanymi do tego przyciskami. Do zarządzania stanem wykorzystaj `useReducer`

## Zadanie 5
Stworzony komponent modalu. Kliknięcie w przycisk powinno wyświetlić popup jednocześnie zaciemniając całą stronę.

Zapoznaj się z React Portal https://reactjs.org/docs/portals.html

## Zadanie 6
Wykonaj poprzednie zadania w taki sposób aby to redux zarządzał wyświetlanymi modalami
