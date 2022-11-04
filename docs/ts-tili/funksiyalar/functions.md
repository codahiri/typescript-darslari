# Funksiyalar

## Ko'rsatkich funksiyalar (Arrow functions)

```javascript
// js funksiya
let log = function (message) {
  consloe.log(message);
};
log(message);

// ts ko'rsatkich funksiya
let doLog = (message: any) => console.log(message);
doLog();
```

## Typescript qaytaruvchi funksiya

```javascript
function getMessage(): string {
  return "Hello World!";
}

function sayHello() {
  var msg = getMessage();
  console.log(msg);
}

sayHello();
```

## Typescript parametrli funksiya

```javascript
function paramTest(rollNo: number, name: string) {
  console.log(rollNo);
  console.log(name);
}
paramTest(645, "Joe");
```

## Typescript ixtiyoriy parametrli funksiya

```javascript
function dispDetails(fname: string, lname?: string) {
  console.log("Fisrt Name", fname);

  if (lname != undefined) console.log("Last Name", lname);
}
dispDetails("Nick");
dispDetails("Jack", "Joe");
```

## Typescript rest parametrli funksiyalari

```javascript
function showNames(...names: string[]) {
  for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
}
showNames("Ali", "Vali", "Eshmat", "Toshmat");
showNames("Jack", "Joe", "Bruce", "Lee", "Vandam");
```

## TypeScript default parametrli funksiyalari

```javascript
function displayDetails(name: string, sport: string = "Football") {
  console.log(`Name: ${name}, Sport: ${sport}`);
}
displayDetails("Jai");
displayDetails("Vivek", "Football");
```

## TypeScript anonymous funksiyalari

```javascript
var sayHello = function () {
  return "Hello World!";
};
console.log(sayHello());
```
