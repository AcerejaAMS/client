import React from 'react';
import './indexApariencia.css';

import Barra from '../pages/privadas/BarraHerramienta.js';
import BarraIzq from '../pages/privadas/BarraIzquierda.js';
import Publicar from '../pages/privadas/Publicar.js';
import VistaPerfil from '../pages/privadas/Perfil.js';
import VistaPublPropia from '../pages/privadas/VistaPublicacionesPropia.js';
import VistaPublAjena from '../pages/privadas/VistaPublicacionesAjena.js';
import BotonesComunidades from '../pages/privadas/BarraComunidades.js';
import CrearComunidad from '../pages/privadas/CrearComunidades.js';
import SugerenciaComunidad from '../pages/privadas/ComunidadesSugeridas.js';
import Notice from '../pages/privadas/Noticias.js';

import { useAuth } from '../context/AuthContext.js';
import GrupoComunidad from '../pages/privadas/ComunidadesPertenezco.js';

export const Principal = () =>{

  const cuerpo = (
    <div>
      <Barra/>
      <div className='aapInfo'>
        <BarraIzq/>
        <div className='panelDerecho'>
          <Publicar/>
          <VistaPublAjena/>
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

export const Comunidad = () => {

  const comu= (
    <div>
    <Barra/>
    <div className='aapInfo'>
      <BarraIzq/>
      <div className='panelDerecho'>
        <BotonesComunidades/>
        <CrearComunidad/>
        <GrupoComunidad/>
      </div>
    </div>
  </div>
  );
  return(comu);
};


export const SuComunidad = () => {

  const comu= (
    <div>
    <Barra/>
    <div className='aapInfo'>
      <BarraIzq/>
      <div className='panelDerecho'>
        <BotonesComunidades/>
        <SugerenciaComunidad/>
      </div>
    </div>
  </div>
  );
  return(comu);
};

export const Noticias = () =>{
  const comu =(
    <div>
    <Barra/>
    <div className='aapInfo'>
      <BarraIzq/>
      <div className='panelDerecho'>
        <Notice/>
      </div>
    </div>
  </div>
  );
  return(comu);
}