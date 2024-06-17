import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Invoices.css'
import '../styles/fontStyle.css'

const Invoices = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div>
            <button id="volver-button" onClick={() => handleNavigate('/')}>
                <i className="fas fa-arrow-left"></i> Volver a Página Principal
            </button>
            <h1>Creacion de Facturas</h1>
            <p>#Contenido a agregar#</p>
        </div>
    )
}

export default Invoices