// ---------------------------------------------------------------------
// 3. Custom Sort
// [INSTRUCTIONS]
// Anda diminta untuk mengurutkan data dengan ketentuan sebagai berikut
// - Urutkan berdasarkan frekuensi kemunculan (yang lebih sering muncul taruh dibagian paling depan).
// - Jika dua atau lebih string memiliki frekuensi kemunculan yang sama, urutkan  ascending.

console.log(
  customSort([
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "apple",
    "orange",
    "banana",
    "banana",
  ])
);
// Output:
// ["banana", "banana", "banana",  "banana", "apple", "apple", "apple", "orange", "orange"]
console.log(customSort(["a", "b", "a", "c", "b", "a", "c", "b"]));
// Output:
// ["a", "a", "a", "b", "b", "b", "c", "c"]
console.log(customSort([1, 2, 3, 1, 4, 1, 5, 6, 2, 7, 4, 2, 2]));
// Output:
// [2, 2, 2, 2, 1, 1, 1, 4, 4, 3, 5, 6, 7]

function customSort(data) {
  // Buat objek untuk menghitung frekuensi setiap elemen
  const frequencyMap = {};

  // Hitung frekuensi setiap elemen
  for (let item of data) {
    frequencyMap[item] = (frequencyMap[item] || 0) + 1;
  }

  // Buat array dari objek yang berisi item dan frekuensi
  const dataArray = [];
  for (let item in frequencyMap) {
    dataArray.push({ item: item, frequency: frequencyMap[item] });
  }

  // algoritma bubble sort
  for (let i = 0; i < dataArray.length; i++) {
    for (let j = 0; j < dataArray.length - i - 1; j++) {
      if (dataArray[j].frequency < dataArray[j + 1].frequency) {
        // Tukar elemen
        let temp = dataArray[j];
        dataArray[j] = dataArray[j + 1];
        dataArray[j + 1] = temp;
      } else if (dataArray[j].frequency === dataArray[j + 1].frequency) {
        // Jika frekuensi sama, urutkan berdasarkan item secara menaik
        if (dataArray[j].item > dataArray[j + 1].item) {
          let temp = dataArray[j];
          dataArray[j] = dataArray[j + 1];
          dataArray[j + 1] = temp;
        }
      }
    }
  }

  // Buat array hasil akhir yang terurut
  const sortedArray = [];
  for (let obj of dataArray) {
    for (let i = 0; i < obj.frequency; i++) {
      sortedArray.push(obj.item);
    }
  }

  return sortedArray;
}
