import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { register } from 'redux/auth/operations';
import { StrengthPasswordMeter } from '../StrengthPasswordMeter/StrengthPasswordMeter';
import css from './RegistrationForm.module.scss';
import logo from '../../images/logo.svg';
import envelope from '../../images/envelope.svg';
import padlock from '../../images/padlock.svg';
import avatar from '../../images/avatar.svg';

export const RegistrationForm = () => {
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        handleBlur,
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
            <input
              className={css.input__text}
              type="text"
              name="email"
              id="email"
              placeholder="E-mail"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
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
              className={css.input__text}
              type="password"
              name="password"
              placeholder="Password"
              id="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
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
            <input
              className={css.input__text}
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm password"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
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
            <input
              className={css.input__text}
              type="text"
              name="name"
              id="name"
              placeholder="First name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className={css.button}>
            <button
              type="submit"
              className={css.button__register}
              disabled={!isValid && !dirty}
            >
              Register
            </button>
            <Link to="/">
              <button type="button" className={css.button__login}>
                Log in
              </button>
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
};
