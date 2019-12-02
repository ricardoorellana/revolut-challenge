import React from 'react';

import Indicator from './indicator';

import classNames from 'classnames';

import styles from './indicatorDots.module.scss';

const IndicatorDots = (props) => {
    const {
        index,
        length,
        classname,
        name,
        onClick
    } = props;

    return (
        <div className={classNames(styles.root, classname)}>
            {Array.apply(null, Array(length)).map((x, i) => {
                return (
                    <Indicator
                        name={name}
                        key={i}
                        selected={index === i}
                        index={i}
                        onClick={onClick} />
                );
            })}
        </div>
    );
  }

// IndicatorDots.propTypes = {
// index: PropTypes.number.isRequired,
// total: PropTypes.number.isRequired
// }

export default IndicatorDots;