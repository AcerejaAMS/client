import React from 'react';
import './aparienciaPrivada.css';

const BarraIzq = () => {
    const Acto = (boton) => {
        switch (boton) {
            default:
                window.location.href = 'http://localhost:3000/perfil';
                break;
            case 'PP':
                window.location.href = 'http://localhost:3000/principal';
                break;
            case 'CT':
                window.location.href = 'http://localhost:3000/comunidades';
                break;
            case 'AF':
                window.location.href = 'http://localhost:3000/amigos';
                break;
            case 'NW':
                window.location.href = 'http://localhost:3000/noticias';
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