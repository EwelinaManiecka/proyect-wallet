import css from './ModalAddTransaction.module.scss';
import Button from 'common/Button/Button';
import closeBtn from './../../images/close_btn.svg';

export const ModalAddTransaction = () => {
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <h1 className={css.modal__title}>Add transaction</h1>
        <div className={css.switcherContainer}>
          <div>Income</div>
          <label className={css.switch}>
            <input type="checkbox"></input>
            <span className={css.slider}></span>
          </label>
          <p>Expense</p>
        </div>
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
      </div>
    </div>
  );
};
