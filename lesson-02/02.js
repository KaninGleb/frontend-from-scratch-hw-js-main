// * Напишите код, который симулирует бросок двух шестигранных игральных кубиков и определяет, выпал ли выигрышный дубль.
// * В переменные dice1 и dice2 должны присваиваться случайные целые числа от 1 до 6.
// * Дубль считается выигрышным, если на обоих дайсах выпало одно и то же число, и это число больше 3.
// * Полученное булево значение сохраните в переменной isWinningDouble

// * Для успешного прохождения тестов не меняйте названия переменных!

// Solution:

// let dice1 = Math.floor(Math.random() * 6) + 1;
// let dice2 = Math.floor(Math.random() * 6) + 1;
// let isWinningDouble = (dice1 === dice2 && dice1 > 3);

// console.log('Первый бросок: ' + dice1);
// console.log('Второй бросок: ' + dice2);

// if (isWinningDouble) {
//   isWinningDouble = true;
//   console.log('Выигрышный дубль!');
// } else {
//   isWinningDouble = false;
//   console.log('Не выигрышный дубль.');
// }

let dice1 = Math.floor(Math.random() * 6) + 1; // случайное число от 1 до 6
let dice2 = Math.floor(Math.random() * 6) + 1; // случайное число от 1 до 6
let isWinningDouble = (dice1 === dice2) && (dice1 > 3); // проверка на выигрышный дубль

// Возвращаем значения для проверки
const executeScript = new Function(`
  return { dice1: ${dice1}, dice2: ${dice2} };
`);

const result = executeScript(); // Запускаем функцию и получаем результат

// Проверяем, что значения находятся в пределах от 1 до 6
if (result.dice1 < 1 || result.dice1 > 6 || result.dice2 < 1 || result.dice2 > 6) {
  throw new Error('Значения кубиков должны быть от 1 до 6');
}

console.log('Первый бросок: ' + result.dice1);
console.log('Второй бросок: ' + result.dice2);
if (isWinningDouble) {
  console.log('Выигрышный дубль!');
} else {
  console.log('Не выигрышный дубль.');
}