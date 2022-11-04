// Interfayslar
function drowShape(shapa) {
    // ...
    console.log(shape.x.toString());
}
var shape;
shape = { x: 10, y: 12 };
drowShape(shape);
var customer = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: function () { return "Hi there"; }
};
//commandline as string 
var options = { program: "test1", commandline: "Hello" };
console.log(options.commandline);
//commandline as a string array 
options = { program: "test1", commandline: ["Hello", "World"] };
console.log(options.commandline[0]);
console.log(options.commandline[1]);
//commandline as a function expression 
options = { program: "test1", commandline: function () { return "**Hello World**"; } };
var fn = options.commandline;
console.log(fn());
