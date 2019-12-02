import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import styles from './indicator.module.scss';

const Indicator = (props) => {

    const {
        index,
        selected,
        name,
        onClick
    } = props;

    const dotStyles = (selected && styles.active) || styles.inactive;

    return (
        <span
            className={classNames(styles.root, dotStyles)}
            onClick={() => onClick(name, index)} />
    );
}

Indicator.propTypes = {
    index: PropTypes.number.isRequired,
    selected: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Indicator;