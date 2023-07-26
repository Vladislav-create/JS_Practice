// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

const thisIsNull = "это ноль";
const evenNumber = "четное число";
const oddNumber = "нечетное число";

for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0 && i !== 0) {
    console.log(`${i} - ${evenNumber}`);
  } else if (i % 2 !== 0) {
    console.log(`${i} - ${oddNumber}`);
  } else {
    console.log(`${i} - ${thisIsNull}`);
  }
}
// ----------------------------------------------------------------------------------------

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 2);
console.log(arr);
// ----------------------------------------------------------------------------------------

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const arr = [];

for (let i = 0; i <= 4; i++) {
  let randomNum = Math.floor(Math.random() * 10);
  arr.push(randomNum);
}

function sumEllArr(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  console.log(result);
}
console.log(arr);
sumEllArr(arr);

function minEllArr(array) {
  let minEll = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < minEll) {
      minEll = array[i];
    }
  }
  console.log(minEll);
}

console.log(arr);
minEllArr(arr);

function findNum(array, num) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === num) {
      counter++;
    }
  }
  if (counter !== 0) {
    console.log(`В массиве присутствует цифра ${num}`);
  } else {
    console.log(`В массиве отсутствует цифра ${num}`);
  }
  console.log(counter);
}

console.log(arr);
findNum(arr, 3);
