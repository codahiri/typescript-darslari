# TypeScript haqida tushuncha

## TypeScript nima?

`TypeScript` `JavaScript` -ning takomillashgan shakli bo'lib, uning JavaScriptdan bir qancha afzalliklari mavjud. Bular:
  - Static typing
  - OOP hususiyatlari (Interfeyslar, klasslar, konstruktorlar...)
  - Runtime vaqtidagi kodni validatsiyasi
  - IntelliSence

## TypeScript-ning muallifi kim?

`TypeScript` `Microsoft` komponiyasi tomonidan tuzilgan

## Web brauzer arxitekturasi

<img src="https://image.slidesharecdn.com/web-browserarchitecture-150609231155-lva1-app6892/95/web-browser-architecture-2-638.jpg?cb=1433891674" alt="Web brauzer arxitekturasi" width="100%" />

## TypeScript-ning JavaScript-ga o'girilishi

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.webtrainingroom.com%2Fblogimages%2Fts2js.png&f=1&nofb=1" alt="conversion of typescript to javascript" width="100%" />

_main.ts_ fayli
```javascript
  function log(message){
    console.log(message);
  }
  var message = "Salom Dunyo"
  log(message);
```
_main.ts_ -ning kopilyatsiya qilinishi
```bash
  [ilosrim@developer] tsc main.ts
```
Kopmilyatsiya qilingan fayl
```bash
  [ilosrim@developer] ls
  [ilosrim@developer] main.ts main.js
```
_main.js_ -nini ishlatib ko'ramiz
```bash
  [ilosrim@developer] node main.js
  [ilosrim@developer] Salom Dunyo
```