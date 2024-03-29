"use strict";
class Shape {
    get x() {
        return this._x;
    }
    set x(value) {
        if (value < 0)
            throw new Error("Value cannot be less than 0.");
        this._x = value;
    }
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    draw() {
        //...
        console.log(this._x.toString());
        console.log(this._y.toString());
    }
}
let shape = new Shape(10, 20);
shape.x = 2;
