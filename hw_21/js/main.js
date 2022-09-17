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

let currency,
    sumOfCurrency;

const getMoney = new Promise(
        function (resolve, reject) {
              confirm(`Подивитися баланс на карті?`) ? resolve() : reject();
        }
    )

getMoney
    .then(
        function () {
            do {
                currency = prompt(`По якій валюті вивести баланс? 
${getUserKey(userData)}`);
                if (currency === null) {
                    return Promise.finally;
                } else {
                    currency = currency.toUpperCase();  
                }
            }
            while (!userData[currency])
            console.log(`Баланс становить: ${userData[currency]} ${currency}`);      
        },
        function () {
            do {
                currency = prompt(`Вкажіть валюту для зняття готівки?
${availableCurrency().join(", ")}`).toUpperCase();
            }
            while (!getUserKeyPrompt(currency) || !getBankKeyPrompt(currency))
                sumOfCurrency = +prompt(`Вкажіть суму ${currency} для зняття?`);
            if (sumOfCurrency > userData[currency] || sumOfCurrency > bankData[currency].max) {
                console.log(`Введена сума більша за доступну. Максимальна сума зняття: ${maxSum(currency)} ${currency}`);
            } else if (sumOfCurrency < bankData[currency].min) {
                console.log(`Введена сума менша за доступну. Мінімальна сума зняття: ${bankData[currency].min}`);
            }
            else {
                console.log(`От Ваші гроші ${sumOfCurrency} ${currency} ${bankData[currency].img}`)   
            }  
        }
)
    .finally(
        function () {
            console.log(`Дякую, гарного дня 😊`);
        }
)
    
const getBankKeyPrompt = (data) => Object.keys(bankData).includes(data);

const getUserKeyPrompt = (data) => userData.hasOwnProperty(data);

const getUserKey = (data) => Object.keys(data).join(", ");

const maxSum = (data) => {
     let maxSum;
     if (bankData[currency].max > userData[currency]){
         return maxSum = userData[currency];
                } else {
         return maxSum = bankData[currency].max;
                }
}

const availableCurrency = () => {
    let availableCurrency = [];
    for (let key in userData) {
        for (let item in bankData) {
            if ((key === item) && (bankData[item].max !== 0)) {
                availableCurrency.push(key);
            }
        }
    }
    return availableCurrency; 
}