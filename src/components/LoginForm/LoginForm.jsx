import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { ErrorMessage, Field, Formik, Form } from 'formik';
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';
import { selectIsAuth, selectError } from 'redux/auth/selectors';
import { Button } from 'common/Button/Button';
import wallet from '../../images/wallet.svg';
import envelope from '../../images/envelope.svg';
import padlock from '../../images/padlock.svg';
import css from './LoginForm.module.scss';

const notify = Notiflix.Notify;

const signInSchema = Yup.object({
  email: Yup.string()
    .email('Enter the valid email')
    .required('The email field is required'),
  password: Yup.string()
    .min(6, 'The password must be minimum six symbols')
    .max(12, 'The password should not be more than 12 symbols')
    .required('The password field is required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const isError = useSelector(selectError);
  const navigate = useNavigate();
  const [enterCounter, setEnterCounter] = useState(0);

  useEffect(() => {
    if (
      isError !== null &&
      isError.response !== undefined &&
      isError.response.status === 404
    ) {
      return notify.failure('Username or password are incorrect!');
    }
    if (isAuth) {
      return notify.success('Successfully logged in!');
    }
  });

  const handleFormSubmit = e => {
    setEnterCounter(prevEnterCounter => prevEnterCounter + 1);
    const credentials = {
      email: e.email,
      password: e.password,
    };
    dispatch(logIn(credentials));
    navigate('/home');
    return notify.info(`It's your ${enterCounter + 1} attempt this session`);
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={signInSchema}
      onSubmit={handleFormSubmit}
    >
      {({ props }) => (
        <Form className={css.loginForm}>
          <div className={css.loginHeader}>
            <img alt="" src={wallet} className={css.loginHeader__wallet} />
            <h1>Wallet</h1>
          </div>
          <div className={css.inputWrapper}>
            <div className={css.inputWrapper__inputEmail}>
              <img
                className={css.inputWrapper__envelope}
                alt=""
                src={envelope}
              />
              <Field
                name="email"
                type="email"
                placeholder="E-mail"
                className={css.inputWrapper__email}
              />
            </div>
            <ErrorMessage
              name="email"
              className={css.errorMessage}
              component="div"
            />
            <div className={css.inputWrapper__inputPassword}>
              <img className={css.inputWrapper__padlock} alt="" src={padlock} />
              <Field
                name="password"
                type="password"
                placeholder="Password"
                className={css.inputWrapper__password}
              />
            </div>
            <ErrorMessage
              name="password"
              className={css.errorMessage}
              component="div"
            />
          </div>
          <div className={css.buttonsWrapper}>
            <Button
              classNameBtn={css.buttonsWrapper__submitButton}
              type={'submit'}
              children={'login'}
            />
            <Link to="/registration">
              <Button
                classNameBtn={css.buttonsWrapper__registerButton}
                type={'button'}
                children={'register'}
              />
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
};
