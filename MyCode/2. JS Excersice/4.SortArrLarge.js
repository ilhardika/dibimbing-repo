function sortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        // Ubah menjadi sorting ascending
        let x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
      }
    }
  }
  return arr; // Mengembalikan array yang telah diurutkan
}

let arr = [5, 3, 8, 6, 7, 2];

console.log(sortArray(arr).join(", "));
