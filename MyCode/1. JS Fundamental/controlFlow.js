// //IF
// let totalBelanja = 5000;

// if (totalBelanja) {
//   console.log("Selamat Anda Mendapat Hadiah");
// }
// console.log("Terimakasih sudah berbelanja");

// //IF ELSE
// const password = "Dibimbing";
// const userInput = "Dibimbing";

// if (userInput === password) {
//   console.log("selamat datang di web");
// } else {
//   console.log("password salah");
// }
// userInput === password ? console.log("Selamat datang di web") : console.log("Password salah!")
// console.log("terimakasih sudah berkunjung di web ini");

// //IF ELSE IF
// const nilaiStudent = 80;
// let grade = "";

// if (nilaiStudent > 80) {
//   grade = "A";
// } else if (nilaiStudent > 70) {
//   grade = "B";
// } else {
//   grade = "error";
// }
// console.log(grade);

// //SWITCH
// const nilai = 80;
// switch (fasle) {
//   case nilai > 80:
//     grade = "A";
//     break;
//   case nilai > 70:
//     grade = "B";
//     break;
//   default:
//     grade = "error";
// }
// console.log(grade);

// let nomorBulan = 0;
// let stringBulan = "Desember";

// switch (true) {
//   case stringBulan === "Januari":
//     nomorBulan = 1;
//     break;
//   case stringBulan === "Februari":
//     nomorBulan = 2;
//     break;
//   case stringBulan === "Desember":
//     nomorBulan = 12;
//     break;
//   default:
//     nomorBulan = "error";
//     break;
// }
// console.log(nomorBulan);

// //NESTED SWITCH CASE
// let namaHari = "selasa";
// isBekerja = true;

// switch (namaHari) {
//   case "senin":
//   case "selasa":
//   case "rabu":
//   case "kamis":
//   case "jumat":
//     isBekerja = true;
//     break;
//   case "sabtu":
//   case "minggu":
//     isBekerja = false;
//     break;
//   default:
//     isBekerja = "error";
//     break;
// }
// console.log(isBekerja);

// //NESTED IF
// if (
//   namaHari === "Senin" ||
//   namaHari === "Selasa" ||
//   namaHari === "Rabu" ||
//   namaHari === "Kamis" ||
//   namaHari === "Jumat"
// ) {
//   jenisHari = "Hari Kerja";
// } else if (namaHari === "Sabtu" || namaHari === "Minggu") {
//   jenisHari = "Hari Libur";
// } else {
//   jenisHari = "Invalid";
// }

// //FOR LOOP
// for (let i = 3; i < 10; i++) {
//   console.log(i)
// }

// //while loop
// let i = 10
// while (i > 3) {
//     // console.log(i)
//     i--
// }

// const password = "Dibimbing"
// let userInput = "Dibimb1ng"

// while (userInput !== password) {
// user input password lagi
// }

// //do while loop
// let index = 1

// do {
//     console.log(index)
//     index++
// } while (index < 1);

// //for in loop
// const user = {
//     nama: "Budi",
//     umur: 30,
//     alamat: "Jakarta"
// }

// console.log(user.nama)
// console.log(user['nama'])

// for (const key in user) {
//     console.log(key + ": " + user[key])
// }

// //for of loop
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

// for (const element of numbers) {
//     console.log(element)
// }

// //for each loop
// const fruits = ["Apple", "Banana", "Grape", "Orange", "Mango"]

// fruits.forEach(function (x) {
//     if (x !== "Mango") {
//         console.log(x)
//     }
// })
