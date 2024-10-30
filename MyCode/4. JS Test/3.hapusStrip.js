function hapusStrip(str) {
  // handle kalau input bukan string
  if (typeof str !== "string") {
    return `input harus string`;
  }

  //   filter pakai for of
  let hasilFilter = "";
  for (let val of str) {
    if (val !== "-") {
      hasilFilter += val;
    }
  }

  //   handle kalau setelah di filter ngga ada character
  if (hasilFilter.length === 0) {
    return `string kosong setelah menghapus tanda strip`;
  }

  return hasilFilter;
}

console.log(hapusStrip("hello-world"));
console.log(hapusStrip("1-2-3-4-5"));
console.log(hapusStrip("---"));
console.log(hapusStrip(12345));
