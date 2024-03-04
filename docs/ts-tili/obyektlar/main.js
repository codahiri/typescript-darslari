"use strict";
class Shape {
    draw() {
        // ...
        console.log(this.x.toString());
        console.log(this.y.toString());
    }
}
let shape = new Shape();
shape.x = 15;
shape.y = 21;
shape.draw();
