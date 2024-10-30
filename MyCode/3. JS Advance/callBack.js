// ini bukan callback
// function getData(callback) {
//   return callback;
// }

// function renderName() {
//   return "muhsin";
// }

// console.log(getData(renderName()));

// function handleSay(callback) {
//   const name = "muhsin";
//   const age = 19;
//   return callback(name, age);
// }

// function handleGreeting(name, age) {
//   return `hello ${name}, umur saya ${age}`;
// }

// console.log(handleSay(handleGreeting));

function countAge(callback) {
  const bornYear = getBornYear(1991);
  const umur = getThisYear() - bornYear;
  const test = 0;
  return callback(bornYear, umur, test);
}

function getBornYear(yearBorn) {
  return yearBorn;
}

function getThisYear() {
  return new Date().getFullYear();
}

function printAge(bornYear, age) {
  return `Saya lahir pada tahun ${bornYear}, Umur saya sekarang adalah ${age} tahun`;
}

console.log(countAge(printAge));
