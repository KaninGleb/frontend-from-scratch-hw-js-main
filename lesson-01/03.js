/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.
  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// Solution:

// let sum

let counter = 20;
let sum = 0;
let i = 1;
let functionCounter = 1

while (i <= counter) {
  if (i % 2 !== 0) {
    sum += i;
    console.log(`🟰  Current number: ${sum - i}`);
    console.log(`✅ Number added to sum: ${i}`);
  } else {
    console.log(`❌ Number not added: ${i}`);
  }
  i++;
}
console.log(`🏁 Final sum of odd numbers from 1 to 20: ${sum}`);