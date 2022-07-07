const currentYear = 2022;

let firstName = prompt("Введіть своє ім'я");
let lastName = prompt("Введіть своє прізвище");
let birthYear = Number(prompt("Введіть свій рік народження"));

let age = currentYear - birthYear;

console.log("User Bio: " + firstName + " " + lastName + ", " + age + " years old;");