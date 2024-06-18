import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Entries from './pages/Entries'
import Invoices from './pages/Invoices'
import Stock from './pages/Stock'

const Rutas = () => {

    const [asientos, setAsientos] = useState([]);
    const addAsiento = (asiento) => {
        setAsientos(prevAsientos => [...prevAsientos, asiento])
    }

    const[control, setControl] = useState([
        {id:1, fecha: new Date().toLocaleDateString(), concepto: "compra de mercancía" ,valor: 10000, tipo: 'Egreso', newDinero: 10000}
    ])

    const [productos, setProductos] = useState([
        { id: 1, nombre: 'Chaqueta de Cuero "Urban Rider"', precio: 10, cantidad: 100 },
        { id: 2, nombre: 'Vestido Floral "Primavera Encantada"', precio: 20, cantidad: 50 },
        { id: 3, nombre: 'Pantalones Vaqueros "Eclipse Denim"', precio: 15, cantidad: 75 },
        { id: 4, nombre: 'Camisa de Lino "Briza Costera"', precio: 8, cantidad: 120 },
        { id: 5, nombre: 'Falda Plisada "Brisa de Verano"', precio: 12, cantidad: 90 },
        { id: 6, nombre: 'Jersey de Punto "Noche Estrellada"', precio: 30, cantidad: 5 },
        { id: 7, nombre: 'Abrigo de Lana "Aurora Boreal"', precio: 25, cantidad: 60 },
        { id: 8, nombre: 'Blusa de Seda "Mariposa Azul"', precio: 17, cantidad: 80 },
        { id: 9, nombre: 'Pantalones Chinos "Travesía Urbana"', precio: 22, cantidad: 45 },
        { id: 10, nombre: 'Vestido de Noche "Luz de Luna"', precio: 19, cantidad: 70 }
    ])

    //* El valor por defecto es 10000.00, esta declarado asi por que es la suma de todos los productos
    //* y el testeo de las alertas
    const [dinero, setDinero] = useState(10000)

    return (
        <Router>
            <Routes>
                <Route path="*" element={<Home />} />
                <Route path="/entries" element={<Entries asientos={asientos} productos={productos} setDinero={setDinero} dinero={dinero}/>} />
                <Route path="/invoices" element={<Invoices control={control} setControl={setControl} setDinero={setDinero} dinero={dinero}/>} />
                <Route path="/stock" element={<Stock addAsiento={addAsiento} productos={productos} setProductos={setProductos}/>}/>
            </Routes>
        </Router>
    )
}

export default Rutas