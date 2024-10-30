// Import lodash
const _ = require("lodash");

// Construct data Siswa
const dataRaporSekolah = function (nama, kelas) {
  this.nama = nama; // Menyimpan nama siswa
  this.kelas = kelas; // Menyimpan kelas siswa
  this.nilaiUjian = {
    matematika: 0,
    ipa: 0,
    ips: 0,
    bahasa: 0,
    komputer: 0,
  }; // Object penampung nilai mapel
  this.ranking = 0; // Menyimpan ranking siswa

  // Method untuk mengisi nilai ujian
  this.isiNilaiUjian = (matematika, ipa, ips, bahasa, komputer) => {
    this.nilaiUjian.matematika = matematika;
    this.nilaiUjian.ipa = ipa;
    this.nilaiUjian.ips = ips;
    this.nilaiUjian.bahasa = bahasa;
    this.nilaiUjian.komputer = komputer;
  };

  // Method untuk menghitung rata-rata nilai ujian
  this.hitungNilaiRataUjian = () => {
    return _.mean(_.values(this.nilaiUjian)); // Menghitung dan mengembalikan rata-rata
  };

  // Method untuk menentukan kelulusan
  this.isLulus = () => {
    return this.hitungNilaiRataUjian() > 50 ? "Lulus" : "Tidak Lulus";
  };

  // Method untuk menghitung ranking  // Method untuk menghitung ranking
  this.hitungRanking = (daftarSiswa) => {
    // Mengurutkan siswa berdasarkan rata-rata nilai
    const siswaUrut = daftarSiswa.sort(
      (a, b) => b.hitungNilaiRataUjian() - a.hitungNilaiRataUjian()
    );

    // Menentukan ranking siswa saat ini
    this.ranking = siswaUrut.findIndex((siswa) => siswa.nama === this.nama) + 1;
  };
};

// Array untuk menyimpan semua siswa
const daftarSiswa = [];

// Menambahkan siswa
const siswa1 = new dataRaporSekolah("Andi", "10A");
siswa1.isiNilaiUjian(70, 80, 90, 70, 80);
daftarSiswa.push(siswa1);

const siswa2 = new dataRaporSekolah("Budi", "10B");
siswa2.isiNilaiUjian(10, 10, 88, 10, 80);
daftarSiswa.push(siswa2);

const siswa3 = new dataRaporSekolah("Cici", "10A");
siswa3.isiNilaiUjian(85, 90, 78, 88, 92);
daftarSiswa.push(siswa3);

const siswa4 = new dataRaporSekolah("Dani", "10B");
siswa4.isiNilaiUjian(60, 70, 65, 55, 75);
daftarSiswa.push(siswa4);

const siswa5 = new dataRaporSekolah("Eka", "10C");
siswa5.isiNilaiUjian(90, 85, 95, 80, 88);
daftarSiswa.push(siswa5);

const siswa6 = new dataRaporSekolah("Fani", "10A");
siswa6.isiNilaiUjian(50, 60, 70, 80, 90);
daftarSiswa.push(siswa6);

const siswa7 = new dataRaporSekolah("Gina", "10B");
siswa7.isiNilaiUjian(75, 80, 85, 70, 65);
daftarSiswa.push(siswa7);

const siswa8 = new dataRaporSekolah("Hadi", "10C");
siswa8.isiNilaiUjian(55, 60, 65, 70, 75);
daftarSiswa.push(siswa8);

const siswa9 = new dataRaporSekolah("Ika", "10A");
siswa9.isiNilaiUjian(65, 70, 75, 80, 85);
daftarSiswa.push(siswa9);

const siswa10 = new dataRaporSekolah("Joko", "10B");
siswa10.isiNilaiUjian(40, 50, 60, 70, 80);
daftarSiswa.push(siswa10);

// Menghitung ranking untuk setiap siswa
daftarSiswa.forEach((siswa) => {
  siswa.hitungRanking(daftarSiswa);
});

// Menampilkan semua siswa dengan ranking
daftarSiswa.forEach((siswa) => {
  const lulus = siswa.isLulus();
  console.log(`=============================================
    Nama: ${siswa.nama}
    Kelas: ${siswa.kelas}
    
    NILAI UJIAN
    matematika = ${siswa.nilaiUjian.matematika}
    ipa = ${siswa.nilaiUjian.ipa}
    ips = ${siswa.nilaiUjian.ips}
    bahasa = ${siswa.nilaiUjian.bahasa}
    komputer = ${siswa.nilaiUjian.komputer}
    
    Nilai Rata-Rata Ujian: ${siswa.hitungNilaiRataUjian()}
    Kelulusan Siswa: ${lulus}
    Ranking: ${siswa.ranking}`);
});
