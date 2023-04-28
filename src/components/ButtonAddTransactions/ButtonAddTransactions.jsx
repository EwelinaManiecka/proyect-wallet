import css from './ButtonAddTransactions.module.scss';
import elipse from './../../images/plusBtn.svg';

export const ButtonAddTransactions = () => {
  return (
    <div className={css.container}>
      <img
        className={css.plusBtn}
        src={elipse}
        alt="ButtonAddTransactions"
        width="44"
        height="44"
      ></img>
    </div>
  );
};
