let transformedWord;
let typeOfTransformation;
let userWord;
let sentance= "";

let value = confirm("Tell me three most important words 💚");

for (let i = 1; i <= 3; i++) {
    if (value) {
        userWord = prompt(`Enter word #${i}`);
        while (userWord === null
            || !userWord
            || userWord.match(/\d/g)
        ) {
        
            userWord = prompt(`Enter word #${i}`);
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
                console.log(`Word #${i}: ${userWord}
Tranform type for word #${i}: ${typeOfTransformation}
Transformed word #${i}: ${transformedWord}
Sentance: ${sentance}`);
                break;
            case typeOfTransformation === "lowercase":
                transformedWord = userWord.toLowerCase();
                sentance += transformedWord;
                console.log(`Word #${i}: ${userWord}
Tranform type for word #${i}: ${typeOfTransformation}
Transformed word #${i}: ${transformedWord}
Sentance: ${sentance}`);
                break;
            case typeOfTransformation === "capitalize":
                transformedWord = userWord.charAt(0).toUpperCase() + userWord.slice(1);
                sentance += transformedWord;
                console.log(`Word #${i}: ${userWord}
Tranform type for word #${i}: ${typeOfTransformation}
Transformed word #${i}: ${transformedWord}
Sentance: ${sentance}!`);
                break;
        }

        if (i <= 2) {
            sentance = sentance + " ";
        }
        else {
            sentance = sentance + "!";
        }
        
    }
}
console.log(`******
${sentance}`);