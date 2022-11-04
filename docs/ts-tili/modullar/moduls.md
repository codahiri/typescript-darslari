# Modullar

_shape.ts_ fayli
```javascript
export class Shape {
  private _x: number;
  private _y: number;

  get x(){
    return this._x;
  }

  set x(value: number) {
    if (value<0)
      throw new Error("Value cannot be less than 0.");
    this._x = value;
  }

  constructor(x?: number, y?: number) {
    this._x = x;
    this._y = y;
  }

  draw () {
    //...
    console.log(this._x.toString());
    console.log(this._y.toString());
  }
}
```
_main.ts_ fayli
```javascript
import { Shape } from "./shape";
let shape = new Shape(10, 20);
shape.x = 2;
```