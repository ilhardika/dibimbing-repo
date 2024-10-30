// const student = {
//   // property
//   name: "Ilham",
//   age: 23,
//   address: "Surabaya",
// };

// // menampilkan name
// console.log(student.name);

console.log("====================================");

// const car = {
//   // property
//   type: "Fiat",
//   model: "500",
//   color: "White",

//   // method
//   start: function () {
//     console.log("Engine started");
//   },
//   stop: function () {
//     console.log("Engine stopped");
//   },
// };

// car.start();
// car.stop();

// for (const key in car) {
//   console.log(`key = ${key}, value = ${car[key]}`);
// }

console.log("=====================================");
// Car constructor function
function Car(type, model, color) {
  this.type = type;
  this.model = model;
  this.color = color;
}

// Add methods to the Car prototype
Car.prototype.start = function () {
  console.log("Engine started");
};

Car.prototype.stop = function () {
  console.log("Engine stopped");
};

// Create a new car object
const myCar = new Car("Fiat", "500", "White");

// Use the car object
console.log(`Car type: ${myCar.type}`);
myCar.start(); // Output: Engine started
myCar.stop(); // Output: Engine stopped

console.log("====================================");
const student = {
  // property
  name: "Ilham",
  nilaiUjian: [],
  rataNilaiUjian: 0,
  hitungRataNilaiUjian: function () {
    // rumus rata rata nilai ujian
    let total = 0;
    for (let i = 0; i < this.nilaiUjian.length; i++) {
      total += this.nilaiUjian[i]; // menjumlahkan semua nilai ujian
    }
    this.rataNilaiUjian = total / this.nilaiUjian.length;
  },
};

student.nilaiUjian = [80, 90, 100];
console.log(student.nilaiUjian);
student.hitungRataNilaiUjian();
console.log(student.rataNilaiUjian);
