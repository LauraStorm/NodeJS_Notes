// --------------------------------------
// Variables, strings, numbers, floats 
// --------------------------------------

// -------------------------------------- //
// Exercise 1 - Console and constiables

const firstName = "Anders";
const lastName = "Latif";

// show in the console
// My first name is Anders and my last name is Latif
console.log("Exercise 1: ");
console.log("My first name is " +firstName + " and my lastname is " + lastName);  //concatenation
console.log(`My name is ${firstName} and my lastname is ${lastName}`);


// -------------------------------------- //
// Exercise 2 - Numbers and Strings

const year = "2022";
const number = 1;

// Add the year plus the number
// The result should be 2023
// You cannot touch line 1 or 2
const resultOne = Number(year) + number;
const resultTwo = parseInt(year) + number;
const resultThree = +year + number;

console.log("Exercise 2: ");
console.log("result one: " +resultOne);
console.log("result two: " + resultTwo);
console.log("result three: " + resultThree);

// --------------------------------------
