interface IShape {
  x: number;
  y: number;
  draw(): void;
}

class Shape implements IShape {
  x: number;
  public y: number;
  
  constructor(x?: number, y?: number){
    this.x = x;
    this.y = y;
  }

  draw(){
    // ...
    console.log(this.x.toString()); 
    console.log(this.y.toString()); 
  }
}
let shape = new Shape();

/////////

class Student {  
  public studCode: number;  
  protected studName: string;  
  constructor(code: number, name: string){  
      this.studCode = code;  
      this.studName = name;  
      }  
}  
class Person extends Student {  
  private department: string;  

  constructor(code: number, name: string, department: string) {  
      super(code, name);  
      this.department = department;  
  }  
  public getElevatorPitch() {  
      return (`My unique code: ${this.studCode}, my name: ${this.studName} and I am in ${this.department} Branch.`);  
  }  
}  
let joeRoot: Person = new Person(1, "JoeRoot", "CS");  
console.log(joeRoot.getElevatorPitch()); 