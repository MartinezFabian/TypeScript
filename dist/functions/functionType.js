"use strict";
const subtract = (value1, value2) => value1 - value2;
const greet = (name) => `Hello, ${name}!`;
const isLoading = () => true;
/* lo siguiente es valido si definimos myFunction como una variable de tipo Function

let myFunction: Function;

myFunction = subtract;

console.log(myFunction(10, 5)); // Output: 5

myFunction = greet;

console.log(myFunction('Fabian')); // Output: Hello, Fabian!

myFunction = isLoading;

console.log(myFunction()); // Output: true

*/
let myFunctionSubtract;
myFunctionSubtract = subtract;
console.log(myFunctionSubtract(10, 5)); // Output: 5
let myFunctionGreet;
myFunctionGreet = greet;
console.log(myFunctionGreet('Fabian')); // Output: Hello, Fabian!
let myFunctionIsLoading;
myFunctionIsLoading = isLoading;
console.log(myFunctionIsLoading()); // Output: true
