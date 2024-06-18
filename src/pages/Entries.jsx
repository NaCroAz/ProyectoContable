import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Invoices.css';
import '../styles/fontStyle.css';
import '../styles/Entries.css'

const Entries = ({ productos: initialProductos, dinero, setDinero }) => {
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

        producto.cantidad = parseInt(producto.cantidad)
        producto.precio = parseInt(producto.precio)

        if (tipo === 'Debe' && producto.cantidad >= 0 && dinero > producto.precio) {
            producto.cantidad += 1;
            setDinero(dinero - producto.precio);
        } else if (tipo === 'Haber' && producto.cantidad > 0) {
            producto.cantidad -= 1;
            setDinero(dinero + producto.precio);
        } else if (tipo === 'Haber' && producto.cantidad == 0) {
                alert('No hay Stock');
                return;
        } else if (dinero < producto.precio) {
            alert('No hay Dinero');
            return;
        }

        const asiento = {
            tipo,
            producto: producto.nombre,
            cantidad: producto.cantidad,
            precio: producto.precio,
            fecha: new Date().toLocaleDateString()
        };

        //! Solo aparecen por consola de Browser
        console.log(asiento)
        console.log(asientos)
        //! Solo aparecen por consola de Browser

        addAsiento(asiento);
        setProductos(updatedProductos);
    };

    const AsientosList = ({ productos }) => {
        return (
            <>
                {productos.map(producto => (
                    <li key={producto.id}>
                        <div className='producto'>
                            {producto.nombre}   Precio:${producto.precio}   Cantidad: {parseInt(producto.cantidad)}
                        </div>
                        <div className='votones'>
                            <button onClick={() => generarAsiento('Debe', producto.id)}>Compras</button>
                            <button onClick={() => generarAsiento('Haber', producto.id)}>Ventas</button>
                        </div>

                    </li>
                ))}
            </>
        );
    };

    const AsientosCreados = ({ asientos }) => {
        return (
            <ul className='ulSele' id='asientosCreados'>
                {asientos.map((asiento, index) => (
                    <li key={index}>
                        {asiento.fecha} - {asiento.producto}, Cantidad: 1, Precio: ${asiento.precio}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div>
            <button id="volver-button" onClick={() => handleNavigate('/')}>
                <i className="fas fa-arrow-left"></i> Volver a Página Principal
            </button>
            <h1>Dinero actual de la empresa : $ {dinero}</h1>
            <h1>Inventario</h1>
            <div style={{ display: 'flex', width: '100%' }}>
                <div style={{ flex: 1 }}>
                    <h2 className='detalles'>Listado de Productos</h2>
                    <ul className='ulSele'>
                        <AsientosList productos={productos} addAsiento={addAsiento} />
                    </ul>
                </div>
                <div style={{ flex: 1, overflow: 'auto' }}>
                    <h2 className='detalles'>Asientos Creados</h2>
                    <AsientosCreados asientos={asientos} />
                </div>
            </div>
        </div>
    );
};

export default Entries;
