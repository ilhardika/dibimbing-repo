/**
 * Menggabungkan array
 */

let array2d = [ [1,2,3], [4,5,6], [7,8,9] ];
//                 0        1        2

// tulis code di sini

// // cara 1
// let newArr = [];
// for (let i = 0; i < array2d.length; i++) {

//     for (let j = 0; j < array2d[i].length; j++) {

//         newArr.push(array2d[i][j]);
//     }
// }

// // cara 2
// let newArr = [];
// for (let i = 0; i < array2d.length; i++) {
//     newArr.push( ...array2d[i] );   // 1,2,3 
// }

// cara 3
let newArr = array2d.reduce( (acc, val) => [...acc, ...val] );

/*
acc = variable penampung hasil
val = setiap value dari array2d

returnnya adalah new value, berdasarkan acc & val
array2d = [ [1,2,3], [4,5,6], [7,8,9] ]

looping 1
- acc = masih kosong
- val = [1,2,3]
- return = [...acc, ...val] = [1,2,3] (jadi nilai acc yg baru)

looping 2
- acc = [1,2,3]
- val = [4,5,6]
- return = [...acc, ...val] = [1,2,3,4,5,6] (jadi nilai acc yg baru)

looping 3
- acc = [1,2,3,4,5,6]
- val = [7,8,9]
- return = [...acc, ...val] = [1,2,3,4,5,6,7,8,9] (jadi nilai acc yg baru)

*/

console.log(newArr); // output: [1,2,3,4,5,6,7,8,9]
// console.log(array2d); // output: [[1,2,3],[4,5,6],[7,8,9]] (tetap sama/tidak berubah)