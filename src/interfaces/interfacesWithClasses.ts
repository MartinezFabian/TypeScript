interface ICommunicator {
  sendMessage(message: string): void;
}

class Phone {
  constructor(protected brand: string, protected model: string) {}

  get getBrand(): string {
    return this.brand;
  }

  set setBrand(brand: string) {
    this.brand = brand;
  }

  get getModel(): string {
    return this.model;
  }

  set setModel(model: string) {
    this.model = model;
  }
}

class SmartPhone extends Phone implements ICommunicator {
  constructor(brand: string, model: string, private operatingSystem: string) {
    super(brand, model);
  }

  get getOperatingSystem(): string {
    return this.operatingSystem;
  }

  set setOperatingSystem(operatingSystem: string) {
    this.operatingSystem = operatingSystem;
  }

  sendMessage(message: string): void {
    console.log(
      `Mensaje desde smartphone de la marca: ${this.getBrand}, modelo: ${this.getModel} con el sistema operativo: ${this.getOperatingSystem}: ${message}`
    );
  }
}

class Relic {
  constructor(protected description: string) {}

  get getDescription(): string {
    return this.description;
  }

  set setDescription(description: string) {
    this.description = description;
  }
}

class Telegraph extends Relic implements ICommunicator {
  constructor(description: string, private isWorking: boolean) {
    super(description);
  }

  get getIsWorking(): boolean {
    return this.isWorking;
  }

  set setIsWorking(isWorking: boolean) {
    this.isWorking = isWorking;
  }

  sendMessage(message: string): void {
    console.log('Mensaje desde el telégrafo: ' + message);
  }
}

class Main {
  static main(): void {
    const phone = new SmartPhone('Apple', 'iPhone 14', 'IOS');
    const relic = new Telegraph('Telégrafo viejo', true);

    const communicators: ICommunicator[] = [phone, relic];

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
