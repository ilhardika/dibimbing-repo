
class Pegawai {

  id;
  nama;
  golongan;
  tgl_lahir; // 2001-09-15 -> timestamp

  constructor(id, nama, golongan, tgl_lahir) {
    this.id = id;
    this.nama = nama;
    this.golongan = golongan;
    this.tgl_lahir = tgl_lahir;
  }

  gajiPokok() {
    if (this.golongan === 1) {
      return this.getUsia() < 40 ? 3500000 : 4500000;
    }
    else if (this.golongan === 2) {
      return this.getUsia() < 40 ? 5000000 : 6000000;
    }
    return 0;
  }

  getUsia() {
    // note 1 year = 31,536,000 seconds
    return ( (Date.now() - new Date(this.tgl_lahir).getTime()) / 1000 ) / 31536000;
    // timestamp saat ini - timestamp kelahiran => dalam detik => konversi ke tahun
  }

  tunjangan() {
    return 0;
  }

  totalGaji() {
    return this.gajiPokok() + this.tunjangan();
  }

}

module.exports = Pegawai;

