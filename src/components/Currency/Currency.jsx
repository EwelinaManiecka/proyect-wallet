import css from './Currency.module.scss';

export const Currency = () => {
  return (
    <div className={css.currencyTableWrapper}>
      <table className={css.currencyTable}>
        <thead className={css.currencyTableHead}>
          <tr>
            <th>Currency</th>
            <th>Purchase</th>
            <th>Sale</th>
          </tr>
        </thead>
        <tbody className={css.currencyTableBody}>
          <tr>
            <td>USD</td>
            <td>27.55</td>
            <td>37.99</td>
          </tr>
          <tr>
            <td>EUR</td>
            <td>62.32</td>
            <td>23.34</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
