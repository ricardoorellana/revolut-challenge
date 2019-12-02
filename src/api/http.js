import { BASE_URL } from '../config';

const baseURL = BASE_URL;

export const fetchSpecificCurrencies = async (currencies = ['USD', 'EUR', 'GBP']) => {
    const symbols = currencies.toString();
    const url = `${baseURL}/latest.json?app_id=${process.env.REACT_APP_OPEN_EXCHANGES_API}&symbols=${symbols}`;
    const response = await fetch(url);

    return await response.json();
}