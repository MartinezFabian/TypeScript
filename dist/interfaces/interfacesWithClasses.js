"use strict";
class Phone {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    get getBrand() {
        return this.brand;
    }
    set setBrand(brand) {
        this.brand = brand;
    }
    get getModel() {
        return this.model;
    }
    set setModel(model) {
        this.model = model;
    }
}
class SmartPhone extends Phone {
    constructor(brand, model, operatingSystem) {
        super(brand, model);
        this.operatingSystem = operatingSystem;
    }
    get getOperatingSystem() {
        return this.operatingSystem;
    }
    set setOperatingSystem(operatingSystem) {
        this.operatingSystem = operatingSystem;
    }
    sendMessage(message) {
        console.log(`Mensaje desde smartphone de la marca: ${this.getBrand}, modelo: ${this.getModel} con el sistema operativo: ${this.getOperatingSystem}: ${message}`);
    }
}
class Relic {
    constructor(description) {
        this.description = description;
    }
    get getDescription() {
        return this.description;
    }
    set setDescription(description) {
        this.description = description;
    }
}
class Telegraph extends Relic {
    constructor(description, isWorking) {
        super(description);
        this.isWorking = isWorking;
    }
    get getIsWorking() {
        return this.isWorking;
    }
    set setIsWorking(isWorking) {
        this.isWorking = isWorking;
    }
    sendMessage(message) {
        console.log('Mensaje desde el telégrafo: ' + message);
    }
}
class Main {
    static main() {
        const phone = new SmartPhone('Apple', 'iPhone 14', 'IOS');
        const relic = new Telegraph('Telégrafo viejo', true);
        const communicators = [phone, relic];
        for (const communicator of communicators) {
            communicator.sendMessage('Hola!');
        }
    }
}
Main.main();
/*
  Output:

  Mensaje desde smartphone de la marca: Apple, modelo: iPhone 14 con el sistema operativo: IOS: Hola!
  Mensaje desde el telégrafo: Hola!
*/
