// * TypeScript Arrays

// let names: readonly string[] = ["Mario", "Tiger", "10"];
// let names: string[] = ["Mario", "Tiger", "10"];
// names.push("Puzzle");
// console.log(names);

// const numbers: any[] = [1, "2", 3, true, 8];
// const numbers = [1, "2", 3, true, 8];

// numbers.push(10);
// numbers.push("10");
// numbers.push(true);

// const t = numbers[0];

interface MyObject {
  property1: number;
  property2: string;
}

let specificTypeArr: MyObject[] = [
  { property1: 10, property2: "Ten" },
  { property1: 20, property2: "Twenty" },
];
