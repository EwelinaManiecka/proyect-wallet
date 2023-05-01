import LoginPage from 'pages/Login/LoginPage';
import { getIsAuth } from 'redux/login/selectors';
import { useSelector } from 'react-redux';
import css from './Home.module.scss';

const Home = () => {
  const isAuth = useSelector(getIsAuth);
  return (
    <div className={css.container}>{!isAuth ? <LoginPage /> : <div></div>}</div>
  );
};

export default Home;
