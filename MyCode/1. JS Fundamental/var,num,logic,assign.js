// variabel
let firstName = "Ilham";
let lastName = "Hardika";
console.log(`nama = ${firstName} ${lastName}`);

let a = 20;
let b = 12;

// operator angka
const pertambahan = a + b;
const pengurangan = a - b;
const perkalian = a * b;
const pembagian = a / b;
console.log(
  `a = ${a} b = ${b} \npertambahan = ${pertambahan} \npengurangan = ${pengurangan} \nperkalian = ${perkalian} \npembagian = ${pembagian}`
);

// assignment
console.log("Operator Assingment");
console.log("a += b:", (a += b)); // output 32
console.log("a -= b:", (a -= b)); // output 16
console.log("a *= b:", (a *= b)); // output 256
console.log("a /= b:", (a /= b)); // output 8
console.log("a %= b:", (a %= b)); // output 0
console.log("a **= b:", (a **= b)); // output 256

// logika perbandingan
console.log("operator logic");
console.log("a && b:", a && b); // output true
console.log("a || b:", a || b); // output true
console.log("!a:", !a); // output false
console.log("a === b:", a === b); // output false
console.log("a !== b:", a !== b); // output true
console.log("a > b:", a > b); // output true
console.log("a < b:", a < b); // output false
console.log("a >= b:", a >= b); // output true
console.log("a <= b:", a <= b); // output false

// a=20 > 10 (true) && b=12 < 24 (true) -> operator AND = true -> masuk if pertama
if (a > 10 && b < 24) {
  console.log("if pertama");
}
// a=20 < 10 (false) || b=12 > 24 (false) -> operator OR = false -> tidak masuk if kedua
else if (perkalian < pembagian || a < penjumlahan) {
  console.log("if kedua");
}

// object
const person = {
  name: "Ilham",
  age: 20,
};
console.log(person);
console.log(`nama  = ${person.name} \numur = ${person.age}`);
