// Menemukan angka yang muncul lebih dari sekali
function findRepeatingNumbers(arr) {
  return arr.filter((num, index) => arr.indexOf(num) !== index);
}
console.log(findRepeatingNumbers([1, 1, 10, 9, 2, 5, 6, 3, 6, 7, 7]));
// Output: [5, 6, 7]
console.log("1 ---------------------------------");

// Menghitung jumlah kemunculan setiap angka
function countOccurrences(arr) {
  count = {};

  for (let num of arr) {
    if (count[num]) {
      count[num]++;
    } else {
      count[num] = 1;
    }
  }

  return count;
}
console.log(countOccurrences([1, 2, 3, 2, 4, 1, 5, 1]));
// Output: {1: 3, 2: 2, 3: 1, 4: 1, 5: 1}
console.log("2 ---------------------------------");

// Menemukan angka yang muncul paling sering:
function findMostFrequent(arr) {
  // menghitung frequency pada array
  function countFrequency(element) {
    return arr.filter((v) => v === element).lenght;
  }

  // perbangingan sorting
  function compareFrequency(a, b) {
    return countFrequency(b) - countFrequency(a);
  }

  // urutkan dan ambil element pertama dari frequency yang sering muncul
  return arr.sort(compareFrequency)[0];
}
console.log(findMostFrequent([1, 2, 3, 2, 4, 1, 5, 1]));
// Output: "1"
console.log("3 ---------------------------------");

// Menghapus semua duplikat dari array:
function removeDuplicates(arr) {
  return arr.filter((val, index) => arr.indexOf(val) === index);
}
console.log(removeDuplicates([8, 2, 3, 2, 4, 1, 5, 1]));
// Output: [1, 2, 3, 4, 5]
console.log("4 ---------------------------------");

// Menemukan pasangan angka yang jumlahnya sama dengan target:
function findPairsWithSum(arr, target) {
  let pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }
  return pairs;
}
console.log(findPairsWithSum([1, 2, 3, 4, 5, 6], 7));
// Output: [[3, 4], [2, 5], [1, 6]]
console.log("5 ---------------------------------");

// Mengelompokkan angka-angka yang sama:
function groupSameNumbers(arr) {
  const result = {};
  for (let num of arr) {
    if (!result[num]) {
      result[num] = [];
    }
    result[num].push(num);
  }
  return result;
}
console.log(groupSameNumbers([1, 2, 3, 2, 4, 1, 5, 1]));
// Output: {1: [1, 1, 1], 2: [2, 2], 3: [3], 4: [4], 5: [5]}
console.log("6 ---------------------------------");
