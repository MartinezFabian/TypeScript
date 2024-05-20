const subtract = (value1: number, value2: number): number => value1 - value2;

const greet = (name: string): string => `Hello, ${name}!`;

const isLoading = (): boolean => true;

/* lo siguiente es valido si definimos myFunction como una variable de tipo Function

let myFunction: Function;

myFunction = subtract;

console.log(myFunction(10, 5)); // Output: 5

myFunction = greet;

console.log(myFunction('Fabian')); // Output: Hello, Fabian!

myFunction = isLoading;

console.log(myFunction()); // Output: true

*/

let myFunctionSubtract: (a: number, b: number) => number;

myFunctionSubtract = subtract;

console.log(myFunctionSubtract(10, 5)); // Output: 5

let myFunctionGreet: (name: string) => string;

myFunctionGreet = greet;

console.log(myFunctionGreet('Fabian')); // Output: Hello, Fabian!

let myFunctionIsLoading: () => boolean;

myFunctionIsLoading = isLoading;

console.log(myFunctionIsLoading()); // Output: true
