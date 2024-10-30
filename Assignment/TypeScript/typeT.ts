const wrapInArray = <T>(item: T): T[] => {
  return [item];
};

const stringT: string = "Halo";
console.log(wrapInArray(stringT));

const numberT: number = 123;
console.log(wrapInArray(numberT));

const booleanT: boolean = true;
console.log(wrapInArray(booleanT));

const objectT: object = { key1: "satu", key2: 2, key3: false };
console.log(wrapInArray(objectT));

export {};
