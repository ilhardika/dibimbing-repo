/**
 * Rotate array 2 Dimensi
 *
 * NOTE : BEBAS MENGGUNAKAN JS FUNCTION APAPUN
 */

const rotate1D = (arr, num) => {
  // tulis code di sini
  let newArr = [...arr]; // clone array

  let amountRotate = num % newArr.length;

  for (let i = 1; i <= amountRotate; i++) {
    let lastValue = newArr.pop();
    newArr.unshift(lastValue);
  }
  return newArr;
};

const rotate = (arr, num) => {
  // tulis code di sini

  // create array 1 dimensi
  let array1D = [];
  for (let i = 0; i < arr.length; i++) {
    array1D.push(...arr[i]);
  }

  // rotasi array 1 D
  let rotatedArr1D = rotate1D(array1D, num);

  // clone array 2 dimensi
  let clonedArr2D = [];

  // loop level 1
  for (let i = 0; i < arr.length; i++) {
    let clonedLevel2 = [...arr[i]]; // clone level 2

    clonedArr2D.push(clonedLevel2); // masukkan cloned array level 2 ke variablenya
  }

  // ganti tiap value cloned array 2 d, dengan data hasil rotasi 1 d
  // [9,10,1,2,3,4,5,6,7,8]
  // [ [ 1, 2, 3 ], [ 4, 5, 6, 7 ], [ 8, 9, 10 ] ]
  let idx = 0;
  for (let i = 0; i < clonedArr2D.length; i++) {
    for (let j = 0; j < clonedArr2D[i].length; j++) {
      clonedArr2D[i][j] = rotatedArr1D[idx];
      idx++;
    }
  }

  return clonedArr2D;

  /*

    // clone array 2 d
    let arrayBaru = [];

    arr.forEach((array) => {
      arrayBaru.push([...array]);
    });

    // array 1 dimensi
    let newArr = [];
    arrayBaru.forEach((array) => {
      newArr.push(...array);
    });

    // rotate 1 dimensi
    let amount = num % newArr.length;
    for (let i = 0; i < amount; i++) {
      newArr.unshift(newArr.pop());
    }

    // change value cloned array 2 d dengan array 1 dimensi
    let h = 0;
    for (let i = 0; i < arrayBaru.length; i++) {
      for (let j = 0; j < arrayBaru[i].length; j++) {
        arrayBaru[i][j] = newArr[h++];
      }
    }
    return arrayBaru;
    */
};

/*
rotasi 1 kali
[
  [10,1,2],
  [3,4,5,6], // jumlah tiap row bebas, minimal 1
  [7,8,9]
];

rotasi 2 kali
[
  [9,10,1],
  [2,3,4,5], // jumlah tiap row bebas, minimal 1
  [6,7,8]
];
*/

/*
cara simpelnya:
1. buat array 2 d nya menjadi 1 dimensi
    [ [ 1, 2, 3 ], [ 4, 5, 6, 7 ], [ 8, 9, 10 ] ] => [1,2,3,4,5,6,7,8,9,10]
2. clone array 2 d nya => new2d
    new array 2 d
3. rotate array 1 dimensinya
    misal rotasi 2 kali, hasilnya jadi: [9,10,1,2,3,4,5,6,7,8]

4. ubah setiap value dari new2d, ganti dengan hasil rotasi
new2d = 
[
  [9, 10 , 1],
  [ 2  , 3, 4, 5], // jumlah tiap row bebas, minimal 1
  [ 6  , 7, 8]
];
*/

let array2d = [
  [1, 2, 3],
  [4, 5, 6, 7], // jumlah tiap row bebas, minimal 1
  [8, 9, 10],
];

// console.log('array : ', array2d); // [ [ 1, 2, 3 ], [ 4, 5, 6, 7 ], [ 8, 9, 10 ] ]
console.log("rotasi ke-1 : ", rotate(array2d, 1)); // output: [ [ 10, 1, 2 ], [ 3, 4, 5, 6 ], [ 7, 8, 9 ] ]
console.log("rotasi ke-2 : ", rotate(array2d, 2)); // output: [ [ 9, 10, 1 ], [ 2, 3, 4, 5 ], [ 6, 7, 8 ] ]
console.log("rotasi ke-12 : ", rotate(array2d, 12)); // output:  [ [ 9, 10, 1 ], [ 2, 3, 4, 5 ], [ 6, 7, 8 ] ]
