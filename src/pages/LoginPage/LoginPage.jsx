import Media from 'react-media';
import { Fragment } from 'react';
import financeImage from '../../images/LoginAndRegistrationPage/Desktop/login-image.png';
import financeImagex2 from '../../images/LoginAndRegistrationPage/Desktop/login-imagex2.png';
import { LoginForm } from 'components/LoginForm/LoginForm';
import css from './LoginPage.module.scss';

export const LoginPage = () => {
  return (
    <>
      <div className={css.loginPage}>
        <Media
          queries={{
            tablet: '(min-width: 767px) and (max-width: 1280px)',
            desktop: '(min-width:1280px)',
          }}
        >
          {matches => (
            <Fragment>
              {matches.tablet && (
                <div className={css.loginPageHeader}>
                  <img alt="" src={financeImage} className={css.image} />
                  <h2>Finance App</h2>
                </div>
              )}
              {matches.desktop && (
                <div className={css.loginPageHeader}>
                  <img alt="" src={financeImagex2} className={css.image} />
                  <h2>Finance App</h2>
                </div>
              )}
            </Fragment>
          )}
        </Media>
        <div className={css.form}>
          <LoginForm />
        </div>
      </div>
    </>
  );
};
