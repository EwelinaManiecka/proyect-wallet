import { toggleModalEditTransaction } from 'redux/global/global-action';
import { useDispatch } from 'react-redux';

import css from './Table.module.scss';
import pen from './../../images/pen.svg';

export const Table = () => {
  const dispatch = useDispatch();

  const toggleModal = () => {
    dispatch(toggleModalEditTransaction());
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
      <div className={css.contentContainer}>
        <ul className={css.row}>
          <li className={css.row__element}>10.10.2020</li>
          <li className={css.row__element}> + </li>
          <li className={css.row__element}>Income</li>
          <li className={css.row__element}>Gift for your wife</li>
          <li className={css.row__element}>1000 $</li>
        </ul>
        <div className={css.row__icons}>
          <img
            className={css.row__edit}
            src={pen}
            alt="pen"
            onClick={() => toggleModal()}
          ></img>
          <button className={css.row__delete}>Delete</button>
        </div>
      </div>
    </div>
  );
};
