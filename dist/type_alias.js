"use strict";
// * -----------------
// * Type Aliases
// * -----------------
function generateRandomColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return [red, green, blue, 1];
}
console.log(generateRandomColor());
//# sourceMappingURL=type_alias.js.map