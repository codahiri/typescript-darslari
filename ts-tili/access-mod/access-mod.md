# TypeScript Access Modifiers-lar
## Ma'lumotlarni yashirish
Boshqa dasturlash tillari singari, Typescript ham kirish darajalarini o'zgartirish darajalarini sinf darajasida ishlatishga imkon beradi. Bu sinf a'zosiga to'g'ridan -to'g'ri kirishni boshqarishni beradi. Bu sinf a'zolari funktsiyalar va xususiyatlardir. Biz sinf a'zolaridan o'z sinfida, sinfdan tashqarida yoki uning bolasi yoki sinfidan foydalanishimiz mumkin. Kirish modifikatori sinf a'zolarining xavfsizligini oshiradi va ularning noto'g'ri ishlatilishining oldini oladi. Bundan tashqari, biz uni sinf a'zolarining ko'rinishini nazorat qilish uchun ham ishlatishimiz mumkin. Agar sinfga hech qanday kirish o'zgartirish vositasi o'rnatilishi shart bo'lmasa, TypeScript avtomatik ravishda barcha sinf a'zolariga ommaviy kirish modifikatorini o'rnatadi.

> Class o'z ma'lumotlari a'zolarining boshqa sinf a'zolariga ko'rinishini boshqarishi mumkin. Bu imkoniyat ma'lumotlarni yashirish yoki inkapsulatsiya deb nomlanadi.

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
   public str:string = "hello" 
   private str2:string = "world" 
}
 
var obj = new Encapsulate() 
console.log(obj.str)     //accessible 
console.log(obj.str2)   //compilation Error as str2 is private
```