import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { Navigation } from 'components/Navigation/Navigation';
import { Balance } from 'components/Balance/Balance';
import { Currency } from 'components/Currency/Currency';
import { ChartDoughnut } from '../../components/Chart/Chart';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { transactionSummary } from '../../redux/statistiscs/operations';
import {  selectStatistics, selectCategoriesSummary } from '../../redux/statistiscs/selectors';
import { Table } from '../../components/DiagramTab/DiagramTab';
import arrowDown from '../../images/arrow_down.svg';
import Select, { components } from 'react-select';
import css from './StatisticsPage.module.scss';

const CaretDownIcon = () => {
  return <img className={css.dropdown} alt="Logo" src={arrowDown} />
};

const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <CaretDownIcon />
    </components.DropdownIndicator>
  );
};

export const StatisticsPage = () => {
  const timeZoneRelatedDate = new Date();
    const actualMonth = timeZoneRelatedDate.toLocaleDateString(
        'pl-PL', { month: '2-digit' });
    const actualYear = timeZoneRelatedDate.toLocaleDateString(
        'pl-PL', { year: 'numeric' });

    const [month, setMonth] = useState(actualMonth);
    const [year, setYear] = useState(actualYear);

    const dispatch = useDispatch();

    const dataStatistisc = useSelector(selectStatistics);
    const dataCategories = useSelector(selectCategoriesSummary);
    
 useEffect(() => {
     dispatch(transactionSummary({ year, month }),
     )
 }, [year, month, dispatch]);
    
    const name  = dataCategories.map(e => e.name);
    const total = dataCategories.map(e => e.total);
    const expense = dataStatistisc.expenseSummary * -1;
    const income  = dataStatistisc.incomeSummary* -1;
    
    const data = { name: name, total: total };
 
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
        { value: '12', label: 'December' }
    ]

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
        { value: '2026', label: '2026' }
    ]
    const styleSelect = {
        control: (baseStyles, state) => ({
            ...baseStyles,
            marginBottom: '20px',
            boxShadow: 'none',
            width: '280px',
            height: '50px',
            paddingTop: '3px',
            paddingLeft: '20px',
            border: '1px solid #000',
            borderRadius: '30px',
            outline: 'none',
            "&:hover": {
                borderColor: '#000',
                cursor: 'pointer',
                },
        }),
        menu: (baseStyles, state) => ({
            ...baseStyles,
            color: '#000',
            width: '280px',
            cursor: 'pointer',
        }),
        menuList: (baseStyles, state) => ({
            ...baseStyles,
            color: '#000',
            width: '280px',
            height: '157px',
            cursor: 'pointer',        
            background: 'rgba(255, 255, 255, 0.7)',
            boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(25px)',
            borderRadius: '20px',
            overflowY: 'scroll',
            
            }),
        valueContainer: (baseStyles, state) => ({
            ...baseStyles,
            color: '#000',
            border: 'none',
            }),
        placeholder: (baseStyles, state) => ({
            ...baseStyles,
            color: '#000',
            }),
        indicatorSeparator: (baseStyles, state) => ({
            ...baseStyles,
            display: 'none',
            }),
        indicatorsContainer: (baseStyles, state) => ({
            ...baseStyles,
            width: '50px',
            }),
        indicatorContainer: (baseStyles, state) => ({
            ...baseStyles,
            paddingRight: '20px',
        })
    }

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
      <Header />
      <div className={css.dashboard}>
        <div>
          <Navigation />
          <Balance />
          <Currency />
        </div>

        <div className={css.dashboard__chart}>
          <div className={css.container}>  
            <div>
            <span className={css.title}>Statistics</span>
            <ChartDoughnut categories={name} colors={colors} expense={expense} />
            </div>
            <div>
              <Select components={{ DropdownIndicator }} styles={styleSelect} placeholder={actualMonth} defaultValue={actualMonth} onChange={e => setMonth(e.value)} options={monthValue} />
            <Select components={{ DropdownIndicator }} styles={styleSelect} placeholder={actualYear} defaultValue={actualYear} onChange={e => setYear(e.value)} options={yearValue} />
            <div className={css.label}>
                <span>Category</span>
                <span>Sum</span>
            </div>
            <Table data={data} expense={expense} income={income} colors={colors}/> 
            </div>
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
