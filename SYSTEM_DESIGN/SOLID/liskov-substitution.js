class Shape {
  getArea() {
    throw new Error("Method not implemented");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super()
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super()
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}
function printArea(shape) {
  console.log(`Area is ${shape.getArea()}`);
}
const circle = new Circle(10);
printArea(circle);

const reactangle = new Rectangle(10, 20);
printArea(reactangle);
