import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PiePublico from './pages/publicas/PiePaginaPublico.js';
import EncabezadoPublico from './pages/publicas/EncabezadoPublico.js';
import Ingresar from './pages/publicas/LoginPage.js';

const App = () => {
  
  const cuerpoInfo = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={[<EncabezadoPublico/>, <Ingresar/>,<PiePublico />]} />
      </Routes>
    </Router>
  );
};

export default App;
