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
