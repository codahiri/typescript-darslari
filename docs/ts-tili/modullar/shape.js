"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
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
exports.Shape = Shape;
