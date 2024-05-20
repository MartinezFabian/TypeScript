"use strict";
const addArrow = (value1, value2) => value1 + value2;
const resultAddArrow = addArrow(20, 4);
console.log(resultAddArrow); // Output: 24
const sayHiArrow = (firstName, lastName) => {
    console.log(`Hello, ${firstName} ${lastName}!`);
};
sayHiArrow('Fabian', 'Martinez'); // Output: Hello, Fabian Martinez!
const greetWithDefaultGreetingArrow = (name, greeting = 'Hello') => {
    return `${greeting}, ${name}!`;
};
console.log(greetWithDefaultGreetingArrow('Fabian', 'Good morning')); // Output: Good morning, Fabian!
console.log(greetWithDefaultGreetingArrow('Fabian', 'Good afternoon')); // Output: Good afternoon, Fabian!
console.log(greetWithDefaultGreetingArrow('Fabian')); // Output: Hello, Fabian!
const greetWithOptionalGreetingArrow = (name, greeting) => {
    return greeting ? `${greeting}, ${name}!` : `Hello, ${name}!`;
};
console.log(greetWithOptionalGreetingArrow('Fabian', 'Good morning')); // Output: Good morning, Fabian!
console.log(greetWithOptionalGreetingArrow('Fabian', 'Good afternoon')); // Output: Good afternoon, Fabian!
console.log(greetWithOptionalGreetingArrow('Fabian')); // Output: Hello, Fabian!
const getFullNameArrow = (firstName, ...restArgs) => {
    console.log(restArgs); // Output: ['Doe', 'Smith', 'Johnson']
    return `${firstName} ${restArgs.join(' ')}.`;
};
console.log(getFullNameArrow('John', 'Doe', 'Smith', 'Johnson')); // Output: John Doe Smith Johnson.
