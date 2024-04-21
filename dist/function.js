"use strict";
// * Function
// function addTwoNums({ a, b }: { a: number; b: number; }): number {
//   return a + b;
// }
function addTwoNums(a, b) {
    return a + b;
}
const subtractTwoNums = (a, b) => {
    return a - b;
};
function addAllNumbers(items) {
    const total = items.reduce((prev, current) => prev + current, 0);
    console.log(total);
}
console.log(addTwoNums(1, 2));
console.log(subtractTwoNums(10, 4));
addAllNumbers([1, 2, 3]);
function formatGreeting(name, greeting) {
    return `${greeting}, ${name}`;
}
const result = formatGreeting("Marios", "Hello");
console.log(result);
//# sourceMappingURL=function.js.map