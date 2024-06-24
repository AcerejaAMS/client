import AuthProvider from "./context/AuthContext.js";
import Routes from "./routes/Index.js";

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;

/*
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvide, AuthProvider } from './context/AuthContext';
import ProtectedRoute from "./routes/RouteProtected.js";

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
    <AuthProvide>
      <Router>
        <Routes>
          <Route path="/" element={[<EncabezadoPublico/>, <Ingresar/>,<PiePublico />]} />
          <Route path="/register" element={[<EncabezadoPublico/>, <Crear/>,<PiePublico />]} />
          <AuthProvider>
            <Route path="/principal" element={[<Barra/>,<div style={cuerpoInfo}><BarraIzq/><BarraIzq/></div>]} />
            <Route path="/perfil" element={[<Barra/>,<div style={cuerpoInfo}><BarraIzq/><BarraIzq/></div>]} />
            <Route path="/comunidad" element={[<Barra/>,<div style={cuerpoInfo}><BarraIzq/><BarraIzq/></div>]} />
            <Route path="/amigos" element={[<Barra/>,<div style={cuerpoInfo}><BarraIzq/><BarraIzq/></div>]} />
            <Route path="/noticias" element={[<Barra/>,<div style={cuerpoInfo}><BarraIzq/><BarraIzq/></div>]} />
          </AuthProvider>
        </Routes>
      </Router>
    </AuthProvide>
  ); 
};

export default App;
*/