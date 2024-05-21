let myUser2: {
  username: string;
  name: string;
  lastName: string;
  getFullName: () => string;
  setName: (name: string) => void;
  setLastName: (lastName: string) => void;
} = {
  username: 'fabian',
  name: 'Fabian',
  lastName: 'Martinez',
  getFullName: function () {
    return `${this.name} ${this.lastName}`;
  },
  setName: function (name: string) {
    this.name = name;
  },
  setLastName: function (lastName: string) {
    this.lastName = lastName;
  },
};

console.log(myUser2.getFullName()); // Output: Fabian Martinez

myUser2.setName('Juan');
myUser2.setLastName('Perez');

console.log(myUser2.getFullName()); // Output: Juan Perez
