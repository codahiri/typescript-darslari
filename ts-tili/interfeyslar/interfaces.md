# Interfeyslar

_Interfeys_ - bu subyekt mos kelishi kerak bo'lgan sintaktik shartnoma. Boshqacha qilib aytganda, interfeys har qanday ob'ekt rioya qilishi kerak bo'lgan sintaksisini aniqlaydi.

## Interfeys funksiyada
Interfeyslar funksiyamizda parametrlar ko'payib ketsa, ularni ma'lum bir to'plamga birlashtirib olish uchun ishlatiladi.

Masalan:
```javascript
interface Shape {
  x: number;
  y: number;
}

function drowShape(shapa: Shape){
  // ...
  console.log(shape.x.toString()); 
}

let shape: Shape;
shape = {x: 10, y: 12};
drowShape(shape)
```

## Interfeys obyektda
```javascript
interface IPerson { 
   firstName:string, 
   lastName:string, 
   sayHi: ()=>string 
} 

var customer:IPerson = { 
   firstName:"Tom",
   lastName:"Hanks", 
   sayHi: ():string =>{return "Hi there"} 
} 
```
Yuqoridagi misol interfeysni belgilaydi. _customer_ obyekti _IPerson_ turiga kiradi. Shunday qilib, endi interfeysda ko'rsatilgan barcha xususiyatlarni aniqlash obyekt uchun majburiy bo'ladi.

> Interfeyslar JavaScript -ga o'zgartirilmaydi. Bu TypeScript -ning bir qismi. Agar siz TS Playground asbobining skrinshotini ko'rsangiz, interfeysni sinfdan farqli ravishda e'lon qilganingizda JavaScript-da chiqmaydi. Shunday qilib, interfeyslar JavaScript ish vaqtining no'linchi ta'siriga ega.

## Union turi va Interfeys
Quyidagi misol Union turi va interfeysidan foydalanishni ko'rsatadi:
```javascript
interface RunOptions { 
   program:string; 
   commandline:string[]|string|(()=>string); 
} 

//commandline as string 
let options:RunOptions = {program:"test1",commandline:"Hello"}; 
console.log(options.commandline)  

//commandline as a string array 
options = {program:"test1",commandline:["Hello","World"]}; 
console.log(options.commandline[0]); 
console.log(options.commandline[1]);  

//commandline as a function expression 
options = {program:"test1",commandline:()=>{return "**Hello World**";}}; 

let fn:any = options.commandline; 
console.log(fn());
```

## Interfeyslar va Array
Interfeys array foydalanadigan kalit turini ham, undagi yozuv turini ham aniqlay oladi. Indeks matinli yoki raqamli bo'lishi mumkin.
```javascript
interface namelist { 
   [index:number]:string 
} 
let list2:namelist = ["John",1,"Bran"] //Error. 1 is not type string

interface ages { 
   [index:string]:number 
}
let agelist:ages; 
agelist["John"] = 15   // Ok 
agelist[2] = "nine"   // Error
```

## Interfeys va Inheritance
Interfeys boshqa interfeyslar yordamida kengaytirilishi mumkin. Boshqacha aytganda, interfeys boshqa interfeysdan meros bo'lib o'tishi mumkin. Typescript interfeysga bir nechta interfeyslarni meros qilib olish imkonini beradi.
Interfeyslar orasidagi merosni amalga oshirish uchun extends kalit so'zidan foydalaning.
```javascript
interface Person { 
   age:number 
} 

interface Musician extends Person { 
   instrument:string 
} 

let drummer = <Musician>{}; 
drummer.age = 27 
drummer.instrument = "Drums" 
console.log("Age:  "+drummer.age) console.log("Instrument:  "+drummer.instrument)
```
## Ko'p interfeysli merosxo'rlik
```javascript
interface IParent1 { 
   v1:number 
} 

interface IParent2 { 
   v2:number 
} 

interface Child extends IParent1, IParent2 { } 
let Iobj:Child = { v1:12, v2:23} 
console.log("value 1: "+this.v1+" value 2: "+this.v2)
```