import { toggleModalAddTransaction } from 'redux/global/global-action';
import { useDispatch } from 'react-redux';

import css from './ButtonAddTransactions.module.scss';
import elipse from './../../images/plusBtn.svg';

export const ButtonAddTransactions = () => {
  const dispatch = useDispatch();

  const toggleModal = () => {
    dispatch(toggleModalAddTransaction())
  }
  
  return (
    <div className={css.container}>
      <img
        className={css.plusBtn}
        src={elipse}
        alt="ButtonAddTransactions"
        width="44"
        height="44"
        onClick={()=> toggleModal() }
      ></img>
    </div>
  );
};
