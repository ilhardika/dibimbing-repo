let arr = [7,1,5,7,5];

let count = [];
for (let i = 0; i < arr.length; i++) {

    // create 0 if not exist
    if (!count[ arr[i] ]) {
        count[arr[i]] = 0;
    }

    // add value counter
    count[arr[i]]++
}

console.log({count});


let resultSort = [];
for (let i = 0; i < count.length; i++) {

    if (count[i] !== undefined) {
        
        for (let j = 1 ; j <= count[i] ; j++) {
            resultSort.push(i);
        }
    }
}

console.log(resultSort);
console.log(arr);

