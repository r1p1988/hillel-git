let arr = [];
const minLengthArr = 2;
const maxLengthArr = 10;
let userLengtArr;
let resultOfProductElements =1;

do {
    userLengtArr = +prompt("Введіть довжину масиву");

    if (userLengtArr < 0) userLengtArr = Math.abs(userLengtArr);

    if (!Number.isInteger(userLengtArr)) userLengtArr = Math.round(userLengtArr);
}
while (userLengtArr === null
    || isNaN(userLengtArr)
    || userLengtArr < minLengthArr
    || userLengtArr > maxLengthArr);


for (let i = 0; i < userLengtArr; i++){
    let randomValue = Math.round(Math.random() * 10);
    arr[i] = randomValue;
    resultOfProductElements *= arr[i];  
}

console.log(arr);
console.log(`Product of all array elements: ${resultOfProductElements}`);
