class CarBuilder {
  constructor() {
    this.car = {};
  }
  addEngine(type) {
    this.car.engine = type;
    return this;
  }

  addColor(color) {
    this.car.color = color;
    return this;
  }

  addSeats(count){
    this.car.seats = count;
    return this;
  }

  build(){
    return this.car;
  }
}

const car = new CarBuilder().addColor('Black').addEngine('V8').addSeats(10).build();
console.log(car);