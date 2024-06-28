import React, { useEffect , useState } from 'react';
import './aparienciaPrivada.css';
import { usePublicates } from '../../context/PublicateContext';
import { useAuth } from '../../context/AuthContext';
import { getPublicateNoticia } from '../../api/publicacion';
import Swal from 'sweetalert2';

const Notice = () => {
    const { mirarOtroPerfil } = useAuth();
    const { publicates, updateLike , updateDisLike } = usePublicates();
    const [userDatos, setUserDatos]=useState(null);

    useEffect(() => {
        getPublicateNoticia();
    }, [getPublicateNoticia]);

    const formatearFecha = (fecha) => {
        const date = new Date(fecha);
        return date.toLocaleDateString('es-ES', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
    };

    const mostrarDatos = (id) => {
        const perfilObtenido = mirarOtroPerfil(id);
        perfilObtenido.then(response => {
            setUserDatos(response.data);
            Swal.fire({
                title: 'Usuario',
                html: 
                    'Nombre: ' + userDatos.nombre + ' ' + userDatos.apellido + '<br><br>' +
                    'Plantel: ' + userDatos.plantel + '<br><br>' +
                    'Carrera: ' + userDatos.carrera + '<br><br>' +
                    'Sexo: ' + userDatos.sexo + '<br><br>' +
                    'Fecha de nacimiento: ' + formatearFecha(userDatos.fecha_nacimiento),
                showCancelButton: false,
                confirmButtonText: 'Listo',
                confirmButtonColor: '#0084B4',
                width: '400px',
            }).then((result) => {
                if (result.isConfirmed) {
                    setUserDatos(null);
                }
            });
        }).catch(error => {
            console.error('Error al obtener los datos:', error);
        })
    };

    const aumentoLike = (id, publi) =>updateLike(id, publi,1);

    const aumentoDislike = (id, publi) =>updateDisLike(id, publi,2);

    return (
        <div className='publicacionGlobal'>
            {publicates.map((publicacion) => (
                <div className='formaPublicacion' key={publicacion.id}>
                    <p className='estiloAutor' onClick={() => mostrarDatos(publicacion.autor)}>@{publicacion.autor}</p>
                    <p className='estiloAutor' onClick={() => mostrarDatos(publicacion.autor)}>{formatearFecha(publicacion.updatedAt)}</p>
                    <p className='estiloInformacion'>{publicacion.informacion}</p>
                    <div className='reaciones'>
                        <i className="fa-solid fa-heart" onClick={() => aumentoLike(publicacion)}> : {publicacion.me_gusta}</i>
                        <i class="fa-solid fa-heart-crack" onClick={() => aumentoDislike(publicacion)}> : {publicacion.no_gusta}</i>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Notice;