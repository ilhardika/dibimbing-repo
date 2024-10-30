/*
  Melakukan filter angka: hanya menampilkan angka yang diminta

  Gunakan looping "for", tidak boleh menggunakan method "javascript filter"

  1. tidak boleh menggunakan method array includes, atau sejenisnya (harus looping manual)
  2. JS method array yang boleh digunakan hanya length & push
*/

const filterData = (arr, searchValue) => {
  // tulis code di sini
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < searchValue.length; j++) {
      if (searchValue[j] === arr[i]) {
        result.push(searchValue[j]);
      }
    }
  }
  return result;
}

let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];
console.log(filterData(data_array, [5,1]));  // output: [ 1, 1, 5, 5, 1, 5, 5, 5, 5, 1 ]