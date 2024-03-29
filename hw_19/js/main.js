const block = document.querySelector(".block"),
    body = document.querySelector("body"),
    title = document.querySelector(`.title`),
    distance = 10;

let activeBlock;

block.addEventListener(`click`, () => activeBlock = block);

let maxLeft = body.clientWidth - block.clientWidth,
    maxTop = body.clientHeight - block.clientHeight;

block.style.top = block.offsetTop + "px";
block.style.left = block.offsetLeft + "px";

console.log()

const EVENTS = {
    32: block => bounce(block),
    39: block => movingRight(block),
    38: block => movingUp(block),
    40: block => movingDown(block),
    37: block => movingLeft(block),
    17: block => sitDown(block)
}

const sitDown = () => {
    block.classList.add(`sit-down`);
    document.addEventListener(`keyup`, event => block.classList.remove(`sit-down`));
}

const bounce = ()=>{
    block.classList.add(`bounce`);
    document.addEventListener(`keyup`, event => block.classList.remove(`bounce`));
}

const titleActive = ()=>{
     title.classList.add(`title-active`);
    setTimeout(() => title.classList.remove(`title-active`), 2000);
 };

const movingDown = block => {
    if (block.offsetTop + distance >= maxTop) {
        titleActive();
        block.style.top = parseInt(block.style.top) - distance * 2 + `px`;  
    } else {
        block.style.top = parseInt(block.style.top) + distance + "px";  
    }
}

const movingUp = block => {
    if (block.offsetTop - distance <= 0) {
        titleActive();
        block.style.top = parseInt(block.style.top) + distance * 2 + `px`;  
    } else {
        block.style.top = parseInt(block.style.top) - distance + "px";  
    }
}

const movingLeft = block => {
    if (block.offsetLeft-distance <= 0) {
        titleActive();
        block.style.left = parseInt(block.style.left) + distance * 2 + `px`;  
    } else {
        block.style.left = parseInt(block.style.left) - distance + "px";  
    }
}

const movingRight = block => {
    if (block.offsetLeft + distance >= maxLeft) {
        titleActive();
        block.style.left = parseInt(block.style.left) - distance * 2 + `px`;  
    } else {
        block.style.left = parseInt(block.style.left) + distance + "px";  
    }
}

document.addEventListener(`keydown`, event => {
    activeBlock && EVENTS[event.keyCode] && EVENTS[event.keyCode](activeBlock);
})