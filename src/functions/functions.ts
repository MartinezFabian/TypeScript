function add(value1: number, value2: number): number {
  return value1 + value2;
}

const result: number = add(20, 4);

console.log(result); // Output: 24

function sayHi(firstName: string, lastName: string): void {
  console.log(`Hello, ${firstName} ${lastName}!`);
}

sayHi('Fabian', 'Martinez'); // Output: Hello, Fabian Martinez!
