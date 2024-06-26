
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {AuthProvider} from './context/AuthContext.js';
import { PublicateProvider } from './context/PublicateContext.js';

import { ProtectedRoute } from './routes/RouteProtected.js';

import PiePublico from './pages/publicas/PiePaginaPublico.js';
import EncabezadoPublico from './pages/publicas/EncabezadoPublico.js';
import Ingresar from './pages/publicas/LoginPage.js';
import Crear from './pages/publicas/RegisterPage.js';
import Principal from './routes/Index.js';

const App = () => {

  return (
    <AuthProvider>
      <PublicateProvider>
        <Router>
          <Routes>
            <Route path="/" element={[<EncabezadoPublico/>, <Ingresar/>,<PiePublico />]} />
            <Route path="/register" element={[<EncabezadoPublico/>, <Crear/>,<PiePublico />]} />
            <Route element={<ProtectedRoute />}>
              <Route path="/principal" element={<Principal/>} />
            </Route>
          </Routes>
        </Router>
      </PublicateProvider>
    </AuthProvider>
  ); 
};

export default App;
