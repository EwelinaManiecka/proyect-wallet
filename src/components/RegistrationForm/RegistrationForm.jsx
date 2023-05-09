import { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register } from 'redux/auth/operations';
import { selectIsAuth, selectError } from 'redux/auth/selectors';
import { StrengthPasswordMeter } from '../StrengthPasswordMeter/StrengthPasswordMeter';
import { Button, } from '../../common/Button/Button';
import { Input } from '../../common/Form/Input';
import css from './RegistrationForm.module.scss';
import btn from '../../common/Button/button.module.scss';
import input from '../../common/Form/Input.module.scss';

import logo from '../../images/logo.svg';
import envelope from '../../images/envelope.svg';
import padlock from '../../images/padlock.svg';
import avatar from '../../images/avatar.svg';


const signUpSchema = Yup.object({
    email: Yup.string()
      .email('Enter the valid email')
      .required('The email field is required'),
    password: Yup.string()
      .min(6, 'The password must be minimum six symbols')
      .max(12, 'The password should not be more than 12 symbols')
      .required('The password field is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Confirm your password'),
    name: Yup.string()
      .min(1, 'The name must be consist of at least 1 symbol')
      .max(12, 'The name should not be more than 12 symbols')
      .required('Enter you first name'),
  });

export const RegistrationForm = () => {
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const isError = useSelector(selectError);
  const navigate = useNavigate();
  
  useEffect(() => {
   if (
      isError !== null &&
      isError.response !== undefined &&
      isError.response.status === 404
    ) {
      return toast.success('Username or password are incorrect!');
    }
    if (isAuth) {
      return toast.success('Successfully logged in!');
    }
  });

  const handleSubmit = ({ name, email, password }) => {
    dispatch(register({ username: name, email: email, password: password }));
    navigate('/home');
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={signUpSchema}
      validateOnBlur
    >
      {({
        handleChange,
        touched,
        isValid,
        dirty,
        values,
        errors,
      }) => (
        <Form className={css.form}>
          <img className={css.logo} alt="Logo" src={logo} />
          <div className={css.input}>
            {touched.email && errors.email ? (
              <p
                style={{
                  color: '#ff6596',
                  position: 'absolute',
                  bottom: '-30px',
                  left: '0',
                  fontFamily: 'Poppins',
                  fontSize: '13px',
                }}
              >
                {errors.email}
              </p>
            ) : null}
            <img className={css.input__icon} alt="Logo" src={envelope} />
            <Input
              classNameInput={input.text}
              type="text"
              name="email"
              idInput="email"
              placeholder="E-mail"
              value={values.email}
              handleChange={handleChange}
            />
          </div>
          <div className={css.input}>
            {touched.password && errors.password ? (
              <p
                style={{
                  color: '#ff6596',
                  position: 'absolute',
                  bottom: '-30px',
                  left: '0',
                  fontFamily: 'Poppins',
                  fontSize: '13px',
                }}
              >
                {errors.password}
              </p>
            ) : null}
            <img className={css.input__icon} alt="Logo" src={padlock} />
            <input
              className={input.text}
              type="password"
              name="password"
              placeholder="Password"
              id="password"
              value={values.password}
              onChange={handleChange}
              onInput={e => setPassword(e.target.value)}
            />
          </div>
          <div className={css.input}>
            {touched.confirmPassword && errors.confirmPassword ? (
              <p
                style={{
                  color: '#ff6596',
                  position: 'absolute',
                  bottom: '-30px',
                  left: '0',
                  fontFamily: 'Poppins',
                  fontSize: '13px',
                }}
              >
                {errors.confirmPassword}
              </p>
            ) : null}
            <img className={css.input__icon} alt="Logo" src={padlock} />
            <Input
              classNameInput={input.text}
              type="password"
              name="confirmPassword"
              idInput="confirmPassword"
              placeholder="Confirm password"
              value={values.confirmPassword}
              handleChange={handleChange}
            />
            <StrengthPasswordMeter password={password} />
          </div>
          <div className={css.input}>
            {touched.name && errors.name ? (
              <p
                style={{
                  color: '#ff6596',
                  position: 'absolute',
                  bottom: '-30px',
                  left: '0',
                  fontFamily: 'Poppins',
                  fontSize: '13px',
                }}
              >
                {errors.name}
              </p>
            ) : null}
            <img className={css.input__icon} alt="Logo" src={avatar} />
             <Input
              classNameInput={input.text}
               className={css.input__text}
              type="text"
              name="name"
              idInput="name"
              placeholder="First name"
              value={values.name}
              handleChange={handleChange}
            />
          </div>
          <div className={css.container__btn}>
            <Button
                classNameBtn={btn.white}
                type={'submit'}
                children={'register'}
              />
            <Link to="/">
              <Button
                classNameBtn={btn.white}
                type={'button'}
                children={'log in'}
              />
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
};
