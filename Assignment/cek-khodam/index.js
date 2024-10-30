// Buatlah halaman web sederhana untuk mengecek khodam dari user.
// 1. Dengan skema login pada halaman web menggunakan javascript prompt, simpan nilai nama user kedalam sebuah variabel object. Gunakan looping untuk memunculkan prompt secara terus menerus selama user salah menginputkan password.
// 2. Hitunglah berapa jumlah kata pada nama user yang diinputkan
// 3. Cek jenis khodam dari user berdasarkan inputan hari lahir menggunakan javascript prompt, gunakan percabangan switch case untuk pengecekan.

let wordCount = 0;
let countUserInputPassword = 1;

const user = {
  name: "",
  password: "12345",
  khodam: "",
};

alert("SELAMAT DATANG DI WEB KHODAM CEKK!!");

// Kamu bisa mengerjakan soal no 2 dibawah sini
user.name = prompt("Masukkan nama kamu:");
// count word
wordCount = user.name.trim().split(/\s+/).length;

// Kamu bisa mengerjakan soal no 1 dibawah sini
let userInputPassword = prompt("Masukkan Password:");

// infinite looping until userinputpassword === user.password
while (userInputPassword !== user.password) {
  // if userinputpassword !== user.password then showing error alert
  userInputPassword = prompt(`Password anda salah. Coba lagi!`);
  // counting countUserInputPassword and save it to countUserInputPassword
  countUserInputPassword++;
}

// Kamu bisa mengerjakan soal no 3 dibawah sini
let userInputBirthDay = prompt("Masukkan hari apa kamu lahir!");
// lowercase userInputBirthDay
switch (userInputBirthDay.toLowerCase()) {
  case "senin":
    user.khodam = "Macan Putih";
    break;
  case "selasa":
    user.khodam = "Elang Emas";
    break;
  case "rabu":
    user.khodam = "Naga Hijau";
    break;
  case "kamis":
    user.khodam = "Harimau Hitam";
    break;
  case "jumat":
    user.khodam = "Gajah Perkasa";
    break;
  case "sabtu":
    user.khodam = "Ular Emas";
    break;
  case "minggu":
    user.khodam = "Garuda Merah";
    break;
  default:
    user.khodam = "Tidak diketahui";
}

document.write(`<h2>SELAMAT DATANG ${user.name.toUpperCase()}!!</h2>`);
document.write(
  `<h3>Kamu telah mencoba memasukkan password sebanyak ${countUserInputPassword} kali</h3>`
);
document.write(`<h3>Jumlah kata pada nama kamu adalah ${wordCount}</h3>`);
document.write(`<h1>KHODAM KAMU ADALAH ${user.khodam.toUpperCase()}!!</h1>`);
