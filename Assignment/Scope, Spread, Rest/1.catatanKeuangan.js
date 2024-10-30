let tabungan = 30000; // tabungan awal

console.log("tabungan = " + tabungan); // tampilkan tabungan awal

function catatanKeuangan(...pembelian) {
  const hargaDiskon = pembelian
    .filter((price) => price > 5000) //filter pembelian > 5000
    .map((price) => price * 0.8); // diskon 20%
  console.log(hargaDiskon);
  const hargaNonDiskon = pembelian.filter((price) => price <= 5000); // filter pembelian <= 5000
  console.log(hargaNonDiskon);
  const totalPengeluaran = [...hargaDiskon, ...hargaNonDiskon].reduce(
    //jumlahkan semua pembelian
    (acc, curr) => acc + curr
  );
  tabungan -= totalPengeluaran; // hitung sisa tabungan

  console.log(`total pengeluaran = ${totalPengeluaran}`);
  console.log(`sisa tabungan = ${tabungan}`);
}
catatanKeuangan(4000, 6000, 9000);
