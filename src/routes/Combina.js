import React from 'react';
import './indexApariencia.css';

import Barra from '../pages/privadas/BarraHerramienta.js';
import BarraIzq from '../pages/privadas/BarraIzquierda.js';
import Publicar from '../pages/privadas/Publicar.js';
import VistaPerfil from '../pages/privadas/Perfil.js';
import VistaPublPropia from '../pages/privadas/VistaPublicacionesPropia.js';

import { useAuth } from '../context/AuthContext.js';

export const Principal = () =>{

  const cuerpo = (
    <div>
      <Barra/>
      <div className='aapInfo'>
        <BarraIzq/>
        <div className='panelDerecho'>
          <Publicar/>
        </div>
      </div>
    </div>
  )

  return(cuerpo)
};

export const Perfil = () => {

  const { user } = useAuth();

  const perfil = (
    <div>
    <Barra/>
    <div className='aapInfo'>
      <BarraIzq/>
      <div className='panelDerecho'>
        <VistaPerfil user={user}/>
        <Publicar/>
        <VistaPublPropia/>
      </div>
    </div>
  </div>
  );
  return(perfil);
};