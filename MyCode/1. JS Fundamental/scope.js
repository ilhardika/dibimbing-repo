const profile = require("./export.js");

let globalVar = "ini adalah Global Variable";

function myFunction(arg) {
  let functionVar = "ini adalah Function Variable";
  if (arg) {
    let blockVar = "ini adalah Block Variable";
    console.log(`true = ${globalVar}, ${functionVar}, ${blockVar}`);
  } else {
    let blockVar = "ini adalah Block Variable";
    console.log(`false = ${globalVar}, ${functionVar}, ${blockVar}`);
  }
}

myFunction(false);
console.log(`hi! i'm ${profile[0]}, ${profile.age} years old`);
