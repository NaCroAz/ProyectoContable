import React from 'react'
import { Routes } from 'react-router-dom'

const Entries = () => {
    return (
        <>
            <div>
                <button><Routes to="/"></Routes>Volver a Pagina Principal</button>
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