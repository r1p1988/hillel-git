let sports = [
	['skier','⛷'],
	['snowboarder','🏂'],
	['apple','🍎'],
	['hockey','🏒'],
	['ice skate','⛸'],
	['swimmer','🏊'],
	['surfer','🏄‍'],
	['watermelon','🍉'],
	['lemon','🍋'],
	['rowboat','🚣'],
	['bicyclist','🚴‍']
];

let summer_sports = [];
let winter_sports = [];
let fruits = [];


summer_sports = sports.slice(5);
winter_sports = sports.slice(0, 5);

fruits = summer_sports.splice(2, 2);
fruits = winter_sports.splice(2, 1)
                    .concat(fruits).join("\n")
                    .replaceAll(",", ": ");

summer_sports = summer_sports.join("\n")
                            .replaceAll(",", ": ");
winter_sports = winter_sports.join("\n")
                            .replaceAll(",", ": ");


console.log("*** Winter sports ***");
console.log(winter_sports);
console.log(" ");
console.log("*** Summer sports ***");
console.log(summer_sports);
console.log(" ");
console.log("*** Fruits ***");
console.log(fruits);