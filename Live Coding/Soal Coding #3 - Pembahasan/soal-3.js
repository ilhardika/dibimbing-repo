/*
    Menghitung summary data nilai siswa
*/

// helper function, silahkan digunakan, jika perlu
const roundTwoDecimal = (num) => {
    return Math.round(num*100) / 100;
    // 81.6666666667
    // 8166.66666667 => * 100
    // 8167          => dibulatkan
    // 81.67         => / 100
}

const average = (arrNum) => { // [83, 80]
    return arrNum.reduce((acc, v) => acc + v) / arrNum.length;
    // jumlah / banyaknya data
}
// end of helper function

const showSummary = (rawData) => {

    // tulis code di sini
    
    // A, B, C => jadi sebagai 'key' => kita pakai bentuk object (untuk groupingnya)

    /*
    {
        'A' : 
        {
            jumlahSiswa: 3,
            nilai: [90,85,85]
        },
        'B' : 
        {
            jumlahSiswa: 4
            nilai: [80,85,80,80]
        },
        'C' : 
        {
            jumlahSiswa: 2
            nilai: [83,80]
        }
    }

    */

    // tahap grouping
    let groupingKelas = {};
    for (let i = 0; i < rawData.length; i++) {

        // create key & initial value, if key not exist
        if ( ! groupingKelas[ rawData[i].kelas ]) {
            groupingKelas[ rawData[i].kelas ] = {
                jumlahSiswa : 0,
                nilai: []
            }
        }

        // add data to key
        groupingKelas[ rawData[i].kelas ] .jumlahSiswa ++;
        groupingKelas[ rawData[i].kelas ] .nilai .push( rawData[i].nilai );

    }
    // console.log(groupingKelas);
    
    // tahap perhitungan rata2 tiap key objectnya (A, B, C)
    for (const kelas in groupingKelas) {

        groupingKelas[kelas].rataRata = roundTwoDecimal( average( groupingKelas[kelas].nilai ) );
    }

    // show datanya
    let no = 1;
    for (const kelas in groupingKelas) {
        
        console.log(`${no}. Kelas = ${kelas} | Jumlah Siswa = ${groupingKelas[kelas].jumlahSiswa} | Nilai Rata-rata = ${groupingKelas[kelas].rataRata}`);
        no++;
    }

    // console.log(groupingKelas);
    
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