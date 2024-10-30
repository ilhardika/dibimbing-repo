/*
  Melakukan filter angka: hanya menampilkan angka yang diminta

  Gunakan looping "for", tidak boleh menggunakan method "javascript filter"
*/

// function / prosedur
const filterData = (arrayDatanya, yangMauKitaAmbil) => {
    // tulis code di sini
    
    // konsep filtering
    // 1. buat variabel penampung hasil
    // 2. loop semua data arraynya
    // 3. jika, data array ke-i memenuhi kriteria/kondisi, masukkan ke variable penampung

    let hasil = [];

    for (let i = 0; i < arrayDatanya.length; i++) {
        // console.log(arr[i]);

        if (arrayDatanya[i] === yangMauKitaAmbil) {
            hasil.push(arrayDatanya[i]);
        }
    }
    
    return hasil;
}

let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];


let resultFiltered1 = filterData([1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1], 5);
console.log(resultFiltered1);  // output: [ 5, 5, 5, 5, 5, 5 ] (ada 6 kali)


let resultFiltered2 = filterData(data_array, 1);
console.log(resultFiltered2);  // output: [ 1, 1, 1, 1 ] (ada 4 kali)