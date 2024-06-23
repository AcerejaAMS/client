import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvide } from './context/AuthContext.js';

import PiePublico from './pages/publicas/PiePaginaPublico.js';
import EncabezadoPublico from './pages/publicas/EncabezadoPublico.js';
import Ingresar from './pages/publicas/LoginPage.js';
import Crear from './pages/publicas/RegisterPage.js';

const App = () => {
  
  const cuerpoInfo = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  return (
    <AuthProvide>
        <Router>
          <Routes>
            <Route path="/" element={[<EncabezadoPublico/>, <Ingresar/>,<PiePublico />]} />
            <Route path="/register" element={[<EncabezadoPublico/>, <Crear/>,<PiePublico />]} />
          </Routes>
      </Router>
    </AuthProvide>
  ); 
};

export default App;
