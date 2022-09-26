let jokesCategories = document.querySelector("#jokesCategories"),
    jokesList = document.querySelector("#jokesList"),
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
            document
                .querySelector(`option[value="${jokesCategories.value}"]`)
                .setAttribute("disabled", true);

            const li = document.createElement(`li`);
            li.innerHTML = `<p>Category: <b>${data.categories[0]}</b></p>
            <p>${data.value}</p>`;

            const removeBtn = document.createElement(`button`);
            removeBtn.innerHTML = `Remove joke`;
            removeBtn.addEventListener(`click`, () => {
                li.remove();
                document
                    .querySelector(`option[value="${data.categories[0]}"]`)
                    .removeAttribute("disabled");
            });

            li.append(removeBtn);

            jokesList.append(li);
        })
        .catch(err => console.log(err))
});