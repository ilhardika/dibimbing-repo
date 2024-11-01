// Soal: Hitung Domba
// Buatlah fungsi countSheeps yang menerima sebuah array berisi boolean.
// Fungsi ini harus menghitung jumlah nilai true dalam array tersebut.
// Nilai selain true (seperti false, null, undefined) harus diabaikan.

function countSheeps(sheep) {
  return sheep.filter((s) => s === true).length;
}

// Test Cases
console.log(countSheeps([])); // 0
console.log(countSheeps([undefined])); // 0
console.log(countSheeps([null])); // 0
console.log(countSheeps([false])); // 0
console.log(countSheeps([true])); // 1
console.log(countSheeps([undefined, null, false, true])); // 1
console.log(
  countSheeps([undefined, null, false, true, true, false, null, undefined])
); // 2
console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
); // 17
