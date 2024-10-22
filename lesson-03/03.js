// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.
let num_1 = Math.ceil(Math.random() * 3);
let num_2 = Math.ceil(Math.random() * 3);
let num_3 = Math.ceil(Math.random() * 3);


function findLargest(number1, number2, number3) {
    return(Math.max(number1, number2, number3));
}

console.log(num_1, num_2, num_3);
console.log(`🥇 Winner: ${findLargest(num_1, num_2, num_3)}`);