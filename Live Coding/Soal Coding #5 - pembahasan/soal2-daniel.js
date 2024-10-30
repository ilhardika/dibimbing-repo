let count = [5,3,3]; // 2,2,2,1,1,1,0,0,0,0,0
// lenth = 3
// last idx = 2

let resultSort = [];
for (let i = count.length - 1; i >= 0; i--) {
    if (count[i] !== undefined) {
      for (let j = 1; j <= count[i]; j++) {
        resultSort.push(i);
      }
    }
}

console.log(resultSort);
