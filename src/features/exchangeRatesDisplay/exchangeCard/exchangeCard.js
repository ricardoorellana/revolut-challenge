import React from 'react';

import PropTypes from 'prop-types';

import ExchangeInput from '../exchangeInput/exchangeInput';
import IndicatorDots from '../common/indicatorDots/indicatorDots';

import classNames from 'classnames';

import styles from './exchangeCard.module.scss';

const ExchangeCard = (props) => {
    const {
        classname,
        currency,
        currencies,
        value,
        name,
        type,
        placeholder,
        onChange,
        onClick
    } = props;

    const currencyKeys = Object.keys(currencies);

    const selected = currencyKeys.indexOf(currency);

    return (
        <div className={classNames(styles.root, classname)}>
            <div className={styles.currency}>
                { currency }

                <ExchangeInput
                    type={type}
                    value={value}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                />
            </div>

            <IndicatorDots
                classname={styles.indicatorDots}
                length={currencyKeys.length}
                index={selected}
                name={name}
                onClick={onClick} />
        </div>
    );
}

ExchangeCard.propTypes = {
    classname: PropTypes.string,
    currency: PropTypes.string,
    currencies: PropTypes.object,
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    onClick: PropTypes.func
}

export default ExchangeCard;