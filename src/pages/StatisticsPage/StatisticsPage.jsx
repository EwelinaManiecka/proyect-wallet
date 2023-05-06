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
      <div className={css.dashboard}>
        <div>
          <Navigation />
          <Balance />
          <Currency />
        </div>

        <div className={css.dashboard__chart}>
          <h2 className={css.chart__title}>Statistics</h2>
          <ChartDoughnut />
        </div>
      </div>
      <Footer />
    </>
  );
};
