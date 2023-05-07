import css from "./TableMobile.module.scss";
export const TableMobile = () => {
  return (
    <>
      <div className={css.mobile}>
        <ul className={css.mobile_list}>
          <li className={css.mobile_listItem}>
            <span className={css.mobile_listCategory}>Date</span>
            <span className={css.mobile_listData}>25.01.19</span>
          </li>
          <li className={css.mobile_listItem}>
            <span className={css.mobile_listCategory}>Type</span>
            <span className={css.mobile_listData}>-</span>
          </li>
          <li className={css.mobile_listItem}>
            <span className={css.mobile_listCategory}>Category</span>
            <span className={css.mobile_listData}>Kitchen</span>
          </li>
          <li className={css.mobile_listItem}>
            <span className={css.mobile_listCategory}>Comment</span>
            <span className={css.mobile_listData}>Products</span>
          </li>
          <li className={css.mobile_listItem}>
            <span className={css.mobile_listCategory}>Sum</span>
            <span className={css.mobile_plus}>+</span>
          </li>
          <li className={css.mobile_listItem}>
            <span className={css.mobile_listCategory}>Balance</span>
            <span className={css.mobile_listData}>750</span>
          </li>
        </ul>
      </div>
      <div className={css.mobile}>
        <ul className={css.mobile_list}>
          <li className={css.mobile_listItem}>
            <span className={css.mobile_listCategory}>Date</span>
            <span className={css.mobile_listData}>04.03.19</span>
          </li>
          <li className={css.mobile_listItem}>
            <span className={css.mobile_listCategory}>Type</span>
            <span className={css.mobile_listData}>-</span>
          </li>
          <li className={css.mobile_listItem}>
            <span className={css.mobile_listCategory}>Category</span>
            <span className={css.mobile_listData}>Other</span>
          </li>
          <li className={css.mobile_listItem}>
            <span className={css.mobile_listCategory}>Comment</span>
            <span className={css.mobile_listData}>Car</span>
          </li>
          <li className={css.mobile_listItem}>
            <span className={css.mobile_listCategory}>Sum</span>
            <span className={css.mobile_plus}>+</span>
          </li>
          <li className={css.mobile_listItem}>
            <span className={css.mobile_listCategory}>Balance</span>
            <span className={css.mobile_listData}>300</span>
          </li>
        </ul>
      </div>
    </>
  );
};
