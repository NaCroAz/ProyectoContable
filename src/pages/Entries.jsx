import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Invoices.css';
import '../styles/fontStyle.css';

const Entries = ({ productos: initialProductos , dinero, setDinero}) => {
    const navigate = useNavigate();
    const [asientos, setAsientos] = useState([]);
    const [productos, setProductos] = useState(initialProductos);

    const handleNavigate = (path) => {
        navigate(path);
    };

    const addAsiento = (asiento) => {
        setAsientos(prevAsientos => [...prevAsientos, asiento]);
    };

    const generarAsiento = (tipo, productoId) => {
        const productoIndex = productos.findIndex(p => p.id === productoId);
        if (productoIndex === -1) return;

        const updatedProductos = [...productos];
        const producto = updatedProductos[productoIndex];

        if (tipo === 'Debe' && producto.cantidad > 0 && dinero > producto.precio) {
            producto.cantidad -= 1;
            setDinero(dinero - producto.precio);
        } else if (tipo === 'Haber' && producto.cantidad >= 0) {
            producto.cantidad += 1;
            setDinero(dinero + producto.precio);
        } else if (tipo === 'Debe' && producto.cantidad === 0) {
            alert('No hay Stock')
            return;
        } else if (dinero < producto.precio) {
            alert('No hay Dinero')
            return;
        }

        const asiento = {
            tipo,
            producto: producto.nombre,
            cantidad: producto.cantidad,
            precio: producto.precio,
            fecha: new Date().toLocaleString()
        };
        
        setProductos(updatedProductos);
        addAsiento(asiento);
    };

    const AsientosList = ({ productos }) => {
        return (
            <>
                {productos.map(producto => (
                    <li key={producto.id}>
                        {producto.nombre} - ${producto.precio.toFixed(2)} - Cantidad: {producto.cantidad}
                        <button onClick={() => generarAsiento('Debe', producto.id)}>Agregar Debe</button>
                        <button onClick={() => generarAsiento('Haber', producto.id)}>Agregar Haber</button>
                    </li>
                ))}
            </>
        );
    };

    return (
        <div>
            <button id="volver-button" onClick={() => handleNavigate('/')}>
                <i className="fas fa-arrow-left"></i> Volver a Página Principal
            </button>
            <h1>Asiendas - Moldes</h1>
            <h2>Asientos:</h2>
            <ul>
                <AsientosList productos={productos} addAsiento={addAsiento} />
            </ul>
            <h2>Lista de Asientos Generados:</h2>
            <h1>$ {dinero.toFixed(2)}</h1>
            <ul>
                {asientos.map((asiento, index) => (
                    <li key={index}>
                        {asiento.fecha} - {asiento.tipo}: {asiento.producto}, Cantidad: 1 ({asiento.cantidad}), Precio: ${asiento.precio.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Entries;
