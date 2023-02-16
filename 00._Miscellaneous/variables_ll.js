//use strict -> fanger mange 'errors'  - fanger nogle problemer 
"use strict"

//Global variables -NEVER USE THEM 
totalGlobalVariable = "never ever do this";
var globalVariable = "also never use this"

//var
for (var i = 0; i <= 5; i ++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

//Let bound to the scope
for (let i = 0; i <= 5; i ++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

//const - you have to declare it 