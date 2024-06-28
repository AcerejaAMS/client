import React, { useEffect  } from 'react';
import './aparienciaPrivada.css';
import { usePublicates } from '../../context/PublicateContext';

const VistaPublPropia = () => {
    const { publicates , getPublicate } = usePublicates();

    useEffect(() => {
        getPublicate();
    }, [getPublicate]);

    const formatearFecha = (fecha) => {
        const date = new Date(fecha);
        return date.toLocaleDateString('es-ES', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
    };

    return (
        <div className='publicacionGlobal'>
            {publicates.map((publicacion) => (
                <div className='formaPublicacion' key={publicacion.id}>
                    <p className='estiloAutor'>{publicacion.autor}</p>
                    <p className='estiloAutor'>{formatearFecha(publicacion.updatedAt)}</p>
                    <p className='estiloInformacion'>{publicacion.informacion}</p>
                    <div className='reaciones'>
                        <i className="fa-solid fa-heart"> : {publicacion.me_gusta}</i>
                        <i class="fa-solid fa-heart-crack"> : {publicacion.no_gusta}</i>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default VistaPublPropia;
