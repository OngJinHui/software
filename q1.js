/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console
    Task 2
    - invoke the function "swap"
*/

function swap(x, y){
    // Task 1: Add code here
    if (isNaN(x) || isNaN(y) || isNaN(parseFloat(x)) || isNaN(parseFloat(y))) {
        return -1;
    } else {
        [x, y] = [y, x];
        return "x is now " + x + " and y is now " + y
    }
}

const prompt = require("prompt-sync")({sigint:true});

// Task 2: Add code here
var x = prompt("Please input the value of x.");
var y = prompt("Please input the value of y.");
console.log(swap(x, y));

module.exports = swap;