
const Manusia = require("./Manusia");

class Perempuan extends Manusia {

    jenisRambut;

    constructor(nama, tinggi, jenisRambut) {
        super(nama, tinggi); // ngeset nama & tinggi karena ada di parentnya
        this.jenisRambut = jenisRambut; // ngeset property yg baru
    }

    getBBI() {
        return (this.getTB() - 100) - ((this.getTB() - 100) * 15/100) ;
    }

    getJenisRambut() {
        return this.jenisRambut;
    }
}

module.exports = Perempuan;