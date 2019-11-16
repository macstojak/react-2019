# Lab 04

## Zadanie 1
Utwórz nowy projekt na którym będziemy pracować w dalszej części. Do stworzenia projektu wykorzystaj oficjalne narzędzie create-react-app.

Uwaga: sprawdź czy posiadasz w systemie node w wersji >= 8.10;

https://create-react-app.dev/docs/getting-started/

## Zadanie 2
Otwórz stworzony projekt w IDE i zapoznaj się z strukturą plików oraz dostępnymi komendami
```
npm start
npm run build
npm run test
```


## Zadanie 3
Usuń zawartość pliku src/App.js i stwórz swój pierwszy Functional Component o nazwie App, który zwróci:
```
<h1>Hello World!</h1>
```


## Zadanie 4
W tym samym pliku stwórz dwa inne komponenty (**Text** oraz **Image**) z których jeden wypisze jakiś dowolny tekst, a drugi wyświetli zdjęcie z internetu.

Wynikowy kod:
```
<h1>Hello World!</h1>
<p>tutaj miejsce na Twoj tekst</p>
<img src="https://picsum.photos/400?random" alt="obrazek" />
```

**Extra:** Spróbuj również wyświetlić obrazek **src/logo.svg**

## Zadanie 5
Przenieś stworzone komponenty do oddzielnych plików i zaimportuj je.


## Zadanie 6
Skorzystaj z formattera kodu Prettier. Zainstaluj go i skonfiguruj z swoim IDE. 

CLI: npx prettier --write "src/**/*.js"


Visual Studio Code: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

Szybka instalacja w VS Code:

CTRL + P: ext install esbenp.prettier-vscode

## Zadanie 7
Klient dostarczył szablon strony w pliku **szablon.html** i chciałby mieć taka aplikacje napisana w React. Twoim zadaniem jest podział dostarczonego kodu na komponenty.


## Zadanie 8
Niektóre komponenty z poprzedniego zadania są bardzo podobne i mogły by być reużywalne. Korzystając z Props postaraj sie przygotować komponenty tak aby nie duplikować kodu. 

## Zadanie 9
Zainstaluj i uruchom React Developer Tools. Wykorzystaj poprzednie zadanie żeby sprawdzić jak działa ta wtyczka.

https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi
