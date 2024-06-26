import React, { useState } from 'react';
import './aparienciaPrivada.css';
import { useAuth } from '../../context/AuthContext';
import Swal from 'sweetalert2';
import { createPublicateRequest } from '../../api/publicacion';
import { useComunitys } from '../../context/ComunityContext';

const Publicar = () => {

    const [info, setInformacion] = useState('');
    const {user} = useAuth();
    const {comunitys} = useComunitys();
   
    const recuperarInfo = (e) =>{
        e.preventDefault();
        if(info){
            const nuevaPublicacion = {
                tipo: 'normal',
                autor: user,
                informacion: info,
                comunidad_subida: comunitys
            }

            createPublicateRequest(nuevaPublicacion)

            Swal.fire({
                title: 'Listo',
                text: 'Se realizo correctamente la publicacion',
                showCancelButton: false,
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#0084B4',
                width: '300px',
              });
            
              setInformacion('');

        }else{
            Swal.fire({
                title: 'Error',
                text: 'No fue posible realizar la publicacion',
                showCancelButton: false,
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#CC0033',
                width: '300px',
              });
        }
    }

    const recuperarURL = () =>{
        Swal.fire({
            title: 'URL',
            text: 'Ingresar el link de una pagina web',
            showCancelButton: true,
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#0084B4',
            cancelButtonText: 'Cancelar',
            cancelButtonColor: '#CC0033',
            input: 'text',
            inputPlaceholder: 'Igrese el link',
            width: '400px',
          });

    }

    const baseInfo = (
        <div className='formaInfo'>
            <input
                type="text" 
                className="formaInput" 
                placeholder="¿Qué estas pensando?"
                value={info}
                onChange={(e) => setInformacion(e.target.value)}/>
            <hr  className="estiloLinea" />
            <div className='unionBotonesPublicacion'>
                <p>Adjuntar: </p>
                <button className='agregados' onClick={recuperarURL}>URL</button>
                <button className='publicacion' onClick={recuperarInfo}>Publicar</button>
            </div>
        </div>
    );
    return(baseInfo);
};

export default Publicar;