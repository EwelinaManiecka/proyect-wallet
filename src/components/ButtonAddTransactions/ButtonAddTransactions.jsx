import { toggleModalAddTransaction } from 'redux/global/global-action';
import { getTransactionCategories } from 'redux/transactions/operations';
import { useDispatch } from 'react-redux';

import css from './ButtonAddTransactions.module.scss';
import elipse from './../../images/plusBtn.svg';

export const ButtonAddTransactions = () => {
  const dispatch = useDispatch();

  const toggleModal = () => {
    dispatch(toggleModalAddTransaction());
    dispatch(getTransactionCategories())

  };

  return (
    <div className={css.container}>
      <img
        className={css.plusBtn}
        src={elipse}
        alt="ButtonAddTransactions"
        onClick={() => toggleModal()}
      ></img>
    </div>
  );
};
