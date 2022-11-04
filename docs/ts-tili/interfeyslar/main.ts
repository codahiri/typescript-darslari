// Interfayslar

//Interfeys funksiyada
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

// Interfeys obyektda
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

// Union turi va Interfeys
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