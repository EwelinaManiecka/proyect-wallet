import css from './DiagramTab.module.scss';
import line from '../../images/line.svg';

export const DiagramTab = ({ data, categoryName, colors }) => {
  return (
    <>
      <div className={css.label}>
        <span>Category</span>
        <span>Sum</span>
      </div>
      <ul className={css.list}>
        {data !== undefined &&
          data.all.map((item, index) => (
            <li className={css.table} key={index}>
              <div className={css.table__item}>
                <div
                  style={{
                    backgroundColor: colors[index],
                    display: 'block',
                    width: '24px',
                    height: '22px',
                    marginRight: '16px',
                    marginLeft: '20px',
                    borderRadius: '2px',
                  }}
                ></div>
                <div className={css.table__value}>
                  <div className={css.table__name}>
                    {categoryName[index]}
                  </div>
                  <div className={css.table__total}>
                    {item.type === 'INCOME' ? item.amount : item.amount * -1}
                  </div>
                </div>
              </div>
              <img className={css.table__line} alt="" src={line} />
            </li>
          ))}
      </ul>
      <div className={css.summary}>
        Expenses:
        {data.expense.expenseAll !== 0 ? (
          <span className={css.summary__expense}>
            {data.expense.expenseMonth * -1}
          </span>
        ) : (
          <span>No expense</span>
        )}
      </div>
      <div className={css.summary}>
        Income:
        {data.income.incomeAll !== 0 ? (
          <span className={css.summary__income}>{data.income.incomeMonth}</span>
        ) : (
          <span>No income</span>
        )}
      </div>
    </>
  );
};
