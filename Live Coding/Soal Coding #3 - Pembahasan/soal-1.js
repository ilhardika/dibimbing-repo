/**
 * Membuat object baru, dengan perubahan & penambahan property
 */

let siswa = {
  nama : "Arkan",
  umur : 22
}

// tulis kode di sini


// soal A : buat variabel newSiswa, ubah umur jadi 23 dan tambahkan pekerjaan programmer
let newSiswa = {...siswa, umur: 23, pekerjaan: 'programmer'}

console.log(newSiswa); // output: { nama: 'Arkan', umur: 23, pekerjaan: 'programmer' }
console.log(siswa); // output: { nama: 'Arkan', umur: 22 } (note : tetap)


// soal B : extrak ke pekerjaan & sisanya (dari variable newSiswa)
let {pekerjaan, ...sisanya} = newSiswa;

console.log(pekerjaan); // programmer
console.log(sisanya); // { nama: 'Arkan', umur: 23 }

console.log('--------------------------------------------------');

// extract property by variable
const propertyToExtract = 'pekerjaan';
const { [propertyToExtract]: extracted, ...rest } = newSiswa;

console.log(extracted);
console.log(rest);


