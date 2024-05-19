const nums: number[] = [1, 2, 3, 4, 5];
console.log(nums); // Output: [1, 2, 3, 4, 5]

const names: string[] = ['John', 'Jane', 'Joe'];
console.log(names); // Output: ['John', 'Jane', 'Joe']

const booleans: boolean[] = [true, false, true];
console.log(booleans); // Output: [true, false, true]

const mixed: (string | number | boolean)[] = ['hello', 42, true];
console.log(mixed); // Output: ['hello', 42, true]

const employees: { name: string; age: number }[] = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
];
console.log(employees); // Output: [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }]

let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let element: number = matrix[0][1]; // Accede al elemento en la primera fila y segunda columna
console.log(element); // Output: 2

matrix[1][1] = 10; // Modifica el elemento en la segunda fila y segunda columna
console.log(matrix); // Output: [[1, 2, 3], [4, 10, 6], [7, 8, 9]]
