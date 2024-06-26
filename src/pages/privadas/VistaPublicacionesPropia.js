import React, { useEffect, useState } from 'react';
import './aparienciaPrivada.css';
import { usePublicates } from '../../context/PublicateContext';

const VistaPublPropia = () => {
    const { publicates , getPublicate } = usePublicates();


    useEffect(() => {
        getPublicate();
      }, []);


    console.log(publicates)

    return (
        <div className='formaPublicacion'>
            {publicates.map((publicacion) => (
                <h1 key={publicacion.id}>{publicacion.informacion}</h1>
            ))}
        </div>
    );
};

export default VistaPublPropia;
