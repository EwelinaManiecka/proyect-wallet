import Media from 'react-media';
import { Fragment } from 'react';
import bgImgX2 from '../../images/RegistrationPage/Desktop/frame-desktop-2x.png';
import bgImg from '../../images/RegistrationPage/Desktop/frame-desktop.png';
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
                  <img alt="" src={bgImg} className={css.image} />
                  <h2>Finance app</h2>
                </div>
              )}
              {matches.desktop && (
                <div className={css.loginPageHeader}>
                  <img alt="" src={bgImgX2} className={css.image} />
                  <h2>Finance app</h2>
                </div>
              )}
            </Fragment>
          )}
        </Media>
        <div className={css.form}>
          <LoginForm />
        </div>

        <div></div>
      </div>
    </>
  );
};
