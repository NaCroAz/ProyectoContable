import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import Home from './pages/Home'
import Entries from './pages/Entries'
import Invoices from './pages/Invoices'
import Stock from './pages/Stock'

const Rutas = () => {

    const [asientos, setAsientos] = useState([]);
    const addAsiento = (asiento) => {
        setAsientos(prevAsientos => [...prevAsientos, asiento])
    }

    const [productos, setProductos] = useState([
        { id: 1, nombre: 'Producto 1', precio: 10.99, cantidad: 100 },
        { id: 2, nombre: 'Producto 2', precio: 20.49, cantidad: 50 },
        { id: 3, nombre: 'Producto 3', precio: 15.99, cantidad: 75 },
        { id: 4, nombre: 'Producto 4', precio: 8.50, cantidad: 120 },
        { id: 5, nombre: 'Producto 5', precio: 12.75, cantidad: 90 },
        { id: 6, nombre: 'Producto 6', precio: 30.00, cantidad: 30 },
        { id: 7, nombre: 'Producto 7', precio: 25.99, cantidad: 60 },
        { id: 8, nombre: 'Producto 8', precio: 17.25, cantidad: 80 },
        { id: 9, nombre: 'Producto 9', precio: 22.49, cantidad: 45 },
        { id: 10, nombre: 'Producto 10', precio: 19.99, cantidad: 70 }
    ])

    return (
        <Router>
            <Routes>
                <Route path="*" element={<Home />} />
                <Route path="/entries" element={<Entries asientos={asientos} productos={productos}/>} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/stock" element={<Stock addAsiento={addAsiento} productos={productos} setProductos={setProductos}/>}/>

            </Routes>
        </Router>
    )
}

export default Rutas