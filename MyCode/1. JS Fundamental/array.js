const fruits = ["mangga", "jeruk", "apel", "anggur", "jambu"];

//output index dan data
for (let i = 0; i < fruits.length; i++) {
  console.log(`index = ${i}, data = ${fruits[i]}`);
}

//output panjang array
console.log(`panjang array = ${fruits.length}`);

//menambahkan data pada akhir array
fruits.push("leci");
console.log(fruits);

//menambahkan data pada awal array
fruits.unshift("pisang");
console.log(fruits);

//menghapus data pada awal array
fruits.shift();
console.log(fruits);

//menghapus data pada akhir array
fruits.pop();
console.log(fruits);

// mengganti data array
fruits[3] = "melon";
console.log(fruits);

// menambahkan data array di tengah
fruits.splice(3, 0, "semangka");
console.log(fruits);

// menghapus data array di tengah
fruits.splice(3, 1);
console.log(fruits);

// menghapusd dan mebambahkan data array di tengah
fruits.splice(3, 1, "nangka", "pisang");
console.log(fruits);

// excercise/`
// const array = [1, "dibimbing", 3, true];
// array.unshift([1, 2, 3, 4, 5]);
// array[3] = 5;
// console.log(array);
