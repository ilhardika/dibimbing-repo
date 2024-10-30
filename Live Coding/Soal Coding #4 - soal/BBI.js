// Kelas dasar
class Person {
  constructor(tinggiBadan) {
    this.tinggiBadan = tinggiBadan;
  }

  getTB() {
    return this.tinggiBadan;
  }
}

// Kelas turunan untuk Laki
class Laki extends Person {
  constructor(tinggiBadan) {
    super(tinggiBadan);
  }

  getBBI() {
    return this.tinggiBadan - 100 - (this.tinggiBadan - 100) * 0.1;
  }
}

// Kelas turunan untuk Perempuan
class Perempuan extends Person {
  constructor(tinggiBadan) {
    super(tinggiBadan);
  }

  getBBI() {
    return this.tinggiBadan - 100 - (this.tinggiBadan - 100) * 0.15;
  }
}

// Contoh penggunaan
const laki = new Laki(175);
console.log(`Tinggi Badan Laki: ${laki.getTB()} cm`);
console.log(`Berat Badan Ideal Laki: ${laki.getBBI()} kg`);

const perempuan = new Perempuan(160);
console.log(`Tinggi Badan Perempuan: ${perempuan.getTB()} cm`);
console.log(`Berat Badan Ideal Perempuan: ${perempuan.getBBI()} kg`);
