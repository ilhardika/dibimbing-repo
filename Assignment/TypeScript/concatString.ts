type Person = {
  firstName: string;
  lastName: string;
};
const getFullName = (person: Person): string => {
  return person.firstName.concat(" ", person.lastName);
};
let person1 = { firstName: "Ilham", lastName: "Hardika" };

console.log(getFullName(person1));

// Di awal file tambahkan:
export {};
