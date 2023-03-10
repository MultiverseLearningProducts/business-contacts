import React from 'react';
import {
  Outlet,
} from 'react-router-dom';
import { Navbar } from '../components/Navbar';

function Layout() {

  return (
      <div data-testid='app'>
        <Navbar />

        <Outlet />
      </div>
  );
}

export { Layout };
