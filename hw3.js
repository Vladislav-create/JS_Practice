// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

function degree(userNumber) {
  return userNumber ** 3;
}

console.log(degree(2) + degree(3));

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

let userValue = +prompt("Введите размер заработной платы :)");

function salary(param) {
  if (isNaN(param)) {
    console.log("Значение задано неверно, введите число");
  } else {
    console.log(`Размер заработной платы за вычетом налогов равен: ${param * 0.87}`);
  }
}

salary(userValue);

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

let num1 = +prompt("1-ое значение");
let num2 = +prompt("2-ое значение");
let num3 = +prompt("3-е значение");

let maxNum = "";

maxNum = num1;

function getMaxNum(userNum1, userNum2, userNum3) {
  if (userNum2 > maxNum && userNum2 > userNum3) {
    maxNum = userNum2;
    console.log(maxNum);
  } else if (userNum3 > maxNum && userNum3 > userNum2) {
    maxNum = userNum3;
    console.log(maxNum);
  } else {
    console.log(maxNum);
  }
}

getMaxNum(num1, num2, num3);

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

const sum = (arg1, arg2) => {
  return arg1 + arg2;
};
console.log(sum(1, 2));

const subtraction = (arg1, arg2) => {
  if (arg1 > arg2) {
    return arg1 - arg2;
  } else {
    return arg2 - arg1;
  }
};
console.log(subtraction(6, 6));

const multiplication = (arg1, arg2) => {
  return arg1 * arg2;
};
console.log(multiplication(2, 4));

const division = (arg1, arg2) => {
  return arg1 / arg2;
};
console.log(division(21, 3));
