const COFFEE_TYPES = {
    Espresso: [
        {
            title: `Ristretto`,
            ingredients: {
                espresso: 20
            }
        },
        {
            title: `Espresso`,
            ingredients: {
                espresso: 60
            }
        },
        {
            title: `Lungo`,
            ingredients: {
                espresso: 100
            }
        },
        {
            title: `Americano`,
            ingredients: {
                espresso: 40,
                water: 60
            }
        }
    ],
    EspressoMilk: [
        {
            title: `Macchiato`,
            ingredients: {
                espresso: 20,
                "milk foam": 10
            }
        },
        {
            title: `Flat White`,
            ingredients: {
                espresso: 55,
                "milk foam": 45
            }
        },
        {
            title: `Cappuccino`,
            ingredients: {
                espresso: 20,
                milk: 20,
                "milk foam": 15
            }
        },
        {
            title: `Latte`,
            ingredients: {
                espresso: 20,
                milk: 20,
                "milk foam": 20
            }
        },
        {
            title: `Mocha`,
            ingredients: {
                "chocolate syrop": 15,
                espresso: 15,
                milk: 18,
                "milk foam": 15
            }
        }
    ],
    Alcoholic: [
        {
            title: `Irish Coffee`,
            ingredients: {
                espresso: 50,
                whiskey: 10,
                "whipped cream": 40
            }
        },
        {
            title: `Corretto`,
            ingredients: {
                espresso: 90,
                brandy: 10
            }
        },
        {
            title: `Baileys Hot Coffee`,
            ingredients: {
                espresso: 30,
                "warm milk": 20,
                "baileys irish cream": 30
            }
        }
    ],
    Dessert: [
        {
            title: `Affogato`,
            ingredients: {
                espresso: 25,
                "ice cream": 20,
                "whipped cream": 10,
                chocolate: 10
            }
        },
        {
            title: `Frappe`,
            ingredients: {
                espresso: 30,
                ice: 10,
                milk: 50
            }
        },
        {
            title: `Glace`,
            ingredients: {
                espresso: 50,
                "grated chocolate": 10,
                "ice cream": 30
            }
        }
    ]
}

const COFFEE = {
    Espresso: coffee => new Espresso(coffee),
    EspressoMilk: coffee => new EspressoMilk(coffee),
    Alcoholic: coffee => new Alcoholic(coffee),
    Dessert: coffee => new Dessert(coffee)
}

class Coffee{
    constructor(obj)
    {
    Object.assign(this, obj);
    }
    makeCoffee() {
        return `<div class="cup">
        <div class="${this.getCoffeeClass()}"> 
       ${this.ingredients ? this.getIngredient() : ""}       
    </div>
    <p class="coffee__title">${this.title}</p>
</div>`
    }

    getCoffeeClass() {
       return this.getClassName() === "Coffee" ? `coffee`
             : `coffee coffee--${this.getClassNameToLowerCase()}`
    }

    getClassName() {
        let className;
        return className = this.constructor.name;
    }

    getClassNameToLowerCase() {
        return this.getClassName().charAt(0).toLowerCase() + this.getClassName().slice(1);
    }

    getIngredient() {
        let ingredient =[]
        if (this.ingredients) {
            for (key in this.ingredients) {
                // let jey = key;
                // jey = key.replace(/\s/g, '__');
                ingredient.push(`<p style="height: ${this.ingredients[key]}%" class="ingredient ${key.replaceAll(` `,`__`)}">${key}</p>`)
                ingredient.join(",");
            }
        }
         return `<div class="coffee__ingredients"> ${ingredient.join("")}</div>`;
    }
}

class Espresso extends Coffee{
    constructor(obj) {
        super(obj);
    }
}

class EspressoMilk extends Coffee{
    constructor(obj) {
        super(obj);
    }
}

class Alcoholic extends Coffee{
    constructor(obj) {
        super(obj);
    }
}

class Dessert extends Coffee{
    constructor(obj) {
        super(obj);
    }
}

let coffeeClass = [];
for (key in COFFEE_TYPES) {
      let coffeeWithClass = COFFEE_TYPES[key]
           .map(coffee => {
               return COFFEE[key] ? COFFEE[key](coffee) : new Coffee(coffee)
           })
            .map(coffee => coffee.makeCoffee())
	        coffeeClass = coffeeClass.concat(coffeeWithClass);
}


let renderDefaultCoffee = new Coffee(
    {
        title: `Default Coffee`,
        ingredients: {
            espresso: 50,
            whiskey: 10,
            "whipped cream": 40
        }
    }
).makeCoffee();
  

document.write(
    `<section class="cups">
    ${renderDefaultCoffee}
    ${coffeeClass.join("")}
    </section>`
)
    

