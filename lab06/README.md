# Lab 06

## Zadanie 1

Utwórz nowy projekt.

Stwórz komponent, który będzie wyświetlal przycisk oraz informacje o tym ile razy został wciśnięty.
Wykorzystaj do tego hook useState.

## Zadanie 2

Do komponentu z poprzedniego zadania dodaj efekt uboczny tak aby tytuł strony zawierał aktualną liczbę kliknięć. Wykorzystaj hook useEffect

## Zadanie 3

Przerób komponent z poprzedniego zadania w taki sposób aby po 20 kliknęciu przycisk został zablokowany. Możesz wykorzystać do tego atrybut `disabled`.

## Zadanie 4

Przenieś licznik klikniec wraz z przyciskiem do nowego komponentu. W komponencie App wykorzystaj go oraz dodaj 2 przyciski Poka i Ukryj licznik.
Pamiętaj aby podczas ukrywania licznika wyczyścić tytuł strony.

## Zadanie 5

Utwórz LanguageContext który będzie rozgłaszał informacje o języku używanym w aplikacji `['pl', 'en']`

## Zadanie 6

Wykorzystaj LanguageContext aby wyświetlić liste filmów wraz z opisem w języku używanym w aplikacji
Skorzystaj z pliku movies2.json, który zawiera opisy w kilku językach. Możesz wykorzystac komponent Consumer lub hook useContext.

## Zadanie 7

Utwórz komponent do zmiany języka na stronie. Komponent powinien zawierać 2 przyciski PL i EN, które będą zmieniały język. Przycisk aktywnego języka powinien być zablokowany przed ponownym kliknięciem.
