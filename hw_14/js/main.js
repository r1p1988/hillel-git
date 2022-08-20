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

const capitalize = str => str[0].toUpperCase()+str.slice(1).toLowerCase();

class Vegetable {
    constructor(obj){
        this.type = `Vegetable`;
        this.seasonKoef = 1.3;
        Object.assign(this, obj);
    }

    getPrice() {
        return (this.season)
            ? this.price *= this.seasonKoef
            : this.price;
        
    }

    // getInfo() {
    //     return (this.season)
    //         ? `Type: ${this.type}. SeasonKoef: ${this.seasonKoef}. Name: ${this.name}. Icon: ${this.icon}. Price: ${this.getPrice(this.price)}. Season: ${this.season}`
    //         : `Type: ${this.type}. SeasonKoef: ${this.seasonKoef}. Name: ${this.name}. Icon: ${this.icon}. Price: ${this.price}`
        
    // }

getInfo(){
        return Object.keys(this)
                .map(key => {
                    if(key===`price`){
                        this[key] = this.getPrice(this[key]);
                    }
                    return key;
                })
                .map(key => `${capitalize(key)}: ${this[key]}`).join(`. `)
        }

}




let modifyVegetables = vegetables
    .map(item => new Vegetable(item))
    .map(item => `<li>${item.getInfo()}</li>`)
    .join("")

document.write(`<ul>${modifyVegetables}</ul>`);

