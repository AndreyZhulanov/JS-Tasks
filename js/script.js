'use strict'; // Испольуем нотации ES6

// // Итерирование, циклы
// // цикл for (1 вариант)
// console.log('Example 1');

// for (let i = 0; i < 3;  i++) {
//     console.log(i);
// };

// // цикл for (2 вариант)

// console.log('Example 2');
// {
//     let i = 0;
//     for (; i < 3; i ++) {
//         console.log(i);
//     }
// }

// // цикл for (3 вариант)

// console.log('Example 3');
// {
//     for (let i = 0; i < 3;) {
//         console.log(i++);
//     }
// }

// // цикл while c предусловием (1 вариант)

// console.log('Example 4');
// let a = 0;
// while (a < 10) {
//     console.log(a++);
// }

// // цикл while c постусловием (1 вариант)

// console.log('Example 5');
// let a = 0;
// do {
//     console.log(a++);
// } while (a < 10);

// // for-in-obj
// const hash = {
//     first: 7,
//     second: 10,
//     third: 1,
//     fourth: 5,
// };

// hash.fifth = 2;

// // console.log(hash);

// for (const key in hash) {
//     // итеррация по ключам объекта (по коллекции)
//     const value = hash[key];
//     console.log(
//         key, '\t', typeof key, '\t', //ключи - вседа строки
//         value, '\t', typeof value, '\t', // значения могут быть любыми (скалярные и ссылочные)
//     );
// }

// //for-in-array
// const numbers = [7, 10, 1, 5, 2];

// console.log(typeof numbers);

// numbers.field2 = 'Value2'; //присваиваем поле, которе будет иметь строчный ключ field2
// numbers[-10] = 'Value3'; //
// numbers.field1 = 'Value1';
// numbers[5] = 20;

// for (const i in numbers) {
//     // итеррация по ключам массива (по коллекции)
//     const value = numbers[i];
//     console.log(i, typeof i, value, typeof value);
// };

// console.log(typeof numbers);

// for (const i of numbers) {
//     // итеррация по значениям массива (по коллекции)
//     const value = numbers[i];
//     console.log(i, typeof i, value, typeof value);
// };

// console.log(typeof numbers);

// Задача
// Реализовать функцию squareOfSum(), которая принимает на вход два числа и возвращает квадрат суммы этих чисел
// Для вычисления значения используйте формулу из курса алгебры.

// примеры использования
// squareOfSum(2, 3) // 25
// squareOfSum(1, 10) // 121

// const squareOfSum = (x, y) => x * x + 2 * x * y + y * y;

// console.log (squareOfSum(1, 10));

// Break

// const flag = false;
// // делаем вложенные блоки кода. Блоки кода можно именовать как label.
// label1: {
//     console.log(1);
//     label2: {
//         console.log(2);
//         break label1; // выход из блока кода, именованного как label1. Break ставится и внутри циклов
//         console.log(3);
//     }
//     console.log(4);
// }
// console.log(5);

// // Continue

// let i = 0; // итерируемся по переменной i, начиная с нуля
// while (i < 10) {
//     i++;
//     console.log('Hello ', i);
//     if (i === 5) continue; // пропускаем вывод 'World' при i = 5
//     console.log('World');
// };

// forEach (метод массива, который позволяет итерироваться по массивам)

// const numbers = [7, 10, 1, 5, 2];

// numbers.forEach((item, i, arr) => { //первый аргумент - элемент из массива, во второй - порядковый номер, в третий - ссылка на массив
//     console.log(i, arr, item);
// });

// [7, 10, 1].forEach(x => console.log(x));

// const log = x => console.log(x); // применовали функцию
// [7, 10, 1].forEach(log); // передали функцию в метод forEach

// Тесты

// const func = () => {
//     const a = 120.323;
//     return 10 * a * b;
// };

// console.log(sum(5, 10));

// (12 > 40) || (400 > = 400)

// const testScore = 10;
// const result = testScore < 10 ? 'bad' : 'good';
// console.log(result);

// const getColour = (color) => {
//     if (color === 'white') {
//         return 'white';
//     }
//     else {
//         return 'black';
//     };
// };


// const getColour = color => color === 'white' ? 'white' : 'black';


// //isEven - функция определяет, является ли число num четным

// const isEven = num => num % 2 === 0;

// const increaseNum = num => num + 10;

// const num = 6;

// const result = isEven(increaseNum(num) + 1) ? num + 1 : 1 - num;

// console.log(result);

// const isRightNUm = num => (num > 10 && num <= 5) || (num / 7 === 1);

// const name = 'JavaScript';
// const version = '5';

// const result = `${name[0]} - ${name}, ${version}.`;
// console.log(result);

// const str = 'Danger';
// const letter = str[str.length / 2];

// console.log(letter);

// let x = 45;
// let height = x++;
// x = --height;

// let b = 10;
// b += b ** 2 > 20 ? 1 : 10;

// let a = 4;
// a -= 8 - a;

const finalGrade = (exam, projects) => 
exam > 90 && projects > 10 ? 100 : 
exam > 75 && projects >= 5 ? 90 : 
exam > 50 && projects >= 2 ? 75 : 
0;


console.log(finalGrade(85, 5));

