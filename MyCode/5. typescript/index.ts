// let message: string = "hello";
// console.log(message);
// const age: number = 24;

// define variabel, string, number, boolean
// assign method / value yg tidak sesuai dengan default type
// const userName: string = "user 1";
// const userAge: number = 24;
// const isUserAdmin: boolean = true;
// akan eror karna ini adalah method yang tidak sesaui tipe data
// userAge.trim();
// isUserAdmin.split(",");
// userName.toFixed(2)
// isUserAdmin.toPrecision();

// // buat funtion penjumlahan
// const penjumlahan = (a: number, b: number): number => {
//   return a + b;
// };

// console.log(penjumlahan(2, 2));

// // type object
// type User = {
//   name: string;
//   age: number;
//   isActive: true;
// };

// function createUser(user: User) {
//   return user;
// }

// console.log({ name: "john", age: 24, isActive: true });

/* buat function, tidak menerima parameter tapi mengembalikan nilai 
    status:string, data:string
    pakai alias untuk membuat tipe baru
*/

type Result = {
  status: string;
  data: string;
};
function getData(): Result {
  return {
    status: "ok",
    data: "data 1",
  };
}
console.log(getData().status);
console.log(getData().data);

// tipe data
let cars: string[] = ["avanza", "xenia"];
let scores: number[] = [1, 2];
let scores2: Array<number> = [3, 4];
// object
type Obj = {
  names: string;
  numbers: number;
};
let obj: Obj[] = [{ names: "john", numbers: 24 }];
console.log(obj);
// union
let status: string | number = 1;
// unknown
let tipeData: unknown;
tipeData = "tipe String";
if (typeof tipeData === "string") {
  tipeData.toUpperCase();
}

export {};
