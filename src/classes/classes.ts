class Person {
  constructor(private name: string, private lastName: string, private age: number) {}

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

  public equals(other: Person): boolean {
    if (other === null) return false;

    return this.name === other.name && this.lastName === other.lastName && this.age === other.age;
  }
}

const person1 = new Person('Fabian', 'Martinez', 22);
const person2 = new Person('Fabian', 'Martinez', 22);

console.log(person1.toString()); // Output: Fabian Martinez 22
console.log(person2.toString()); // Output: Fabian Martinez 22

console.log(person1 == person2); // Output: false => se comparan las referencias

console.log(person1.equals(person2)); // Output: true => se comparan los valores
