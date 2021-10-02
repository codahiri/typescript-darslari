# Obyektlar
_Obyekt_ - bu kalit-qiymat juftligini o'z ichiga olgan misol. Qiymatlar skalyar qiymatlar yoki funktsiyalar yoki hatto boshqa obyektlar majmuasi bo'lishi mumkin. Sintaksis quyida keltirilgan:
```javascript
var object_name = { 
   key1: “value1”, //scalar value 
   key2: “value”,  
   key3: function() {
      //functions 
   }, 
   key4:[“content1”, “content2”] //collection  
};
```
Misol
```javascript
var person = { 
   firstname:"Tom", 
   lastname:"Hanks" 
}; 
//access the object values 
console.log(person.firstname) 
console.log(person.lastname)
```