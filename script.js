'use strict';

// new RegExp('pattern', 'flags');
// /pattern/f

// const ans = prompt('Введите ваше число');

// const reg = /\d/g;
// console.log(ans.match(reg));

const str = 'My name is R2D2';

console.log(str.match(/\W/ig));

// \D не числа
// \W не буквы

// \d поиск цифр
// \w поиск слов
// \s поиск всех пробелов

// test() - true or false
// i - не зависит от регистра
// g - глобальный изет все совпадения
// m - поиск в нескольких строках

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt('Password'); 

// . означает все символы в выражении
// console.log(pass.replace(/./g, '*'));

// console.log('12-34-56'.replace(/-/g, ':'));