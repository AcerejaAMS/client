import React, { useEffect , useState } from 'react';
import './aparienciaPrivada.css';
import { usePublicates } from '../../context/PublicateContext';
import { useAuth } from '../../context/AuthContext';
import Swal from 'sweetalert2';

const VistaPublAjena = () => {
    const { mirarOtroPerfil } = useAuth();
    const { publicates , getPublicateA, updatePublicate } = usePublicates();
    const [userDatos, setUserDatos]=useState(null);

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

    const aumento = (id, publi) =>updatePublicate(id, publi);

    return (
        <div className='publicacionGlobal'>
            {publicates.map((publicacion) => (
                <div className='formaPublicacion' key={publicacion.id}>
                    <p className='estiloAutor' onClick={() => mostrarDatos(publicacion.autor)}>@{publicacion.autor}</p>
                    <p className='estiloAutor' onClick={() => mostrarDatos(publicacion.autor)}>{formatearFecha(publicacion.updatedAt)}</p>
                    <p className='estiloInformacion'>{publicacion.informacion}</p>
                    <div className='reaciones'>
                        <i className="fa-solid fa-heart" onClick={() => aumento(publicacion)}> : {publicacion.me_gusta}</i>
                        <i class="fa-solid fa-comment"> : Comentarios</i>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default VistaPublAjena;