import { toggleModalAddTransaction } from 'redux/global/global-action';
import { addTransaction } from 'redux/transactions/operations';
import { selectCategories } from 'redux/transactions/selectors';
import { useDispatch, useSelector } from 'react-redux';
import css from './ModalAddTransaction.module.scss';
import { Button } from 'common/Button/Button';
import closeBtn from './../../images/close_btn.svg';
import { useState } from 'react';

export const ModalAddTransaction = () => {
  const [checked, setChecked] = useState(false);
  const [selected, setSelected] = useState('');
  const categories = useSelector(selectCategories);

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

  const setCategory = event => {
    const category = event.target.value;
    if (category === '063f1132-ba5d-42b4-951d-44011ca46262') {
      setChecked(!checked);
    } else setSelected(category);
  };

  const submitTransaction = event => {
    event.preventDefault();

    const amount = event.target.number.value;
    const date = event.target.date.value;
    const comment = event.target.comment.value;
    const type = checked ? 'EXPENSE' : 'INCOME';

    const newTransaction = {
      transactionDate: date,
      type: type,
      categoryId: checked ? selected : '063f1132-ba5d-42b4-951d-44011ca46262',
      comment: comment,
      amount: checked ? Number(amount) : Number(amount),
    };
    console.log(newTransaction);
    dispatch(addTransaction(newTransaction));
    dispatch(toggleModalAddTransaction());
  };

  return (
    <div className={css.overlay} onClick={event => toggleModal(event)}>
      <form className={css.modal} onSubmit={submitTransaction}>
        <h1 className={css.modal__title}>Add transaction</h1>
        <div className={css.switcherContainer}>
          <p className={!checked && css.green}>Income</p>
          <label className={css.switch}>
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
            ></input>
            <span className={!checked ? css.slider : css.sliderred}></span>
          </label>
          <p className={checked && css.red}>Expense</p>
        </div>
        <select
          className={checked ? css.categoriesvisible : css.categories}
          onChange={setCategory}
        >
          <option value="Select option" disabled>
            Select a category
          </option>
          {categories &&
            categories.map(category => {
              return (
                <option id={category.id} key={category.id} value={category.id}>
                  {category.name}
                </option>
              );
            })}
        </select>
        <div className={css.inputcontainer}>
          <input
            type="number"
            name="number"
            className={css.number}
            placeholder="0.00"
            required
          ></input>
          <input type="date" name="date" className={css.date} required></input>
        </div>
        <input
          type="text"
          className={css.comment}
          name="comment"
          placeholder="comment"
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
