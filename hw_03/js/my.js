const CURRENT_YEAR = 2022;

const firstName = prompt("Введіть ім'я");
const lastName = prompt("Введіть призвіще");
const dateOfBirth = Number(prompt("Введіть день свого народження"));
const monthOfBirth = Number(prompt("Введіть місяць свого народження"));
const yearOfBirth = Number(prompt("Введіть рік свого народження"));

let age = CURRENT_YEAR - yearOfBirth;

let zodiac;
let simbol;

switch (monthOfBirth) {
    case 1:
        if (dateOfBirth < 20) {
            zodiac = "Capricorn";
            simbol = "♑";
        }
        else {
            zodiac = "Aquarius";
            simbol = "♒";
        }
        break;
    case 2:
        if (dateOfBirth < 19) {
            zodiac = "Aquarius";
            simbol = "♒";
        }
        else {
            zodiac = "Pisces";
            simbol = "♓";
        }
        break;
    case 3:
        if (dateOfBirth < 21) {
            zodiac = "Pisces";
           simbol = "♓"; 
        }
        else {
            zodiac = "Aries";
            simbol = "♈";
        }
        break;
    case 4:
        if (dateOfBirth < 20) {
            zodiac = "Aries";
            simbol = "♈";   
        }
        else {
            zodiac = "Taurus";
            simbol = "♌";
        }
        break;
    case 5:
        if (dateOfBirth < 21) {
            zodiac = "Taurus";
            simbol = "♉";
        }
        else {
            zodiac = "Gemini";
            simbol = "♊";
        }
        break;
    case 6:
        if (dateOfBirth < 21) {
            zodiac = "Gemini";
            simbol = "♊";  
        }
        else {
            zodiac = "Cancer";
            simbol = "♋";
        }
        break;
    case 7:
        if (dateOfBirth < 23) {
            zodiac = "Cancer";
            simbol = "♋"; 
        }
        else {
            zodiac = "Leo";
            simbol = "♌";
        }
        break;
    case 8:
        if (dateOfBirth < 23) {
            zodiac = "Leo";
            simbol = "♌";
        }
        else {
            zodiac = "Virgo";
            simbol = "♍";
        }
        break;
    case 9:
        if (dateOfBirth < 23) {
            zodiac = "Virgo";
            simbol = "♍";
        }
        else {
            zodiac = "Libra";
            simbol = "♎";
        }
        break;
    case 10:
        if (dateOfBirth < 23) {
            zodiac = "Libra";
            simbol = "♎";
        }
        else {
            zodiac = "Scorpio";
            simbol = "♏";
        }
        break;
    case 11:
        if (dateOfBirth < 22) {
            zodiac = "Scorpio";
            simbol = "♏";
        }
        else {
            zodiac = "Sagittarius";
            simbol = "♐";
        }
        break;
    case 12:
        if (dateOfBirth < 22) {
            zodiac = "Sagittarius";
            simbol = "♐";
        }
        else {
            zodiac = "Capricorn";
            simbol = "♑";
        }
        break;
}

 console.log("User Bio: " + firstName + " " + lastName + ", " + age + " years old " + (yearOfBirth % 4 == 0 || yearOfBirth % 100 != 0 && yearOfBirth % 400 == 0 ? "(leap year), " : ", ") + zodiac + " " + simbol + ";");