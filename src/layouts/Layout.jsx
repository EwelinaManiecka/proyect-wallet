import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Header from 'components/Header/Header';

export const Layout = () => (
  <Container maxWidth="md">
    <Header />
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
        >
          <CircularProgress />
        </div>
      }
    >
      <Outlet />
    </Suspense>
  </Container>
);
