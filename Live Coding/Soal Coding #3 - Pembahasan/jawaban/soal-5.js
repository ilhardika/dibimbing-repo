/**
 * Rotate array 2 Dimensi
 * 
 * NOTE : BEBAS MENGGUNAKAN JS FUNCTION APAPUN
 */


const rotate = (arr, num) => {
  // tulis code di sini

  // initial
  let newArr = []; // cloned from arr (2 dimensi)
  let items = []; // versi 1 dimensi
  arr.forEach(val => {
    newArr.push([...val]);
    items.push(...val);
  });

  // rotate items
  let getFromBehind = num % items.length;
  for (let i = 0; i < getFromBehind; i++) {
    items.unshift(items.pop());
  }

  // fill items to newArr
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr[i].length; j++) {
      newArr[i][j] = items.shift();
    }
  }

  // return
  return newArr;
}

let array2d = [
  [1,2,3],
  [4,5,6,7], // jumlah tiap row bebas, minimal 1
  [8,9,10]
];

console.log('array : ', array2d); // [ [ 1, 2, 3 ], [ 4, 5, 6, 7 ], [ 8, 9, 10 ] ]
console.log('rotasi ke-1 : ', rotate(array2d, 1)); // output: [ [ 10, 1, 2 ], [ 3, 4, 5, 6 ], [ 7, 8, 9 ] ]
console.log('rotasi ke-2 : ', rotate(array2d, 2)); // output: [ [ 9, 10, 1 ], [ 2, 3, 4, 5 ], [ 6, 7, 8 ] ]
console.log('rotasi ke-12 : ', rotate(array2d, 12)); // output:  [ [ 9, 10, 1 ], [ 2, 3, 4, 5 ], [ 6, 7, 8 ] ]