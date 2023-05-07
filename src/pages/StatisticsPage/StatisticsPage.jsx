import { Navigation } from 'components/Navigation/Navigation';
import { Balance } from 'components/Balance/Balance';
import { Currency } from 'components/Currency/Currency';
import { ChartDoughnut } from '../../components/Chart/Chart';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';

import css from './StatisticsPage.module.scss';

export const StatisticsPage = () => {
  return (
    <>
      <Header />
      <div className={css.container}>
        <div className={css.statistics}>
          <div className={css.statistics_container}>
            <div className={css.statistics_section}>
              <div className={css.statistics_navigation}>
                <Navigation />
                <div className={css.statistics_balance}>
                  <Balance />
                </div>
              </div>
              <div className={css.statistics_currency}>
                <div>
                  <Currency />
                </div>
              </div>
            </div>
            <div className={css.statistics_field}>
              <div className={css.statistics_chart}>
                <h2 className={css.statistics_title}>Statistics</h2>
                <div className={css.statistics_donughnut}>
                  <ChartDoughnut />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};
