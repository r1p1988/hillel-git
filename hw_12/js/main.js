const users = [
 ["john","red",5,["ball", "book", "pen"]],
 ["becky","blue",10,["tape", "backpack", "pen"]],
 ["susy","red",55,["ball", "eraser", "pen"]],
 ["tyson","green",1,["book", "pen"]],
];


let array = [];
  users.forEach(item => {
        item = JSON.parse(JSON.stringify(item));
        item[0] += "!";
        array.push(item[0]);
  })

console.log(array);

let array4 = users.map(item => {
    item = JSON.parse(JSON.stringify(item));
    return item[0] += "?";
})

console.log(array4);

let sum = users
    .filter(item => item[1] === "red")
    .map(item => item = item[2])
    .reduce((final, item) => `<tr><td colspan="4">Total score: ${final + item}</td></tr>`)

let td = users
    .filter(item => item[1] === "red")
    .map(item => {
        item = JSON.parse(JSON.stringify(item));
        item[0] = item[0].toString().charAt(0).toUpperCase() + item[0].slice(1);
        item[1] = item[1].toString().charAt(0).toUpperCase() + item[1].slice(1);
        return item;
    })
    .map(item => { 
        for (let j = 0; j < item.length; j++) {
            item[j] = Array.isArray(item[j])
                ? `<td>${item[j].join("; ")}</td>`
                : `<td>${item[j]}</td>`;
        }
        return item = `<tr>${item.join("")}</tr>`;
    })
    .join("");

document.write(`
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Comand</th>
            <th>Score</th>
            <th>Data</th>
        </tr>
    </thead>
    <tbody>
        ${td}
    </tbody>
    <tfoot>
        ${sum}
    </tfoot>
    </table>
`)