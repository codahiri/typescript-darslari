# O'zgaruvchi turlari

TypeScript-da

- Number
- String
- Boolean
- Any
- Array
  tipidagi o'zgaruvchi turlari mavjud.

## O'zgaruvchlarni e'lon qilish:
```javascript
// Number
let num: number;

// String
let str: string;

// Boolean
let foo: boolean;

// Any
let baz;

// Array
let arr: number[];
```

## O'zgaruvchilarga qiymat berish:
```javascript
  // Number
  let num: number = 13;

  // String
  let str: string = "Salom";

  // Boolean
  let foo: boolean true;

  // Any
  let bazz: any;
  bazz = "Hello World";
  bazz = 12;

  // Array
  let arr: number[] = [1,2,3];
  let arr2: string[] = ['a','b','c']
  let arr3: any[] = [1,2,'Salom',true]
```

## `enum`
Bulardan tashqari `enum` tipi ham mavjud. Uning vazifasi bir biriga aloqador bo'lgan o'zgarmaslarni bitta kontentga yig'ib berishdir.
Masalan:

```javascript
  enum Color {Red = 150, Green = 15, Blue = 20};
  let textColor: Color.Red;
```

## O'zgaruvchi tiplari qiymatlari bilan ishlash

_String_ tipidagi o'zgaruvchi ustida amallar
```javascript
  let str: string = "Developer";
  str = str.toLowerCase();
  // O'zgaruvchi turini bildirish 1
  let bazz2;
  bazz2 = "Programmer";
  bazz2 = (<string>bazz2).toUpperCase()

  // O'zgaruvchi turini bildirish 2
  let bazz3;
  bazz3 = "Programmer";
  bazz3 = (bazz3 as string).toUpperCase()
```
