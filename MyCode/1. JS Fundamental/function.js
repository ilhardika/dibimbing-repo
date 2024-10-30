function greet(name) {
  console.log(`Hello ${name}`);
}
greet("ilham");

function add(a, b) {
  const result = a + b;
  return console.log(result);
}
add(1, 2);

let pengurangan = function (a, b) {
  return a - b;
};
console.log(pengurangan(10, 5));

const greetArrow = (nama) => console.log(`Hello ${nama}`);
greetArrow("ilham");

// function greetings(name, callback) {
//   console.log(`Hello ${name}`);
//   callback();
// }
// function callMe() {
//   console.log("im call back");
// }
// greetings("ilham", callMe);

// penggunaan callback arrow function
const greetingsArrow = (name, callback) => {
  console.log(`Hello ${name}`);
  callback();
};
const callMeArrow = () => console.log("im call back");
greetingsArrow("ilham", callMeArrow);
