
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {AuthProvider} from './context/AuthContext';
import { ProtectedRoute } from './routes/RouteProtected.js';

import PiePublico from './pages/publicas/PiePaginaPublico.js';
import EncabezadoPublico from './pages/publicas/EncabezadoPublico.js';
import Ingresar from './pages/publicas/LoginPage.js';
import Crear from './pages/publicas/RegisterPage.js';

import Barra from './pages/privadas/BarraHerramienta.js';
import BarraIzq from './pages/privadas/BarraIzquierda.js';

const App = () => {

  const cuerpoInfo = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={[<EncabezadoPublico/>, <Ingresar/>,<PiePublico />]} />
          <Route path="/register" element={[<EncabezadoPublico/>, <Crear/>,<PiePublico />]} />
          <Route element={<ProtectedRoute />}>
            <Route path="/principal" element={[<Barra/>,<div style={cuerpoInfo}><BarraIzq/><BarraIzq/></div>]} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  ); 
};

export default App;
