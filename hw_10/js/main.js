const animals = [
	['🐭','mouse','Jerry'],
	['🐹','hamster','Biscuit'],
	['🐰','rabbit','Bugs'],
	['🦊','fox','Mrs. Fox'],
	['🐻','bear','Paddington']
];

const food = [
	['🍎','apple',10],
	['🍐','pear',12],
	['🍊','tangerine',15],
	['🍋','lemon',5],
	['🍌','banana',7]
];

const universes = [
	['🖤', 'DC', ['Superman', 'Batman', 'Wonder Woman']],
	['❤️', 'Marvel', ['Iron Man', 'the Hulk', 'Black Widow']]
]

function getinfo(array, headerOfArray) {
    let TRs = [];
    for (let i = 0; i < array.length; i++){
        let TDs = [];
            for (let j = 0; j < array[i].length; j++) {
                if (Array.isArray(array[i][j])) {
                    TDs.push(`<td>${array[i][j].join("; ")}</td>`); 
                }
                else {
                 TDs.push(`<td>${array[i][j]}</td>`);   
                } 
        }
        TRs.push(`<tr>${TDs.join("")}</tr>`);
        }

    document.write(`
    <table>
	<caption>${headerOfArray} info</caption>
	<tbody>
    ${TRs.join("")}
	</tbody>
</table>`
    )
}

getinfo(animals, "Animals");
getinfo(food, "Food");
getinfo(universes,"Universes");