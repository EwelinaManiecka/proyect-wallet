import { RegistrationForm } from '../../components/RegistrationForm/RegistrationForm';
import Media from 'react-media';
import image from '../../images/RegistrationPage/Desktop/frame-desktop.png';
import css from './RegistrationPage.module.scss';

export const RegistrationPage = () => {
  return (
    <div className={css.container}>
      <Media
        query="(min-width: 767px)"
        render={() => (
          <div className={css.logo}>
            <img className={css.image} src={image} alt="" />
            <h1 className={css.title}>Finance App</h1>
          </div>
        )}
      />
      <div className={css.form}>
        <RegistrationForm />
      </div>
    </div>
  );
}
