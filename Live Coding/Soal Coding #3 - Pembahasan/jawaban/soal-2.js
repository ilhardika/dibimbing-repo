/**
 * Menggabungkan array
 */

let array2d = [[1,2,3],[4,5,6],[7,8,9]];

// tulis code di sini

/* // CARA - 1
let newArr = [];
for (let i = 0; i < array2d.length; i++) {
  newArr.push(...array2d[i]);
}
*/

// CARA - 2
let newArr = array2d.reduce((acc, curr) => [...acc, ...curr], []);

console.log(newArr); // output: [1,2,3,4,5,6,7,8,9]
console.log(array2d); // output: [[1,2,3],[4,5,6],[7,8,9]] (tetap sama/tidak berubah)