/**
 * counting sort (asc / desc)
 */

function countingSortAsc(arr){
    // tulis code di sini

    let countArr = [];
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (!countArr[arr[i]]) {
            countArr[arr[i]] = 0;
        }
        countArr[arr[i]]++;
    }

    for (let i = 0; i < countArr.length; i++) {
        if (countArr[i]) {
            for (let j = 0; j < countArr[i]; j++) {
                result.push(i);
            }
        }
    }

    return result;
}

function countingSortDesc(arr){
    // tulis code di sini

    let countArr = [];
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (!countArr[arr[i]]) {
            countArr[arr[i]] = 0;
        }
        countArr[arr[i]]++;
    }

    for (let i = countArr.length - 1; i >= 0; i--) {
        if (countArr[i]) {
            for (let j = 0; j < countArr[i]; j++) {
                result.push(i);
            }
        }
    }

    return result;
}

let angka = [1,5,23,3,5,6,3,3,45,6,53,2,6,34,523,912];

console.log('dari kecil ke besar :', countingSortAsc(angka));

console.log('dari besar ke kecil :', countingSortDesc(angka));