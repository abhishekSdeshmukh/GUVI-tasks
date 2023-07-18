class Circle {
    private radius: number;
    private color: string;
  
    constructor(radius: number = 1.0, color: string = "red") {
      this.radius = radius;
      this.color = color;
    }
  
    getRadius(): number {
      return this.radius;
    }
  
    setRadius(radius: number): void {
      this.radius = radius;
    }
  
    getColor(): string {
      return this.color;
    }
  
    setColor(color: string): void {
      this.color = color;
    }
  
    toString(): string {
      return `Circle[radius=${this.radius}, color=${this.color}]`;
    }
    
    getArea(): number {
      return Math.PI * Math.pow(this.radius, 2);
    }
  
    getCircumference(): number {
      return 2 * Math.PI * this.radius;
    }
  }
  
  const circle1 = new Circle();
const circle2 = new Circle(1.0,"red");
const circle3 = new Circle(3, "green");

circle1.setRadius(6);
circle1.setColor("white");
circle2.setRadius(9);

console.log(circle1.toString());
console.log(circle2.toString());
console.log(`Area of circle is ${circle3.getArea().toFixed(2)}`);
console.log(`Circumference of circle is ${circle3.getCircumference().toFixed(2)}`);