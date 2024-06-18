import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import '../styles/fontStyle.css';
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'

const Home = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div>
            <h1>Pagina Principal</h1>
            <div className="boton-contenedor">
                <button className='ingreso botones' onClick={() => handleNavigate('/invoices')}>
                    <img src={img1} />
                    <b>Ingresos y Egresos</b>
                </button>
                <button className='asientos botones' onClick={() => handleNavigate('/entries')}>
                    <img  src={img2}/>
                    <b>Inventario</b>
                </button>
                <button className='stock botones' onClick={() => handleNavigate('/stock')}>
                    <img src={img3} />
                    <b>Stock de Productos</b>
                </button>
            </div>

        </div>
    );
}

export default Home;