import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { ErrorMessage, Field, Formik } from 'formik';
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logIn } from 'redux/login/operations';
import { getIsAuth, getIsError } from 'redux/login/selectors';
import Button from 'common/Button/Button';
import { Form } from 'common/Form/Form';
import wallet from '../../images/wallet.svg';
import css from './LoginForm.module.css';

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

const LoginForm = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuth);
  const isError = useSelector(getIsError);
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
    e.preventDefault();
    const children = [...e.target.children];
    const password = children.find(el => el.type === 'password').value;
    const email = children.find(el => el.type === 'email').value;
    setEnterCounter(prevEnterCounter => prevEnterCounter + 1);
    const credentials = {
      email,
      password,
    };
    dispatch(logIn(credentials));
    return notify.info(`It's your ${enterCounter + 1} attempt this session`);
  }

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={signInSchema}
      onSubmit={handleFormSubmit}
    >
      {({props}) => (
        <Form classNameForm={css.loginForm} handleFormSubmit={handleFormSubmit}>
          <div className={css.loginHeader}>
            <img alt="" src={wallet} className={css.loginWallet} />
            <h1>Wallet</h1>
          </div>
          <Field name="email" type="email" className={css.loginInputEmail} />
          <ErrorMessage
            name="email"
            className={css.errorMessage}
            component="div"
          />
          <Field
            name="password"
            type="password"
            className={css.loginInputPassword}
          />
          <ErrorMessage
            name="password"
            className={css.errorMessage}
            component="div"
          />
          <Button
            classNameBtn={css.submitButton}
            type={'submit'}
            children={'login'}
          />
          <NavLink to="/register">
            <Button
              classNameBtn={css.registerButton}
              type={'button'}
              children={'register'}
            />
          </NavLink>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;