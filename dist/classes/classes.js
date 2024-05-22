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
}
// crear instancia de la clase Person
const person1 = new Person('Fabian', 'Martinez', 22);
// acceder a atributos mediante getters
console.log(`${person1.getName} ${person1.getLastName} ${person1.getAge}`); // Output: Fabian Martinez 22
// modificar atributos mediante setters
person1.setAge = 23;
// metodo de instancia
console.log(person1.toString()); // Output: Fabian Martinez 23
