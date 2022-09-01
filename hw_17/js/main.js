const mainUl = document.querySelector(`ul`);

const setFirstItemClassName = (level, ul) => {
    level--;
    if (level > 0) {
        const Li = [...ul.children];
  
        Li.forEach(li => {
            
            let Ul = [...li.children];

            Ul.forEach(ul => {
                setFirstItemClassName(level, ul);
            })
        })
    }
    else {
        let LiFirst = ul.querySelector("li:first-of-type");
        LiFirst.classList.add("first");
        // setLastItemClassName(ul);
    }
}

const setLastItemClassName = ul => {
    let UlLast = ul.querySelectorAll("li:last-of-type");
    UlLast.forEach(ul => {
        ul.classList.add("last")
    });
}

setTimeout(setFirstItemClassName,2000, 2, mainUl);
setTimeout(setLastItemClassName,2000, mainUl);

