/*
function myMap(list: number[], fnTransform: (value: number) => number): number[] {
  const newList: number[] = [];

  for (const element of list) {
    newList.push(fnTransform(element));
  }

  return newList;
}

const numbersMultipliedByTwo = myMap([1, 2, 3], (value) => value * 2);

console.log(numbersMultipliedByTwo); // Output: [2, 4, 6]

const wordsUpperCase = myMap(['hello', 'world'], (value) => value.toUpperCase()); // ERROR: El tipo string no se puede asignar al tipo number
*/

/*
function myMap(list: any[], fnTransform: (value: any) => any): any[] {
  const newList: any[] = [];

  for (const element of list) {
    newList.push(fnTransform(element));
  }

  return newList;
}

const numbersMultipliedByTwo = myMap([1, 2, 3, 'hola', true], (value) => value * 2);

console.log(numbersMultipliedByTwo); //Output:  [2, 4, 6, NaN, 2]

const wordsUpperCase = myMap(['hello', 'world', 2], (value) => value.toUpperCase());

console.log(wordsUpperCase); // Output: TypeError: value.toUpperCase is not a function
*/

function myMap<T>(list: T[], fnTransform: (value: T) => T): T[] {
  const newList: T[] = [];

  for (const element of list) {
    newList.push(fnTransform(element));
  }

  return newList;
}

const numbersMultipliedByTwo: number[] = myMap<number>([1, 2, 3], (value) => value * 2);

console.log(numbersMultipliedByTwo); // Output: [2, 4, 6]

const wordsUpperCase: string[] = myMap<string>(['hello', 'world'], (value) => value.toUpperCase());

console.log(wordsUpperCase); // Output: ['HELLO', 'WORLD']
