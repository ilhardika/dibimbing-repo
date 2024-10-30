"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getFullName = function (person) {
    return person.firstName.concat(" ", person.lastName);
};
var person1 = { firstName: "Ilham", lastName: "Hardika" };
console.log(getFullName(person1));
