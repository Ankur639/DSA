class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    let speed = 0;
    this.getSpeed = () => speed;
    this.setSpeed = (value) => (speed = value > speed ? value : 0);
  }

  accelerate() {
    this.setSpeed(this.getSpeed() + 10);
    console.log(
      `${this.brand} ${
        this.model
      } is currently running at ${this.getSpeed()} km/h`
    );
  }
  brake() {
    this.setSpeed(this.getSpeed() - 10);
    console.log(
      `${this.brand} ${
        this.model
      } is currently brake at ${this.getSpeed()} km/h`
    );
  }
}

const myCar = new Car("Tesla", "Model 3");
myCar.accelerate();
console.log(myCar.getSpeed());
myCar.brake();
