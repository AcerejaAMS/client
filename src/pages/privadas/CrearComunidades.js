import React, { useState } from 'react';
import './aparienciaPrivada.css';
import { useAuth } from '../../context/AuthContext';
import Swal from 'sweetalert2';
import { createComunityRequest } from '../../api/comunity';


const CrearComunidad = () => {

    const [nomComunidad, setnomComunidad] = useState('');
    const [desComunidad, setdesComunidad] = useState('');

    const {user} = useAuth();
   
    const recuperarInfo = (e) =>{
        e.preventDefault();
        if(nomComunidad){
            const nuevaComunidad = {
                nombre_comunidad: nomComunidad,
                descripcion: desComunidad,
                administrador: user,
                participantes: user
            }

            createComunityRequest(nuevaComunidad)

            Swal.fire({
                title: 'Listo',
                text: 'Se creao correctamente la comunidad',
                showCancelButton: false,
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#0084B4',
                width: '300px',
              });
            
              setdesComunidad('');
              setnomComunidad('');

        }else{
            Swal.fire({
                title: 'Error',
                text: 'No fue posible realizar la Comunidad',
                showCancelButton: false,
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#CC0033',
                width: '300px',
              });
        }
    }

    const baseInfo = (
        <div className='formaInfo'>
            <input
                type="text" 
                className="formaInput2" 
                placeholder="Ingrese nombre de la comunidad"
                value={nomComunidad}
                onChange={(e) => setnomComunidad(e.target.value)}/>
            <input
                type="text" 
                className="formaInput2" 
                placeholder="Ingrese la comunidad"
                value={desComunidad}
                onChange={(e) => setdesComunidad(e.target.value)}/>
            <hr  className="estiloLinea" />
            <div className='unionBotonesPublicacion'>
                <button className='publicacion' onClick={recuperarInfo}>Crear</button>
            </div>
        </div>
    );
    return(baseInfo);
};

export default CrearComunidad;