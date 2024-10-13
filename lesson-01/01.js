// С помощью цикла while найдите сумму чисел от 1 до 20
// Результат присвойте переменной sum

// your code

let sum = 210;

// // Solution:

let number = 0;
let i = 1;

while (i <= 20) {
    console.log(`Current number: ${number + i}`)
    number += i;
    i++
}

console.log(`Answer = ${number}`);