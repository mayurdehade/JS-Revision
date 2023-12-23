"use strict";
//treat all code as new version
//after this use only write new version of the javascript

//primitive = {STRING, NUMBER, BOOLEAN, SYMBOL, UNDEFINED, NULL}
//non-primitive = {ARRAY, OBJECT, FUNCTION}


//String: used for text, Enclosed in double or single quotes.
let name = "Mayur";

//Number: used for numeric values. Can be whole numbers or decimals.
let age = 20;

//BigInt: used for very large numbers.
let bigNum = 382947625103878492783910398379378297;

//Boolean: represents true or false values.
let isLoggedIn = false;

//Undefined: A variable that has been declared but hasn't been assigned a value;
let state;

//Symbol: used to create unique identifiers (not commonly used in everyday programming) used in react most
let uniqueSymbol = Symbol("description");

//object type
let person = {
    name: "Mayur",
    age: 20
};

//You can check the data type of a variable using the typeof operator
console.log(typeof name);
console.log(typeof uniqueSymbol);
console.log(typeof state);