import React from 'react';
import './aparienciaPrivada.css';
import Swal from 'sweetalert2'

const Barra = () => {
    const Notificaciones = () =>{
        Swal.fire({
            title: 'Notificaciones',
            width: '500px',
          });
    }

    const Salir = () =>{
        Swal.fire({
            title: 'Cerrar Sesión',
            text: '¿Desea salir de IP_Net?',
            showCancelButton: true,
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#0084B4',
            cancelButtonText: 'Cancelar',
            cancelButtonColor: '#CC0033',
            width: '400px',
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'http://localhost:3000/';
            }
        });
    }

    const basebarra = (
        <header>
            <div className="logo">
                <img src="logoPW.png" alt='Logo'/>
                <div className="busquedaContenedor">
                    <input type="text" className="busquedaEntrada" placeholder="Buscar en IP_Net . . ."/>
                </div>
            </div>
            <div>
                <button className='botonesHerramientas' onClick={Notificaciones}>
                    <i className="fa-solid fa-bell"></i>
                </button>
                <button className='botonesHerramientas'>
                    <i className="fa-solid fa-message"></i>
                </button>
                <button className='botonesHerramientas' onClick={Salir}>
                    <i className="fa-solid fa-gear"></i>
                </button>
            </div>
        </header>);
    return(basebarra);
};

export default Barra;