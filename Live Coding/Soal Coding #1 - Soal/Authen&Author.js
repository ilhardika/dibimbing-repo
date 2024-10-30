/**
 * Show menu sesuai dengan "user role", ketentuan:
 *
 * administrator:
 * - menu 1, menu 2, menu 3, menu 4, menu 5, menu 6, menu 7 (allowed)
 *
 * admin:
 * - menu 1, menu 2, menu 3
 *
 * member:
 * - menu 1, menu 2, menu 5
 */

/**
 * 1. Autentikasi   => login/tidak => user harus login (user harus terautentikasi)
 * 2. Autorisasi    => hak akses => wajib login => role user
 */

const prompt = require("prompt-sync")();

const role = prompt("Role user ? "); // user role
const menus = [
  "menu 1",
  "menu 2",
  "menu 3",
  "menu 4",
  "menu 5",
  "menu 6",
  "menu 7",
]; // available menu

// variable rolePermission
let rolePermission = {
  // property : value,
  // property2: value
  administrator: [
    "menu 1",
    "menu 2",
    "menu 3",
    "menu 4",
    "menu 5",
    "menu 6",
    "menu 7",
  ],
  admin: ["menu 1", "menu 2", "menu 3"], // allowed
  member: ["menu 1", "menu 2", "menu 5"],
};
// console.log(rolePermission[role]);

// looping range (angka), dari berapa & sampai berapa
for (let i = 0; i < menus.length; i++) {
  if (rolePermission[role]) {
    if (rolePermission[role].includes(menus[i])) {
      console.log(menus[i]);
    }
  }
}
