/**
 * binary search
 */

function binarySearch(arr, search){
    // tulis code di sini

    let start = 0;
    let end = arr.length - 1;

    while (start <= end) { // ga valid ketika start lebih dari end
        let mid = Math.floor( (start+end) / 2 );

        if (search > arr[mid]) {
            start = mid + 1;
        }
        else if (search === arr[mid]) {
            return mid; // udah ketemu
        }
        else { // search < arr[mid]
            end = mid - 1;
        }
    }
    
    return -1;

    // let resultIdx = -1;
    // for (let i = 0; true; i++) {

    //     if (start > end) {
    //         break; // menghentikan looping jika nilai range tidak valid
    //     }

    //     let mid = Math.floor( (start+end) / 2 );

    //     if (search > arr[mid]) {
    //         start = mid + 1;
    //     }
    //     else if (search === arr[mid]) {
    //         resultIdx = mid; // udah ketemu
    //         break;
    //     }
    //     else { // search < arr[mid]
    //         end = mid - 1;
    //     }
    // }

    // return resultIdx;
}

let angka = [1,3,6,9,10,11,12,16,20,25,40,50,60,78,95,100];

console.log('9 : ', binarySearch(angka, 9));    // 3
console.log('25 : ', binarySearch(angka, 25));  // 9
console.log('80 : ', binarySearch(angka, 80));  //-1
console.log('95 : ', binarySearch(angka, 95));  // 14