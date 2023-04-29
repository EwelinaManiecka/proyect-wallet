import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logIn } from 'redux/login/operations';
import { getIsAuth } from 'redux/login/selectors';
import Button from 'common/Button/Button';
import { Form } from 'common/Form/Form';
import { Input } from 'common/Form/Input';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuth);
  const [enterCounter, setEnterCounter] = useState(0);
  const inputPassword = document.querySelector(`input[name='password']`);
  const inputEmail = document.querySelector(`input[name='email']`);

  const handleFormSubmit = e => {
    e.preventDefault();
    setEnterCounter(prevEnterCounter => prevEnterCounter + 1);
    const credentials = {
      email: inputEmail.value,
      password: inputPassword.value,
    };
    dispatch(logIn(credentials));
  };

  return (
    <Form classNameForm={css.loginForm} handleFormSubmit={handleFormSubmit}>
      <Input
        classNameInput={css.loginInputEmail}
        type={'email'}
        name={'email'}
        pattern={'^[w-.]+@([w-]+.)+[w-]{2,4}$'}
      />
      <Input
        classNameInput={css.loginInputPassword}
        type={'password'}
        name={'password'}
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
  );
};

export default LoginForm;
