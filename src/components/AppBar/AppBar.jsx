import LoginForm from 'pages/Login/Login';
import Navigation from '../Navigation/Navigation';
import css from './AppBar.module.scss';

export const AppBar = () => {
  return (
    <header className={css.header}>
      <Navigation />
      <LoginForm />
    </header>
  );
};
