const shapes = document.querySelector("#Shapes"),
    div = document.querySelector("#element");
    
    
shapes.addEventListener(`submit`, event => {
    event.preventDefault();

    const shapeChoose = document.querySelector("#shapes-choose"),
        shapeColor = document.querySelector("#shapes-color");
   
    div.removeAttribute("class");
    div.style.background = shapeColor.value;
    div.classList.add(`${shapeChoose.value}`);
});