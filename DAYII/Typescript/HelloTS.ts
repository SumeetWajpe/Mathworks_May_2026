//let x = 100; // Type inference
// x = "Hello"; // Error

let x: number = 100; // Type annotation
let str: string;
let b: boolean;

let cars: string[] = ["BMW", "AUDI"];
let y: any;
y = 100;
y = "Hi";

function Add(x: number, y: number): number {
  return x + y;
}

let result: number = Add(20, 30);

const Square = (x: number) => x * x;
console.log(Square(4));
