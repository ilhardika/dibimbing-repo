// ---------------------------------------------------------------------
// 1. SearchThree
// [INSTRUCTIONS]
// - Anda diminta untuk membuat sebuah function untuk mencari angka yang mengandung angka 3 dari data dibawah
// - kemudian jumlahkan berapa banyak angka 3 tersebut

console.log(
  SearchThree([
    [10, 20, 30, 40, 50],
    [30, 11, 3, 13, 24],
    [12, 13, 44, 93, 21],
    [[11, 20], [33], [3]],
  ])
);
// output: Dari data tersebut terdapat angka 3 berjumlah 9 character
console.log(
  SearchThree([
    [[1133, 210], [50]],
    [13, 2, 3, 77, 60],
    [23, 1, 4, 3, 55],
    [[3, 200], [333]],
  ])
);
// output: Dari data tersebut terdapat angka 3 berjumlah 10 character
console.log(SearchThree([[31, 20, 98, 36, 333]]));
// output: Dari data tersebut terdapat angka 3 berjumlah 5 character
console.log(SearchThree([]));
// output: Data kosong!

function SearchThree(arr) {
  // Inisialisasi variabel penghitung
  let count = 0;

  // Fungsi untuk menghitung kemunculan '3' dalam elemen
  function countThrees(element) {
    // Jika elemen adalah array, kita lakukan iterasi di dalamnya
    if (Array.isArray(element)) {
      for (let subElement of element) {
        countThrees(subElement); // Panggil fungsi untuk elemen di dalam array
        console.log(`${subElement} | ${element}`);
      }
    } else {
      // Ubah elemen menjadi string dan hitung kemunculan '3'
      let numStr = element.toString();
      for (let char of numStr) {
        if (char === "3") {
          count++; // Increment count jika menemukan '3'
        }
      }
    }
  }

  // Panggil fungsi untuk menghitung angka '3' di seluruh array
  countThrees(arr);

  // Periksa apakah count lebih dari 0
  if (count > 0) {
    return `Dari data tersebut terdapat angka 3 berjumlah ${count} character`;
  } else {
    return "Data kosong!";
  }
}
