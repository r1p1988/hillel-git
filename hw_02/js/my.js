const CURRENT_YEAR = 2022;

const firstName = prompt("Введіть своє ім'я");
const lastName = prompt("Введіть своє прізвище");
const birthYear = Number(prompt("Введіть свій рік народження"));

let age = CURRENT_YEAR - birthYear;

console.log("User Bio: " + firstName + " " + lastName + ", " + age + " years old;");