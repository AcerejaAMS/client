import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PiePublico from './pages/publicas/PiePaginaPublico.js';

const App = () => {
  
  const cuerpoInfo = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PiePublico />} />
      </Routes>
    </Router>
  );
};

export default App;
