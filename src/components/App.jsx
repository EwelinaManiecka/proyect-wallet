import { lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from '../layouts/Layout';
import { routes } from './routes/routes';

const HomePage = lazy(() => import('pages/Home/Home'));
const RegisterPage = lazy(() => import('pages/Register/Register'));
const LoginPage = lazy(() => import('pages/Login/Login'));

const App = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Routes>
        <Route path={routes.home} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={routes.register} element={<RegisterPage />} />
          <Route path={routes.login} element={<LoginPage />} />
          <Route
            path={routes.notFound}
            element={<Navigate to={routes.home} />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
