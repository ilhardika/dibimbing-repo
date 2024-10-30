
let dataAngka = [2,4,21];

let sum = dataAngka.reduce( (acc, val) => acc + val );

/*
looping 1
- acc = masih kosong
- val = 2
- return = acc + val = 2 (jadi nilai acc yg baru)

looping 2
- acc = 2
- val = 4
- return = acc + val = 6 (jadi nilai acc yg baru)

looping 3
- acc = 6
- val = 21
- return = acc + val = 27 (jadi nilai acc yg baru)

*/

console.log(sum);
