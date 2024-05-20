"use strict";
function greetWithOptionalGreeting(name, greeting) {
    return greeting ? `${greeting}, ${name}!` : `Hello, ${name}!`;
}
console.log(greetWithOptionalGreeting('Fabian', 'Good morning')); // Output: Good morning, Fabian!
console.log(greetWithOptionalGreeting('Fabian', 'Good afternoon')); // Output: Good afternoon, Fabian!
console.log(greetWithOptionalGreeting('Fabian')); // Output: Hello, Fabian!
