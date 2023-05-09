import { toggleModalEditTransaction } from 'redux/global/global-action';
import { updateTransaction } from 'redux/transactions/operations';
import { selectTransactionToEdit } from 'redux/global/selectors';
import { useDispatch, useSelector } from 'react-redux';

import css from './ModalEditTransaction.module.scss';
import { Button } from 'common/Button/Button';
import closeBtn from './../../images/close_btn.svg';

export const ModalEditTransaction = () => {
  const dispatch = useDispatch();
  const transactionToEdit = useSelector(selectTransactionToEdit);
  const toggleModal = event => {
    if (
      event.target.nodeName === 'DIV' ||
      event.target.nodeName === 'IMG' ||
      event.target.type === 'button'
    ) {
      dispatch(toggleModalEditTransaction());
    }
  };

  const editTransaction = event => {
    event.preventDefault();

    const transactionToUpdate = {
      transactionDate: event.target.date.value,
      type: transactionToEdit.type,
      categoryId: transactionToEdit.categoryId,
      comment: event.target.comment.value,
      amount: event.target.number.value,
      transactionId: transactionToEdit._id,
    };
    dispatch(updateTransaction(transactionToUpdate));
    dispatch(toggleModalEditTransaction());
  };

  return (
    <div className={css.overlay} onClick={event => toggleModal(event)}>
      <form className={css.modal} onSubmit={editTransaction}>
        <h1 className={css.modal__title}>Edit transaction</h1>
        <div className={css.switcherContainer}>
          <p
            className={
              transactionToEdit.type === 'EXPENSE' ? css.grey : css.green
            }
          >
            Income
          </p>
          <p>/</p>
          <p
            className={
              transactionToEdit.type === 'EXPENSE' ? css.red : css.grey
            }
          >
            Expense
          </p>
        </div>

        <div className={css.inputcontainer}>
          <input
            type="number"
            name="number"
            className={css.number}
            defaultValue={
              transactionToEdit.type === 'EXPENSE'
                ? transactionToEdit.amount * -1
                : transactionToEdit.amount
            }
          ></input>
          <input
            type="date"
            className={css.date}
            name="date"
            defaultValue={transactionToEdit.transactionDate}
          ></input>
        </div>
        <input
          type="text"
          name="comment"
          className={css.comment}
          defaultValue={transactionToEdit.comment}
        ></input>
        <div className={css.buttonsWrapper}>
          <Button
            classNameBtn={css.buttonsWrapper__addbutton}
            type={'submit'}
            children={'Save'}
          />
          <Button
            classNameBtn={css.buttonsWrapper__cancelbutton}
            type={'button'}
            children={'Cancel'}
          />
        </div>
        <img className={css.closebtn} src={closeBtn} alt="closeBTN"></img>
      </form>
    </div>
  );
};
