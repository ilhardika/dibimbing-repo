/*
  Melakukan filter angka: hanya menampilkan angka yang diminta

  Gunakan looping "for", tidak boleh menggunakan method "javascript filter"

  1. tidak boleh menggunakan method array includes, atau sejenisnya (harus looping manual)
  2. JS method array yang boleh digunakan hanya length & push
*/

const filterData = (arr, searchValue) => {
    // tulis code di sini
    
    // konsep filtering
    // 1. buat variabel penampung hasil
    // 2. loop semua data arraynya
    // 3. jika, data array ke-i memenuhi kriteria/kondisi, masukkan ke variable penampung

    let hasil = [];

    for (let i = 0; i < arr.length; i++) {

        // let exist = false;
        // for (let j = 0; j < searchValue.length; j++) {
            
        //     if (arr[i] === searchValue[j]) {
        //         exist = true;
        //     }
        // }

        // if (exist) {
        //     hasil.push(arr[i]);
        // }


        // includes
        if (searchValue.includes(arr[i])) {
            hasil.push(arr[i]);
        }

    }

    return hasil;
}


// const filterData = (arr, searchValue) => {

//     let hasil = [];

//     for (let i = 0; i < arr.length; i++) { // i = 0 ===> 1

//       for (let j = 0; j < searchValue.length; j++) { // j = 1  ===> 1

//         if (arr[i] === searchValue[j]) {
//           hasil.push(arr[i]);
//           break;
//         }
//       }
//     }
//     return hasil;
// };

let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];
console.log(filterData(data_array, [5,1,1,1,1,1,1,1,1,1]));  // output: [ 1, 1, 5, 5, 1, 5, 5, 5, 5, 1 ]