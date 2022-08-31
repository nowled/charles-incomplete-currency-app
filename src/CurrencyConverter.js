import { useState, useEffect } from 'react';
import styles from './CurrencyConverter.module.css';
import PropTypes from 'prop-types';
import { getCurrencies, getExchangeRates } from './dataService';

// Build a simple currency converter that will allow users to convert between currencies

// You are provided with an incomplete <CurrencyConverter /> component.
// You are not allowed to add any additional HTML elements (you already have all the elements needed).
// You are not allowed to use refs.

// Demo video - You can view how the completed functionality should look at: https://drive.google.com/file/d/1P23Fi6oH_piLeCwi5mMNLLHNI_LACZwF/view?usp=sharing

// Once the <CurrencyConverter /> component is mounted, load the currency list and exchange rates using the getCurrencies and getExchangeRates functions imported above.
// Update the currency list in state, this will render the currencies in the select elements provided
// Update the exchange rates in state to complete the implementation of the getRate function
// Implement the following functionality:
//  - As the user types the amount, the conversion should be done instantly using the rate returned from the getRate function
//  - The conversion must be possible in both directions - if you select USD and EUR, typing a USD amount should calculate the EUR amount, and typing a EUR amount should calculate the USD amount.
//  - Changing the currency should trigger a recalculation. The amount entered for the currency that was changed should remain, and the other amount should be recalculated.
//  - Display the rate used for the conversion in the provided div
//  - All converted amounts should be displayed to 2 decimal places using the round function provided

const CurrencyConverter = (props) => {
  return (
    <div>
      <header className={styles.header}>
        <h1>Currency Converter</h1>
      </header>
      <main>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Currency</th>

              <th>Amount</th>
              <th></th>
              <th>Currency</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <select
                  value={props.currency}
                  onChange={(e) => props.onCurrencyChange(e.target.value)}
                >
                  {props.currencies.map((currency, index) => {
                    return (
                      <option value={currency} key={index}>
                        {currency}
                      </option>
                    );
                  })}
                </select>
              </td>
              <td>
                <input
                  type='number'
                  value={props.amount}
                  onChange={(e) => props.onAmountChange(e.target.value)}
                />
              </td>
              <td className={styles.equalsCell}>=</td>
              <td>
                <select
                  value={props.currency2}
                  onChange={(e) => props.onCurrencyChange2(e.target.value)}
                >
                  {props.currencies.map((currency, index) => {
                    return (
                      <option value={currency} key={index}>
                        {currency}
                      </option>
                    );
                  })}
                </select>
              </td>
              <td>
                <input
                  type='number'
                  value={props.amount2}
                  onChange={(e) => props.onAmountChange2(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className={styles.rate}>Rate:</div>
      </main>
    </div>
  );
};

CurrencyConverter.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
  amount2: PropTypes.number.isRequired,
  currency2: PropTypes.string.isRequired,
  currencies2: PropTypes.array,
  onAmountChange2: PropTypes.func,
  onCurrencyChange2: PropTypes.func,
};

export default CurrencyConverter;
