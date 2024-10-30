// ---------------------------------------------------------------------
// 2. graduates
// [INSTRUCTIONS]
// Anda diminta untuk membuat sebuah function untuk menentukan dan mengelompokan kelulusan, dengan ketentuan sebagai berikut
// - dikempokan berdasarkan kelas
// - data yang ditampilkan yang memiliki nilai minimal 75
// - jika data tidak ada, maka return  kosong

// TEST CASE
console.log(
  graduates([
    { name: "Luffi", score: 90, class: "2A" },
    { name: "Sanji", score: 85, class: "2C" },
    { name: "Zoro", score: 74, class: "2A" },
    { name: "Usop", score: 78, class: "2C" },
    { name: "Chopper", score: 89, class: "2C" },
  ])
);
//OUTPUT
// Dari kelas 2A terdapat 1 orang yang dinyatakan Lulus yaitu Luffi
// Dari kelas 2C terdapat 3 orang yang dinyatakan Lulus yaitu Sanji, Usop dan Chopper

console.log(
  graduates([
    { name: "Naruto", score: 100, class: "ninja" },
    { name: "Sarada", score: 76, class: "berkebun" },
    { name: "Sasuke", score: 92, class: "ninja" },
    { name: "Lee", score: 71, class: "olahraga" },
    { name: "Shikamaru", score: 80, class: "catur" },
  ])
);
//OUTPUT
// Dari kelas ninja terdapat 2 orang yang dinyatakan Lulus yaitu Naruto dan sasuke
// Dari kelas olahraga terdapat 1 orang yang dinyatakan Lulus yaitu Sarada
// Dari kelas catur terdapat 1 orang yang dinyatakan Lulus yaitu Shikamaru

console.log(graduates([]));
//OUTPUT
// Data kosong!!

function graduates(students) {
  // Inisialisasi objek untuk menyimpan hasil kelompok
  const result = {};

  // Iterasi melalui setiap siswa
  for (let student of students) {
    // Periksa apakah skor siswa memenuhi syarat
    if (student.score >= 75) {
      // Jika kelas belum ada di objek hasil, buat array baru
      if (!result[student.class]) {
        result[student.class] = [];
      }
      // Tambahkan nama siswa ke dalam array kelas yang sesuai
      result[student.class].push(student.name);
    }
  }

  // Jika tidak ada data, return "Data kosong!!"
  if (Object.keys(result).length === 0) {
    return "Data kosong!!";
  }

  // Inisialisasi array untuk menyimpan output
  const output = [];

  // Buat output berdasarkan hasil kelompok
  for (let className in result) {
    const names = result[className].join(", "); // Gabungkan nama siswa dengan koma
    const count = result[className].length; // Hitung jumlah siswa
    output.push(
      `Dari kelas ${className} terdapat ${count} orang yang dinyatakan Lulus yaitu ${names}`
    );
  }

  // Kembalikan hasil sebagai string
  return output.join("\n");
}
