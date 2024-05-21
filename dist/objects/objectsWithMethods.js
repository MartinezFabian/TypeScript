"use strict";
let myUser2 = {
    username: 'fabian',
    name: 'Fabian',
    lastName: 'Martinez',
    getFullName: function () {
        return `${this.name} ${this.lastName}`;
    },
    setName: function (name) {
        this.name = name;
    },
    setLastName: function (lastName) {
        this.lastName = lastName;
    },
};
console.log(myUser2.getFullName()); // Output: Fabian Martinez
myUser2.setName('Juan');
myUser2.setLastName('Perez');
console.log(myUser2.getFullName()); // Output: Juan Perez
