// Soal: Konversi Angka ke Array Digit Terbalik
// Diberikan sebuah angka non-negatif, Anda harus mengembalikan digit-digit angka tersebut
// dalam sebuah array dalam urutan terbalik.

function digitize(n) {
  return Array.from(String(n), Number).reverse();
}

// Test Cases
console.log(digitize(12345)); // [5, 4, 3, 2, 1]
console.log(digitize(0)); // [0]
console.log(digitize(987654321)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(digitize(1001)); // [1, 0, 0, 1]
console.log(digitize(54321)); // [1, 2, 3, 4, 5]
