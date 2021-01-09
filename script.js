'use strict';

// try {
//     console.log('Normal');      // Позволяет дальнейшему коду продолжать работу, даже если появилась ошибка
//     console.log(a);             // т.е. выполняется ветка ошибки catch, где ошибок быть не может
//     console.log('result');      // аргумент error - возвращает текст ошибки
// } catch(error) {                 
//     console.log(error.name);
//     console.log(error.message);          
//     console.log(error.stack);          
// } finally {

// }                             

// console.log('Still normal');

try {
    document.querySelector('.active').addEventListener('click', (e) => {
        e.preventDefault();
        console.log('click');
    });
} catch(e) {}

console.log('normal');