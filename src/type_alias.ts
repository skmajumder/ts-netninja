// * -----------------
// * Type Aliases
// * -----------------

// type RGBA = {
//   red: number;
//   green: number;
//   blue: number;
//   alpha: number;
// };

// function generateRandomColor(): RGBA {
//   const red = Math.floor(Math.random() * 255);
//   const green = Math.floor(Math.random() * 255);
//   const blue = Math.floor(Math.random() * 255);

//   return { red, green, blue, alpha: 1 };
// }

// console.log(generateRandomColor());

// const colorBlue: RGBA = {
//   red: 0,
//   green: 0,
//   blue: 255,
//   alpha: 1,
// };

// const colorMagenta: RGBA = {
//   red: 255,
//   green: 0,
//   blue: 255,
//   alpha: 1,
// };

type RGBA = [number, number, number, number];

function generateRandomColor(): RGBA {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return [red, green, blue, 1];
}

console.log(generateRandomColor());
