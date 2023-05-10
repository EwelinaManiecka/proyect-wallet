import { useDispatch, useSelector } from 'react-redux';
import {
  toggleModalEditTransaction,
  setTransactionToEdit,
} from 'redux/global/global-action';
import { deleteTransaction } from 'redux/transactions/operations';
import {
  selectTransactions,
  selectCategories,
} from 'redux/transactions/selectors';
import css from './TableMobile.module.scss';
import pen from './../../images/pen.svg';
const uniqid = require('uniqid');

export const TableMobile = () => {
  const dispatch = useDispatch();
  const allTransactions = useSelector(selectTransactions);
  const categories = useSelector(selectCategories);

  const toggleModal = data => {
    dispatch(setTransactionToEdit(data));
    dispatch(toggleModalEditTransaction());
  };

  const removeTransaction = id => {
    dispatch(deleteTransaction(id));
  };

  return (
    <div className={css.mobile}>
      {allTransactions &&
        categories &&
        categories.length !== 0 &&
        allTransactions.map(transaction => {
          return (
            <>
              <ul className={css.mobile_list}>
                <li key={uniqid()} className={css.mobile_listItem}>
                  <span className={css.mobile_listCategory}>Date</span>
                  <span className={css.mobile_listData}>
                    {transaction.transactionDate}
                  </span>
                </li>
                <li key={uniqid()} className={css.mobile_listItem}>
                  <span className={css.mobile_listCategory}>Type</span>
                  <span className={css.mobile_listData}>{transaction.type === 'INCOME' ? '+' : '-'}</span>
                </li>
                <li key={uniqid()} className={css.mobile_listItem}>
                  <span className={css.mobile_listCategory}>Category</span>
                  <span className={css.mobile_listData}>Kitchen</span>
                </li>
                <li key={uniqid()} className={css.mobile_listItem}>
                  <span className={css.mobile_listCategory}>Comment</span>
                  <span className={css.mobile_listData}>
                    {transaction.comment}
                  </span>
                </li>
                <li key={uniqid()} className={css.mobile_listItem}>
                  <span className={css.mobile_listCategory}>Sum</span>
                  <span className={transaction.type === 'INCOME'
                      ? css.row__green
                      : css.row__red}>
                    {transaction.amount.toFixed(2)}
                  </span>
                </li>
                <li key={uniqid()} className={css.mobile_listItem}>
                  <div className={css.row__icons}>
                    <img
                      className={css.row__edit}
                      src={pen}
                      alt="pen"
                      onClick={() => toggleModal(transaction)}
                    ></img>
                    <button
                      className={css.row__delete}
                      onClick={() => removeTransaction(transaction._id)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              </ul>
            </>
          );
        })}
    </div>
  );
};
