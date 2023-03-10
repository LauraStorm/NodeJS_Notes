// -------------------------------------- //
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const resultExerciseThree = Number(numberOne) + Number(numberTwo);

console.log("Exercise 3: ");
console.log(resultExerciseThree);


// -------------------------------------- //
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const addNumbers = Number(anotherNumberOne) + Number(anotherNumberTwo);
const resultWithTwoDecimals = addNumbers.toFixed(2);

console.log("Exercise 4: ");
console.log(resultWithTwoDecimals);


// -------------------------------------- //
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals
const averageResult = (one + two + three) / 3;
const averageResultWithDecimals = averageResult.toFixed(5);

console.log("Exercise 5: ");
console.log(averageResultWithDecimals);


// -------------------------------------- //
// Exercise 6 - Get the character by index

const letters = "abc";

// Get me the character "c"
const characterC = letters.charAt(2);

console.log("Exercise 6: ");
console.log(characterC);

// Another solution:
//const showC = letters[2];


// -------------------------------------- //
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript
const factCapitalizedJ = fact.replace('j', 'J');

console.log("Exercise 7: ");
console.log(factCapitalizedJ);


// --------------------------------------