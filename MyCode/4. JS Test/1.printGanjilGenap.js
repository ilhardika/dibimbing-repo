function printGanjilGenap(bilangan) {
  // handle kalau tipe data bukan number / tidak positif
  if (typeof bilangan !== "number" || bilangan <= 0) {
    return "Masukkan bilangan berupa angka positif.";
  }

  // print kondisi ganjil genap
  let hasil = "";
  for (let i = 1; i <= bilangan; i++) {
    if (i % 2 !== 0) {
      hasil += `${i}: ganjil\n`;
    } else if (i % 2 === 0) {
      hasil += `${i}: genap\n`;
    }
  }

  return hasil;
}

console.log(printGanjilGenap(10));
