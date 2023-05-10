import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import { PrivateRoute } from '../Routes/PrivateRoute';
import { PublicRoute } from '../Routes/PublicRoute';
import { useDispatch, useSelector } from 'react-redux';

import { RegistrationPage } from '../pages/RegistrationPage/RegistrationPage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { DashboardPage } from '../pages/DashboardPage/DashboardPage';

import { StatisticsPage } from '../pages/StatisticsPage/StatisticsPage';
import { CurrencyPage } from '../pages/CurrencyPage/CurrencyPage';
import { fetchCurrentUser } from '../redux/auth/operations';
import { useAuth } from 'hooks';

import { Spinner } from './Spinner/Spinner';
import {
  selectCategories,
  selectTransactions,
} from 'redux/transactions/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, isLoggedIn } = useAuth();
  const categories = useSelector(selectCategories);
  const trans = useSelector(selectTransactions);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch, trans.length, isLoggedIn]);

  return isRefreshing && categories ? (
    <Spinner />
  ) : (
    <>
      <Routes>
        <Route
          path="/"
          element={<PublicRoute redirectTo="/home" component={<LoginPage />} />}
        />
        <Route
          path="/registration"
          element={
            <PublicRoute redirectTo="/home" component={<RegistrationPage />} />
          }
        />
        <Route
          path="/login"
          element={<PublicRoute redirectTo="/home" component={<LoginPage />} />}
        />
        <Route
          path="/home"
          element={
            <PrivateRoute redirectTo="/login" component={<DashboardPage />} />
          }
        />
        <Route
          path="/diagram"
          element={
            <PrivateRoute redirectTo="/login" component={<StatisticsPage />} />
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute redirectTo="/login" component={<DashboardPage />} />
          }
        />
        <Route
          path="/currency"
          element={
            <PrivateRoute redirectTo="/login" component={<CurrencyPage />} />
          }
        />
      </Routes>
    </>
  );
};
