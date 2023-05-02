import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from '../components/AppBar/AppBar';

export const Layout = () => (
  <div>
    <AppBar />
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
