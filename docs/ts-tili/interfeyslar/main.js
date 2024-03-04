"use strict";
// Interfayslar
function drowShape(shapa) {
    // ...
    console.log(shape.x.toString());
}
let shape;
shape = { x: 10, y: 12 };
drowShape(shape);
var customer = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: () => { return "Hi there"; }
};
//commandline as string 
let options = { program: "test1", commandline: "Hello" };
console.log(options.commandline);
//commandline as a string array 
options = { program: "test1", commandline: ["Hello", "World"] };
console.log(options.commandline[0]);
console.log(options.commandline[1]);
//commandline as a function expression 
options = { program: "test1", commandline: () => { return "**Hello World**"; } };
let fn = options.commandline;
console.log(fn());
