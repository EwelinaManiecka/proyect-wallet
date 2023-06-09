import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import css from './Chart.module.scss';

export const ChartDoughnut = ({ categories, colors, expense }) => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: categories || [],
    datasets: [
      {
        label: '',
        data: categories ? categories.map((_, index) => 8 - index) : [1],
        backgroundColor:
          categories && categories.length > 0 ? colors : ['#838383'],
        borderWidth: 0,
        cutout: '70%',
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    devicePixelRatio: 2,
  };

  return (
    <div className={css.chart}>
      {expense ? (
        <>
          <Doughnut
            data={data}
            options={options}
            className={css.chart__doughnut}
          />
          <p className={css.chart__expense}>{expense} PLN</p>
        </>
      ) : (
        <>
          <Doughnut
            data={data}
            options={options}
            className={css.chart__doughnut}
          />
          <p className={css.chart__expense}>No Expenses</p>
        </>
      )}
    </div>
  );
};

// Kolory do połączenia z Kategoriami w Statistics

// const colors = [
//   '#FED057', // Main expenses
//   '#FFD8D0', // Products
//   '#FD9498', // Car
//   '#C5BAFF', // Self care
//   '#6E78E8', // Child care
//   '#4A56E2', // Household products
//   '#81E1FF', // Education
//   '#24CCA7', // Leisure
//   '#00AD84', // Other expenses
//   '#DC6FF2', // Entertainment
// ];
