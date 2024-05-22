"use strict";
class Person {
    constructor(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
    get getName() {
        return this.name;
    }
    set setName(name) {
        this.name = name;
    }
    get getLastName() {
        return this.lastName;
    }
    set setLastName(lastName) {
        this.lastName = lastName;
    }
    get getAge() {
        return this.age;
    }
    set setAge(age) {
        this.age = age;
    }
    toString() {
        return `${this.name} ${this.lastName} ${this.age}`;
    }
    equals(other) {
        if (other === null)
            return false;
        return this.name === other.name && this.lastName === other.lastName && this.age === other.age;
    }
}
const person1 = new Person('Fabian', 'Martinez', 22);
const person2 = new Person('Fabian', 'Martinez', 22);
console.log(person1.toString()); // Output: Fabian Martinez 22
console.log(person2.toString()); // Output: Fabian Martinez 22
console.log(person1 == person2); // Output: false => se comparan las referencias
console.log(person1.equals(person2)); // Output: true => se comparan los valores
