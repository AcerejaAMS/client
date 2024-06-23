import './aparienciaPublica.css';
import Swal from 'sweetalert2';
import React, { useState } from 'react';

const Ingresar = () => {

    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');

    const CambioPagina_CrearCuenta = () =>{
        window.location.href = 'http://localhost:3000/crear';
    }

    const CambioPagina_OlvidarContrasena = () =>{
        Swal.fire({
            title: '¿Contraseña olvidada?',
            text: 'Ingresa tu correo y te mandaremos la contraseña',
            showCancelButton: true,
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#0084B4',
            cancelButtonText: 'Cancelar',
            cancelButtonColor: '#CC0033',
            input: 'text',
            inputPlaceholder: 'Igrese su correo registrado',
            width: '400px',
          });
    }

    const IntentoIngreso = (e) => {
        e.preventDefault();
        let llaveAceptacion_Correo=false;
        let llaveAceptacion_Contrasena=false;
        let indiceBusqueda=-1;
        
        let temp;
/*
        for(let step = 0; step < usuarios.length; step++){
            temp=usuarios[step];
            if(temp.correo === correo){
                llaveAceptacion_Correo=true;
                indiceBusqueda=step;
                break;
            }
        }

        temp=usuarios[indiceBusqueda];
        if(llaveAceptacion_Correo === true && temp.contrasenia === contrasena){
            llaveAceptacion_Contrasena=true;
        }
*/
        if(llaveAceptacion_Contrasena === true){
            window.location.href = 'http://localhost:3000/principal';
        } else {
            Swal.fire({
                title: 'Error',
                text: 'Correo o Contraseña erroneos',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#0084B4',
                showCancelButton: false,
                width: '400px',
              });
        }
      };

    const iniciarSesion = (
        <div>
            <p className="tituloCuerpo">Iniciar sesión</p>
            <div className="cuerpo">
                <div className="entradaInfo">
                    <form onSubmit={IntentoIngreso} className='tamanio'>
                        <input
                            type="text " 
                            className="input-style" 
                            placeholder="Correo electrónico . . ."
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}/>
                        <input
                            type="password" 
                            className="input-style" 
                            placeholder="Contraseña . . ."
                            value={contrasena}
                            onChange={(e) => setContrasena(e.target.value)}/>
                        <button className="button-styleIS">Ingresar</button>
                    </form>
                    <p className='contrasenaOlvidadada' onClick={CambioPagina_OlvidarContrasena}>¿Olvidaste la Contraseña?</p>
                    <hr className="linea-estilo" />
                    <button className="button-styleCC"  onClick={CambioPagina_CrearCuenta}>Crear Cuenta Nueva</button>
                    
                </div>
            </div>
        </div>
    );
    return(iniciarSesion);
};

export default Ingresar;
