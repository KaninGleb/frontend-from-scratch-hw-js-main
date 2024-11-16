//  * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
//  * Если строка является числом, функция должна возвращать true, в противном случае - false.


// ✅ SOLUTION
// OPTION 1
// function isNumeric(str) {
//   if (Number(str)) {
//     return true;
//   } else {
//     return false;
//   }
// }


// OPTION 2
function isNumeric(str) {
  return Number(str) ? true : false;
}


// OPTION 3
// const isNumeric = str => Number(str) ? true : false;


// ✅ Checking
console.log(isNumeric("123")) // Ожидаемый результат: true
console.log(isNumeric("12.3")) // Ожидаемый результат: true
console.log(isNumeric("123abc")) // Ожидаемый результат: false
console.log(isNumeric("abc")) // Ожидаемый результат: false
console.log(isNumeric(" ")) // Ожидаемый результат: false