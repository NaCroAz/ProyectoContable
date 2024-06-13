import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Stock.css'

const Stock = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div>
            <button onClick={() => handleNavigate('/')}>Volver a Pagina Principal</button>
            <h1>Stock de Productos</h1>
            <p>#Contenido a agregar#</p>
        </div>
    )
}

export default Stock