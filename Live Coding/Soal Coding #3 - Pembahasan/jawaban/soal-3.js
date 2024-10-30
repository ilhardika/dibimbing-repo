/*
    Menghitung summary data nilai siswa
*/

// helper function, silahkan digunakan, jika perlu
const roundTwoDecimal = (num) => {
    return Math.round(num*100) / 100;
}

const average = (arrNum) => {
    return arrNum.reduce((acc, v) => acc + v) / arrNum.length;
}
// end of helper function

const showSummary = (rawData) => {

    // tulis code di sini

    let result = {};

    for (let i = 0; i < rawData.length; i++) {
        
        // create key "kelas", if not exist
        if (!result[rawData[i].kelas]) {
            result[rawData[i].kelas] = {
                jumlahSiswa : 0,
                nilaiSiswa : []
            }
        }

        // insert rawData[i] to result
        result[rawData[i].kelas].jumlahSiswa++;
        result[rawData[i].kelas].nilaiSiswa.push(rawData[i].nilai);
    }

    // ex result :
    // {
    //     A: { jumlahSiswa: 3, nilaiSiswa: [ 90, 85, 85 ] },    
    //     B: { jumlahSiswa: 4, nilaiSiswa: [ 80, 85, 80, 80 ] },
    //     C: { jumlahSiswa: 2, nilaiSiswa: [ 83, 80 ] }
    // }

    // count average and show with console.log
    let no = 1;
    for (const key in result) {

        const averageNilai = average(result[key].nilaiSiswa);
        const nilai = roundTwoDecimal(averageNilai);
        
        console.log(`${no}. Kelas = ${key} | Jumlah Siswa = ${result[key].jumlahSiswa} | Nilai Rata-rata = ${nilai}`);
        
        no++;
    }

    // console.log(result);

};

const rawData = [
    {nama: "siswa 1", kelas : 'A', nilai : 90},
    {nama: "siswa 2", kelas : 'B', nilai : 80},
    {nama: "siswa 3", kelas : 'A', nilai : 85},
    {nama: "siswa 4", kelas : 'B', nilai : 85},
    {nama: "siswa 5", kelas : 'B', nilai : 80},
    {nama: "siswa 6", kelas : 'B', nilai : 80},
    {nama: "siswa 7", kelas : 'A', nilai : 85},
    {nama: "siswa 8", kelas : 'C', nilai : 83},
    {nama: "siswa 9", kelas : 'C', nilai : 80},
];

showSummary(rawData);
/*
    Expected output:
    - Akan melakukan console.log() data seperti berikut:
    - nilai rata2, maksimal dalam 2 desimal

    1. Kelas = A | Jumlah Siswa = 3 | Nilai Rata-rata = 86.67
    2. Kelas = B | Jumlah Siswa = 4 | Nilai Rata-rata = 81.25
    3. Kelas = C | Jumlah Siswa = 2 | Nilai Rata-rata = 81.5
*/