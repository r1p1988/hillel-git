const obj = {
    x: 10,
    y: 20,
    inner: {
        x: 20,
        z: 30
    },
    foo2: {
        k: 23,
        p: 13
    }
} 

const newObj = {};

function convert(list) {
    for (let key in list) {
        typeof list[key] === "object"
            ? convert(list[key])
            : newObj[key] = list[key];
    }
    return newObj;
}

console.log(convert(obj));