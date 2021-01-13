"use strict";

// console.log(1);

// setTimeout(() => {
//     console.log('timeout');
// }, 2000);

// setTimeout(() => {
//     console.log('timeout_4000');
// }, 4000);

// console.log(2);

// Call Stack - вызовы функций, которые выполняются в данный момент
// Web Apis - спец. хранилище для хранения промежуточных данных
// Callback Queue - очередь событий и функций во время работы

// let k = 0;

// function count() {
//     for (let i = 0; i < 1e9; i++) {
//         k++;
//     }
//     alert('done');
// }

// count();

setTimeout(() => {
    console.log(1);
}, 0);  // при установке 0 по умолчанию браузер устанавливает 4 мс, во избежания некорректной работы в других браузерах

console.log(2);