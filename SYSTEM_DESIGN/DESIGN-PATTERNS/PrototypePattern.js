let original = {
  name: "Prototype",
  greet() {
    console.log(`${this.name} is called`);
  },
};

let clone = Object.create(original);
clone.name = "Clone";

original.greet();
clone.greet();
