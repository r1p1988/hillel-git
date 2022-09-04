const min = 0,
    max = 256,
    minLeft = 0,
    minTop = 0;


const div = document.querySelector(`.block`);
const body = document.querySelector("body");

let maxLeft = body.clientWidth - div.clientWidth;
let maxTop = body.clientHeight - div.clientHeight;

div.style.left = 0;
div.style.top = 0;

const randomColor = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const randomLeftPosition = (minLeft, maxLeft) => {
    let posLeft = Math.floor(Math.random() * (maxLeft - minLeft)) + minLeft;
    if (posLeft < maxLeft) {
        div.style.left = posLeft + "px";
    }
}

const randomTopPosition = (minTop, maxTop) => {
    let posTop = Math.floor(Math.random() * (maxTop - minTop)) + minTop;
    if (posTop < maxTop) {
        div.style.top = posTop + "px";
    }
}

const changeBlockColor = setInterval(() => {
    div.style.background = `rgb(${randomColor(min, max)}, ${randomColor(min, max)}, ${randomColor(min, max)})`
}, 500);


const movingBlock = setInterval(() => {
    randomLeftPosition(minLeft, maxLeft);
    randomTopPosition(minTop, maxTop);
}, 1000);