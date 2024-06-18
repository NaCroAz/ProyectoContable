import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Invoices.css';
import '../styles/fontStyle.css';

const Invoices = ({ dinero, setDinero, control, setControl }) => {
    const navigate = useNavigate();
    const [newOperacion, setNewOperacion] = useState({ concepto: '', valor: '', tipo: true, dinero: ''});

    const handleNavigate = (path) => {
        navigate(path);
    };

    const handleCambioInput = (e) => {
        const { name, value } = e.target;
        setNewOperacion(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        
        // Validación de la operación
        if (newOperacion.concepto === '' || newOperacion.valor <= 0) {
            alert('Operación no válida');
            return; // Detener la ejecución si la operación no es válida
        }
    
        const tipoOperacion = newOperacion.tipo ? 'ingresos' : 'egresos';
    
        const nuevaOperacion = {
            id: newOperacion.id,
            concepto: newOperacion.concepto,
            valor: parseFloat(newOperacion.valor),
            tipo: tipoOperacion,
            fecha: new Date().toLocaleDateString(),
            newDinero: tipoOperacion === 'ingresos' ? (dinero + parseInt(newOperacion.valor)): (dinero - parseInt(newOperacion.valor))
        };
    
        // Actualización del dinero actualsegún el tipo de operación


        if (tipoOperacion === 'ingresos') {
            setDinero(prevDinero2 => prevDinero2 + nuevaOperacion.valor);
        } else if (tipoOperacion === 'egresos') {
            setDinero(prevDinero2 => prevDinero2 - nuevaOperacion.valor);
        }
    
        // Agregar la nueva operación al control
        agregarOperacion(nuevaOperacion);
    
        // Limpiar el formulario después de agregar la operación
        setNewOperacion({ concepto: '', valor: '', tipo: true });
    };
    
    const handleTipoTransaccionChange = (e) => {
        const { value } = e.target;
        setNewOperacion(prev => ({
            ...prev,
            tipo: value === 'true'
        }));
    };

    const agregarOperacion = (nuevaOperacion) => {
        setControl(prevOperaciones => {
            return [...prevOperaciones, { ...nuevaOperacion, id: prevOperaciones.length + 1 }];
        });
    };

    return (
        <div>
            <button id="volver-button" onClick={() => handleNavigate('/')}>
                <i className="fas fa-arrow-left"></i> Volver a Página Principal
            </button>
            <h1>Control de Ingresos y Egresos</h1>
            <h2>Dinero actual de la empresa: $ {dinero}</h2>

            <form onSubmit={handleSubmit} className="product-form">
                <input type='text' name='concepto' value={newOperacion.concepto} onChange={handleCambioInput} placeholder='Concepto' />
                <input type='text' name='valor' value={newOperacion.valor} onChange={handleCambioInput} placeholder='Valor' />
                <label htmlFor="tipoTransaccion">Tipo de Transacción:</label>
                <select id="tipoTransaccion" name="tipo" value={newOperacion.tipo} onChange={handleTipoTransaccionChange}>
                    <option value={true}>Ingresos</option>
                    <option value={false}>Egresos</option>
                </select>
                <button type='submit' className="product-button">Agregar Operación</button>
            </form>

            <div className="operaciones-list">
                {control.map(operacion => (
                    <div key={operacion.id} className="operacion-item">
                        <p>Fecha: {operacion.fecha} - Concepto: {operacion.concepto} - Valor: ${operacion.valor} - Tipo: {operacion.tipo} - Saldo: ${operacion.newDinero}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Invoices;

