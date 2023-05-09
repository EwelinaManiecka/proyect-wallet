import { RegistrationForm } from '../../components/RegistrationForm/RegistrationForm';
import { Fragment } from 'react';
import Media from 'react-media';
import regImage from '../../images/LoginAndRegistrationPage/Desktop/frame-desktop.png'
import regImagex2 from '../../images/LoginAndRegistrationPage/Desktop/frame-desktop-2x.png';
import css from './RegistrationPage.module.scss';

export const RegistrationPage = () => {
  return (
    <>
      <div className={css.container}>
        <Media
          queries={{
            tablet: '(min-width: 767px) and (max-width: 1280px)',
            desktop: '(min-width:1280px)',
          }}
        >
          {matches => (
            <Fragment>
              {matches.tablet && (
                <div className={css.registrationHeader}>
                  <img alt="" src={regImage} className={css.image} />
                  <h2>Finance app</h2>
                </div>
              )}
              {matches.desktop && (
                <div className={css.registrationHeader}>
                  <img alt="" src={regImagex2} className={css.image} />
                  <h2>Finance app</h2>
                </div>
              )}
            </Fragment>
          )}
        </Media>
        <div className={css.form}>
          <RegistrationForm />
        </div>
        <div></div>
      </div>
    </>
  );
}
