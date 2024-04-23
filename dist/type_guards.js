"use strict";
// * -----------------
// * Type guards
// * -----------------
function swapIDType(id) {
    if (typeof id === "string") {
        // * can use string methods
        return parseInt(id);
    }
    else {
        // * can use number methods & properties
        return id.toString();
    }
}
const idOne = swapIDType("10");
const idTwo = swapIDType(20);
function loginDetails(value) {
    if (value.type === "user") {
        console.log(value.username, value.email);
    }
    else {
        console.log(value.firstName, value.age);
    }
}
// * -----------------
// * Examples
// * -----------------
let user1 = {
    type: "user",
    username: "john_doe",
    email: "john@example.com",
    id: "123",
};
let person = {
    type: "person",
    firstName: "Jane",
    age: 99,
    id: 456,
};
loginDetails(user1);
loginDetails(person);
//# sourceMappingURL=type_guards.js.map