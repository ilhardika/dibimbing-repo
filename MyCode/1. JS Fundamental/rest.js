const contohRestOperator = (a, b, ...x) => {
  console.log(x);
};
contohRestOperator(1, 2, 3, 4, 5, 6, 7, 8, 9);

const aktaKelahiran = {
  nama: "Ilham",
  tanggalLahir: "06-07-2000",
  tempatLahir: "Surabaya",
};
const aktaKelahiran2 = {
  nama: "Ilham2",
  tanggalLahir: "06-07-20002",
  tempatLahir: "Surabaya2",
};
const { nama, tanggalLahir, tempatLahir } = aktaKelahiran;
const {
  nama: akta2name,
  tanggalLahir: akta2tanggal,
  tempatLahir: akta2tempat,
} = aktaKelahiran2;
console.log(nama, tanggalLahir, tempatLahir);
console.log(akta2name, akta2tanggal, akta2tempat);

const fruit = ["mangga", "pisang", "semangka"];
const [buah1, buah2, buah3] = fruit;
console.log(buah1, buah2);

const teachers = {
  teacher: "Susi",
  item: "Math",
  age: 30,
  address: "jakarta",
  car: "avanza",
  motor: "mio",
};
const { teacher, age, ...sisaSiswa } = teachers;
console.log(sisaSiswa);

const teacherArray = ["anton", "bambang", "fatimah"];
const [teacher1, ...sisaTeacher] = teacherArray;
console.log(sisaTeacher);
