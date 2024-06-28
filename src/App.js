
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {AuthProvider} from './context/AuthContext.js';
import { PublicateProvider } from './context/PublicateContext.js';
import { ComunityProvider } from './context/ComunityContext.js';

import { ProtectedRoute } from './routes/RouteProtected.js';

import PiePublico from './pages/publicas/PiePaginaPublico.js';
import EncabezadoPublico from './pages/publicas/EncabezadoPublico.js';
import Ingresar from './pages/publicas/LoginPage.js';
import Crear from './pages/publicas/RegisterPage.js';
import Loading from './pages/publicas/Loading.js';

import { Principal, SuComunidad } from './routes/Combina.js';
import { Perfil } from './routes/Combina.js';
import { Comunidad } from './routes/Combina.js';

const App = () => {

  return (
    <AuthProvider>
      <ComunityProvider>
        <PublicateProvider>
          <Router>
            <Routes>
              <Route path="/" element={[<EncabezadoPublico/>, <Ingresar/>,<PiePublico />]} />
              <Route path="/register" element={[<EncabezadoPublico/>, <Crear/>,<PiePublico />]} />
              <Route path="/loading" element={[<Loading/>]} />
              <Route element={<ProtectedRoute />}>
                <Route path="/principal" element={<Principal/>} />
                <Route path="/perfil" element={<Perfil/>} />
                <Route path="/comunidades" element={<Comunidad/>} />
                <Route path="/comunidadesSugerencias" element={<SuComunidad/>} />
              </Route>
            </Routes>
          </Router>
        </PublicateProvider>
      </ComunityProvider>
    </AuthProvider>
  ); 
};

export default App;
