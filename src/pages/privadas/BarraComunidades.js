import React from 'react';
import './aparienciaPrivada.css';
import { useNavigate } from 'react-router-dom';

const BotonesComunidades = () => {

    const navigate = useNavigate();

    const Acto = (boton) => {
        switch (boton) {
            default:
                navigate("/comunidades",{replace: true});
                break;
            case 'S':
                navigate("/comunidadesSugerencias",{replace: true});
                break;
        }
    };

    const basebarra = (
        <div className="panelBotones">
            <button className="contenedorOpcionesSELEC" onClick={() => Acto('P')}>
                <div>Tus Grupos</div>
            </button>
            <button className="contenedorOpcionesSELEC"  onClick={() => Acto('S')}>
                <div>Sugerencias</div>
            </button>
        </div>);

    return(basebarra);
};

export default BotonesComunidades;