"use strict";
class Shape {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        // ...
        console.log(this.x.toString());
        console.log(this.y.toString());
    }
}
let shape = new Shape();
/////////
class Student {
    constructor(code, name) {
        this.studCode = code;
        this.studName = name;
    }
}
class Person extends Student {
    constructor(code, name, department) {
        super(code, name);
        this.department = department;
    }
    getElevatorPitch() {
        return (`My unique code: ${this.studCode}, my name: ${this.studName} and I am in ${this.department} Branch.`);
    }
}
let joeRoot = new Person(1, "JoeRoot", "CS");
console.log(joeRoot.getElevatorPitch());
