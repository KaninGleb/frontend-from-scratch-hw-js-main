// Напишите функцию calculateAverage, которая принимает 2 числа и возвращает их среднее арифметическое

let num_1 = Math.ceil(Math.random() * 10);
let num_2 = Math.ceil(Math.random() * 10);

function calculateAverage(number1, number2) {
    return(number1 + number2) / 2;
}

console.log(`Numbers: ${num_1}, ${num_2}.`);
console.log(`Average: ${calculateAverage(num_1, num_2)}.`);