import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import css from './Navigation.module.scss';

export function Navigation({ onClickCurrency }) {
  return (
    <div className={css.navigation}>
      <NavLink to="/dashboard" className={css.navigation__item}>
        <div className={css.navigation__icon}>
          <HomeIcon fontSize="inherit" />
        </div>
        <div className={css.navigation__text}>Home</div>
      </NavLink>
      <NavLink to="/statistics" className={css.navigation__item}>
        <div className={css.navigation__icon}>
          <TimelineIcon fontSize="inherit" />
        </div>

        <div className={css.navigation__text}>Statistics</div>
      </NavLink>
      <NavLink
        to="/currency"
        className={css.navigation__item}
        onClick={onClickCurrency}
      >
        <div className={css.navigation__icon}>
          <AttachMoneyIcon fontSize="inherit" />
        </div>
      </NavLink>
    </div>
  );
}