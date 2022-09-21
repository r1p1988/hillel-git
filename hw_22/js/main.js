let jokesCategories = document.querySelector("#jokesCategories"),
    jokesList = document.querySelector("#jokesList"),
    jokes = [],
    newCategories = [];

const getFile = file => fetch(file)
    .then(data => data.ok ? data.json() : Promise.reject(data.statusText));

getFile(`https://api.chucknorris.io/jokes/categories`)
    .then(data => {
        data.map(categories => newCategories.push(`<option value="${categories}">${categories}</option>`))
        jokesCategories.innerHTML = newCategories.join(" ");
    })
    .catch(err => console.log(err));


jokesCategories.addEventListener(`change`, () => {
    getFile(`https://api.chucknorris.io/jokes/random?category=${jokesCategories.value}`)
        .then(data => {
            jokes.push(`<li>
                <p>Category: <b>${data.categories}</b></p>
                <p>${data.value}</p>
                <button id="${data.categories}">Remove joke</button>
                    </li>`)
            jokesList.innerHTML = jokes.join(" ");
            document.querySelector('option:checked').setAttribute("disabled", true);
            // document.querySelector(`option[value=${jokesCategories.value}]`).setAttribute("disabled", true);
        })
        .catch(err => console.log(err))
})

jokesList.addEventListener("click", function (event) {
    let target = event.target;
    if (target.tagName === 'BUTTON') {
    const parent = target.closest("li");
    if (parent !== null) {
           const items = [...parent.parentElement.children];
           const index = items.indexOf(parent);
            jokes.splice(index, 1);
       }
    document.querySelector(`option[value=${target.id}]`).removeAttribute("disabled");
    target.parentNode.remove();           
    }
})