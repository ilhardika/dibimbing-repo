let arr = [10,  1000,   100];

// misal mau tuker 1000 dengan 100
let temp = arr[1]; // temp = 1000
arr[1] = arr[2] // ganti 1000 dengan 100
arr[2] = temp; // ganti dengan temp (1000)

console.log(arr);
