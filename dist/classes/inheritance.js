"use strict";
class Personn {
    constructor(name, lastName, dni) {
        this.name = name;
        this.lastName = lastName;
        this.dni = dni;
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
    get getDni() {
        return this.dni;
    }
    set setDni(dni) {
        this.dni = dni;
    }
    toString() {
        return `Nombre: ${this.name}, Apellido: ${this.lastName}, DNI: ${this.dni}`;
    }
}
class Employee extends Personn {
    constructor(name, lastName, dni, position) {
        super(name, lastName, dni);
        this.position = position;
    }
    get getPosition() {
        return this.position;
    }
    set setPosition(position) {
        this.position = position;
    }
    toString() {
        return `${super.toString()}, Puesto: ${this.position}`;
    }
}
class Client extends Personn {
    constructor(name, lastName, dni, numberOfClient) {
        super(name, lastName, dni);
        this.numberOfClient = numberOfClient;
    }
    get getNumberOfClient() {
        return this.numberOfClient;
    }
    set setNumberOfClient(numberOfClient) {
        this.numberOfClient = numberOfClient;
    }
    toString() {
        return `${super.toString()}, N° de cliente: ${this.numberOfClient}`;
    }
}
const employee = new Employee('Juan', 'Perez', 12345678, 'Developer');
const client = new Client('Jonh', 'Doe', 87654321, 3232);
console.log(employee.toString()); // Output: Nombre: Juan, Apellido: Perez, DNI: 12345678, Puesto: Developer
console.log(client.toString()); // Output: Nombre: Jonh, Apellido: Doe, DNI: 87654321, N° de cliente: 3232
