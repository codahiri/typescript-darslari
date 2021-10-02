# Konstruktorlar

Ushbu misolda biz konstruktordan asosiy classdagi _public_ va _protected_ -ni e'lon qilish uchun foydalanamiz. Bu xossalarga _Parameter properties_ deyiladi. Ular bizga konstruktor parametrini va a'zoni bir joyda e'lon qilishga imkon beradi.

TypeScript -dagi eng yaxshi hususiyatlardan biri bu konstruktor parametrlarini tegishli xususiyatga avtomatik tarzda berishidir.

Misol:

```javascript
class Car {
    public position: number;
    protected speed: number;

    constructor(position: number, speed: number) {
        this.position = position;
        this.speed = speed;
    }

    move() {
        this.position += this.speed;
    }
}
```

Bu kodlarning barchasi bitta konstruktorda davom ettirilishi mumkin:

```javascript
class Car {
    constructor(public position: number, protected speed: number) {}

    move() {
        this.position += this.speed;
    }
}

```

Va ikkalasi ham xuddi shunday natija bilan TypeScript -dan (dizayn vaqti va kompilyatsiya vaqti) JavaScript -ga ko'chiriladi, lekin ancha kam kod yoziladi:

```javascript
// js code
var Car = (function () {
  function Car(position, speed) {
    this.position = position;
    this.speed = speed;
  }
  Car.prototype.move = function () {
    this.position += this.speed;
  };
  return Car;
})();
```
Olingan sinflar konstruktorlari super () bilan asosiy sinf konstruktorini chaqirishlari kerak.
```javascript
class SelfDrivingCar extends Car {
    constructor(startAutoPilot: boolean) {
        super(0, 42);
        if (startAutoPilot) {
            this.move();
        }
    }
}

let car = new SelfDrivingCar(true);
console.log(car.position);  // access the public property position
```