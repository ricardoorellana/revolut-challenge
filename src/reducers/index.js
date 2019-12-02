import { combineReducers } from 'redux';

import currencyReducer from '../features/exchangeRatesDisplay/currenciesSlice';

export default combineReducers({
    currencies: currencyReducer
});