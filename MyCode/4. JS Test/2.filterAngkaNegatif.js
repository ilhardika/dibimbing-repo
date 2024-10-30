function filterNegatif(arr) {
  // handle
  if (!Array.isArray(arr)) {
    return `input harus array`;
  }

  // elminasi negatif
  const hasilFilter = arr.filter((val) => val >= 0);

  //   jika tidak ada angka positif setelah filter, return 0
  if (hasilFilter.length === 0) {
    return `tidak ada angka positif`;
  }

  return hasilFilter;
}

console.log(filterNegatif([1, -1, 0, 2]));
console.log(filterNegatif("a"));
console.log(filterNegatif([-1, -2]));
console.log(typeof [1, 2, 4]);
