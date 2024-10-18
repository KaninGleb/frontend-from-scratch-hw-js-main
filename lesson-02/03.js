/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

// const score = Math.floor(Math.random() * 101); 
// console.log(score);

const score = 70;
// let grade

if (score >= 0 && score <= 49) {
    grade = "F";
    console.log(grade);
} else if (score >= 50 && score <= 69) {
    grade = "D"
    console.log(grade);
} else if (score >= 70 && score <= 79) {
    grade = "C"
    console.log(grade);
} else if (score >= 80 && score <= 89) {
    grade = "B"
    console.log(grade);
} else {
    grade = "A"
    console.log(grade);
}