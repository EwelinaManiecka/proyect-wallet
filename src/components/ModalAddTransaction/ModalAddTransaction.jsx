import { toggleModalAddTransaction } from 'redux/global/global-action';
import { useDispatch } from 'react-redux';

import css from './ModalAddTransaction.module.scss';
import { Button } from 'common/Button/Button';
import closeBtn from './../../images/close_btn.svg';
import { useState } from 'react';

export const ModalAddTransaction = () => {
  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();

  const toggleModal = event => {
    if (
      event.target.nodeName === 'DIV' ||
      event.target.nodeName === 'IMG' ||
      event.target.type === 'button'
    ) {
      dispatch(toggleModalAddTransaction());
    }
  };

  return (
    <div className={css.overlay} onClick={event => toggleModal(event)}>
      <form className={css.modal}>
        <h1 className={css.modal__title}>Add transaction</h1>
        <div className={css.switcherContainer}>
          <p className={!checked && css.green}>Income</p>
          <label className={css.switch}>
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
              defaultChecked
            ></input>
            <span className={!checked ? css.slider : css.sliderred}></span>
          </label>
          <p className={checked && css.red}>Expense</p>
        </div>
        {checked && (
          <select className={css.categories}>
            <option className={css.categories__title} value="select">
              Select a category
            </option>
            <option value="Main">Main expenses</option>
            <option value="Products">Products</option>
            <option value="Self">Self care</option>
            <option value="Child">Child care</option>
            <option value="Household">Household products</option>
            <option value="Child">Education</option>
            <option value="Other">Other expenses</option>
            <option value="Entertainment">Entertainment</option>
          </select>
        )}
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
        <img className={css.closebtn} src={closeBtn} alt="closeBTN"></img>
      </form>
    </div>
  );
};
