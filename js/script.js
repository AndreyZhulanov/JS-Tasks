'use strict'; // Испольуем нотации ES6

// Задача 1

let myName = 'Andrey';
const age = 1978;

// создаю функцию showGreeting
function showGreeting(name) {
    console.dir('Привет, ' + name + '!');
};

// вызов функции
showGreeting(myName);

// Задача 2
// Задаю границы диапазона

let arrayStart = 15;
let arrayEnd = 30;

// в функции использую цикл while
// учитывая, что значения, сохраняемые в массив идут по порядку могу испльзовать сокращенное выражение
// для формирования новых элементов массива
let arrayOne = function (start, end) {
    let arr = [start];
    let i = 0;
    while( arr[i] < end ) {
        arr[++i] = arr[i-1] + 1;
    };
    return arr;
};
// вывожу результат
console.dir(arrayOne(arrayStart, arrayEnd));

// в функции добавил проверку на четность
let arrayTwo = function (start, end) {
    let i = 0;
    let arr = [];
    let number = start;
    while (number <= end ) {
        if (number % 2 == 1) {
            arr[i++] = number;
        };
        number++;
    };
    return arr;
};
// вывожу результат
console.dir(arrayTwo(arrayStart, arrayEnd));

// Задача 3
// Определяю промежуточные вычисления через функции стрелки

const average = (a, b) => (a + b)/2;

const square = (a) => a * a;

const cube = (a) => a * a * a;

// формирую требуемые массив
const calculate = () => {
    let arr = [];
    for (let i = 0; i <= 9; i++) {
        arr[i] = average(square(i), cube(i));
    };
    return arr;
};
// вывожу результат
console.dir(calculate());

// Задача 4.1
// не понял задачу
const fn = () => {
    const object1 = {name: 'Name1'};
    let object2 = {name: 'Name2'};
    const objectNew = {name: 'NameNew'};

    object1.name = 'Name1_New'; // константой является объект, но не его свойство, поэтому можем менять значение свойства
    object2.name = 'Name2_New'; // свойство объекта так же позволяет менять значение

    console.dir(object1);
    console.dir(object2);

    // object1 = objectNew; // объект является константой, не можем заменить его на новый объект - выдается ошибка
    object2 = objectNew; // объект является переменной - можем его переприсвоить

    console.dir(object1);
    console.dir(object2);
};

// вызываю функцию fn
fn();

// функция возвращает требуемый объект
function createUser(name, city) {
    return {name: name, city: city};
};

console.dir(createUser('Marcus Aurelius', 'Roma'));