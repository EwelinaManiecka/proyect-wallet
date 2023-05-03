import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from 'components/Header/Header';
import { Currency } from 'components/Currency/Currency';

export const Layout = () => (
  <div>
    <Header />
    <Currency />
    <Suspense
      fallback={
        <div
          style={{
            width: '100%',
            height: 'calc(100vh - 64px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
          }}
        ></div>
      }
    >
      <Outlet />
    </Suspense>
  </div>
);
