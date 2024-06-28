import React, { useEffect  } from 'react';
import './aparienciaPrivada.css';
import { useComunitys } from '../../context/ComunityContext';
import { useAuth } from '../../context/AuthContext';
import { deleteComunityRequest } from '../../api/comunity';

const GrupoComunidad = () => {
    const { comunitys, getComunity, deleteComunity} = useComunitys();
    const { user } = useAuth();

    useEffect(() => {
        getComunity();
    }, [getComunity]);

    const salirOdestruir = (comunidad) =>{

        console.log(comunidad._id)

        if(comunidad.administrador === user.id){
            deleteComunityRequest(comunidad._id)
        }else{
            console.log("hola")
        }

    }


    return (
        <div className='comunidadGlobal'>
            {comunitys.map((comunidad) => (
                <div className='formacomunidad' key={comunidad.id}>
                    <div>
                        <p className='estiloAutorCom'>{comunidad.nombre_comunidad}</p>
                        <p className='estiloInformacionCom' >{comunidad.descripcion}</p>
                    </div>
                    <button className='botonSalirComunidad' onClick={() => salirOdestruir(comunidad)}>Salir</button>
                </div>
            ))}
        </div>
    );
};

export default GrupoComunidad;