/**
 * selection sort (asc / desc)
 */

function selectionSortAsc(arr){
    // tulis code di sini

    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }

        // let min = i; // minimum index
        // for (let j = i + 1; j < arr.length; j++) {
        //     if (arr[j] < arr[min]) {
        //         min = j;
        //     }
        // }

        // if (min !== i) {
        //     let temp = arr[min];
        //     arr[min] = arr[i];
        //     arr[i] = temp;
        // }

    }

    return arr;
}

function selectionSortDesc(arr){
    // tulis code di sini

    for (let i = 0; i < arr.length - 1; i++) {

        // for (let j = i + 1; j < arr.length; j++) {
        //     if (arr[j] > arr[i]) {
        //         let temp = arr[j];
        //         arr[j] = arr[i];
        //         arr[i] = temp;
        //     }
        // }

        let max = i; // maximum index
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[max]) {
                max = j;
            }
        }

        if (max !== i) {
            let temp = arr[max];
            arr[max] = arr[i];
            arr[i] = temp;
        }

    }

    return arr;
}

let angka = [1,5,23,3,5,6,3,3,45,6,53,2,6,34,523,912];

console.log('dari kecil ke besar :', selectionSortAsc(angka));

console.log('dari besar ke kecil :', selectionSortDesc(angka));


/*
cara melakukan selection sort:
misal array = [8,5,2,9,2,1,10] => expected output [1,2,2,5,8,9,10]

1. akan melakukan loop dari index 0 (pertama) sampai kedua terakhir
[8,5,2,9,2,1,10] => dari angka 8 sampai 1

2. di setiap looping (i), akan di loop semua angka di sebelah kanannya (j), jika lebih kecil, tuker posisinya 
i = 0 | j = 1
[8,    5,2,9,2,1,10] => loop j (start = i + 1 , sampai ujung array)

asc  => if (arr[j] < arr[i])) => {tuker arraynya}
desc => if (arr[j] > arr[i])) => {tuker arraynya}


i = 5 | j = 6
[1,2,2,5,8,   9,    10] => loop j (start = i + 1 , sampai ujung array)

*/


/*
i = 0 | j = 5 | min = i
[8,    5,2,9,2,1,10]

min => idx 5 (nilainya 1)

if min != i
    tukar array


*/