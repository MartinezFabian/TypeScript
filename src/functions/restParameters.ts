function getFullName(firstName: string, ...restArgs: string[]): string {
  console.log(restArgs); // Output: ['Doe', 'Smith', 'Johnson']

  return `${firstName} ${restArgs.join(' ')}.`;
}

console.log(getFullName('John', 'Doe', 'Smith', 'Johnson')); // Output: John Doe Smith Johnson.
