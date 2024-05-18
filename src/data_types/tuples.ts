const tupleUser: [string, number, boolean] = ['John', 42, true];

const userName: string = tupleUser[0];
const ageUser: number = tupleUser[1];
const isValidUser: boolean = tupleUser[2];

tupleUser[0] = 'John Doe';
tupleUser[1] = 43;
tupleUser[2] = false;

console.log(tupleUser); // ['John Doe', 43, false]
