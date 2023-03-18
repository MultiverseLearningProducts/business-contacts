import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  // createRoutesFromElements,
  // Route,
} from 'react-router-dom';
import { Contacts, Home, Layout } from './routes';

import { loader } from './routes/Contacts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/contacts', element: <Contacts />, loader },
    ],
  },
])

// // alternate setup
// const router2 = createBrowserRouter(
//   createRoutesFromElements(
//     <Route element={<Layout />}>
//       <Route path='/' element={<Home />}  />
//       <Route path='/contacts' element={<Contacts />} loader={loader} />
//     </Route>
//   )
// );

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export { App };
