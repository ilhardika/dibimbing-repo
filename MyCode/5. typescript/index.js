"use strict";
// let message: string = "hello";
// console.log(message);
// const age: number = 24;
Object.defineProperty(exports, "__esModule", { value: true });
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
// buat funtion penjumlahan
var penjumlahan = function (a, b) {
    return a + b;
};
console.log(penjumlahan(2, 2));
function createUser(user) {
    return user;
}
console.log({ name: "john", age: 24, isActive: true });
function getData() {
    return {
        status: "success",
        data: "Hello World",
    };
}
console.log(getData().status);
console.log(getData().data);
