var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.draw = function () {
        // ...
        console.log(this.x.toString());
        console.log(this.y.toString());
    };
    return Shape;
}());
var shape = new Shape();
shape.x = 15;
shape.y = 21;
shape.draw();
