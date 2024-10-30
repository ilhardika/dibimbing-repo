let data_array = [
  1, 2, 4, 7, 3, 1, 5, 7, 8, 5, 9, 1, 3, 6, 2, 6, 5, 5, 5, 5, 1,
];

let filterArray = (arr, inputValue) => {
  let filteredArray = [];
  arr.forEach((valueArray) => {
    if (valueArray === inputValue) {
      filteredArray.push(valueArray);
    }
  });

  return filteredArray;
};

console.log(filterArray(data_array, 1));
