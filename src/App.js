import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { getCurrencies, getExchangeRates } from './dataService';
import CurrencyConverter from './CurrencyConverter';

function App() {
  const [amount1, setAmount1] = useState(1);
  const [currency1, setCurrency1] = useState('USD');
  const [amount2, setAmount2] = useState(1);
  const [currency2, setCurrency2] = useState('USD');
  const [rates, setRates] = useState([]);

  const handleAmountChange = (amount1) => {
    setAmount2((amount1 * rates[currency2]) / rates[currency1]);
    setAmount1(amount1);
  };

  const handleCurrencyChange = (currency1) => {
    setAmount2((amount1 * rates[currency2]) / rates[currency1]);
    setCurrency1(currency1);
  };
  const handleAmount2Change = (amount2) => {
    setAmount1((amount2 * rates[currency1]) / rates[currency2]);
    setAmount2(amount2);
  };

  const handleCurrency2Change = (currency2) => {
    setAmount1((amount2 * rates[currency1]) / rates[currency2]);
    setCurrency2(currency2);
  };

  useEffect(() => {
    axios
      .get(
        'https://api.apilayer.com/fixer/latest?base=USD&apikey=YRbC1AhQTGH24CyznlrIbRrNwYEzN1Z1'
      )
      .then((response) => {
        setRates(response.data.rates);
      })
      .catch((error) => {
        console.log('We got a problem!', error);
      });
  }, []);

  return (
    <div className='App'>
      <CurrencyConverter
        onAmountChange={handleAmountChange}
        onAmountChange2={handleAmount2Change}
        onCurrencyChange={handleCurrencyChange}
        onCurrencyChange2={handleCurrency2Change}
        currencies={Object.keys(rates)}
        currencie2={Object.keys(rates)}
        amount={amount1}
        amount2={amount2}
        currency={currency1}
        currency2={currency2}
      />
    </div>
  );
}

export default App;
