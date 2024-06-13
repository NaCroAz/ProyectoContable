import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Entries.css'
import '../styles/fontStyle.css'

const Entries = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <>
            <div>
                <button onClick={() => handleNavigate('/')}>Volver a Pagina Principal</button>
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1 }}>
                    <h2>Asientos - Moldes</h2>
                    <p>#Contenido a agregar#</p>
                </div>
                <div style={{ flex: 1 }}>
                    <h2>Libro Diario</h2>
                    <p>#Contenido a agregar#</p>
                </div>
            </div>
        </>
    )
}

export default Entries