import React from 'react';

import PropTypes from 'prop-types';

import styles from './exchangeInput.module.scss';

const ExchangeInput = (props) => {
    ExchangeInput.defaultProps = {
        type: 'number',
        placeholder: '0'
    }

    return <input className={styles.root} {...props} />;
}

ExchangeInput.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    onChange: PropTypes.func
}

export default ExchangeInput;