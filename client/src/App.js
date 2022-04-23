import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import Create from './views/Create';
import Update from './views/Update';

const App = () => { 
  return(
  <div>
    <BrowserRouter>
      <Routes>
        <Route element={<Main/>} path="/authors/" /> 
        <Route element={<Create/>} path="/authors/new" />
        <Route element={<Update/>} path="/authors/edit/:id"/>
      </Routes>
    </BrowserRouter>
    </div>
    ) 
}

export default App;
