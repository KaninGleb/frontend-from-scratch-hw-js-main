/* С помощью цикла while найдите факториал числа 10 и присвойте его переменной factorial

  Справка:
  Факториал числа 𝑛 (обозначается как 𝑛!)  — это произведение всех натуральных чисел от 1 до 𝑛 включительно.
  Например, факториал числа 3 это 1 * 2 * 3 (6).
*/

// Solution:

let factorial = 3628800;
let factorialCounter = 10;
let num = 1;
let i = 1;

while (i <= factorialCounter) {
  num = num * i;
  console.log(num);
  i ++;
}

console.log(`Solution: ${num}`);