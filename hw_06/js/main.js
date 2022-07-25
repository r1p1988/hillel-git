let totalPrice = 0;
let potatoSize,
    typeOfSauce,
    userBun;

do {
    userBun = prompt(`Сhoose the type of bun. Hamburger or cheeseburger.`);
    if (userBun) userBun = userBun.replaceAll(" ", "").toLowerCase();
}
while (userBun === null
    || userBun === ""
    || userBun
    &&
    !(userBun === "hamburger"
    || userBun === "cheeseburger"))
    
switch (true) {
    case userBun === "hamburger":
        totalPrice += 10;
        break;
    case userBun === "cheeseburger":
        totalPrice += 15;
        let doubleCheese = confirm(`Would you like to add double cheese?`);
        if (doubleCheese) totalPrice += 5;
        break;
}


let potato = confirm(`Would you like to add potato?`);

if (potato) {
    potatoSize = prompt(`Choose potato size: small/middle/big`);
    if (potatoSize) potatoSize = potatoSize.replaceAll(" ", "").toLowerCase();

    switch (true) {
        case potatoSize === "middle":
            totalPrice += 15;
            break;
        case potatoSize === "big":
            totalPrice += 20;
            break;
        default:
            potatoSize = "small";
            totalPrice += 10;
            break;
    }
}

let sauce = confirm(`Would you like sauce?`);

if (sauce) {
    typeOfSauce = prompt(`Choose sauce: ketchup/mayonnaise`);
    if (typeOfSauce) typeOfSauce = typeOfSauce.replaceAll(" ", "").toLowerCase();

    switch (true) {
        case typeOfSauce === "mayonnaise":
            totalPrice += 3;
            break;
        default:
            typeOfSauce = "ketchup";
            totalPrice += 2;
            break;
    }
}

    document.write(`<h2>Your order:</h2>
	<ul>
		<li>Bulka 🍔: ${userBun} </li>
        ${potato ? `<li>Potato 🍟: ${potatoSize} </li>` : ``}
        ${sauce ? `<li>Sauce 🧂: ${typeOfSauce} </li>` : ``}
	</ul>

	<p>Price: ${totalPrice} </p>
`);