// linear search
const linearSearch = (data, key) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i] == key) {
      return `key ${data[i]} found at index ${i}`;
    }
  }
  return -1;
};

const data = [1, "2", 3, 4, 2, 5, 6, 7, 8, 9, 10];
console.log(linearSearch(data, 2)); //output : key 2 found at index 1

//Binary Search
function binarySearch(sortedArray, target) {
  let left = 0;
  let right = sortedArray.length - 1;
  while (left <= right) {
    let tengah = Math.floor((left + right) / 2);
    if (target === sortedArray[tengah]) {
      return tengah;
    } else if (sortedArray[tengah] < target) {
      left = tengah + 1;
    } else {
      right = tengah - 1;
    }
  }
  return `data tidak ditemukan`;
}
const data2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearch(data2, 6)); //output : 5

// index of
const data3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(data3.indexOf(3)); //ouput : 2

// find & findIndex
const data4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(data4.find((data) => data > 6)); //output : 7
console.log(data4.findIndex((data) => data > 2)); //output : 2

// includes
const data5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(data5.includes(3)); //output : true
console.log(data5.includes(10)); //output : false

// filter & includes
const buah = ["mangga", "pisang", "jambu"];
let cari = buah.filter((x) => x.includes("m"));
console.log(cari);

// .indexOf() -> return "index"
// .find() -> nilai pertama ketemu "value"
// .findindex() -> index pada nilai pertama ketemu "index"
// .includes() -> mengembalikan nilai yang terkandung "boolean"
// .filter() -> mengembalikan semua nilai yang dicari dan ditempatkan dalam bentuk "array"
