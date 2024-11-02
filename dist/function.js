"use strict";
function addNumber(a, b) {
    return a + b;
}
const subtractNumber = (a, b) => a - b;
// * Return type inference
const addAllNumbers = (numbers) => numbers.reduce((a, b) => a + b, 0);
console.log(addNumber(5, 10));
console.log(subtractNumber(20, 15));
console.log(addAllNumbers([5, 10, 15, 20, 25]));
