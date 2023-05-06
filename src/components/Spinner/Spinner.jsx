import React from 'react';
import { BallTriangle } from 'react-loader-spinner';
import styles from './Spinner.module.scss';

export const Spinner = () => (
  <BallTriangle
    type="BallTriangle"
    color="#24CCA7"
    className={styles.loader}
    height={100}
    width={100}
    visible={true}
  />
);
