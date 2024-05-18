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
