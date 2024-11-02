// * Array

let char: string[] = ["a", "b", "c", "d"];
let indexNum: number[] = [1, 2, 3, 4];

console.log(char);
console.log(indexNum);

indexNum.push(5);
char.push("e");

console.log(char);
console.log(indexNum);

// * Type inference with array

let fruits = ["Apple", "Orange", "Mango"];
console.log(fruits);

fruits.push("Peaches");

const mango = fruits[2];
console.log(mango);

const mixArray = ["Apple", 2, true];

const a = mixArray[0];

// * Object literals

let user: { id: number; name: string; age: number; city: string } = {
  id: 1,
  name: "John Doe",
  age: 20,
  city: "New York",
};

// user.email = "John.Doe@gmail.com";

// * Type inference with object literals

let person = {
  name: "John Doe",
  age: 20,
  city: "New York",
};

// person.email = "johndeo@gmail.com";
const personName = person.name;
console.log(personName);
