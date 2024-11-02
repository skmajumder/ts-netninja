function addNumber(a: number, b: number): number {
  return a + b;
}

const subtractNumber = (a: number, b: number): number => a - b;

// * Return type inference
const addAllNumbers = (numbers: number[]) => numbers.reduce((a, b) => a + b, 0);

console.log(addNumber(5, 10));
console.log(subtractNumber(20, 15));
console.log(addAllNumbers([5, 10, 15, 20, 25]));

