"use strict";
// * ----------
// * type any
// * ----------
let age;
age = 99;
age = "100";
age = true;
let title;
title = 100;
title = "The JS Library";
title = true;
title = {
    headline: "TypeScript Hero",
};
// * ----------
// * type any in array
// * ----------
let anyTypeArr = [10, "Ten", true, {}, null, undefined];
let anyTypeArrTwo = [10, "Ten", true, {}, true];
anyTypeArr.push(false);
anyTypeArr.push(20);
anyTypeArr.push("Hello TS");
anyTypeArr.push({ headline: "TypeScript Hero" });
const item = anyTypeArrTwo[0];
// * ----------
// * type any in function
// * ----------
function addTogether(value) {
    return value + value;
}
const result1 = addTogether("hello");
const result2 = addTogether(10);
const result3 = addTogether(true);
console.log(result1);
console.log(result2);
console.log(result3);
//# sourceMappingURL=any.js.map