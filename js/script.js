'use strict'; // Испольуем нотации ES6

// 1. Реализуйте функцию iterate(object, callback) которая будет итерировать все ключи переданного объекта, вызывая для каждого callback со следующим контрактом callback(key, value, object). Например:

// const obj = { a: 1, b: 2, c: 3 };
// iterate(obj, (key, value) => {
//   console.log({ key, value });
// });

// Вывод:
// { key: 'a', value: 1 }
// { key: 'b', value: 2 }
// { key: 'c', value: 3 }


//функция перебирает ключи полученного объекта и вызывает callback функцию для вывода пар ключ, значение. 3-ий параметр object в callback функции лишний.
function iterate(object, callback) {
    for (let key in object) {
        callback(key, object[key], object);
    };
};

//итерируемый объект
const obj = { a: 1, b: 2, c: 3 };

console.log('Задача 1:');
//вызов функции - итератора и передача ей callback функции
iterate(obj, (key, value) => {
    console.log({ key, value });
});


// 2. Реализуйте функцию store(value) которая сохранит значение в замыкании возвращаемой функции, а после ее вызова вернет значение из замыкания, как в примере:

// функция store возвращает безымянную функцию, для которой значение value относится к внешнему окружению и она может получить доступ к этому значению
function store(value) {
    return function() {
        return value;
    };
};

const read = store(5);
// функция возвращает значение, переданое как параметр в предыдущей строке
const value = read();

console.log('Задача 2:');
console.log(value); // Output: 5


// 3. Реализуйте функцию contract(fn, ...types) которая оборачивает fn (первый аргумент) и проверяет типы аргументов (все аргументы кроме первого и последнего) и результата (последний аргумент), генерируя исключение TypeError, если типы не совпадают. Как в следующем примере:

function contract(fn, ...types) {
// передаю в безымянную функцию аргументы функции fn    
    return function(...args) { 
        // проверяю аргументы на соответствие типам, указанным при вызове функции contract
        for (const key in args) {
            if (typeof(args[key]) != typeof(types[key]())) {
                throw new TypeError(`Argument #`+key+` is not of type `+typeof(types[key]()));
            };
        };
        
        let retval = fn(...args);
        // проверяю резултат функции fn на соответствие типу, указанному в последнем аргументе функции contract
        if (typeof(retval) != typeof(types[types.length-1]())) {
            throw new TypeError(`Return value of a function is not of type `+typeof(types[types.length-1]()));
        };

        return retval;
    };
};

console.log('Задача 3:');

// const add = (a, b) => a + b;
// const addNumbers = contract(add, Number, Number, Number);
// // обработка исключения TypeError
// try {
//     const res = addNumbers(2, 3);
//     console.dir(res); // Output: 5
// };
// catch(err) { console.log(`Ошибка: `+err.message) };

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
// обработка исключения TypeError
try {
    const res = concatStrings('Hello ', 'world!');
    console.dir(res); // Output: Hello world!
};
catch(err) { console.log(`Ошибка: `+err.message) };


