'use strict';

// get(геттер) и set(сеттер) - свойства аксессоры

const persone = {
    name: "Alex",
    age: 25,

    get userAge() {
        return this.age;
    },

    set userAge(num) {
        this.age = num;
    }
};

console.log(persone.userAge = 30);
console.log(persone.userAge);