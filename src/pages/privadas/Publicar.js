import React, { useState } from 'react';
import './aparienciaPrivada.css';
import { useAuth } from '../../context/AuthContext';
import Swal from 'sweetalert2';
import { createPublicateRequest } from '../../api/publicacion';

const Publicar = () => {

    const [info, setInformacion] = useState('');
    const {user} = useAuth();
    

    const recuperarInfo = (e) =>{
        e.preventDefault();
        if(info){
            const nuevaPublicacion = {
                tipo: 'normal',
                autor: user,
                informacion: info,
            }

            createPublicateRequest(nuevaPublicacion)
        }else{
            Swal.fire({
                title: 'Error',
                text: 'No fue Posible la publicacion',
                showCancelButton: false,
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#0084B4',
                width: '400px',
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
        <div className='panelDerecho'>
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
        </div>
    );
    return(baseInfo);
};

export default Publicar;