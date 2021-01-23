'use strict'; // Испольуем нотации ES6

// Задача 1

// перебираю аргументы функции с помощью псевдомассива arguments
function sumFor() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    };
    return result;
};

console.dir("Задача 1");
console.dir(sumFor(10, -1, -1, -1));

// Задача 2

// то же самое, но с использование ForOf
function sumForOf() {
    let result = 0;
    for (const arg of arguments) {
        result += arg;
    };
    return result;
};

console.dir("Задача 2");
console.dir(sumForOf(10, -1, -1, -1));

// Задача 3

// ... цикл while
function sumWhile() {
    let result = 0;
    let i = 0;
    while (i < arguments.length) {
        result += arguments[i++];
    };
    return result;
};

console.dir("Задача 3");
console.dir(sumWhile(10, -1, -1, -1));

// Задача 4

// ... цикл do while с проверкой на наличие хотя бы 1 аргумента
function sumDoWhile() {
    if (arguments.length == 0) return 0;
    let result = 0;
    let i = 0;
    do {
        result += arguments[i++];
    } while (i < arguments.length) ;
    return result;
};

console.dir("Задача 4");
console.dir(sumDoWhile());

// Задача 5

// использую метод рекурсивной переборки массива reduce
const reducer = (accumulator, currentValue) => accumulator + currentValue;

function sumReduce() {
    if (arguments.length == 0) return 0;

    let args = [];
    for (let i = 0; i < arguments.length; i++) {
        args[i] = arguments[i];
    }
    return args.reduce(reducer);
}

console.dir("Задача 5");
console.dir(sumReduce(1, -1, 1));

// Задача 6

// перебираю двумерный массив вложенненными циклами for
const m = (a) => {
    let max = a[0][0];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            max = max > a[i][j] ? max : a[i][j];
        }
    };
    return max;
};

console.dir("Задача 6");
console.log(m([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

// Задача 7

// 
const persons = {
    lenin: { born: 1870, died: 1924 },
    mao: { born: 1893, died: 1976 },
    gandhi: { born: 1869, died: 1948 },
    hirohito: { born: 1901, died: 1989 },
  };

// получаю доступ к значениям объектов с помощью ключевых полей
function ages(personsObj) {
    let lidersAges = {};
    for (const key in personsObj) {
        lidersAges[key] = personsObj[key].died - personsObj[key].born;
    }
    return(lidersAges);
};

console.dir("Задача 7");
console.log(ages(persons));

// Задача 8
// использую метод массива splice, добавил проверку на наличие элементов в массиве
const removeElement = (arr, item) => {
    let itemIndex = arr.indexOf(item,0);
    arr.splice(itemIndex,itemIndex == -1 ? 0 : 1);
};

console.dir("Задача 8");
let array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);

array = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElement(array, 'Lima'); // удалит 'Lima' из массива
removeElement(array, 'Berlin'); // не удалит ничего
console.log(array);


// Задача 9
// то же для удаления нескольких элементов
function removeElements(arr, item) {
    for (let i = 1; i < arguments.length; i++) {
        let itemIndex = arr.indexOf(arguments[i],0);
        arr.splice(itemIndex,itemIndex == -1 ? 0 : 1);    
    };
};

console.dir("Задача 9");
array = [1, 2, 3, 4, 5, 6, 7];
removeElements(array, 5, 1, 6);
console.log(array);

array = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElements(array, 'Lima', 'Berlin', 'Kiev');
console.log(array);