const CURRENT_YEAR = 2022;

const firstName = prompt("Введіть ім'я");
const lastName = prompt("Введіть призвіще");
const dateOfBirth = Number(prompt("Введіть день свого народження"));
const monthOfBirth = Number(prompt("Введіть місяць свого народження"));
const yearOfBirth = Number(prompt("Введіть рік свого народження"));

let age = CURRENT_YEAR - yearOfBirth;

let zodiac;
let simbol;
let isLeapYear = false;

switch (monthOfBirth) {
    case 1:
        if (dateOfBirth < 20) {
            zodiac = "Capricorn";
            simbol = "\u2651";
        }
        else {
            zodiac = "Aquarius";
            simbol = "\u2652";
        }
        break;
    case 2:
        if (dateOfBirth < 19) {
            zodiac = "Aquarius";
            simbol = "\u2652";
        }
        else {
            zodiac = "Pisces";
            simbol = "\u2653";
        }
        break;
    case 3:
        if (dateOfBirth < 21) {
            zodiac = "Pisces";
           simbol = "\u2653"; 
        }
        else {
            zodiac = "Aries";
            simbol = "\u2648";
        }
        break;
    case 4:
        if (dateOfBirth < 20) {
            zodiac = "Aries";
            simbol = "\u2648";   
        }
        else {
            zodiac = "Taurus";
            simbol = "\u2649";
        }
        break;
    case 5:
        if (dateOfBirth < 21) {
            zodiac = "Taurus";
            simbol = "\u2649";
        }
        else {
            zodiac = "Gemini";
            simbol = "\u264a";
        }
        break;
    case 6:
        if (dateOfBirth < 21) {
            zodiac = "Gemini";
            simbol = "\u264a";  
        }
        else {
            zodiac = "Cancer";
            simbol = "\u264b";
        }
        break;
    case 7:
        if (dateOfBirth < 23) {
            zodiac = "Cancer";
            simbol = "\u264b"; 
        }
        else {
            zodiac = "Leo";
            simbol = "\u264c";
        }
        break;
    case 8:
        if (dateOfBirth < 23) {
            zodiac = "Leo";
            simbol = "\u264c";
        }
        else {
            zodiac = "Virgo";
            simbol = "\u264d";
        }
        break;
    case 9:
        if (dateOfBirth < 23) {
            zodiac = "Virgo";
            simbol = "\u264d";
        }
        else {
            zodiac = "Libra";
            simbol = "\u264e";
        }
        break;
    case 10:
        if (dateOfBirth < 23) {
            zodiac = "Libra";
            simbol = "\u264e";
        }
        else {
            zodiac = "Scorpio";
            simbol = "\u264f";
        }
        break;
    case 11:
        if (dateOfBirth < 22) {
            zodiac = "Scorpio";
            simbol = "\u264f";
        }
        else {
            zodiac = "Sagittarius";
            simbol = "\u2650";
        }
        break;
    case 12:
        if (dateOfBirth < 22) {
            zodiac = "Sagittarius";
            simbol = "\u2650";
        }
        else {
            zodiac = "Capricorn";
            simbol = "\u2651";
        }
        break;
}

isLeapYear = (yearOfBirth % 4 == 0 || yearOfBirth % 100 != 0 && yearOfBirth % 400 == 0);

 console.log("User Bio: " + firstName + " " + lastName + ", " + age + " years old " + (isLeapYear ? "(leap year), " : ", ") + zodiac + " " + simbol + ";");