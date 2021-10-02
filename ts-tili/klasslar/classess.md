# Classlar

_TypeScript_ - bu obyektga yo'naltirilgan JavaScript. TypeScript classlar, interfeyslar va boshqalar kabi obyektga yo'naltirilgan dasturlash xususiyatlarini qo'llab-quvvatlaydi. `OOP` nuqtai nazaridan class - bu obyektlarni yaratish rejasi. Class obyekt uchun ma'lumotlarni qamrab oladi. Typescript bu class deb nomlangan kontseptsiyani qo'llab-quvvatlaydi. JavaScript ES5 yoki undan oldingi versiyalari classlarni qo'llab-quvvatlamas edi. Typescript bu xususiyatni ES6 -dan oladi.

## Class Yaratish

```javascript
class class_name {
  //class scope
}
```

_Class_ kalit so'zidan keyin class nomi keladi. Classni nomlashda identifikatorlar qoidalari hisobga olinishi kerak.

Class ta'rifi quyidagilarni o'z ichiga olishi mumkin:

- _Fields_ - bu classda e'lon qilingan har qanday o'zgaruvchi. _Fields_ obyektlarga tegishli ma'lumotlarni ko'rsatadi
- Constructors - class obyektlari uchun xotira ajratish uchun javobgardir
- Functions - funktsiyalar obyekt bajarishi mumkin bo'lgan harakatlarni ifodalaydi. Ba'zida ularni usullar (metod) deb ham atashadi

Class yaratish
```javascript
class Car {
  //field
  engine: string;

  //constructor
  constructor(engine: string) {
    this.engine = engine;
  }

  //function
  disp(): void {
    console.log("Engine is  :   " + this.engine);
  }
}
```

Namuna oluvchu obyekt yaratish
```javascript
//create an object
var obj = new Car("XXSY1");

//access the field
console.log("Reading attribute value Engine as :  " + obj.engine);

//access the function
obj.disp();
```

## Class Inheritance / Classdan nusxa olish
TypeScript Inheritance (meros) tushunchasini qo'llab -quvvatlaydi. Inheritance - bu dasturning mavjud classdan yangi classlar yaratish qobiliyati. Yangi classlar yaratish uchun kengaytirilgan class ota -ona/super sinf deb ataladi. Yangi yaratilgan classlar bola/kichik sinflar deb ataladi.
Boshqa classdan nusxa olish uchun _"extends"_ kalit so'zidan foydalaniladi. Avlod sinflari ajdod sinfining shaxsiy a'zolari va konstruktorlaridan tashqari barcha xususiyatlar va usullarni meros qilib oladi.

Sintaksis:
```javascript
class child_class_name extends parent_class_name
```
```javascript
class Shape { 
   Area:number 
   
   constructor(a:number) { 
      this.Area = a 
   } 
} 

class Circle extends Shape { 
   disp():void { 
      console.log("Area of the circle:  "+this.Area) 
   } 
}
  
var obj = new Circle(223); 
obj.disp()
```
Meros olishni quyidagicha tasniflash mumkin:
- **Single** - har bir class maksimal bitta ota -ona classdan kengaytirilishi mumkin.
- **Multiple** - class bir nechta classlardan meros bo'lib o'tishi mumkin. TypeScript bir nechta merosni qo'llab -quvvatlamaydi.
- **Multi-level** - Quyidagi misol ko'p darajali meros qanday ishlashini ko'rsatadi.

```javascript
class Root { 
   str:string; 
} 

class Child extends Root {} 
class Leaf extends Child {} //indirectly inherits from Root by virtue of inheritance  

var obj = new Leaf(); 
obj.str ="hello" 
console.log(obj.str)
```

## Static kalit so'zi
Statik kalit so'zni sinf a'zolariga qo'llash mumkin. Statik o'zgaruvchi dastur bajarilgunga qadar o'z qiymatlarini saqlaydi. Statik a'zolarga sinf nomi bilan murojaat qilinadi.
```javascript
class StaticMem {  
   static num:number; 
   
   static disp():void { 
      console.log("The value of num is"+ StaticMem.num) 
   } 
} 

StaticMem.num = 12     // initialize the static variable 
StaticMem.disp()      // invoke the static method
```

## Ma'lumotlarni yashirish
Class o'z ma'lumotlari a'zolarining boshqa sinf a'zolariga ko'rinishini boshqarishi mumkin. Bu imkoniyat ma'lumotlarni yashirish yoki inkapsulatsiya deb nomlanadi.

TypeScript tomonidan qo'llab -quvvatlanadigan kirish modifikatorlari -

| No | Spesifikator va tavsifga kirish                                                                                                                                                       |
|----|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1. | public                                                                                                                                                                                |
|    | Ma'lumotlarning umumiy a'zosi universal foydalanish imkoniyatiga ega. Sinfdagi ma'lumotlar a'zolari sukut bo'yicha umumiydir.                                                         |
| 2. | private                                                                                                                                                                               |
|    | Shaxsiy ma'lumotlar a'zolariga faqat ushbu a'zolarni belgilaydigan sinf ichida kirish mumkin. Agar tashqi sinf a'zosi shaxsiy a'zoga kirishga harakat qilsa, kompilyator xato qiladi. |
| 3. | protected                                                                                                                                                                             |
|    | Himoyalangan ma'lumotlar a'zosiga oldingi sinflar a'zolari va bolalar sinflari a'zolari kirishlari mumkin.                                                                            |

```javascript
class Encapsulate { 
   str:string = "hello" 
   private str2:string = "world" 
}
 
var obj = new Encapsulate() 
console.log(obj.str)     //accessible 
console.log(obj.str2)   //compilation Error as str2 is private
```

## Classlar va Interfaces
```javascript
interface ILoan { 
   interest:number 
} 

class AgriLoan implements ILoan { 
   interest:number 
   rebate:number 
   
   constructor(interest:number,rebate:number) { 
      this.interest = interest 
      this.rebate = rebate 
   } 
} 

var obj = new AgriLoan(10,1) 
console.log("Interest is : "+obj.interest+" Rebate is : "+obj.rebate )

```