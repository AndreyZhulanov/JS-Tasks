'use strict'; // Испольуем нотации ES6

// const INTERVAL = 500;
// let counter = 0;
// const MAX_VALUE = 10;
// let timer = null;

// const event = () => {
//     if (counter === MAX_VALUE) {
//         console.log('The end');
//         clearInterval(timer);
//         return;
//     }
//     console.dir({ counter, date: new Date() });
//     counter++;
// };

// console.log('Begin');
// timer = setInterval(event, INTERVAL);

// const MAX_VALUE = 10;
// console.log('Begin');
// for(let i = 0; i < MAX_VALUE; i++) {
//     console.dir({i, date: new Date() });
// };
// console.log('The end');

// Function

// const add = (a,b) => a + b;

// console.log('Add numbers: 5 + 2 = ' + add(5, 2));
// console.log('Add floats: 5.1 + 2.3 = ' + add(5.1, 2.3));
// console.log(`Concatenate: '5' + '2' = '${add('5', '2')}'`);
// console.log('Subtraction: 5 + (-2) = ' + add(5, -2));

// Object

// const welcome = person => {
//     console.log(`Ave, ${person.name}`); // Строковые шаблоны - позволяют подставлять выражения и переменные в строки
// };

// // Создаем литерал массива
// const persons = [
//     { name: 'Marcus Aurelius'},
//     { name: 'Mao Zedong'},
//     { name: 'Rene Descartes'},
// ];

// for(let person of persons) {
//     welcome(person);
// }



// // Создаем литерал объекта
// const marcus = { name: 'Marcus Aurelius'};
// const mao = { name: 'Mao Zedong'};
// const cartesius = { name: 'Rene Descartes'};


// welcome(marcus);
// welcome(mao);
// welcome(cartesius);

// Способы определения функций

// Function declaration (никуда ничего не присваивается. если нет return, то выведет значение undefined. видимость глобальная)
function inc(a) {
    return a + 1;
}

// Function expression (значение функционального типа присваевается в идентификатор sum)
const sum = function (a, b) {
    return a + b;
}

// Lambda expression (функция стрелка)
const max = (a, b) => (a > b ? a : b);

// Lambda function ()
const avg = (a, b) => {
    const s = sum (a, b);
    return s / 2;
}

console.log('inc(5) = ' + inc(5));
console.log('sum(1, 3) = ' + sum(1, 3));
console.log('max(8, 6) = ' + max(8, 6));
console.log('avg(8, 6) = ' + avg(8, 6));
