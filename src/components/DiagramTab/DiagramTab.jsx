import css from './DiagramTab.module.scss';
import line from '../../images/line.svg';

export const Table = ({data, expense, income, colors}) => {

    const listItems = data.name.map((element, index) =>
    <li className={css.item} key={index}>
      <div className={css.container}>
        <div style={{
          backgroundColor: colors[index],
            width: '24px',
            height: '24px',
            marginRight: '16px',
            marginLeft: '20px',
          borderRadius: '2px',
          }}></div>
        <div>
          {element}
        </div>
        
      </div>
      <img className={css.line} alt="" src={line} />
    </li>
  );

return (
    <>
      <ul className={css.list}>
       {listItems}
    </ul>
     <div className={css.summary}>
        Expenses:
                {expense !== 0 ? (
          <span className={css.summary__expense}>{expense}</span>
        ) : (
          <span>No expense</span>
        )}
      </div>
      <div className={css.summary}>
        Income:
        {income !== 0 ? (
          <span className={css.summary__income}>{income}</span>
        ) : (
          <span>No income</span>
        )}
        </div>
  </>
  )
}
  

  

