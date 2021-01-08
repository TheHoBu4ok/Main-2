'use strict';

const app = 123;

const number = 1;

(function(){            // Анонимная самовызывающаяся функция
    let number = 2;     // Первый подход создания модуля
    console.log(number);
    console.log(number + 3);
}());

console.log(number);

const user = (function(){       // Второй подход
    const privat = function() {
        console.log('I am privat!');
    };

    return {
        sayHello: privat
    };
}());

user.sayHello();