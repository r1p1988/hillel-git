let hero = ['Ivan'];
let native = ['York','Of'];
let destination = ['Poltava', 'In'];
let rainbow = [];

rainbow = hero.concat(native, destination)
    .reverse();

rainbow.unshift("Richard");

for (let i = 0; i < rainbow.length; i++){
    if (rainbow[i] === "Ivan") rainbow[i] = "Vain"; 
    if (rainbow[i] === "Poltava") rainbow.splice(i,1);    
}
rainbow.splice(1, 2, "Of", "In");
rainbow.splice(2, 2, "York", "In");

rainbow.splice(3, 0, "Gave", "Battle");

let colors = ["red", "orange", "yellow", "lightgreen", "lightblue", "blue", "purple"];

let colorsDiv = [];
let rainbowDiv = [];
for (let i = 0; i < 7; i++){
    let colorsElement = "";
    let rainbowElement = "";
    colorsElement = `<div class="circle" style="background-color: ${colors[i]}"></div>`;
    rainbowElement = `<div class="child">${rainbow[i]}</div>`;
    colorsDiv.push(`${colorsElement}`);
    rainbowDiv.push(`${rainbowElement}`);
}

document.write(`<div class="massive">${colorsDiv.join("")}${rainbowDiv.join("")}</div>`)
