// import { useDispatch, useSelector } from 'react-redux';
// import { logOut } from 'redux/auth/operations';
// import { selectName } from '../../redux/auth/selectors';
import Header from 'components/Header/Header';
import Navigation from 'components/Navigation/Navigation';
import Balance from 'components/Balance/Balance';
import { Currency } from 'components/Currency/Currency';
import { Table } from '../../components/Table/Table';
import { ButtonAddTransactions } from '../../components/ButtonAddTransactions/ButtonAddTransactions';
import css from './DashboardPage.module.scss';
// import Media from 'react-media';

export const DashboardPage = () => {
  // const dispatch = useDispatch();
  // const userName = useSelector(selectName);

  return (
    <>
      <div className={css.container}>
        <Header />

        <div className={css.dashboard}>
          <div>
            <Navigation />
            <Balance />
            <Currency />
          </div>
          <div className={css.wrapper}>
            <Table />
          </div>
        </div>
        <ButtonAddTransactions />
      </div>
    </>
  );
};
