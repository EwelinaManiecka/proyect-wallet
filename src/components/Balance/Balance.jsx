import React from 'react';
// import { useSelector } from 'react-redux';
// import { getBalance } from '../../redux/auth/selectors';

import styles from './Balance.module.scss';

export const Balance = () => {
    // const userBalance = useSelector(getBalance);

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>YOUR BALANCE</h2>
            <p className={styles.text}>
                <span className={styles.currency}>PLN</span>
                2400000
            </p>
        </div>
    );
};
