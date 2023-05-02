import { Routes, Route } from 'react-router-dom';

import { PrivateRoute } from '../Routes/PrivateRoute';
import { PublicRoute } from '../Routes/PublicRoute';

import { RegistrationPage } from '../pages/RegistrationPage/RegistrationPage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { DashboardPage } from '../pages/DashboardPage/DashboardPage';

import { StatisticsPage } from '../pages/StatisticsPage/StatisticsPage';
import { CurrencyPage } from '../pages/CurrencyPage/CurrencyPage';

// import Loader from './Spinner';

export const App = () => {

  return  (
    <>
      < Routes >
        <Route
          path="/"
          element={
            <PublicRoute redirectTo="/home" component={<LoginPage />} />
          }
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
          path="/statistics"
          element={
            <PrivateRoute redirectTo="/login" component={<StatisticsPage />} />
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
  )
};