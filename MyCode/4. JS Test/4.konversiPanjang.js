function konversiPanjang(value, from, to) {
  // konversi to meter
  const toMeters = {
    mm: 0.001,
    cm: 0.01,
    m: 1,
    km: 1000,
    in: 0.0254,
    ft: 0.3048,
    yd: 0.9144,
  };

  //   validasi input
  if (typeof value !== "number") {
    return `value input harus angka`;
  }
  if (!toMeters.hasOwnProperty(from) || !toMeters.hasOwnProperty(to)) {
    return `Satuan tidak valid. Gunakan: mm, cm, m, km, in, ft, atau yd.`;
  }

  //   konversi to meter lalu to tujuan
  const toMeter = value * toMeters[from];
  const convertValue = toMeter / toMeters[to];

  //   ubah ke tipe number dan bulatkan makx 4
  return Number(convertValue.toFixed(4));
}

console.log(konversiPanjang(1, "m", "cm")); // 100
console.log(konversiPanjang(1, "km", "m")); // 1000
console.log(konversiPanjang(1, "ft", "m")); // 0.3048
console.log(konversiPanjang(5.5, "in", "cm")); // 13.97
console.log(konversiPanjang(1, "yd", "ft")); // 3
console.log(konversiPanjang(100, "mm", "in")); // 3.9370
console.log(konversiPanjang("x", "mm", "in")); // value input harus angka
console.log(konversiPanjang(10, "xx", "yy")); // Satuan tidak valid. Gunakan: mm, cm, m, km, in, ft, atau yd.
