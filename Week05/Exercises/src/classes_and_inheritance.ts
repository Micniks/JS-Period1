abstract class Shape {
  private _color: string;
  constructor(color: string) {
    this._color = color;
  }
  abstract get area(): number;
  abstract get perimeter(): number;
  //A
  get color(): string {
    return this._color;
  }
  set color(newColor: string) {
    this._color = newColor;
  }
  public toString = (): string => {
    return "a " + this._color + " shape";
  };
}

//B

class Circle extends Shape {
  private _radius: number;
  constructor(colour: string, radius: number) {
    super(colour);
    this._radius = radius;
  }
  get area(): number {
    return Math.PI * Math.pow(this._radius, 2);
  }
  get perimeter(): number {
    return Math.PI * this._radius * 2;
  }
  get radius(): number {
    return this._radius;
  }
  set radius(newRadius: number) {
    this._radius = newRadius;
  }
}

let testCircle: Circle = new Circle("Purple", 10);
console.log(testCircle.toString());
console.log("Perimeter: " + String(testCircle.perimeter));
console.log("Area: " + String(testCircle.area));
console.log("Radius: " + String(testCircle.radius));
console.log("Color: " + testCircle.color);
console.log("\n\n");

//C
class Cylinder extends Circle {
  private _height: number;
  constructor(colour: string, radius: number, height: number) {
    super(colour, radius);
    this._height = height;
  }
  get height(): number {
    return this._height;
  }
  set height(newHeight: number) {
    this._height = newHeight;
  }
  get perimeter(): number {
    throw "Not implemented yet!";
  }
  get area(): number {
    return (2 * Math.PI * Math.pow(this.radius, 2)) + 2 * Math.PI * this.radius * this._height;
  }
  get volume(): number{
    return Math.PI * this.radius * 2 * this._height;
  }
}

let testCylinder: Cylinder = new Cylinder("Green", 10, 40)
console.log(testCylinder.toString());
console.log("Area: " + String(testCylinder.area));
console.log("Radius: " + String(testCylinder.radius));
console.log("Height: " + String(testCylinder.height))
console.log("Color: " + testCylinder.color);
