import React from 'react';
import { useSelector } from 'react-redux';
import { selectBalance } from 'redux/transactions/selectors';

import styles from './Balance.module.scss';

export const Balance = () => {
    const userBalance = useSelector(selectBalance);

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>YOUR BALANCE</h2>
            <p className={styles.text}>
                <span className={styles.currency}>PLN</span>
                {userBalance}
            </p>
        </div>
    );
};
