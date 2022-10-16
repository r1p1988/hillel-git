const tableContainer = document.querySelector("#tableContainer"),
    universesSelect = document.querySelector("#universes"),
    basicForm = document.querySelector("#basicForm"),
    heroesName = document.querySelector("#heroesName"),
    favourite = document.querySelector("#favourite"),
    url = "https://61c9d37520ac1c0017ed8eac.mockapi.io";


const controller = async (url, method=`GET`, obj) => {
    let options = {
        method: method,
        headers: {
            "content-type": "application/json"
        }
    }

    if(obj) options.body = JSON.stringify(obj);

    let request = await fetch(url, options),
        response = request.ok ? request.json() : Promise.catch(request.statusText);
    return response;
}

const renderHeroTr = item => {
    let row = document.createElement("tr");

    row.innerHTML = `<td>${item.name}</td>
    <td>${item.comics}</td>`;

    let label = document.createElement('label');

    let inputcheck = document.createElement("input");
    inputcheck.type = "checkbox";
    inputcheck.checked = item.favourite;
    inputcheck.addEventListener('change', async () => {
        let heroChanged = await controller(url + `/heroes/${item.id}`, `PUT`, {favourite: inputcheck.checked});
    })

    label.append(inputcheck);

    let tdLabel = document.createElement('td');
    tdLabel.append(label);

    let btn = document.createElement("button");
    btn.innerHTML = "Delete";
    btn.addEventListener('click', async () => {
        let heroDeleted = await controller(url + `/heroes/${item.id}`, `DELETE`);
        row.remove();
    });

    let tdBtn = document.createElement('td');
    tdBtn.append(btn);

    row.append(tdLabel, tdBtn);

    let tbody = document.querySelector(`#heroesTable tbody`);
    !tbody && renderTable();
    tbody.append(row);
}

const renderTable = () => {
    let table = document.createElement("table");
    table.id = `heroesTable`;
    
    table.innerHTML = `<thead>
        <tr>
            <th>Name</th>
            <th>Comics (DC, Marvel)</th>
            <th>Favourite</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody></tbody>`;

    tableContainer.append(table);
}

const renderHeroes = data => data.forEach(item => renderHeroTr(item));

const renderStrorageHeroes = async () => {
    let heroes = await controller(url + '/heroes');
    
    if (heroes.length > 0) {
        renderTable();
        renderHeroes(heroes);
    }
}

const renderStorageUniverses = async () => {
    let universes = await controller(url + '/universes');
    let options = universes
        .map(universe => `<option value="${universe.name}">${universe.name}</option>`)
        .join(``);

    universesSelect.innerHTML = options;
}

renderStorageUniverses();
renderStrorageHeroes(); 

basicForm.addEventListener("submit", async e => {
    e.preventDefault();
    let storageHeroes = await controller(url + '/heroes');

    let heroAlreadyExist = storageHeroes.find(hero => hero.name === heroesName.value);
    if(heroAlreadyExist){
        console.log(`Hero ${heroesName.value} already exist!`);
        return;
    } else{
        let newHero = {
            name: heroesName.value,
            comics: universesSelect.value,
            favourite: favourite.checked
        }

        let heroAdded = await controller(url + '/heroes', `POST`, newHero);
        console.log(heroAdded);

        if (storageHeroes.length == 0) renderTable();
        renderHeroTr(heroAdded);
    }
})