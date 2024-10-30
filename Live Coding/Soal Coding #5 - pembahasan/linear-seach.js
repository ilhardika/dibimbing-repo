
// Linear search

// [1,5,7,78,4,3,4,7,2,100,200]

let array = [1,5,7,7,78,4,3,4,7,2,100,200];

// ada 100 ga di dalem list? posisi berapa?

function linearSearch(arr, search) {
   
    let idx = -1;
    for (let i = 0; i < array.length; i++) {
        if (arr[i] === search) {
            idx = i;
            break;
        }
    }

    return idx;
}

console.log(linearSearch(array, 7));
console.log(linearSearch(array, 4000));




