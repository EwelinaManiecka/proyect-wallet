import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import css from './Chart.module.scss';

export const ChartDoughnut = ({ data, categories, colors, expense }) => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const dataChart = {
    labels: categories || [],
    datasets: [
      {
        label: '',
        data: data.all ? data.all.map((e, index) => e.type === 'INCOME' ? e.amount : e.amount * -1) : [1],
        backgroundColor: colors.length > 0 ? colors : ['#838383'],
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
            data={dataChart}
            options={options}
            className={css.chart__doughnut}
          />
          <p className={css.chart__expense}>{expense} PLN</p>
        </>
      ) : (
        <>
          <Doughnut
            data={dataChart}
            options={options}
            className={css.chart__doughnut}
          />
          <p className={css.chart__expense}>No Expenses</p>
        </>
      )}
    </div>
  );
};
