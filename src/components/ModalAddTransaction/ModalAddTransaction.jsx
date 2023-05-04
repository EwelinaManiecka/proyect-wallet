import css from './ModalAddTransaction.module.scss';
import Button from 'common/Button/Button';
import closeBtn from './../../images/close_btn.svg';
import { useState } from 'react';

export const ModalAddTransaction = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className={css.overlay}>
      <form className={css.modal}>
        <h1 className={css.modal__title}>Add transaction</h1>
        <div className={css.switcherContainer}>
          <p className={!checked && css.green}>Income</p>
          <label className={css.switch}>
            <input
              type="checkbox"
              checked={checked}
              onClick={() => setChecked(!checked)}
              defaultChecked
            ></input>
            <span className={css.slider}></span>
          </label>
          <p className={checked && css.green}>Expense</p>
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
            children={'Add'}
          />
          <Button
            classNameBtn={css.buttonsWrapper__cancelbutton}
            type={'button'}
            children={'Cancel'}
          />
        </div>
        <img
          className={css.closebtn}
          src={closeBtn}
          width="16"
          height="16"
          alt="closeBTN"
        ></img>
      </form>
    </div>
  );
};
