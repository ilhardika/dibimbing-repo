const tipeData = (type, ...data) => {
  if (type === "string") {
    return data.filter((value) => typeof value === "string");
  } else if (type === "number") {
    return data.filter((value) => typeof value === "number");
  } else if (type === "boolean") {
    return data.filter((value) => typeof value === "boolean");
  } else {
    return "Tipe data yang dimasukkan salah";
  }
};
console.log(tipeData("string", "a", 0, true, "b", 1, false, "c", 2, true));
console.log(tipeData("number", "a", 0, true, "b", 1, false, "c", 2, true));
console.log(tipeData("boolean", "a", 0, true, "b", 1, false, "c", 2, true));
