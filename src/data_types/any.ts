let variable: any = 42;
console.log({ variable }); // Output: { variable: 42 }

variable = 'Hello, World!';
console.log({ variable }); // Output: { variable: 'Hello, World!' }

variable = { key: 'value' };
console.log({ variable }); // Output: { variable: { key: 'value' } }

// usando any se pierde la seguridad de tipos:
let data: any = 'This is a string';
console.log(data.toUpperCase()); // Output: THIS IS A STRING

data = 24;

console.log(data.toUpperCase()); // Output: Uncaught TypeError: data.toUpperCase is not a function

// otros desarrolladores no tendrán información clara sobre qué tipo de datos se espera en una variable:

let user: any = { name: 'John', age: 30 };
console.log(user.name); // Output: John

user = 'This is not a user object';
console.log(user.name); // Output: undefined
