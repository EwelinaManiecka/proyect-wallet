import {
  toggleModalEditTransaction,
  setTransactionToEdit,
} from 'redux/global/global-action';
import { deleteTransaction } from 'redux/transactions/operations';
import {
  selectTransactions,
  selectCategories,
} from 'redux/transactions/selectors';
import { useDispatch, useSelector } from 'react-redux';
import css from './Table.module.scss';
import pen from './../../images/pen.svg';

const uniqid = require('uniqid');

export const Table = () => {
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

  const findCategory = option => {
    const categoryToFind = categories.find(
      category => category.id === option.categoryId
    );
    return categoryToFind.name;
  };

  return (
    <div className={css.table}>
      <div className={css.headerContainer}>
        <ul className={css.tableHeader}>
          <li className={css.tableHeader__category}>Date</li>
          <li className={css.tableHeader__category}>Type</li>
          <li className={css.tableHeader__category}>Category</li>
          <li className={css.tableHeader__category}>Comment</li>
          <li className={css.tableHeader__category}>Sum</li>
        </ul>
      </div>

      {allTransactions &&
        categories &&
        categories.length !== 0 &&
        allTransactions.map(transaction => {
          return (
            <div className={css.contentContainer}>
              <ul className={css.row}>
                <li className={css.row__element} key={uniqid()}>
                  {transaction.transactionDate}
                </li>
                <li className={css.row__element} key={uniqid()}>
                  {transaction.type === 'INCOME' ? '+' : '-'}
                </li>
                <li className={css.row__element} key={uniqid()}>
                  {findCategory(transaction)}
                </li>
                <li className={css.row__element} key={uniqid()}>
                  {transaction.comment}
                </li>
                <li
                  className={
                    transaction.type === 'INCOME'
                      ? css.row__green
                      : css.row__red
                  }
                  key={uniqid()}
                >
                  {transaction.type === 'INCOME'
                    ? transaction.amount.toFixed(2)
                    : (transaction.amount * -1).toFixed(2)}
                </li>
              </ul>
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
            </div>
          );
        })}
    </div>
  );
};
