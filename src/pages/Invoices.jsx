import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Invoices.css'

const Invoices = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div>
            <button onClick={() => handleNavigate('/')}>Volver a Pagina Principal</button>
            <h1>Creacion de Facturas</h1>
            <p>#Contenido a agregar#</p>
        </div>
    )
}

export default Invoices