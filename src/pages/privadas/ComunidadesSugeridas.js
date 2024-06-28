import React, { useEffect , useState } from 'react';
import './aparienciaPrivada.css';
import { useComunitys } from '../../context/ComunityContext';

const SugerenciaComunidad = () => {
    const { comunitys, getComunitys } = useComunitys();

    useEffect(() => {
        getComunitys();
    }, [getComunitys]);

    return (
        <div className='comunidadGlobal'>
            {comunitys.map((comunidad) => (
                <div className='formacomunidad' key={comunidad.id}>
                    <p className='estiloAutor'>{comunidad.nombre_comunidad}</p>
                    <p className='estiloAutor' >{comunidad.updatedAt}</p>
                </div>
            ))}
        </div>
    );
};

export default SugerenciaComunidad;