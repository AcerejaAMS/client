import './aparienciaPublica.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';


const Loading = () => {
    const navigate = useNavigate();
    const {isAuthenticated} = useAuth();

    useEffect(() => {
            navigate("/principal");
    },[]);

    const cabeza = (
        <div>
            Cargando...
        </div>
    );
    return(cabeza);
};

export default Loading;

