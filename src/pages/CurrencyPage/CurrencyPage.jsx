import { Header } from 'components/Header/Header';
import { Navigation } from 'components/Navigation/Navigation';
import { Currency } from 'components/Currency/Currency';
import { Footer } from 'components/Footer/Footer';

import css from './CurrencyPage.module.scss';

export const CurrencyPage = () => {
  return (
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
  );
};
