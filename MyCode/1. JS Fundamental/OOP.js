// ini class
class Animal {
  // ini kerangka / construction
  constructor(name) {
    this.name = name;
  }

  // ini method / polymorphism
  sound() {
    console.log(`${this.name} makes a sound`);
  }
}

// ini inheritance
class Dog extends Animal {
  sound() {
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog("Spot");
dog.sound();
