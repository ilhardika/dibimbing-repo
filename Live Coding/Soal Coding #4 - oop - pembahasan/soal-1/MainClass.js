
const LakiLaki = require("./LakiLaki");
const Perempuan = require("./Perempuan");

let cowo_1 = new LakiLaki("Cowo pertama", 170, "Botak");

let cewe_1 = new Perempuan("Cewe pertama", 170, "Panjang");


console.log({nama: cowo_1.getNama(), bbi: cowo_1.getBBI()});
console.log({nama: cewe_1.getNama(), bbi: cewe_1.getBBI()});

console.log({jenisRambutPerempuan : cewe_1.getJenisRambut()});


// sama2 .getBBI tapi hasilnya beda antara cowo & cewe => konsep polimorfisme