const userLine = prompt("Введіть будь-яку строку");
const userId = Number(prompt(`Введіть номер операції:
1. Дізнатись unicode значення символу.
2. Видалити вказаний символ з рядка.
3. Замінити вказаний символ із рядка на випадковий смайлик.
4. Дізнатися кількість літер у рядку.`));
let lineSymbol;
let lineIndex;

smile = [")", ":)", ":(", ":-)", "(￢_￢)", ";)", ":-(", ":-D", ":-S", ":-$"];


switch (userId) {

    case 1:
        lineSymbol = prompt(`Введіть символ, unicode якого треба отримати з вашої строки:
${userLine}`);
        lineIndex = userLine.indexOf(lineSymbol);
        const unicodeLine = userLine.charCodeAt(lineIndex);
        console.log(`unicode символу "${lineSymbol}" - ${unicodeLine}`);
        break;
    
    case 2:
        lineSymbol = prompt(`Введіть символ який треба видалити з вашої строки:
${userLine}`);
        lineIndex = userLine.indexOf(lineSymbol);
        const deleteSymbol = userLine.slice(0, lineIndex) + userLine.slice(lineIndex + 1);
        console.log(deleteSymbol);
        break;
    
    case 3:
        lineSymbol = prompt(`Введіть символ який треба змінити на смайлик з вашої строки:
${userLine}`);
        lineIndex = userLine.indexOf(lineSymbol);
        const randomInt = getRandomIntInclusive(0, 9);
        const replaceSymbol = userLine.substring(0, lineIndex) + smile[randomInt] + userLine.substring(lineIndex + 1);
        console.log(replaceSymbol);
        break;
    
    case 4:
       const letterCount = userLine.replace(/\s/g, "").length;
        console.log(`Кількість літер в рядку "${userLine}" - ${letterCount}`);
        break;
}




function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max); 

  return Math.floor(Math.random() * (max - min + 1) + min);
}