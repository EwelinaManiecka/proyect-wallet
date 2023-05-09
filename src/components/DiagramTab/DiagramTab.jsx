import css from './DiagramTab.module.scss';
import line from '../../images/line.svg';

export const DiagramTab = ({ data }) => {
   const colors = [
  '#FED057', // Main expenses
  '#FFD8D0', // Products
  '#FD9498', // Car
  '#C5BAFF', // Self care
  '#6E78E8', // Child care
  '#4A56E2', // Household products
  '#81E1FF', // Education
  '#24CCA7', // Leisure
  '#00AD84', // Other expenses
  '#DC6FF2', // Entertainment
    ];

return (
    <>
       <div className={css.label}>
        <span>Category</span>
        <span>Sum</span>
      </div>
       <ul className={css.list}>
      {data.categoriesSummary.map((item , index) => (
        <li className={css.table} key={index}>
          <div className={css.table__item}>
          <div style={{
            backgroundColor: colors[index],
            display: 'block',
            width: '24px',
            height: '24px',
            marginRight: '16px',
            marginLeft: '20px',
            borderRadius: '2px',
          }}></div>
          <div className={css.table__value}>
              <div className={css.table__name}>{item.name}</div>
            <div className={css.table__total}>{item.total * -1}</div>
        </div>
          </div>
     <img className={css.table__line} alt="" src={line} />
    </li>
    ))}
    </ul>
     <div className={css.summary}>
        Expenses:
                {data.expenseSummary !== 0 ? (
          <span className={css.summary__expense}>{data.expenseSummary * -1}</span>
        ) : (
          <span>No expense</span>
        )}
      </div>
      <div className={css.summary}>
        Income:
        {data.incomeSummary!== 0 ? (
          <span className={css.summary__income}>{data.incomeSummary}</span>
        ) : (
          <span>No income</span>
        )}
        </div>
  </>
  )
}
  

  

