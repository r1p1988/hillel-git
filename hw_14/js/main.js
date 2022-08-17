const vegetables = [
    {
        name: `tomato`,
        icon: `🍅`,
        price: 2.3
    },
    {
        name: `carrot`,
        icon: `🥕`,
        price: 1.5
    },
    {
        name: `corn`,
        icon: `🌽`,
        price: 2.78,
        season: true
    }
];

class Vegetable {
    constructor(){
        this.type = `Vegetable`;
        this.seasonKoef = 1.3;
    }

    getPrice() {
        return (this.season)
            ? this.price *= this.seasonKoef
            : this.price;
        
    }

    getInfo() {
        return (this.season)
            ? `Type: ${this.type}. SeasonKoef: ${this.seasonKoef}. Name: ${this.name}. Icon: ${this.icon}. Price: ${this.getPrice(this.price)}. Season: ${this.season}`
            : `Type: ${this.type}. SeasonKoef: ${this.seasonKoef}. Name: ${this.name}. Icon: ${this.icon}. Price: ${this.price}`
        
    }
}

class Vegetables extends Vegetable{
    constructor(name, icon, price, season) {
        super();
        this.name = name;
        this.icon = icon;
        this.price = price;
        this.season = season;

    }
}


let modifyVegetables = vegetables
    .map(item => {
        item = new Vegetables(item.name, item.icon, item.price, item.season);
        item = `<li>${item.getInfo()}</li>`;
        return item;
    })
    .join("")

document.write(`
    <ul>
        ${modifyVegetables}
        </ul>
    `)

