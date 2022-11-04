var Shape = /** @class */ (function () {
    function Shape(x, y) {
        this._x = x;
        this._y = y;
    }
    Object.defineProperty(Shape.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error("Value cannot be less than 0.");
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    Shape.prototype.draw = function () {
        //...
        console.log(this._x.toString());
        console.log(this._y.toString());
    };
    return Shape;
}());
var shape = new Shape(10, 20);
shape.x = 2;
