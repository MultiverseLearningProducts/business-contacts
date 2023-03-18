import React from 'react';
import {
  Outlet,
} from 'react-router-dom';
import { Navbar, Footer } from '../components';

function Layout() {

  return (
      <div data-testid='app'>
        <Navbar />

        <Outlet />

        <Footer />

      </div>
  );
}

export { Layout };
