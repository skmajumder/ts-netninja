"use strict";
// * ----------
// * Tuples - Typed Arrays
// * ----------
// let ourTuple: [string, string, number, boolean] = ["first", "second", 3, true];
// console.log(ourTuple);
// ourTuple.push(true);
// console.log(ourTuple);
// * ----------
// * Tuples example
// * ----------
// let hsla: [number, string, string, number];
// hsla = [200, "100", "50", 1];
function useCoords() {
    const lat = 100;
    const lang = 79;
    return [lat, lang];
}
const [lat, lang] = useCoords();
console.log({ lat });
console.log({ lang });
// * ----------
// * Named Tuples
// * ----------
let graph;
graph = [55.0, 20.1];
const [x, y] = graph;
console.log(x, y);
//# sourceMappingURL=tuples.js.map