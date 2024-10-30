function sortArray(arr, sortingType) {
  if (sortingType === "DESC") {
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
  } else if (sortingType === "ASC") {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
          // Ubah menjadi sorting ascending
          let x = arr[i];
          arr[i] = arr[j];
          arr[j] = x;
        }
      }
    }
  } else {
    console.log("Sorting type not found");
  }
  return arr; // Mengembalikan array yang telah diurutkan
}

let arr = [5, 3, 8, 6, 7, 2];

console.log(sortArray(arr, "ASC"));
console.log(sortArray(arr, "DESC"));
