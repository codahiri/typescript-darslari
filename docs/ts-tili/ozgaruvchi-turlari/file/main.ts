console.log('Hello World');

// === O'zgaruvchi turlari === //

// let num = 13
let num: number = 13;
console.log(num);

// let str = 'Salom'
let str: string = "Salom";
console.log(str);

let foo: boolean = true;

//let bazz;
let bazz: any;
bazz = "Hello World"
bazz = 12

// String tipidagi o'zgaruvchi ustida mallar
let str2: string = "Developer";
str2 = str2.toLowerCase()

let bazz2;
bazz2 = "Programmer";
bazz2 = (<string>bazz2).toUpperCase()