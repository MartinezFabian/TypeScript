class Person {
  private name: string;
  private lastName: string;
  private age: number;

  constructor(name: string, lastName: string, age: number) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  get getName(): string {
    return this.name;
  }

  set setName(name: string) {
    this.name = name;
  }

  get getLastName(): string {
    return this.lastName;
  }

  set setLastName(lastName: string) {
    this.lastName = lastName;
  }

  get getAge(): number {
    return this.age;
  }

  set setAge(age: number) {
    this.age = age;
  }

  public toString(): string {
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
