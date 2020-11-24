'use strict';

// 1)
// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 5);

// 2)
// const object = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };
// object.sum();

// 3)
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log('Hello! ' + this.name);
//     };
// }
// let ivan = new User('Ivan', 23);

// 4)
// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John',
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']); // Разница только в синтаксисе(через запятую или через массив), действия одни и те же

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));

// 1) Обычная функция: this = window, но если use strict - undefined
// 2) Контекст у методов объекта - сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) Ручная привязка this: call, apply, bind

const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'red';
});

// Когда у нас обработчик события, который у нас записан как коллбек функция, написан в классическом режиме(function()..
// не стрелочная), тогда у нас контекст вызова - сам элемент, на котором произошло событие, т.е. работает как таргет,
// при использовании стрелочной функции контекст вызова теряется

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this);
        };

        say();
    }
};

obj.sayNumber();

// У стрелочной функции нет своего контекста вызова, она всегда берет контекст у своего родителя

const double = a => a * 2;

console.log(double(4));