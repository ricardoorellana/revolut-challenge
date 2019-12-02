import React from 'react'
import ExchangeRatesDisplay from '../features/exchangeRatesDisplay/exchangeRatesDisplay';

import styles from './App.module.scss';

const App = () => (
  <div className={styles.root}>
    <ExchangeRatesDisplay />
  </div>
)

export default App
