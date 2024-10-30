/**
 * selection sort (asc / desc)
 */

/*
cara melakukan selection sort:
misal array = [8,5,2,9,2,1,10] => expected output [1,2,2,5,8,9,10]
1. akan melakukan loop dari index 0 (pertama) sampai kedua terakhir
[8,5,2,9,2,1,10] => dari angka 8 sampai 1
2. di setiap looping (i), akan di loop semua angka di sebelah kanannya (j), jika lebih kecil, tuker posisinya 
i = 0 | j = 1
[8,    5,2,9,2,1,10] => loop j (start = i + 1 , sampai ujung array)
asc  => if (arr[j] < arr[i])) => {tuker arraynya}
desc => if (arr[j] > arr[i])) => {tuker arraynya}

i = 5 | j = 6
[1,2,2,5,8,   9,    10] => loop j (start = i + 1 , sampai ujung array)
*/

function selectionSortAsc(arr) {
  // Mendapatkan panjang array
  let n = arr.length;

  // Looping dari index 0 sampai kedua terakhir
  for (let i = 0; i < n - 1; i++) {
    // Inisialisasi index minimum
    let minIndex = i;

    // Looping dari index i+1 sampai akhir array
    for (let j = i + 1; j < n; j++) {
      // Jika elemen di index j lebih kecil dari elemen di index minIndex
      if (arr[j] < arr[minIndex]) {
        // Update index minimum
        minIndex = j;
      }
    }

    // Tukar elemen di index i dengan elemen di index minIndex
    let temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }

  // Return array yang sudah diurutkan
  return arr;
}

function selectionSortDesc(arr) {
  // Mendapatkan panjang array
  let n = arr.length;

  // Looping dari index 0 sampai kedua terakhir
  for (let i = 0; i < n - 1; i++) {
    // Inisialisasi index maksimum
    let maxIndex = i;

    // Looping dari index i+1 sampai akhir array
    for (let j = i + 1; j < n; j++) {
      // Jika elemen di index j lebih besar dari elemen di index maxIndex
      if (arr[j] > arr[maxIndex]) {
        // Update index maksimum
        maxIndex = j;
      }
    }

    // Tukar elemen di index i dengan elemen di index maxIndex
    let temp = arr[maxIndex];
    arr[maxIndex] = arr[i];
    arr[i] = temp;
  }

  // Return array yang sudah diurutkan
  return arr;
}

let angka = [1, 5, 23, 3, 5, 6, 3, 3, 45, 6, 53, 2, 6, 34, 523, 912];

console.log("dari kecil ke besar :", selectionSortAsc(angka));

// console.log('dari besar ke kecil :', selectionSortDesc(angka));
