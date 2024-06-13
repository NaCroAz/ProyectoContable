import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css'

const Home = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div>
            <h1>Pagina Principal</h1>
            <div className='botones'>
                <button onClick={() => handleNavigate('/invoices')}>Crear Facturas</button>
                <button onClick={() => handleNavigate('/entries')}>Asientos y Libro Diario</button>
                <button onClick={() => handleNavigate('/stock')}>Stock de Productos</button>
            </div>
        </div>
    );
}

export default Home;
