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
    do {
        potatoSize = prompt(`Choose potato size: small/middle/big`);
        if (potatoSize) potatoSize = potatoSize.replaceAll(" ", "").toLowerCase();
   
        switch (true) {
            case potatoSize === "small":
                totalPrice += 10;
                break;
            case potatoSize === "middle":
                totalPrice += 15;
            case potatoSize === "big":
                totalPrice += 20;
        }

    }
    while (potatoSize === null
        || potatoSize === ""
        || potatoSize
        &&
        !(potatoSize === "small"
        || potatoSize === "middle"
        || potatoSize === "big"))
}

let sauce = confirm(`Would you like sauce?`);

if (sauce) {
    do {
        typeOfSauce = prompt(`Choose sauce: ketchup/mayonnaise`);
        if (typeOfSauce) typeOfSauce = typeOfSauce.replaceAll(" ", "").toLowerCase();
        
        switch (true) {
            case typeOfSauce === "ketchup":
                totalPrice += 2;
                break;
            case typeOfSauce === "mayonnaise":
                totalPrice += 3;
                break;
        }
    }
    while (typeOfSauce === null
        || typeOfSauce === ""
        || typeOfSauce
        &&
        !(typeOfSauce === "ketchup"
        || typeOfSauce === "mayonnaise"))
}

if (!sauce || !potato) {
  document.write(`<h2>Your order:</h2>
	<ul>
		<li>Bulka 🍔: ${userBun} </li>
	</ul>

	<p>Price: ${totalPrice} </p>
`);  
}
else {
    document.write(`<h2>Your order:</h2>
	<ul>
		<li>Bulka 🍔: ${userBun} </li>
		<li>Potato 🍟: ${potatoSize} </li>
		<li>Sauce 🧂: ${typeOfSauce} </li>
	</ul>

	<p>Price: ${totalPrice} </p>
`);
}