interface IShape {
  x: number;
  y: number;
  draw(): void;
}

class Shape implements IShape {
  x: number;
  y: number;
  draw(){
    // ...
    console.log(this.x.toString()); 
    console.log(this.y.toString()); 
  }
}