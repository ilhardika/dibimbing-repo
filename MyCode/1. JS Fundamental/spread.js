const makanan = ["ayam", "kangkung", "soto"];
const minuman = ["teh", "kopi", "susu"];
console.log(...minuman, ...makanan);

const aktaKelahiran = {
  nama: "Ilham",
  tanggalLahir: "06-07-2000",
  tempatLahir: "Surabaya",
};
const aktaKeluarga = {
  ayah: "Ayah Ilham",
  ibu: "Ibu Ilham",
};
const informasiAkta = {
  ...aktaKelahiran,
  ...aktaKeluarga,
};
console.log(informasiAkta);
