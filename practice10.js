// Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена дней недели. Выведите на экран “Вторник”
// const days = {
//   1: "Понедельник",
//   2: "Вторник",
//   3: "Среда",
//   4: "Четверг",
//   5: "Пятница",
//   6: "Суббота",
//   7: "Воскресенье",
// };

// console.log(days[2]);

// // Создайте объект user с ключами 'name', 'surname', ‘age’. Выведите на экран фамилию, имя и возраст через дефис.
// const user = {
//   name: "Vladislav",
//   surname: "Vinitskiy",
//   age: "18",
// };

// console.log(`${user.name} - ${user.surname} - ${user.age}`);

// // Добавьте в объект user свойство отчество, которое пользователь должен ввести с клавиатуры
// let lastName = prompt("Введите отчество");
// user.lastname = lastName;

// console.log(user);

// // Удалите свойство surname
// delete user.surname;

// Даны два массива: первый с названиями дней недели, а второй - с их порядковыми номерами:
// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// С помощью цикла создайте объект, ключами которого будут названия дней, а значениями - их номера (или наоборот)
// const obj = {x: 1, y: 2, z: 3};
// Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат.

// const arr1 = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// const days = {};

// for (let i = 0; i < arr1.length; i++) {
//   days[arr2[i]] = arr1[1];
// }
// console.log(days);

// const obj = { x: 1, y: 2, z: 3 };

// for (const iterator in obj) {
//   obj[iterator] = obj[iterator] ** 2;
//   console.log(obj[iterator]);
// }

// console.log(obj);

// const obj = {
//   key1: {
//     key1: 1,
//     key2: 2,
//     key3: 3,
//   },
//   key2: {
//     key1: 4,
//     key2: 5,
//     key3: 6,
//   },
//   key3: {
//     key1: 7,
//     key2: 8,
//     key3: 9,
//   },
// };

// let values = Object.values(obj);
// console.log(values);

// let totalSum = 0;

// for (let i = 0; i < values.length; i++) {
//   val = Object.values(values[i]);
//   console.log(val);
//   for (let j = 0; j < val.length; j++) {
//     totalSum += val[j];
//   }
// }

// console.log(totalSum)

// let sum = obj.reduce((total, item) => {
//     return total + item.key1
// })

// Создайте объект riddles
// Добавьте свойства question, answer
// создайте метод askQuestion который задает вопрос question и сравнивает ответ с answer
// Если ответил неверно, то в консоль выводится текст: “вы проиграли”

const riddles = {
  question:
    "Сидит дет, во сто шуб одет. Кто его раздевает, тот слезы проливает.",
  answer: "Лук",
  count: 0,
  hints : ['Используют в готовке', 'растет на даче'],
  askQuestion: function () {
    userUnswer = prompt(this.question);
    while (this.count < 2) {
      if (this.answer === userUnswer) {
        this.count = 3;
        alert("Верно");
      } else {
        userUnswer = prompt(`Неверно, попробуйте еще. Подсказка ${this.hints[this.count]}`);
        this.count++;
      }
    }
  },
};
riddles.askQuestion();
