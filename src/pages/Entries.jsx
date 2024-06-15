import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Invoices.css';
import '../styles/fontStyle.css';

const Entries = ({ productos }) => {
    const navigate = useNavigate();
    const [asientos, setAsientos] = useState([]);

    const handleNavigate = (path) => {
        navigate(path);
    };

    const addAsiento = (asiento) => {
        setAsientos(prevAsientos => [...prevAsientos, asiento]);
    };

    const generarAsiento = (tipo, producto) => {
        const asiento = {
            tipo,
            producto: producto.nombre,
            cantidad: producto.cantidad, /* ESTO CONFIRMA QUE EL VALOR DEL STOCK SE ACTUALIZA CORRECTAMENTE modificar a valor 1 cuando se solucione */
            precio: producto.precio,
            fecha: new Date().toLocaleString()
        };
        addAsiento(asiento);
    };

    const AsientosList = ({ productos }) => {
        return (
            <>
                {productos.map(producto => (
                    <li key={producto.id}>
                        {producto.nombre} - ${producto.precio.toFixed(2)}
                        <button onClick={() => generarAsiento('Debe', producto)}>Agregar Debe</button>
                        <button onClick={() => generarAsiento('Haber', producto)}>Agregar Haber</button>
                    </li>
                ))}
            </>
        );
    };

    return (
        <div>
            <button onClick={() => handleNavigate('/')}>Volver a Pagina Principal</button>
            <h1>Creación de Facturas</h1>
            <p>#Contenido a agregar#</p>
            <h2>Asientos:</h2>
            <ul>
                <AsientosList productos={productos} addAsiento={addAsiento}/>
            </ul>
            <h2>Lista de Asientos Generados:</h2>
            <ul>
                {asientos.map((asiento, index) => (
                    <li key={index}>
                        {asiento.fecha} - {asiento.tipo}: {asiento.producto}, Cantidad: {asiento.cantidad}, Precio: ${asiento.precio.toFixed(2)}
                    </li>
                ))}
            </ul>
            </div>
    );
};

export default Entries;
