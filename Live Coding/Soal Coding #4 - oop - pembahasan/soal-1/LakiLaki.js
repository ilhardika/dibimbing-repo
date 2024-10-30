
const Manusia = require("./Manusia");

class LakiLaki extends Manusia {

    jenisRambut;

    constructor(nama, tinggi, jenisRambut) {
        super(nama, tinggi); // ngeset nama & tinggi karena ada di parentnya
        this.jenisRambut = jenisRambut; // ngeset property yg baru di LakiLaki
    }

    getBBI() {
        return (this.getTB() - 100) - ((this.getTB() - 100) * 10/100) ;
    }
}

module.exports = LakiLaki;