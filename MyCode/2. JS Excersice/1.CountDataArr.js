let data_array = [
  1, 2, 4, 7, 3, 1, 5, 7, 8, 5, 9, 1, 3, 6, 2, 6, 5, 5, 5, 5, 1,
];

let countData = (arr, searchValue) => {
  let counterData = 0; // penampungan hitungan data
  // membaca semua data yang ada di dalam array
  arr.forEach((valueArray) => {
    // jika value array sama dengan value yang dicari
    if (valueArray === searchValue) {
      // counter data ditambah +1
      counterData++;
    }
  });

  // mengembalikan jumlah akhir counter
  return counterData;
};

// ada berapa banyak value yang ada dalam array ?
console.log(countData(data_array, 1));
