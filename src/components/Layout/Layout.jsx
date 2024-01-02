import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';
import { Container } from 'components/Container/Container';

export const Layout = () => {
  return (
    <>
      <Container>
        <Header />
        <main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
      </Container>
    </>
  );
};
