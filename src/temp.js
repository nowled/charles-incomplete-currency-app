const getRate = async () => {
  const currencyList = await getCurrencies();

  if (currencyList) setCurrencyList(currencyList);
};

const getExchange = async (fromCurrency, toCurrency) => {
  const exchangeRates = await getExchangeRates();
  if (exchangeRates) {
    setExchangeRates(exchangeRates);
  } else {
    return {};
  }
  // const exchangeRate = exchangeRates[`${fromCurrency} * ${toCurrency}`];
  return 1;
};

const onCurrencyChange = (event) => {
  setCurrencyList(event.target.value);
  console.log(event.target.value);
};

useEffect(() => {
  getExchange();
  getRate();
}, []);

console.log(currencyList, Object.values(exchangeRates));
