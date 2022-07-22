let transformedWord,
typeOfTransformation,
userWord;
let sentance = "";
const countOfWords = 3;

let userAnswer = confirm("Tell me three most important words 💚");

for (let wordNumber = 1; wordNumber <= countOfWords; wordNumber++) {
    if (userAnswer) {
        userWord = prompt(`Enter word #${wordNumber}`);
        while (userWord === null
            || !userWord
            || userWord.match(/\d/g)
        ) {
        
            userWord = prompt(`Enter word #${wordNumber}`);
        }
        typeOfTransformation = prompt(`Choose type of transformation for "${userWord}": uppercase|lowercase|capitalize`, "uppercase");
        while (typeOfTransformation === null
            || typeOfTransformation === ""
            || typeOfTransformation
            &&
            !(typeOfTransformation === "uppercase"
            || typeOfTransformation === "lowercase"
            || typeOfTransformation === "capitalize")) {
            typeOfTransformation = prompt(`Choose type of transformation for "${userWord}": uppercase|lowercase|capitalize`, "uppercase");
        }
        switch (true) {
            case typeOfTransformation === "uppercase":
                transformedWord = userWord.toUpperCase();
                sentance += transformedWord;
                console.log(`Word #${wordNumber}: ${userWord}
Tranform type for word #${wordNumber}: ${typeOfTransformation}
Transformed word #${wordNumber}: ${transformedWord}
Sentance: ${sentance}`);
                break;
            case typeOfTransformation === "lowercase":
                transformedWord = userWord.toLowerCase();
                sentance += transformedWord;
                console.log(`Word #${wordNumber}: ${userWord}
Tranform type for word #${wordNumber}: ${typeOfTransformation}
Transformed word #${wordNumber}: ${transformedWord}
Sentance: ${sentance}`);
                break;
            case typeOfTransformation === "capitalize":
                transformedWord = userWord.charAt(0).toUpperCase() + userWord.slice(1);
                sentance += transformedWord;
                console.log(`Word #${wordNumber}: ${userWord}
Tranform type for word #${wordNumber}: ${typeOfTransformation}
Transformed word #${wordNumber}: ${transformedWord}
Sentance: ${sentance}!`);
                break;
        }

        if (wordNumber <= 2) sentance = sentance + " ";
        else sentance = sentance + "!";
        
    }
}
console.log(`******
${sentance}`);