/**
 * binary search
 */

function binarySearch(arr, search){
    // tulis code di sini

    let start = 0; // start range
    let end = arr.length - 1; // end range
    let mid;

    let result = -1;

    while (start <= end) {

        mid = Math.floor((start+end)/2);
        
        if (arr[mid] === search) {
            result = mid;
            break;
        }
        else if (arr[mid] > search) {
            end = end - 1;
        }
        else {
            start = start + 1;
        }
    }

    return result;
}

let angka = [1,3,6,9,10,11,12,16,20,25,40,50,60,78,95,100];

console.log('9 : ', binarySearch(angka, 9));    // 3
console.log('25 : ', binarySearch(angka, 25));  // 9
console.log('80 : ', binarySearch(angka, 80));  //-1
console.log('95 : ', binarySearch(angka, 95));  // 14