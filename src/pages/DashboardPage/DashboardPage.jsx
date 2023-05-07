// import { useSelector } from 'react-redux';

// import { Header } from 'components/Header/Header';
// import { Navigation } from 'components/Navigation/Navigation';

// import { Balance } from 'components/Balance/Balance';
// import { Currency } from 'components/Currency/Currency';
// import { Table } from '../../components/Table/Table';
// import {
//   selectIsEditTransactionModalOpen,
//   selectIsAddTransactionModalopen,
// } from 'redux/global/selectors';
// import { ModalAddTransaction } from 'components/ModalAddTransaction/ModalAddTransaction';
// import { ModalEditTransaction } from 'components/ModalEditTransaction/ModalEditTransaction';
// import { ButtonAddTransactions } from '../../components/ButtonAddTransactions/ButtonAddTransactions';
// import { Footer } from 'components/Footer/Footer';

// import css from './DashboardPage.module.scss';

// export const DashboardPage = () => {
//   const isModalAddTransactionOpened = useSelector(
//     selectIsAddTransactionModalopen
//   );
//   const isModalEditTransactionOpened = useSelector(
//     selectIsEditTransactionModalOpen
//   );

//   return (
//     <>
//       <Header />
//       <div className={css.container}>
//         <div className={css.dashboard}>
//           <div>
//             <Navigation />
//             <Balance />
//             <Currency />
//           </div>
//           <div className={css.table}>
//             <div className={css.wrapper}>
//               <Table />
//             </div>
//           </div>
//         </div>
//         <ButtonAddTransactions />
//         {isModalAddTransactionOpened && (
//           <ModalAddTransaction></ModalAddTransaction>
//         )}
//         {isModalEditTransactionOpened && (
//           <ModalEditTransaction></ModalEditTransaction>
//         )}
//       </div>
//       <Footer />
//     </>
//   );
// };
import { useSelector } from 'react-redux';
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
        <div className={css.dashboard}>
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
          </div>
        </div>

        <ButtonAddTransactions />
        {isModalAddTransactionOpened && (
          <ModalAddTransaction></ModalAddTransaction>
        )}
        {isModalEditTransactionOpened && (
          <ModalEditTransaction></ModalEditTransaction>
        )}

        <Footer />
      </div>
    </>
  );
};
