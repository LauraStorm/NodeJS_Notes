// Math.random()
// 0-1
// want a integer Math.floor(Math.random())  -Runder ned 


// possible because of hoisting - means to lift up (bubbles to the surfaces) 
console.log(random(0,10));
//function deklaration
function random (min, max) {
    return Math.floor(Math.random() * (max - min + 1) - min)
}

// Anonymous function - Does not have a name
//variable assignment
const randomAnonymousFunction = function random (min, max) {
    return Math.floor(Math.random() * (max - min + 1) - min);
};

console.log(randomAnonymousFunction(0, 10));


// --------- //
const randomArrowFunction  = (min, max) => {
    // function body
    return Math.floor(Math.random() * (max - min + 1) - min);

}

console.log(randomArrowFunction(0, 10));

// --------------------------------------------------------------------------------------------------------------------- //
// Lambda - arrow function 
const randomArrowFunctionCompat  = (min, max) =>   Math.floor(Math.random() * (max - min + 1) - min);
console.log(randomArrowFunctionCompat(0, 10)); 

// --------------------------------------------------------------------------------------------------------------------- //

// genericAction = callback function (is a function that is passed as an argument, 'that you callback')
function genericActionPerformaner (genericAction, genericName) {
    // do stuff...
    return genericAction(genericName);
}
const substract = (name) => `${name} is substracting.`;


// Task: without touching the two functions above but still using them below //
// Task: make it console.log Tobias is substracting. //
console.log((genericActionPerformaner(substract, 'Tobias')));

// Task: Make it say is walking //
const walk = (name ) => `${name} is walking`;
console.log((genericActionPerformaner(walk, 'Nicolas')));

// Task: reading andrea //
console.log(genericActionPerformaner (name => `${name} is reading.`, 'Andrea'));


// --------------------------------------------------------------------------------------------------------------------- //