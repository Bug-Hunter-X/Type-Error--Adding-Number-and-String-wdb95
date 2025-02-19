function add(a: number, b: number): number {
  return a + b;
}

const num1 = 1;
const num2 = parseInt('2', 10); // Parse the string to a number

const result = add(num1, num2); // Correct type usage
console.log(result); // Outputs 3