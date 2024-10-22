// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

const num_1 = Math.ceil(Math.random() * 10);

// // If...else
// function isEven(number) {
//     if (number % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// Ternary operator
function isEven(number) {
    const result = number % 2 === 0 ? true : false;
    return result;
}


console.log(`Number: ${num_1}.`);
console.log(`Is the number even? - ${isEven(num_1)}`);