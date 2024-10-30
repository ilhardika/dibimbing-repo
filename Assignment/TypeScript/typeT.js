"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var wrapInArray = function (item) {
    return [item];
};
var stringT = "Halo";
console.log(wrapInArray(stringT));
var numberT = 123;
console.log(wrapInArray(numberT));
var booleanT = true;
console.log(wrapInArray(booleanT));
var objectT = { key1: "satu", key2: 2, key3: false };
console.log(wrapInArray(objectT));
