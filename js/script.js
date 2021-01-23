'use strict'; // Испольуем нотации ES6

// // this
// const Context = function() {
//     this.name = 'Marcus';
//     const city = {
//         name: 'Kiev',
//         year: 482,
//         f1: function() {
//             return this.name;
//         },
//         f2: () => {
//             return this.name;
//         },
//         f3() {
//             return this.name;
//         }
//     };
//     return city;
// };

// const city = new Context();

// console.log('cuty.f1() = ' + city.f1());
// console.log('cuty.f2() = ' + city.f2());
// console.log('cuty.f3() = ' + city.f3());


// // Context

// const hash = () => {
//     const data = {};
//     let counter = 0;
//     return (key, value) => {
//         data[key] = value;
//         counter++;
//         console.dir({ counter });
//         return data;
//     };
// };

// const h1 = hash();
// h1('name', 'Marcus');
// h1('city', 'Roma');

// const obj1 = h1('born', 121);
// console.dir({ obj1 });

// Ошибки 
// Строки кода после указания ошибки - stack trace 
// (последовательность вызовов функций, которая привела к ошибке)

// синтаксическая ошибка
// const cube = (num) => {
//     return num * num * num;
// };

// // ссылочная ошибка refference error
// const abs = 0;
// console.dir(abc);

// ошибка типизации
// const length = 12;
// const num = lengh(54);

// // Логическая ошибка
// const fahrToCelsius = (fahr) => {
//     return fahr - 32 * 5/9; // не хватает скобок
// };

// console.log(fahrToCelsius(50));

// Практика
// Написать функцию переворота строки

const reverse = (str) => {
    let strLength = str.length;
    let newStr = '';
    for (let i = strLength - 1; i >= 0; --i) {
        newStr += str[i];
    };
    return newStr;
};

console.dir(reverse('hello, world!'));

// Написать функцию generateKey(length, characters), возвращающую строчку случайных символов из набора characters длиной lenght.

// Например: 
// const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
// const key = generateKey(16, characters);

// console.log(key); // jkas4kjh23kjh8fe

// console.dir('123');

const charSet = 'abcdefghijklmnopqrstuvwxyz0123456789';

const randomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
};



function generateKey(keyLength, charSet) {
    let result = '';
    const len = charSet.length - 1;
    for (let i = 0; i < keyLength; i++) {
        result += charSet[randomInt(len)];
    };
    return result;
};

console.dir(generateKey(16, charSet));



