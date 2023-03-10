import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { Footer, Navbar } from './components';
import { Contacts, Home, Layout } from './routes';

import { loader } from './routes/Contacts';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path='/' element={<Home />} loader={loader}  />
      <Route path='/contacts' element={<Contacts />} loader={loader} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export { App };
