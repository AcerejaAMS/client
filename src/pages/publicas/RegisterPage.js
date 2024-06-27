import './aparienciaPublica.css';
import Swal from 'sweetalert2'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { registerRequest } from '../../api/auth.js';
import { useNavigate } from 'react-router-dom';


const Crear = () => {

    const navigate = useNavigate();

    const  [ usuarios,  setUsuarios ]  =  useState ([]) ;
    const  [ nombre ,  setNombre ]  =  useState ( '' ) ;
    const  [ apellido ,  setApellido ]  =  useState ( '' ) ;
    const  [ correo ,  setCorreo ]  =  useState ( '' ) ;
    const  [ contraInic ,  setContraInic ]  =  useState ( '' ) ;
    const  [ contraConf ,  setContraConf ]  =  useState ( '' ) ;
    let  [ fechaNacimiento ,  setFechaNacimiento ]  =  useState ( '' ) ;
    let  [ plantel ,  setPlantel ]  =  useState ( '' ) ;
    let  [ carrera ,  setCarrera ]  =  useState ( '' ) ;
    let  sexo ;

    const  eleccionSexo  =  ( opc )  => {
        switch( opc ) {
            case  "M" :
                sexo = 'mujer'
                break;
            case  "H" :
                sexo = 'hombre'
                break;
            default:
                sexo = 'personal'
                break;
        }
    } ;

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/auth/register');
            setUsuarios(response.data);
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
    };

    const getItemByName = (correo) => {
        const item = usuarios.find(usuario => usuario.correo === correo);
        if (item){
            return true;
        }else{
            return false;
        }
    };

    const Creacion = (e) =>{

        e.preventDefault();
        if(nombre && apellido && correo && contraInic && contraConf){
            let temp=getItemByName(correo);
            if(temp){
                Swal.fire({
                    title: 'Error',
                    text: 'El correo ya esta registrado',
                    confirmButtonText: 'Aceptar',
                    confirmButtonColor: '#0084B4',
                    showCancelButton: false,
                    width: '400px',
                });
                return;
            }

            const nuevoUsuario = {
                nombre: nombre,
                apellido: apellido,
                correo: correo,
                contrasenia: contraConf,
                plantel: plantel,
                carrera: carrera,
                sexo: sexo,
                fecha_nacimiento: fechaNacimiento,
                lista_amigos: [],
                lista_comunidades: [],
                lista_publicaciones: []
            };

            registerRequest(nuevoUsuario);
            /*En realidad no lo crea */
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Perfecto!!, Se ha registrado correctamente",
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#0084B4',
                showCancelButton: false,
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/principal",{replace: true});
                }
            }
            );
        } else {
            Swal.fire({
                title: 'Error',
                text: 'Faltan datos obligatorios',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#0084B4',
                showCancelButton: false,
                width: '400px',
              });
        }
    };

    const CambioPagina = () =>{
        navigate("/",{replace: true});
    }

    const crearNuevaCuenta = (
        <div>
            <p className="tituloCuerpo">¡¡Regístrate!!</p>
            <div className="cuerpo">
                <form className='tamanio' onSubmit={Creacion}>
                    <div className="entradaInfo">
                        <p className='opcionalobligatoria'>Información Obligatoria</p>
                        <hr className="linea-estilo" />
                        <div className='nombres'>
                            <input
                                type="text" 
                                className="input-style1" 
                                placeholder="Nombre. . ."
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}/>
                            <input 
                                type="text" 
                                className="input-style1" 
                                placeholder="Apellido . . ."
                                value={apellido}
                                onChange={(e) => setApellido(e.target.value)}/>
                        </div>
                        <input 
                            type="email" 
                            className="input-style" 
                            placeholder="Correo Institucional IPN . . ."
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}/>
                        <input 
                            type="password" 
                            className="input-style" 
                            placeholder="Contraseña . . ."
                            value={contraInic}
                            onChange={(e) => setContraInic(e.target.value)}/>
                        <input 
                            type="password" 
                            className="input-style" 
                            placeholder="Confirmar contraseña . . ."
                            value={contraConf}
                            onChange={(e) => setContraConf(e.target.value)}/>
                    </div>
                    <div className="entradaInfo">
                        <p className='opcionalobligatoria'>Información Opcional</p>
                        <hr className="linea-estilo" />
                        <input 
                            type="date" 
                            className="input-style" 
                            placeholder="Fecha de nacimiento . . ."
                            value={fechaNacimiento}
                            onChange={(e) => setFechaNacimiento(e.target.value)}/>
                        <div className='nombres'>
                            <input 
                                type="text" 
                                className="input-style1" 
                                placeholder="Plantel. . ."
                                value={plantel}
                                onChange={(e) => setPlantel(e.target.value)}/>
                            <input 
                                type="text" 
                                className="input-style1" 
                                placeholder="Carrera . . ."
                                value={carrera}
                                onChange={(e) => setCarrera(e.target.value)}/>
                        </div>
                        <div className='nombres'>
                            <div className='button-sexo'>
                                <label><input type="radio"
                                value={'mujer'}
                                onClick={() => eleccionSexo("M")}
                                name='sexo'
                                />Mujer</label>
                            </div>
                            <div className='button-sexo'>
                                <label><input type="radio"
                                onClick={() => eleccionSexo("H")}
                                name='sexo'
                                />Hombre</label>
                            </div>
                            <div className='button-sexo'>
                                <label><input type="radio"
                                onClick={() => eleccionSexo("P")}
                                name='sexo'
                                />Personal</label>
                            </div>
                                
                        </div>
                    </div>
                    <button className="buttonCC">Crear Cuenta</button>
                </form>    
                <hr className="lineaBotonCC" />
                <p className='cancelar' onClick={CambioPagina}>Cancelar</p>
            </div>
        </div>
    );

    return(crearNuevaCuenta);
};

export default Crear;