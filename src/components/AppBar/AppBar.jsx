import Navigation from '../Navigation/Navigation';
import css from './AppBar.module.scss';

export const AppBar = () => {
  return (
    <header className={css.header}>
      <Navigation />
    </header>
  );
};
