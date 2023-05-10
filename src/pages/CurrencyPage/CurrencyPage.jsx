import { Header } from 'components/Header/Header';
import { Navigation } from 'components/Navigation/Navigation';
import { Currency } from 'components/Currency/Currency';
import { Footer } from 'components/Footer/Footer';
import Media from 'react-media';
import { Fragment } from 'react';

import css from './CurrencyPage.module.scss';
import { DashboardPage } from 'pages/DashboardPage/DashboardPage';
import { NavLink } from 'react-router-dom';

export const CurrencyPage = () => {
  return (
    <Media
      queries={{ mobile: '(max-width: 767px)', else: '(min-width: 768px)' }}
    >
      {matches => (
        <Fragment>
          {matches.mobile && (
            <>
              <Header />
              <div className={css.currency}>
                <div className={css.currency_section}>
                  <div>
                    <Navigation />
                  </div>
                  <div className={css.currency_table}>
                    <Currency />
                  </div>
                </div>
              </div>
              <Footer />
            </>
          )}
          ,
          {matches.else && (
            <>
              <DashboardPage />
            </>
          )}
        </Fragment>
      )}
    </Media>
  );
};
