let data_array = [1,   2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];


// bentuk penyederhanaan
let resultFiltered1 = data_array.filter(v =>  v === 5 );
console.log(resultFiltered1);  // output: [ 5, 5, 5, 5, 5, 5 ] (ada 6 kali)


// bentuk awalnya
let resultFiltered2 = data_array.filter(v => {
    //                                     1      0     [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1]
    //                                     2      1     [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1]
    //                                     4      2     [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1]

    // console.log(`value = ${v}, index = ${idx}, data array = `, arr);
    
    return value === 1; // boolean, jika true, maka si datanya dimasukkan ke result
});
console.log(resultFiltered2);  // output: [ 1, 1, 1, 1 ] (ada 4 kali)