let angka = [5,3,4];

for (let i = angka.length - 1; i >= 0; i--) {
    if (angka[i] !== undefined) {
        console.log({i, valuenya : angka[i]});
    }
    console.log('test');
}

angka[3]