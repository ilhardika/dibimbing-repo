const _ = require("lodash");

const fruits = [
  { name: "apple", price: 1000 },
  { name: "banana", price: 2000 },
  { name: "orange", price: 3000 },
];

const nameFruits = _.map(fruits, "name");
console.log(nameFruits);

const filterPriceFruits = _.filter(fruits, (x) => x.price >= 2000);
console.log(filterPriceFruits);
