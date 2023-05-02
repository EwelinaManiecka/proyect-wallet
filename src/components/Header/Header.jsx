import React from 'react';
import Media from 'react-media';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors.js';
import { openModalLogout } from 'redux/global/global-action';
import { NavLink } from 'react-router-dom';

import ModalLogout from 'components/ModalLogout/ModalLogout';
// import { useAuth } from 'hooks/useAuth';

// import { logOut } from 'redux/auth/operations';

import exitIcon from '../../images/logout_btn.svg';
import walletIcon from '../../images/wallet.svg';
import verticalLine from '../../images/vertical-line.svg';
import css from './Header.module.scss';
import { mediaQueries } from 'common/utils/media';

function Header() {
  const isModalLogoutOpen = useSelector(
    state => state.global.isModalLogoutOpen
  );
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);
  // const { isLoggedIn } = useAuth();

  // const handleLogoutClick = () => {
  //   dispatch(logOut());
  //   dispatch(openModalLogout());
  // };

  return (
    <div className={css.main}>
      <div className={css.wallet}>
        <NavLink to="/">
          <img src={walletIcon} alt="wallet icon"></img>
        </NavLink>
        <p className={css.title}>Wallet</p>
      </div>
      <div className={css.logoutDiv}>
        <p className={css.name}>NAME {name}</p>

        <Media queries={mediaQueries}>
          {matches =>
            (matches.tablet || matches.desktop) && (
              <img
                src={verticalLine}
                className={css.lineSvg}
                alt="vertical line"
              ></img>
            )
          }
        </Media>

        <button
          className={css.logoutBtn}
          type="button"
          onClick={() => dispatch(openModalLogout())}
        >
          <img className={css.exitIcon} src={exitIcon} alt="exitIcon"></img>

          <Media queries={mediaQueries}>
            {matches =>
              (matches.tablet || matches.desktop) && (
                <p className={css.exitTxt}>Exit</p>
              )
            }
          </Media>
        </button>
      </div>
      <ModalLogout isOpen={isModalLogoutOpen} />
    </div>
  );
}

export default Header;
