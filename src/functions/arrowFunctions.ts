const addArrow = (value1: number, value2: number): number => value1 + value2;

const resultAddArrow: number = addArrow(20, 4);

console.log(resultAddArrow); // Output: 24

const sayHiArrow = (firstName: string, lastName: string): void => {
  console.log(`Hello, ${firstName} ${lastName}!`);
};

sayHiArrow('Fabian', 'Martinez'); // Output: Hello, Fabian Martinez!

const greetWithDefaultGreetingArrow = (name: string, greeting: string = 'Hello'): string => {
  return `${greeting}, ${name}!`;
};

console.log(greetWithDefaultGreetingArrow('Fabian', 'Good morning')); // Output: Good morning, Fabian!
console.log(greetWithDefaultGreetingArrow('Fabian', 'Good afternoon')); // Output: Good afternoon, Fabian!
console.log(greetWithDefaultGreetingArrow('Fabian')); // Output: Hello, Fabian!

const greetWithOptionalGreetingArrow = (name: string, greeting?: string): string => {
  return greeting ? `${greeting}, ${name}!` : `Hello, ${name}!`;
};

console.log(greetWithOptionalGreetingArrow('Fabian', 'Good morning')); // Output: Good morning, Fabian!
console.log(greetWithOptionalGreetingArrow('Fabian', 'Good afternoon')); // Output: Good afternoon, Fabian!
console.log(greetWithOptionalGreetingArrow('Fabian')); // Output: Hello, Fabian!

const getFullNameArrow = (firstName: string, ...restArgs: string[]): string => {
  console.log(restArgs); // Output: ['Doe', 'Smith', 'Johnson']

  return `${firstName} ${restArgs.join(' ')}.`;
};

console.log(getFullNameArrow('John', 'Doe', 'Smith', 'Johnson')); // Output: John Doe Smith Johnson.
