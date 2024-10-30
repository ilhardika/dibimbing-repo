// Fungsi untuk mencari elemen yang ada di arr1 tapi tidak ada di arr2
function difference(arr1, arr2) {
  return arr1.filter((x) => !arr2.includes(x));
}

console.log(difference([1, 2, 3, 4], [2, 4, 6]));
// Output: [1, 3]
console.log("1 -------------------------------");

// Fungsi untuk mencari elemen yang ada di salah satu array tapi tidak ada di array lainnya
function symmetricDifference(arr1, arr2) {
  const diff1 = arr1.filter((x) => !arr2.includes(x));
  const diff2 = arr2.filter((x) => !arr1.includes(x));
  return [...diff1, ...diff2];
}

console.log(symmetricDifference([1, 2, 3], [3, 4, 5]));
// Output: [1, 2, 4, 5]
console.log("2 -------------------------------");

// Fungsi untuk membandingkan dua array dan mengembalikan elemen yang berbeda berdasarkan posisi
function compareArrays(arr1, arr2) {
  return arr1.filter((x, i) => x !== arr2[i]);
}

console.log(compareArrays([1, 3, 5, 5, 6], [1, 2, 5, 4, 7]));
// Output: [3]
console.log("3 -------------------------------");

// Fungsi untuk menghitung jumlah elemen yang berbeda antara dua array
function countDifferences(arr1, arr2) {
  return arr1.filter((x, i) => x !== arr2[i]).length;
}

console.log(countDifferences([1, 2, 3, 4], [1, 2, 5, 6]));
// Output: 2
console.log("4 -------------------------------");

// Fungsi untuk mencari perbedaan dengan indeks
function differenceWithIndex(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      result.push({ index: i, value: arr1[i] });
    }
  }
  return result;
}

console.table(differenceWithIndex([1, 2, 3, 4], [1, 3, 3, 5]));
// Output: [{ index: 1, value: 2 }, { index: 3, value: 4 }]
console.log("5 -------------------------------");
