import React, { useEffect  } from 'react';
import './aparienciaPrivada.css';
import { useComunitys } from '../../context/ComunityContext';

const GrupoComunidad = () => {
    const { comunitys, getComunity } = useComunitys();

    useEffect(() => {
        getComunity();
    }, [getComunity]);

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

export default GrupoComunidad;