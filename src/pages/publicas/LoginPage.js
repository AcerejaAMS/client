import './aparienciaPublica.css';
import React, { useState, useEffect} from 'react';
import Swal from 'sweetalert2'
import { loginRequest } from '../../api/auth';
import { useNavigate } from "react-router-dom";

const Ingresar = () => {

    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');

    const navigate = useNavigate();

    const CambioPagina_CrearCuenta = () =>{
        navigate("/register",{replace: true});
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

        const busqueda = {
            correo:correo,
            contrasenia: contrasena
        }

        const resultadoBusqueda= loginRequest(busqueda)
        
        resultadoBusqueda
        .then(response => {
            if( response.data.message === "Ejecutado correctamente"){
                navigate("/loading", {replace:true});
            }else{
                Swal.fire({
                    title: 'Error',
                    text: 'Correo o Contraseña erroneos',
                    confirmButtonText: 'Aceptar',
                    confirmButtonColor: '#0084B4',
                    showCancelButton: false,
                    width: '400px',
                });
            }
          })
          .catch(error => {
            console.log(error)
          });
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
                    <button className="button-styleCC" onClick={CambioPagina_CrearCuenta}>Crear Cuenta Nueva</button>
                    
                </div>
            </div>
        </div>
    );
    return(iniciarSesion);
};

export default Ingresar;
