/*
import React from 'react';
import './aparienciaPrivada.css';
import { usePublicates } from '../../context/PublicateContext';
import { useState, useEffect} from 'react';

const VistaPerfil = ({user}) => {

    const [userData, setUserData]=useState(null);

    const {getPerfil} = useAuth();

    const formatearFecha = (fecha) => {
        const date = new Date(fecha);
        return date.toLocaleDateString('es-ES', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
      };

    const PerfilRecuperado= getPerfil(user);
    useEffect(()=>{
        PerfilRecuperado.then(response => {

            setUserData(response.data);

        }).catch(error => {
            console.error('Error al obtener los datos:', error);
          })
    }, []);

    if (!userData) {
        return <p>Cargando...</p>; // Muestra un mensaje de carga mientras se obtienen los datos
    }

    const perfil = (
        <div className='formaPerfil'>
            <div className='perfilP1'>
                <p>Nombre:</p>
                <p>Plantel:</p>
                <p>Carrera:</p>
                <p>Sexo:</p>
                <p>Fecha de union:</p>
                <p>Fecha de nacimiento:</p>
            </div>
            <div className='perfilP2'>
                <p>{userData.nombre} {userData.apellido}</p>
                <p>{userData.plantel}</p>
                <p>{userData.carrera}</p>
                <p>{userData.sexo}</p>
                <p>{formatearFecha(userData.fecha_registro)}</p>
                <p>{formatearFecha(userData.fecha_nacimiento)}</p>
            </div>
            
        </div>  
    );

    return(perfil);

};

export default VistaPerfil;*/