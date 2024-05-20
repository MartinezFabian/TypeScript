function greetWithDefaultGreeting(name: string, greeting: string = 'Hello'): string {
  return `${greeting}, ${name}!`;
}

console.log(greetWithDefaultGreeting('Fabian', 'Good morning')); // Output: Good morning, Fabian!
console.log(greetWithDefaultGreeting('Fabian', 'Good afternoon')); // Output: Good afternoon, Fabian!
console.log(greetWithDefaultGreeting('Fabian')); // Output: Hello, Fabian!
