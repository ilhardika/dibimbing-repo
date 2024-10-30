/**
 * Penjumlahan
 *
 * Ketentuan:
 * - jika input adalah angka, maka jumlahkan dengan angka-angka sebelumnya
 * - jika input bukan angka, misal "=" atau apapun itu, outputkan hasil penjumlahannya
 *
 * tips: dapat menggunakan regular expression (regex) untuk mengecek apakah input adalah angka
 * input.match(/^\d+$/)
 */

const prompt = require("prompt-sync")();

let sum = 0;
for (let i; true; i++) {
  const input = prompt("input ? ");
  if (input.match(/^\d+$/)) {
    sum += parseInt(input);
  } else {
    break;
  }
}
console.log(`jumlah = ${sum}`);
