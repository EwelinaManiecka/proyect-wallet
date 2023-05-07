import React from 'react';

import sermajk2 from '../../images/sermajk2.jpg';
import css from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={css.footer}>
      <p className={css.text}>&copy; 2023 SER.MAJK Group</p>
      <img
        className={css.microphLog}
        src={sermajk2}
        alt="ser.majk icon with color"
      />
    </footer>
  );
};
