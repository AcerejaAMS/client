import './aparienciaPublica.css';

const Ingresar = () => {

    const iniciarSesion = (
        <div>
            <p className="tituloCuerpo">Iniciar sesión</p>
            <div className="cuerpo">
                <div className="entradaInfo">
                    <form className='tamanio'>
                        <input
                            type="text " 
                            className="input-style" 
                            placeholder="Correo electrónico . . ."/>
                        <input
                            type="password" 
                            className="input-style" 
                            placeholder="Contraseña . . ."/>
                        <button className="button-styleIS">Ingresar</button>
                    </form>
                    <p className='contrasenaOlvidadada'>¿Olvidaste la Contraseña?</p>
                    <hr className="linea-estilo" />
                    <button className="button-styleCC">Crear Cuenta Nueva</button>
                    
                </div>
            </div>
        </div>
    );
    return(iniciarSesion);
};

export default Ingresar;
