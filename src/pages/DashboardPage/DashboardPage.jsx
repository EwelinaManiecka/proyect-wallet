import { useSelector } from 'react-redux';

import { Header } from 'components/Header/Header';
import { Navigation } from 'components/Navigation/Navigation';

import { Balance } from 'components/Balance/Balance';
import { Currency } from 'components/Currency/Currency';
import { Table } from '../../components/Table/Table';
import {
  selectIsEditTransactionModalOpen,
  selectIsAddTransactionModalopen,
} from 'redux/global/selectors';
import { ModalAddTransaction } from 'components/ModalAddTransaction/ModalAddTransaction';
import { ModalEditTransaction } from 'components/ModalEditTransaction/ModalEditTransaction';
import { ButtonAddTransactions } from '../../components/ButtonAddTransactions/ButtonAddTransactions';

import css from './DashboardPage.module.scss';

export const DashboardPage = () => {
  const isModalAddTransactionOpened = useSelector(
    selectIsAddTransactionModalopen
  );
  const isModalEditTransactionOpened = useSelector(
    selectIsEditTransactionModalOpen
  );

  return (
    <>
      <Header />
      <div className={css.container}>
        {/* <Header /> */}

        <div className={css.dashboard}>
          <div>
            <Navigation />
            <Balance />
            <Currency />
          </div>
          <div className={css.table}>
            <div className={css.wrapper}>
              <Table />
            </div>
          </div>
        </div>
        <ButtonAddTransactions />
        {isModalAddTransactionOpened && (
          <ModalAddTransaction></ModalAddTransaction>
        )}
        {isModalEditTransactionOpened && (
          <ModalEditTransaction></ModalEditTransaction>
        )}
      </div>
    </>
  );
};
