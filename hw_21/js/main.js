const userData = {
	USD: 1000,
	EUR: 900,
	UAH: 15000,
	BIF: 20000,
	AOA: 100
};

const bankData = {
    USD: {
        max: 3000,
        min: 100,
        img: '💵'
    },
    EUR: {
        max: 1000,
        min: 50,
        img: '💶'
    },
    UAH: {
        max: 0,
        min: 0,
        img: '💴'
    },
    GBP: {
        max: 10000,
        min: 100,
        img: '💷'
    }
}

const getMoney = () => new Promise((resolve, reject) => {
    const userChoice = confirm(`Подивитися баланс карті?`);
    userChoice ? resolve() : reject();
});

getMoney()
    .then(
        function () {
            let currency;
            let avaliableUserCurrencies = Object.keys(userData);
            do {
                currency = prompt(`По якій валюті вивести баланс? 
${avaliableUserCurrencies.join(`, `)}`, avaliableUserCurrencies[0]);
              if(currency) currency = currency.replaceAll(` `,``).toUpperCase();
            }
            while (!avaliableUserCurrencies.includes(currency))
            console.log(`Баланс становить: ${userData[currency]} ${currency}`);      
        },
        function () {
            let avaliableUserCurrencies = Object.keys(userData);
                let avaliableBankCurrencies = Object
                .keys(bankData)
                .filter(currency => bankData[currency].max>0);

            let avaliableUserBank = avaliableBankCurrencies
                .filter(currency => avaliableUserCurrencies.includes(currency));

            let currency;
            let price;
            do {
                currency = prompt(`Вкажіть валюту для зняття готівки?
${avaliableUserBank.join(`, `)}`);
                if (currency) currency = currency.replaceAll(` `, ``).toUpperCase();
                
                
            }
            while (!avaliableUserBank.includes(currency))
            let minAvaliablePrice = bankData[currency].min;
            let maxAvaliablePrice = userData[currency];
            if(userData[currency] > bankData[currency].max) max = bankData[currency].max;
            do {
            price = prompt(`Введіть суму ${minAvaliablePrice}-${maxAvaliablePrice}`);
            }
            while (isNaN(price))
            if(price > maxAvaliablePrice){
                console.log(`Введена сума більша за доступну. Максимальна сума зняття: ${maxAvaliablePrice} ${currency} ${bankData[currency].img}`);
            } else if(minAvaliablePrice > price){
                console.log(`Введена сума менша за доступну. Мінімальна сума зняття: ${minAvaliablePrice} ${currency} ${bankData[currency].img}`);
            } else{
                console.log(`От Ваші гроші ${price} ${currency} ${bankData[currency].img}`);
            }
        }
    )
    .finally(
        function () {
            console.log(`Дякую, гарного дня 😊`);
        }
)