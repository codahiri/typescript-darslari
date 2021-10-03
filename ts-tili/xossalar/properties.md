# Xossalar

Xossalar bizga class ichidagi _private_ o'zgaruvchilardan foydalanishimiz uchun yordam beradi.

```javascript
class Shape {
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

let shape = new Shape(10, 20);

shape.draw();
```

Shunday qilib class-ning o'zgaruvchisi bilan tashqaridan ishlash kerak bo'lsa _xossa_(property)-lardan foydalanish kerak bo'ladi. Agar class-ning ichida ishlatish kerak bo'lsa, oddiy _feild_ sifadita ishlatiladi.

_Property_-lar tashqaridan qaraganda oddiy _field_-dek ko'rinadi, ammo ichkarida _getter_ va _setter_ deb ataluvchi metodlardan tashkil topgan bo'ladi. _getter_ va _setter_ metodlari orqali qo'shimchalar qo'shishimiz mumkin.