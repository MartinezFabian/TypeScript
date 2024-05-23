"use strict";
class Animal {
    constructor(breed, age) {
        this.breed = breed;
        this.age = age;
    }
}
class Dog extends Animal {
    constructor(breed, age) {
        super(breed, age);
    }
    makeSound() {
        console.log(`${this.breed} de ${this.age} años ladra.`);
    }
}
class Cat extends Animal {
    constructor(breed, age) {
        super(breed, age);
    }
    makeSound() {
        console.log(`${this.breed} de ${this.age} años maulla.`);
    }
}
// const animal = new Animal('Perro', 5); => No se puede instanciar una clase abstracta
const dog = new Dog('Dalmata', 14);
const cat = new Cat('Siamés', 8);
const animals = [dog, cat];
for (const animal of animals) {
    animal.makeSound(); // Polimorfismo
}
