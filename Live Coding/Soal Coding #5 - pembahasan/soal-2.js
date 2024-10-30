/**
 * counting sort (asc / desc)
 */

function countingSortAsc(arr){
    // tulis code di sini

    let count = [];
    for (let i = 0; i < arr.length; i++) {

        // create 0 if not exist
        if (!count[ arr[i] ]) {
            count[arr[i]] = 0;
        }

        // add value counter
        count[arr[i]]++
    }

    let resultSort = []; // loop count arraynya, dari depan (index 0)
    for (let i = 0; i < count.length; i++) {
        if (count[i] !== undefined) {
            for (let j = 1 ; j <= count[i] ; j++) {
                resultSort.push(i);
            }
        }
    }

    return resultSort;

}

function countingSortDesc(arr){
    // tulis code di sini

    let count = [];
    for (let i = 0; i < arr.length; i++) {

        // create 0 if not exist
        if (!count[ arr[i] ]) {
            count[arr[i]] = 0;
        }

        // add value counter
        count[arr[i]]++
    }

    let resultSort = []; // loop count arraynya, dari belakang (last index) sampai index 0
    for (let i = count.length - 1 ; i >= 0; i--) {
        if (count[i] !== undefined) {
            for (let j = 1 ; j <= count[i] ; j++) {
                resultSort.push(i);
            }
        }
    }

    return resultSort;
}

let angka = [1,5,23,3,5,6,3,3,45,6,53,2,6,34,523,912];

console.log('dari kecil ke besar :', countingSortAsc(angka));

console.log('dari besar ke kecil :', countingSortDesc(angka));

/*
array = [1,4,3,2,1,3,2,1,5,0];
// index = angkanya
// value = banyaknya
[
    1, => index 0, value 1 => angka 0 ada 1
    3, => index 1, value 3 => angka 1 ada 3
    2, => index 2, value 2 => angka 2 ada 2
    2, => index 3, value 2 => angka 3 ada 2
    1, => index 4, value 1 => angka 4 ada 1
    1  => index 5, value 1 => angka 5 ada 1
]

[0,1,1,1,2,2,3,3,4,5]

*/