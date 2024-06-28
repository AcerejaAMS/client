import React, { useEffect , useState } from 'react';
import './aparienciaPrivada.css';
import { usePublicates } from '../../context/PublicateContext';

const VistaPublAjena = () => {
    const { publicates , getPublicateA, updatePublicate } = usePublicates();

    useEffect(() => {
        getPublicateA();
    }, [getPublicateA]);

    const formatearFecha = (fecha) => {
        const date = new Date(fecha);
        return date.toLocaleDateString('es-ES', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
    };

    const aumento = (id, publi) =>updatePublicate(id, publi);

    return (
        <div className='publicacionGlobal'>
            {publicates.map((publicacion) => (
                <div className='formaPublicacion' key={publicacion.id}>
                    <p className='estiloAutor'>{publicacion.autor}</p>
                    <p className='estiloAutor'>{formatearFecha(publicacion.updatedAt)}</p>
                    <p className='estiloInformacion'>{publicacion.informacion}</p>
                    <div className='reaciones'>
                        <i className="fa-solid fa-heart" onClick={() => aumento(publicacion)}> : {publicacion.me_gusta}</i>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default VistaPublAjena;