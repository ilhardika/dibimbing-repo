const mergeDelete = (obj1, obj2, del) => {
  const obj = { ...obj1, ...obj2 };
  delete obj[del];
  return obj;
};
console.log(mergeDelete({ a: 1, b: 2 }, { c: 3, d: 4 }, "c"));
