class Shape {
  constructor(name) {
    this.name = name;
  }
  calculateArea() {
    throw new Error("calculate area method not implemented");
  }
  displayArea() {
    console.log(`${this.name} has area ${this.calculateArea()}`);
  }
}

class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super("Reactangle");
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

const rectangle = new Rectangle(10, 20);
rectangle.displayArea();

const circle = new Circle(10);
circle.displayArea();
