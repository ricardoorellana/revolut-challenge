import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrencies } from './currenciesSlice';

import { convert, useSetInterval, isValidInput } from '../../utils';

import ExchangeCard from './exchangeCard/exchangeCard';

import styles from './exchangeRatesDisplay.module.scss';

const DELAY_REQUEST_EVERY_TEN_SECONDS = 10000;

function ExchangeRatesDisplay() {
    const dispatch = useDispatch();
    const currencies = useSelector(state => state.currencies);

    const [state, setState] = useState({
        from: {
            currency: currencies.defaultFrom,
            value: ''
        },
        to: {
            currency: currencies.defaultTo,
            value: ''
        }
    });

    const [lastUpdate, setUpdate] = useState(new Date());

    useEffect(() => {
        dispatch(fetchCurrencies());
    }, [dispatch]);

    useSetInterval(() => {
        setUpdate(new Date());

        dispatch(fetchCurrencies());

        updateConvertedValues(state.from.value);
    }, DELAY_REQUEST_EVERY_TEN_SECONDS);

    const handleCurrencyValueChange = (e) => {
        let { target: { value, name } } = e;

        const from = name;
        const to = fieldToConvert(name);

        if (isValidInput(value)) {
            updateConvertedValues(value, from, to);
        }
    }

    const updateConvertedValues = (value, from = 'from', to = 'to') => {
        const convertedValue = convert(value, {
            from: state[from].currency,
            to: state[to].currency,
            rates: currencies.rates
        });

        setState({
            [from]: {
                ...state[from],
                value
            },
            [to]: {
                ...state[to],
                value: convertedValue
            }
        });
    }

    const updateSelector = (currency, from, to) => {
        setState({
            [from]: {
                ...state[from],
                currency
            },
            [to]: {
                ...state[to],
                value: convert(state[from].value, { from: currency, to: state[to].currency, rates: currencies.rates })
            }
        });
    }

    const handleCurrencyChange = (from, index) => {
        const currencySelected = Object.keys(currencies.rates)[index];
        const to = fieldToConvert(from);

        updateSelector(currencySelected, from, to);
    }

    const fieldToConvert = (name) => {
        return name === 'from' ? 'to' : 'from';
    }

    return (
        <React.Fragment>
            <div className={styles.root}>
                <ExchangeCard
                    classname={styles.baseCurrency}
                    currency={state.from.currency}
                    currencies={currencies.rates}
                    value={state.from.value}
                    name={'from'}
                    type="number"
                    onChange={handleCurrencyValueChange}
                    onClick={handleCurrencyChange} />

                    <div className={styles.triangle}></div>

                <ExchangeCard
                    classname={styles.convertedCurrency}
                    currency={state.to.currency}
                    currencies={currencies.rates}
                    value={state.to.value}
                    name={'to'}
                    type="number"
                    onChange={handleCurrencyValueChange}
                    onClick={handleCurrencyChange} />
            </div>
            <p className={styles.text}>Last time updated: {lastUpdate.toLocaleString()}</p>
        </React.Fragment>
    );
}

export default ExchangeRatesDisplay;
