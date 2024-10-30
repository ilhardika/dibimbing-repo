let data_array = [1,   2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];


// filter 5 & 1
let resultFiltered1 = data_array.filter(v =>  [5,1].includes(v) );
console.log(resultFiltered1);  // output: [1, 1, 5, 5, 1, 5, 5, 5, 5, 1]


// filter 5 & 6 & 4
let resultFiltered2 = data_array.filter(v => [5,6,4].includes(v));
console.log(resultFiltered2);  // output: [4, 5, 5, 6, 6, 5, 5, 5, 5]

// filter 6 & 4 (manual)
let searchValue = [6,4];
let resultFiltered3 = data_array.filter(val => {

    let exist = false;
    for (let j = 0; j < searchValue.length; j++) {
        
        if (val === searchValue[j]) {
            exist = true;
        }
    }

    return exist;
});
console.log(resultFiltered3);
