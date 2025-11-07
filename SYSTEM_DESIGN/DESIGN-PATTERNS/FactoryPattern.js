class ShapeFactory {
  static drawShape(type) {
    if (type === "Circle") {
      return {
        type,
        draw: () => console.log("Drawing a circle"),
      };
    } else if (type === "Rectangle") {
      return {
        type,
        draw: () => console.log("Drawing a Rectangle"),
      };
    }
    throw new Error("Unknown shape. Cannot create");
  }
}

const circle = ShapeFactory.drawShape("Circle");
circle.draw();

const rectangle = ShapeFactory.drawShape("Rectangle");
rectangle.draw();
