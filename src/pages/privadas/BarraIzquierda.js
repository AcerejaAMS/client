import React from 'react';
import './aparienciaPrivada.css';
import { useNavigate } from 'react-router-dom';

const BarraIzq = () => {

    const navigate = useNavigate();

    const Acto = (boton) => {
        switch (boton) {
            default:
                navigate("/perfil",{replace: true});
                break;
            case 'PP':
                navigate("/principal",{replace: true});
                break;
            case 'CT':
                navigate("/comunidades",{replace: true});
                break;
            case 'AF':
                navigate("/amigos",{replace: true});
                break;
            case 'NW':
                navigate("/noticias",{replace: true});
                break;
        }
    };

    const basebarra = (
        <div className="panelIzquierdo">
            <button className="contenedorOpcionesRS" onClick={() => Acto('MP')}>
                <i className="fa-solid fa-user"></i>
                <div>Perfil</div>
            </button>
            <button className="contenedorOpcionesRS"  onClick={() => Acto('PP')}>
                <i className="fa-solid fa-house"></i>
                <div>Principal</div>
            </button>
            <button className="contenedorOpcionesRS"  onClick={() => Acto("CT")}>
                <i className="fa-solid fa-users"></i>
                <div>Comunidades</div>
            </button>
            <button className="contenedorOpcionesRS"  onClick={() => Acto("AF")}>
                <i className="fa-solid fa-address-book"></i>
                <div>Amigos</div>
            </button>
            <button className="contenedorOpcionesRS" onClick={() => Acto("NW")}>
                <i className="fa-solid fa-newspaper"></i>
                <div>Noticias</div>
            </button>
        </div>);

    return(basebarra);
};

export default BarraIzq;