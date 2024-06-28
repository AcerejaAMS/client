import React, { useEffect , useState } from 'react';
import './aparienciaPrivada.css';
import { useComunitys } from '../../context/ComunityContext';
import { useAuth } from '../../context/AuthContext';

const SugerenciaComunidad = () => {
    const { comunitys, getComunitys, deleteComunity} = useComunitys();
    const { user } = useAuth();

    useEffect(() => {
        getComunitys();
    }, [getComunitys]);

    return (
        <div className='comunidadGlobal'>
            {comunitys.map((comunidad) => (
                <div className='formacomunidad' key={comunidad.id}>
                <div>
                    <p className='estiloAutorCom'>{comunidad.nombre_comunidad}</p>
                    <p className='estiloInformacionCom' >{comunidad.descripcion}</p>
                </div>
                <button className='botonEntrarComunidad'>Salir</button>
            </div>
            ))}
        </div>
    );
};

export default SugerenciaComunidad;