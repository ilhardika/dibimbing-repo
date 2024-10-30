const object = {
  name: "Joni",
  age: 37,
  greet: function () {
    return `Hello nama saya ${this.name}, usia saya ${this.age}`;
  },
};

// console.log(object);
// console.log(object.name);
// console.log(object.greet());

class Animal {
  constructor(param1, param2) {
    this.name = param1;
    this.voice = param2;
  }

  speak() {
    console.log(`${this.name} bersuara ${this.voice}`);
  }
}

class Cat extends Animal {
  constructor(name, voice, ras) {
    super(name, voice);
    this.ras = ras;
  }

  getRas() {
    console.log(`${this.name} berjenis ${this.ras}`);
  }
}

const persia = new Cat("Susi", "meowwww", "Persia");
persia.speak();
persia.getRas();
