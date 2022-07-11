const CURRENT_YEAR = 2022;

const firstName = prompt("Введіть ім'я");
const lastName = prompt("Введіть призвіще");
const dateOfBirth = Number(prompt("Введіть день свого народження"));
const monthOfBirth = Number(prompt("Введіть місяць свого народження"));
const yearOfBirth = Number(prompt("Введіть рік свого народження"));

let age = CURRENT_YEAR - yearOfBirth;

let zodiac;

switch (monthOfBirth) {
    case 1:
        if (dateOfBirth < 20) {
            zodiac = "Capricorn";
        }
        else {
            zodiac = "Aquarius";
        }
        break;
    case 2:
        if (dateOfBirth < 19) {
            zodiac = "Aquarius";
        }
        else {
            zodiac = "Pisces";
        }
        break;
    case 3:
        if (dateOfBirth < 21) {
           zodiac = "Pisces"; 
        }
        else {
            zodiac = "Aries";
        }
        break;
    case 4:
        if (dateOfBirth < 20) {
         zodiac = "Aries";   
        }
        else {
            zodiac = "Taurus";
        }
        break;
    case 5:
        if (dateOfBirth < 21) {
           zodiac = "Taurus"; 
        }
        else {
            zodiac = "Gemini";
        }
        break;
    case 6:
        if (dateOfBirth < 21) {
          zodiac = "Gemini";  
        }
        else {
            zodiac = "Cancer";
        }
        break;
    case 7:
        if (dateOfBirth < 23) {
           zodiac = "Cancer"; 
        }
        else {
            zodiac = "Leo";
        }
        break;
    case 8:
        if (dateOfBirth < 23) {
            zodiac = "Leo"; 
        }
        else {
            zodiac = "Virgo";
        }
        break;
    case 9:
        if (dateOfBirth < 23) {
            zodiac = "Virgo";
        }
        else {
            zodiac = "Libra";
        }
        break;
    case 10:
        if (dateOfBirth < 23) {
            zodiac = "Libra";
        }
        else {
            zodiac = "Scorpio";
        }
        break;
    case 11:
        if (dateOfBirth < 22) {
            zodiac = "Scorpio";
        }
        else {
            zodiac = "Sagittarius";
        }
        break;
    case 12:
        if (dateOfBirth < 22) {
            zodiac = "Sagittarius";
        }
        else {
            zodiac = "Capricorn";
        }
        break;
}

// let isLeapYear = yearOfBirth % 4 == 0 || yearOfBirth % 100 != 0 && yearOfBirth % 400 == 0 ? true : false; 

// if (isLeapYear) {
//     console.log("User Bio: " + firstName + " " + lastName + ", " + age + " years old " + "(leap year), " + zodiac + ";");
// }
// else {
//     console.log("User Bio: " + firstName + " " + lastName + ", " + age + " years old, " + zodiac + ";");
// }

 console.log("User Bio: " + firstName + " " + lastName + ", " + age + " years old " + (yearOfBirth % 4 == 0 || yearOfBirth % 100 != 0 && yearOfBirth % 400 == 0 ? "(leap year), " : ", ") + zodiac + ";");