import './aparienciaPublica.css';

const EncabezadoPublico = () => {
    const verImg = {
        height: '150px',
        padding: '10px',
    };

    const cabeza = (
        <div className="cabecera">
            <img src={`${process.env.PUBLIC_URL}/logoPW.png`} alt='IPN' style={verImg}></img>
            <div className="estiloTitulo">IP_Net</div>
        </div>
    );
    return(cabeza);
};

export default EncabezadoPublico;

