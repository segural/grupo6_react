//Pages
import { Tarjetas } from './Pages/Tarjetas';
import { Home } from './Pages/Home';
import { Welcome } from './Pages/Welcome';

//Styles
import './sass/App.scss';


import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <div className='app-header'>
      <BrowserRouter>
        <nav>
          <h1>Grupo 6</h1>
          
          <Link to='/search'>Búsqueda</Link>
          <Link to='/evolution'>Evolución</Link>
        </nav>

        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/evolution' element={<Tarjetas />}></Route>
          <Route path='/search' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export { App };
