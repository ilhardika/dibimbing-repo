let data = ["item 1 b", "item 1 a", "item 10", "item 5", "item 3"];

data.sort((a, b) => {
  const numA = parseInt(a.match(/\d+/)[0]);
  const numB = parseInt(b.match(/\d+/)[0]);
  if (numA === numB) {
    return a.localeCompare(b);
  } else {
    return numA - numB;
  }
});

console.log(data);
