/*

Para evitar lo siguiente: 

const batman: {
  name: string;
  universe: string;
  powers: string[];
  getName: () => string;
  getUniverse: () => string;
} = {
  name: 'Bruce Wayne',
  universe: 'DC',
  powers: ['Rich', 'suit'],
  getName(): string {
    return this.name;
  },
  getUniverse(): string {
    return this.universe;
  },
};

const superman: {
  name: string;
  universe: string;
  powers: string[];
  getName: () => string;
  getUniverse: () => string;
} = {
  name: 'Clark Kent',
  universe: 'DC',
  powers: ['Fly', 'Super strength', 'heat vision'],
  getName(): string {
    return this.name;
  },
  getUniverse(): string {
    return this.universe;
  },
};

const spiderman: {
  name: string;
  universe: string;
  powers: string[];
  getName: () => string;
  getUniverse: () => string;
} = {
  name: 'Peter Parker',
  universe: 'Marvel',
  powers: ['Web-shooters', 'Spider-sense', 'Super strength'],
  getName(): string {
    return this.name;
  },
  getUniverse(): string {
    return this.universe;
  },
};

*/

type SuperHero = {
  name: string;
  universe: string;
  powers: string[];
  getName: () => string;
  getUniverse: () => string;
};

const batman: SuperHero = {
  name: 'Bruce Wayne',
  universe: 'DC',
  powers: ['Rich', 'suit'],
  getName(): string {
    return this.name;
  },
  getUniverse(): string {
    return this.universe;
  },
};

const superman: SuperHero = {
  name: 'Clark Kent',
  universe: 'DC',
  powers: ['Fly', 'Super strength', 'heat vision'],
  getName(): string {
    return this.name;
  },
  getUniverse(): string {
    return this.universe;
  },
};

const spiderman: SuperHero = {
  name: 'Peter Parker',
  universe: 'Marvel',
  powers: ['Web-shooters', 'Spider-sense', 'Super strength'],
  getName(): string {
    return this.name;
  },
  getUniverse(): string {
    return this.universe;
  },
};
