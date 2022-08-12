import React, {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Footer, Navbar } from './components';
import { Contacts, Home } from './routes';

/*
  make sure to install the latest version of react-router-dom
  npm install react-router-dom@6
*/

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/contacts')
      .then(res => res.json())
      .then(data => setContacts(data));
  }, []);

  return <>
    <BrowserRouter>
      <Navbar/>
      <div className='mt-4 mx-auto h-75 w-75'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contacts' element={<Contacts contacts={contacts} />} />
          </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  </>;
}

export { App };
