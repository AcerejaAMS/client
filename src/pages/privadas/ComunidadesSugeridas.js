import React, { useEffect , useState } from 'react';
import './aparienciaPrivada.css';
import { useComunitys } from '../../context/ComunityContext';

const SugerenciaComunidad = () => {
    const { comunitys, getComunitys, updateEntrar} = useComunitys();

    useEffect(() => {
        getComunitys();
    }, [getComunitys]);

    const entrarComunidad = (comunidad) =>{
        updateEntrar(comunidad);
    }

    return (
        <div className='comunidadGlobal'>
            {comunitys.map((comunidad) => (
                <div className='formacomunidad' key={comunidad.id}>
                <div>
                    <p className='estiloAutorCom'>{comunidad.nombre_comunidad}</p>
                    <p className='estiloInformacionCom' >{comunidad.descripcion}</p>
                </div>
                <button className='botonEntrarComunidad' onClick={()=>entrarComunidad(comunidad)}>Entrar</button>
            </div>
            ))}
        </div>
    );
};

export default SugerenciaComunidad;