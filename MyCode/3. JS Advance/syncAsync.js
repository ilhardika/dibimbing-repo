// console.log("a");
// const myPromise = new Promise((resolve, reject) => {
//   const condition = false;
//   if (condition) {
//     resolve("b");
//   } else {
//     reject("fail");
//   }
// });
// promise
// myPromise
//   .then((res) => {
//     console.log(res);
//     console.log(`hello ${res}`);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

/*
Kamu diminta membuat sebuah fungsi bernama getDataUser() yang akan mengambil data pengguna dari server secara asinkron. Fungsi ini akan menggunakan Promise untuk mensimulasikan pengambilan data dari server.
Buat fungsi getDataUser() yang mengembalikan sebuah Promise.
Fungsi tersebut akan mengambil data nama dan usia pengguna dari server, namun membutuhkan waktu 2 detik untuk selesai. Gunakan setTimeout untuk mensimulasikan waktu tunggu ini.
Jika condition bernilai true, fungsi akan resolve dengan objek { name: "John Doe", age: 25 }.
Jika condition bernilai false, fungsi akan reject dengan pesan "Error: Data gagal diambil!".

*/

const getDataUser = () => {
  return new Promise((resolve, reject) => {
    const condition = true;
    setTimeout(() => {
      if (condition) {
        resolve({ name: "John Doe", age: 25 });
      } else {
        reject("Error: Data gagal diambil!");
      }
    }, 2000);
  });
};

// promise
// getDataUser()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
// asycnAwait
// const getData = async () => {
//   try {
//     const result = await getDataUser();
//     console.log(result);
//   } catch (error) {
//     console.log("Terjadi error:", error);
//   }
// };

// getData();//   });

// promise
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
// asycnAwait
const getData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
