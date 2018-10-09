'use strict';

let str = "урок-3-был слишком легким uyuy";

// 1) Сделать так, чтобы строка начиналась с большой буквы

// Функция для вставки символа в строку с индексом index
String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

str = str.replaceAt(0, str[0].toUpperCase());
console.log('1) ' + str);

// 2) Теперь замените все “-” на пробелы (Поиск и замена символа)

while (findPos(str, '-') != -1) { // Определяет позицию символа в строке
    let targetIndex = findPos(str, '-');
    str = str.replaceAt(targetIndex, ' ');
}
console.log('2) ' + str);

function findPos(string, target) {
    let pos = -1;
    pos = string.indexOf(target, pos + 1);
    return pos;
}

// 3) Из получившейся строки вырезать слово “легким”, в этом же слове заменить 2 последние буквы на букву “о”
let aim = 'легким',
    wordPos = findPos(str, aim),
    word = str.slice(wordPos, wordPos + aim.length); // вырезает только нужное слово
// console.log(word);
console.log('3) ' + word.slice(0, -2) + 'оо'); // так можно?)

str = str.slice(0, wordPos) + str.substring(wordPos + word.length);
console.log('3) ' + str);


// 4)  Вывести в консоль квадратный корень из суммы кубов его элементов (Да, человека нужно исключить)
let arr = [20, 33, 1, "Человек", 2, 3],
    sumSqrt = 0;

deleteString(arr);
console.log(arr);
console.log(math(arr));

function deleteString(array) {
    for (let i = 0; i < array.length; i++) {
        if (typeof(array[i]) == 'string') {
            array = array.splice(i,1);
        }
    }
}
function math(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + Math.pow(arr[i], 3);
    }
    sumSqrt = Math.sqrt(sum);
    return sumSqrt;
}

// 5) Создайте функцию, которая принимает 1 аргумент (название произвольное)
// · Если как аргумент передана не строка - функция оповещает об этом пользователя
// · В полученной (как аргумент) строке функция должна убрать все пробелы в начале и в конце
// · Если строка более 50 знаков - то после 50го символа часть текста скрывается и вместо них появляются три точки (...)

function doString(str) {
    if (typeof(str) != 'string') {
        alert('Данные не являются строкой');
    } else {
        str = str.trim(); // это законно?)
        return (str.length > 50) ? str.slice(0, 47) + '...' : str;
    }
}
console.log(doString("  This string has much much much more than 50 symbols. Believe me    "));
