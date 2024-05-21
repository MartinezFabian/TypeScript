"use strict";
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
const batman = {
    name: 'Bruce Wayne',
    universe: 'DC',
    powers: ['Rich', 'suit'],
    getName() {
        return this.name;
    },
    getUniverse() {
        return this.universe;
    },
};
const superman = {
    name: 'Clark Kent',
    universe: 'DC',
    powers: ['Fly', 'Super strength', 'heat vision'],
    getName() {
        return this.name;
    },
    getUniverse() {
        return this.universe;
    },
};
const spiderman = {
    name: 'Peter Parker',
    universe: 'Marvel',
    powers: ['Web-shooters', 'Spider-sense', 'Super strength'],
    getName() {
        return this.name;
    },
    getUniverse() {
        return this.universe;
    },
};
