class Animal {
  constructor(name) {
    this.name = name;
  }

  speak(){
    console.log(`${this.name} speaks`);
  }
}

class Dog extends Animal{
    speak(){
        console.log(`${this.name} barks`);
    }
}

const animal = new Animal('Camel')
animal.speak();

const dog = new Dog('Leo');
dog.speak()
