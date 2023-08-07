import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Media from 'react-media';
import { Fragment } from 'react';
import { Navigation } from 'components/Navigation/Navigation';
import { Balance } from 'components/Balance/Balance';
import { ChartDoughnut } from '../../components/Chart/Chart';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { Currency } from 'components/Currency/Currency';
import { transactionSummary } from '../../redux/statistiscs/operations';

import {
  selectStatistics,
  selectCategoriesSummary,
} from '../../redux/statistiscs/selectors';
import { DiagramTab } from '../../components/DiagramTab/DiagramTab';
import { SelectStyle } from '../../components/DiagramTab/SelectStyle';

import Select, { components } from 'react-select';
import arrowDown from '../../images/arrow_down.svg';
import css from './StatisticsPage.module.scss';

const CaretDownIcon = () => {
  return <img className={css.dropdown} alt="Logo" src={arrowDown} />;
};

const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <CaretDownIcon />
    </components.DropdownIndicator>
  );
};

export const StatisticsPage = () => {
  
  const colored = [
   { color: '#FED057', name: 'Main expenses' },
   { color: '#FFD8D0', name: 'Products' },
   { color: '#FD9498', name: 'Car' },
   { color: '#C5BAFF', name: 'Self care' },
   { color: '#6E78E8', name: 'Child care' },
   { color: '#4A56E2', name: 'Household products' },
   { color: '#81E1FF', name: 'Education' },
   { color: '#24CCA7', name: 'Leisure' },
   { color: '#00AD84', name: 'Other expenses' },
   { color: '#DC6FF2', name: 'Entertainment' },
   { color: 'rgba(36, 204, 167, 1)', name: 'Income'},
  ];

  const timeZoneRelatedDate = new Date();
  const actualMonth = timeZoneRelatedDate.toLocaleDateString('pl-PL', {
    month: '2-digit',
  });
  const months = [...Array(12).keys()].map(key => new Date(0, key).toLocaleString('pl-PL', { month: '2-digit' }))
  //const years = [...Array(12).keys()].map(key => new Date(2016, key).toLocaleString('pl-PL', { year: 'numeric' }))
 

  const actualYear = timeZoneRelatedDate.toLocaleDateString('pl-PL', {
    year: 'numeric',
  });

  const years = timeZoneRelatedDate.getFullYear();
   console.log(years)

  const dispatch = useDispatch();

  const dataStatistisc = useSelector(selectStatistics);
  const dataCategories = useSelector(selectCategoriesSummary);
  const summary = dataStatistisc;
  const categoryNameData = [];
  const categoryColorData = [];
  const [month, setMonth] = useState(actualMonth);
  const [year, setYear] = useState(actualYear);

  useEffect(() => {
    dispatch(transactionSummary({ year, month }));
  }, [year, month, dispatch]);

  const categoryId = dataStatistisc.all.map(e => e.categoryId);

  categoryId.forEach(function (element, index) {
      categoryNameData.push(dataCategories.filter((value, index) => value.id == element).map(e => e.name));
  });

  const categoryName = categoryNameData.flatMap(e => e)

  categoryName.forEach(function (element, index) {
    categoryColorData.push(colored.filter((value, index) => value.name === element).map(e=>e.color))
  })

  const categoryColor = categoryColorData.flatMap(e => e); 

  const monthValue = [
    { value: '01', label: 'January' },
    { value: '02', label: 'February' },
    { value: '03', label: 'March' },
    { value: '04', label: 'April' },
    { value: '05', label: 'May' },
    { value: '06', label: 'June' },
    { value: '07', label: 'July' },
    { value: '08', label: 'August' },
    { value: '09', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' },
  ];

  const yearValue = [
    { value: '2015', label: '2015' },
    { value: '2016', label: '2016' },
    { value: '2017', label: '2017' },
    { value: '2018', label: '2018' },
    { value: '2019', label: '2019' },
    { value: '2020', label: '2020' },
    { value: '2021', label: '2021' },
    { value: '2022', label: '2022' },
    { value: '2023', label: '2023' },
    { value: '2024', label: '2024' },
    { value: '2025', label: '2025' },
    { value: '2026', label: '2026' },
  ];

  return (
    <>
      <Header />
      <div className={css.statistics_container}>
        <div className={css.statistics_section}>
          <div className={css.statistic_tableLeft}>
            <Navigation className={css.statistics_navigation} />
            <Balance className={css.statistics_balance} />
          </div>
          <Media
            query="(min-width: 768px)"
            render={() => <Currency className={css.statistics_currency} />}
          />
        </div>
        <div className={css.statistics_field}>
          <div className={css.statistics_chart}>
            <h2 className={css.statistics_title}>Statistics</h2>
            <div className={css.statistics_donughnut}>
              <ChartDoughnut
                data={dataStatistisc}
                categories={categoryName}
                colors={categoryColor}
                expense={summary.expense ? summary.expense.expenseMonth : 0}
              />
            </div>
          </div>
          <div className={css.statistics_table}>
            <div className={css.statistics_select}>
              <Select
                components={{ DropdownIndicator }}
                styles={SelectStyle}
                placeholder={actualMonth}
                defaultValue={actualMonth}
                onChange={e => setMonth(e.value)}
                options={monthValue}
              />
              <Select
                components={{ DropdownIndicator }}
                styles={SelectStyle}
                placeholder={actualYear}
                defaultValue={actualYear}
                onChange={e => setYear(e.value)}
                options={yearValue}
              />
            </div>
            <DiagramTab data={dataStatistisc} categoryName={categoryName} colors={categoryColor}/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
