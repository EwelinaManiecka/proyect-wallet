import { useDispatch, useSelector } from 'react-redux';
import Media from 'react-media';
import { Header } from 'components/Header/Header';
import { Navigation } from 'components/Navigation/Navigation';

import { Balance } from 'components/Balance/Balance';
import { Currency } from 'components/Currency/Currency';
import { Table } from '../../components/Table/Table';
import { TableMobile } from '../../components/TableMobile/TableMobile';
import { Footer } from '../../components/Footer/Footer';
import {
  selectIsEditTransactionModalOpen,
  selectIsAddTransactionModalopen,
} from 'redux/global/selectors';
import { ModalAddTransaction } from 'components/ModalAddTransaction/ModalAddTransaction';
import { ModalEditTransaction } from 'components/ModalEditTransaction/ModalEditTransaction';
import { ButtonAddTransactions } from '../../components/ButtonAddTransactions/ButtonAddTransactions';

import css from './DashboardPage.module.scss';
import {
  selectTransactions,
  selectWasUpdated,
} from 'redux/transactions/selectors';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'redux/auth/operations';
import {
  getAllTransactions,
  getTransactionCategories,
} from 'redux/transactions/operations';
import { transactionSummary } from 'redux/statistiscs/operations';

export const DashboardPage = () => {
  const trans = useSelector(selectTransactions);
  const wasUpdated = useSelector(selectWasUpdated);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
    dispatch(getTransactionCategories());
    dispatch(getAllTransactions());
    dispatch(transactionSummary({ year: 0, month: 0 }));
  }, [dispatch, trans.length, wasUpdated]);

  const isModalAddTransactionOpened = useSelector(
    selectIsAddTransactionModalopen
  );
  const isModalEditTransactionOpened = useSelector(
    selectIsEditTransactionModalOpen
  );

  return (
    <>
      <Header />
      <div className={css.dashboard_container}>
        <div className={css.dashboard_section}>
          <div className={css.dashboard_navigation}>
            <Navigation />
            <div className={css.dashboard_balance}>
              <Balance />
            </div>
          </div>
          <div className={css.dashboard_currency}>
            <div>
              <Currency />
            </div>
          </div>
        </div>

        <div className={css.table}>
          <div className={css.wrapper}>
            <Media
              queries={{
                mobile: '(min-width: 320px) and (max-width: 767px)',
              }}
            >
              {({ mobile }) => <>{mobile ? <TableMobile /> : <Table />}</>}
            </Media>
          </div>
        </div>
        <ButtonAddTransactions />
      </div>

      {isModalAddTransactionOpened && (
        <ModalAddTransaction></ModalAddTransaction>
      )}
      {isModalEditTransactionOpened && (
        <ModalEditTransaction></ModalEditTransaction>
      )}

      <Footer />
    </>
  );
};
