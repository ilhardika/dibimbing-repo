/**
 * Rotate array 1 Dimensi
 */

const rotate = (arr, num) => {
    // tulis code di sini

    // // satrio
    // num = num % arr.length;
    // let rotatedArray = [...arr];
    // for (let i = 0; i < arr.length; i++) {
    //     let newIndex = (i + num) % arr.length;
    //     rotatedArray[newIndex] = arr[i];
    // }
    // return rotatedArray;


    // tulis code di sini
    let newArr = [...arr]; // clone array

    let amountRotate = num % newArr.length;

    for (let i = 1; i <= amountRotate; i++) {
        let lastValue = newArr.pop();
        newArr.unshift(lastValue);
    }
    return newArr;
}

let angka = [3,4,5,6,7,8];
console.log('array : ', angka); // [3,4,5,6,7,8]
console.log('rotasi ke-1 : ', rotate(angka, 1)); // output: [8,3,4,5,6,7]
console.log('rotasi ke-2 : ', rotate(angka, 2)); // output: [7,8,3,4,5,6]
console.log('rotasi ke-3 : ', rotate(angka, 3)); // output: [6,7,8,3,4,5]
console.log('rotasi ke-8 : ', rotate(angka, 8)); // output: [7,8,3,4,5,6] (note: sama dengan rotasi kedua)


// console.log(angka);
