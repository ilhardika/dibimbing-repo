// typescript
class Car {
  public make: string;
  private speed: number;

  constructor(make: string, speed: number) {
    this.make = make;
    this.speed = speed;
  }

  public accelerate(increment: number): void {
    this.speed += increment;
    console.log(`${this.make} is going at ${this.speed} km/h.`);
  }

  private secretMethod(): void {
    console.log("This is a secret method.");
  }
}

const car = new Car("Toyota", 120);
car.accelerate(20); // Output: Toyota is going at 140 km/h.
car.secretMethod();  // Error: 'secretMethod' is private and only accessible within class 'Car'.