const shapes = document.querySelector("#Shapes"),
    div = document.querySelector("#element");
    
    
shapes.addEventListener(`submit`, event => {
    event.preventDefault();
   
    div.removeAttribute("class");
    div.style.background = document.querySelector("#shapes-color").value;
    div.classList.add(`${document.querySelector("#shapes-choose").value}`);
});