import { toggleModalEditTransaction } from 'redux/global/global-action';
import { useDispatch } from 'react-redux';

import css from './ModalEditTransaction.module.scss';
import { Button } from 'common/Button/Button';
import closeBtn from './../../images/close_btn.svg';
export const ModalEditTransaction = () => {

  const dispatch = useDispatch();

  const toggleModal = event => {
    if (
      event.target.nodeName === 'DIV' ||
      event.target.nodeName === 'IMG' ||
      event.target.type === 'button'
    ) {
      dispatch(toggleModalEditTransaction());
    }
  };

  return (
    <div className={css.overlay} onClick={event => toggleModal(event)}>
      <form className={css.modal}>
        <h1 className={css.modal__title}>Edit transaction</h1>
        <div className={css.switcherContainer}>
          <p className={css.green}>Income</p>
          <p>/</p>
          <p className={css.red}>Expense</p>
        </div>
       
        <div className={css.inputcontainer}>
          <input
            type="number"
            className={css.number}
            placeholder="0.00"
          ></input>
          <input type="date" className={css.date}></input>
        </div>
        <input
          type="text"
          className={css.comment}
          placeholder="Comment"
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
