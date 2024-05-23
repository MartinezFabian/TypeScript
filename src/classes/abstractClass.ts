abstract class Animal {
  constructor(protected breed: string, protected age: number) {}

  // Metodo abstracto
  abstract makeSound(): void;
}

class Dog extends Animal {
  constructor(breed: string, age: number) {
    super(breed, age);
  }

  makeSound(): void {
    console.log(`${this.breed} de ${this.age} años ladra.`);
  }
}

class Cat extends Animal {
  constructor(breed: string, age: number) {
    super(breed, age);
  }

  makeSound(): void {
    console.log(`${this.breed} de ${this.age} años maulla.`);
  }
}

// const animal = new Animal('Perro', 5); => No se puede instanciar una clase abstracta

const dog = new Dog('Dalmata', 14);
const cat = new Cat('Siamés', 8);

const animals: Animal[] = [dog, cat];

for (const animal of animals) {
  animal.makeSound(); // Polimorfismo
}
