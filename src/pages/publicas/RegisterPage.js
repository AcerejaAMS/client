import './aparienciaPublica.css';
import {useForm} from 'react-hook-form';
import { useAuth } from '../../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Crear = () => {

    const {register, handleSubmit} = useForm();
    const {signup, isAuthenticed} = useAuth();
    const navigate = useNavigate();

    useEffect(() =>{
        if(isAuthenticed) navigate("/")
    }, [isAuthenticed])

    const onSubmit = handleSubmit(async(values) =>{
        signup(values);
    });

    const crearNuevaCuenta = (
        <div>
            <p className="tituloCuerpo">¡¡Regístrate!!</p>
            <div className="cuerpo">
                <form className='tamanio' onSubmit={onSubmit}>
                    <div className="entradaInfo">
                        <p className='opcionalobligatoria'>Información Obligatoria</p>
                        <hr className="linea-estilo" />
                        <div className='nombres'>
                            <input
                                type="text" 
                                className="input-style1" 
                                placeholder="Nombre. . ."
                                {...register('nombre', {required:true})}/>
                            <input 
                                type="text" 
                                className="input-style1" 
                                placeholder="Apellido . . ."
                                {...register('apellido', {required:true})}/>
                        </div>
                        <input 
                            type="text" 
                            className="input-style" 
                            placeholder="Correo Institucional IPN . . ."
                            {...register('correo', {required:true})}/>
                        <input 
                            type="password" 
                            className="input-style" 
                            placeholder="Contraseña . . ."
                            {...register('contrasenaInicial', {required:true})}/>
                        <input 
                            type="password" 
                            className="input-style" 
                            placeholder="Confirmar contraseña . . ."
                            {...register('contrasenaConfirmacion', {required:true})}/>
                    </div>
                    <div className="entradaInfo">
                        <p className='opcionalobligatoria'>Información Opcional</p>
                        <hr className="linea-estilo" />
                        <input 
                            type="date" 
                            className="input-style" 
                            placeholder="Fecha de nacimiento . . ."
                            {...register('fechaNacimiento', {required:false})}/>
                        <div className='nombres'>
                            <input 
                                type="text" 
                                className="input-style1" 
                                placeholder="Plantel. . ."
                                {...register('plantel', {required:false})}/>
                            <input 
                                type="text" 
                                className="input-style1" 
                                placeholder="Carrera . . ."
                                {...register('carrera',{required:false})}/>
                        </div>
                        <div className='nombres'>
                            <div className='button-sexo'>
                                <label><input type="radio"
                                value={'mujer'}
                                {...register('sexo', {required:false})}
                                name='sexo'
                                />Mujer</label>
                            </div>
                            <div className='button-sexo'>
                                <label><input type="radio"
                                value={'hombre'}
                                {...register('sexo', {required:false})}
                                name='sexo'
                                />Hombre</label>
                            </div>
                            <div className='button-sexo'>
                                <label><input type="radio"
                                value={'personal'}
                                {...register('sexo', {required:false})}
                                name='sexo'
                                />Personal</label>
                            </div>
                                
                        </div>
                    </div>
                    <button className="buttonCC" type="submit">Crear Cuenta</button>
                </form>    
                <hr className="lineaBotonCC" />
                <p className='cancelar'>Cancelar</p>
            </div>
        </div>
    );

    return(crearNuevaCuenta);
};

export default Crear;