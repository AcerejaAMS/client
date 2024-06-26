import React from 'react';
import './indexApariencia.css';

import Barra from '../pages/privadas/BarraHerramienta.js';
import BarraIzq from '../pages/privadas/BarraIzquierda.js';
import Publicar from '../pages/privadas/Publicar.js';

const Principal = () =>{

  const cuerpo = (
    <div>
      <Barra/>
      <div className='aapInfo'>
        <BarraIzq/>
        <Publicar/>
      </div>
    </div>
  )

  return(cuerpo)
};

export default Principal