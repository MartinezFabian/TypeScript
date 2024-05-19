// let value: number = undefined; // Output: El tipo "undefined" no se puede asignar al tipo "number"

let value: number | undefined = undefined;

console.log(value); // Output: undefined

value = 42;

console.log(value); // Output: 42

//let text: string = null; // Output: El tipo "null" no se puede asignar al tipo "string"

let text: string | null = null;

console.log(text); // Output: null

text = 'Hello, World!';

console.log(text); // Output: 'Hello, World!'
