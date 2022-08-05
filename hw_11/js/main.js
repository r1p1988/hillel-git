const products = [
    ['apple', 10],
    ['banana', 8],
    ['mango', 20],
    ['grape', 18]
];

function getPrice(array, seasonFunc) {
    let sumResult = 0;
    const copiedProducts = JSON.parse(JSON.stringify(array));

    for (let i = 0; i < copiedProducts.length; i++) {
        if (Array.isArray(copiedProducts[i])) {
            typeof seasonFunc === `function`
                ? sumResult += seasonFunc(copiedProducts[i][1])
                : sumResult += copiedProducts[i][1];
        }
    }
    return sumResult;
}

let summerValue = (value) => value*0.8;
let winterValue = (value) => value*2;


console.log(getPrice(products, summerValue));
console.log(getPrice(products, winterValue));
console.log(getPrice(products));