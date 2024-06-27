import React, { useEffect , useState } from 'react';
import './aparienciaPrivada.css';
import { usePublicates } from '../../context/PublicateContext';
import { useAuth } from '../../context/AuthContext';
import { recuperarUsuario } from '../../api/auth';

const VistaPublPropia = () => {

    const [userData, setUserData]=useState(null);
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
                </div>
            ))}
        </div>
    );
};

export default VistaPublPropia;
