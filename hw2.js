// Задание 1
// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.

let num1 = +prompt();
let num2 = +prompt();

num1 === 1 || num1 < 1
  ? console.log("Значение меньше либо равно 1")
  : console.log("Значение больше 1");

num2 === 3 || num2 > 3
  ? console.log("Значение больше либо равно 3")
  : console.log("Значение меньше 3");

// Задание 2
// Перепишите код к тернарному оператору

// let test = true;
// if (test === true) {
// console.log('+++');
// } else {
// console.log('---');
// }

let test = true;

test === true ? console.log("+++") : console.log("---");

// Задание 3
// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

let day = 23;

if (day <= 10) {
  console.log("Число в первой декаде месяца");
} else if (day > 10 && day <= 20) {
  console.log("Число во второй декаде месяца");
} else {
  console.log("Число в третьей декаде месяца");
}


