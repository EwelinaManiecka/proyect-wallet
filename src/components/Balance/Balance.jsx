import React from 'react';
import { useSelector } from 'react-redux';
import selectors from '../../redux/auth/selectors';

import styles from './Balance.module.scss';

const Balance = () => {
    const userBalance = useSelector(selectors.getBalance);

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>balance</h2>
            <p className={styles.text}>
                <span className={styles.currency}>&#8372;</span>
                {userBalance}
            </p>
        </div>
    );
};

export default Balance;