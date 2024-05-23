class Personn {
  constructor(private name: string, private lastName: string, private dni: number) {}

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

  get getDni(): number {
    return this.dni;
  }

  set setDni(dni: number) {
    this.dni = dni;
  }

  protected toString(): string {
    return `Nombre: ${this.name}, Apellido: ${this.lastName}, DNI: ${this.dni}`;
  }
}

class Employee extends Personn {
  constructor(name: string, lastName: string, dni: number, private position: string) {
    super(name, lastName, dni);
  }

  get getPosition(): string {
    return this.position;
  }

  set setPosition(position: string) {
    this.position = position;
  }

  public toString(): string {
    return `${super.toString()}, Puesto: ${this.position}`;
  }
}

class Client extends Personn {
  constructor(name: string, lastName: string, dni: number, private numberOfClient: number) {
    super(name, lastName, dni);
  }

  get getNumberOfClient(): number {
    return this.numberOfClient;
  }

  set setNumberOfClient(numberOfClient: number) {
    this.numberOfClient = numberOfClient;
  }

  public toString(): string {
    return `${super.toString()}, N° de cliente: ${this.numberOfClient}`;
  }
}

const employee = new Employee('Juan', 'Perez', 12345678, 'Developer');
const client = new Client('Jonh', 'Doe', 87654321, 3232);

console.log(employee.toString()); // Output: Nombre: Juan, Apellido: Perez, DNI: 12345678, Puesto: Developer
console.log(client.toString()); // Output: Nombre: Jonh, Apellido: Doe, DNI: 87654321, N° de cliente: 3232
