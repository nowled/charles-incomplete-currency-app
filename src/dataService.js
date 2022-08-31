export function getCurrencies() {
    return getData('/currencies.json')
        .then(result => result.currencies);
}

export function getExchangeRates() {
    return getData('/rates.json')
        .then(result => result.rates);
}

function getData(endpoint) {
    const delay = 1000;
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            fetch(endpoint)
                .then(res => {
                    resolve(res.json())
                });
        }, delay);
    });
}