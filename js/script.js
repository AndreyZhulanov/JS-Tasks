'use strict'; // Испольуем нотации ES6

// // Функции высшего порядка

// const { sin } = Math; // Деструктивное присвоение. Ключ sin берется из объекта Math, который встроен в JS

// const inverse = f => x => 1 / f(x);

// const cosecant = inverse(sin);

// const a = cosecant(5);
// console.log('cosecant(5) = ', a);

// const sin2 = inverse(cosecant);
// console.log('sin(0) = ', sin(0), '=', sin2(0));

// произвели математические вычисления. отобразили одну функцию в другую функцию.
// тригонометрическая функция sin отображена через функцию высшего порядка inverse в cosecant.

// Колбэки (callback)

// const fn = (par, callback) => {
//     if(!par) {
//         callback(new Error('Parameter needed')); // Если нет аргумента, то выводим ошибку
//         return;
//     } 
//     callback(null, `Data ${par}`); // Если параметр есть, то мы не возвращаем ошибку
//     return `Value`; // В качестве результата функции fn возвращаем Value
// }

// const res = fn('example', (err, data) => {
//     if(err) throw err;
//     console.dir({ data });
// });

// console.dir({ res });

// Колбеки - когда мы только на вход функцию принимаем и потом ее вызываем

// // замыкания на примере функции высшего порядка
// const fn = a => {
//     const b = 'Closure variable';
//     // возврат из функции fn функции с одним аргументом 'C'
//     return c => {
//         console.dir({a, b, c}); // в этом контексте функции, которая возвращается будут находиться все три переменные. a и b получатся из замыкания
//     };
// };

// // вызов соотв. функции
// const f1 = fn('Parametr 1');
// f1('Parametr 2');

// const f2 = fn('Parametr X');
// f2('Parametr Y');

// на выходе порождается функция, которая замкнута на какой-то контекст
// мы создали замыкание, когда мы на вход не принимаем функцию, а на выход выдается функция.


// const fn3 = () => {
//     console.log('Callback from timer');
// };

// setTimeout(fn3, 5000);

// const add = (a, b) => a + b;

// const sum = (a, b, callback) => callback(a + b); //???

// console.log('add (5, 2) = ', add(5, 2));

// console.log(''); //???

// callback-use

// const fs = require('fs');

// fs.readFile('./script.js', 'utf8', (err, data) => {
//     console.log({ lines: data.split('\n').length });
// });

// console.log('end');

// callback-named

// const fs = require('fs');

// const print = (fileName, err, data) => {
//     console.log({ lines: data.split('\n').length });
// };

// const fileName = './script.js';
// const callback = print.bind(null, fileName);

// fs.readFile(fileName, 'utf8', callback);

// Обработчики событий

// const iterate = (array, listener) => {
//     for (const item of array) {
//         listener(item);
//     };
// };

// const cities = ['Kiev', 'London', 'Beijing'];

// const print = city => {
//     console.log('City', city);
// };

// iterate(cities, print);

// event
// initial - начальное число
// const adder = initial => {
//     let value = initial; // положили это число в переменную value. value будет доступен из замыкания
//     const add = delta => { // создаю функцию add, в которую передаю дельту
//         value+= delta; //на эту дельту передаю дельту
//         if(value >= add.maxValue) add.maxEvent(value);
//         return add; // возврат на саму себя
//     };
//     add.max = (max, event) => { // в add добавили специальный метода. в этот max будет приходить аргумент max и event (действия, события)
//         add.maxValue = max; // сохраняем значения maxValue в мах
//         add.maxEvent = event; // ссылку на функцию обработки события сохранили в свойство maxEvent
//         return add; // вернули add из этого max
//     };
//     return add; // снова вернули add из этого сумматора 
// };

// const maxReached = value => {
//     console.log('max value, value: ' + value);
// };

// const a1 = adder(10).max(100, maxReached)(-12); // сначала кладем 10, когда дойдет до 100, вызови maxReached и отними 12

// a1(25); // добавили 25
// a1(50); // еще добавили 50
// a1(75); // 
// a1(100);
// a1(-200)(50)(300);

// Замыкания - функция замкнула в себе некоторую информацию из области видимости

// const createPrinter = () => {
//     const name = 'King';
//     const printName = () => {
//         console.log(name);
//     };
//     return printName;
// };

// const myPrinter = createPrinter();
// myPrinter(); // King - запомненное значение, при том что область видимости, где оно было задано больше не существует

// Рекурсия - что-то описывается через самого себя, содержит себя в своем же описании

// 3! = 1 * 2 * 3
// Два требования:
// Должна быть Точка останова
// Должно быть правило передвижения (углубления): n * factorial(n - 1)

const factorial = (n) => {
    if (n === 0) {
        return 1;
    };
    else {
        return n * factorial (n - 1);
    };
};

const answer = factorial(3);

