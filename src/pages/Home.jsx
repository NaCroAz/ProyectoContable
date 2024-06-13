import React from 'react'
import { Routes } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Pagina Principal</h1>
            <div>
                <button><Routes to="/invoices">Crear Facturas</Routes></button>
                <button><Routes to="/entries">Asientos y Libro Diario</Routes></button>
                <button><Routes to="/stock">Stock de Productos</Routes></button>
            </div>
        </div>
    )
}

export default Home