
class Manusia {
    nama;
    tinggi;

    constructor(nama, tinggi){ // untuk nge-set property
        this.nama = nama;
        this.tinggi = tinggi;
    }

    getNama() {
        return this.nama;
    }

    getTB() {
        return this.tinggi;
    }

}

module.exports = Manusia; // mendifinisikan, bahwa Class "Manusia" bisa dipakai di file lain

// class => anggep aja "cetakan"/"blueprint" => class untuk membuat object
// object => hasilnya

// proses membuat object dari class => instansiasi object

// pemberian nilai "default" ketika membuat object => pake constructor


let objectOrang_1 = new Manusia("Arkan", 166);
let objectOrang_2 = new Manusia("Fauzan", 160);

console.log(objectOrang_1.getNama());

console.log(objectOrang_1.getTB());
