"use strict";
const tupleUser = ['John', 42, true];
const userName = tupleUser[0];
const ageUser = tupleUser[1];
const isValidUser = tupleUser[2];
tupleUser[0] = 'John Doe';
tupleUser[1] = 43;
tupleUser[2] = false;
console.log(tupleUser); // ['John Doe', 43, false]
