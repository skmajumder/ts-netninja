// * -----------------
// * Type guards
// * -----------------

type ID = string | number;

function swapIDType(id: ID) {
  if (typeof id === "string") {
    // * can use string methods
    return parseInt(id);
  } else {
    // * can use number methods & properties
    return id.toString();
  }
}

const idOne = swapIDType("10");
const idTwo = swapIDType(20);

// console.log({ idOne });
// console.log({ idTwo });

// * -----------------
// * Custom Type Guards - tagged interfaces
// * -----------------

interface User {
  type: "user";
  username: string;
  email: string;
  id: ID;
}

interface Person {
  type: "person";
  firstName: string;
  age: number;
  id: ID;
}

function loginDetails(value: User | Person): void {
  if (value.type === "user") {
    console.log(value.username, value.email);
  } else {
    console.log(value.firstName, value.age);
  }
}

// * -----------------
// * Examples
// * -----------------

let user1: User = {
  type: "user",
  username: "john_doe",
  email: "john@example.com",
  id: "123",
};

let person: Person = {
  type: "person",
  firstName: "Jane",
  age: 99,
  id: 456,
};

loginDetails(user1);
loginDetails(person);
