import { DashboardPage } from 'pages/DashboardPage/DashboardPage';
import css from './Home.module.scss';

const Home = () => {
  return (
    <div className={css.container}>
      <DashboardPage />
    </div>
  );
};

export default Home;
