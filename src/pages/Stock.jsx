import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Stock.css';
import '../styles/fontStyle.css';

const Stock = ({ addAsiento, productos, setProductos }) => {
    const navigate = useNavigate();

    const restarProducto = (productId) => {
        setProductos(prevProducts => {
            return prevProducts.map(product => {
                if (product.id === productId && product.cantidad > 0) {
                    addAsiento({
                        nombre: product.nombre,
                        precio: product.precio,
                        tipo: 'Compra' // or 'Resta'
                    });
                    return { ...product, cantidad: product.cantidad - 1 };
                }
                return product;
            });
        });
    };

    const incrementarProducto = (productId) => {
        setProductos(prevProducts => {
            return prevProducts.map(product => {
                if (product.id === productId) {
                    addAsiento({
                        nombre: product.nombre,
                        precio: product.precio,
                        tipo: 'Venta' // transaccion
                    });
                    return { ...product, cantidad: product.cantidad + 1 };
                }
                return product;
            });
        });
    };

    useEffect(() => {
        console.log('Productos actualizados:', productos);
    }, [productos]);

    const handleNavigate = (path) => {
        navigate(path);
    };

    const ProductItem = ({ producto, incrementarProducto, restarProducto }) => {
        return (
            <li className="producto-item">
                <p>Nombre: {producto.nombre}</p>
                <p>Precio: ${producto.precio.toFixed(2)}</p>
                <p>Cantidad: {producto.cantidad}</p>
                <button onClick={() => incrementarProducto(producto.id)}>
                    <i className="fas fa-plus"></i> Agregar
                </button>
                <button onClick={() => restarProducto(producto.id)} hidden={producto.cantidad === 0}>
                    <i className="fas fa-minus"></i> Quitar
                </button>
            </li>
        );
    };

    const ProductList = ({ productos, incrementarProducto, restarProducto }) => {
        return (
            <>
                {productos.map(producto => (
                    <ProductItem
                        key={producto.id}
                        producto={producto}
                        incrementarProducto={incrementarProducto}
                        restarProducto={restarProducto}
                    />
                ))}
            </>
        );
    };

    return (
        <div>
            <button id="volver-button" onClick={() => handleNavigate('/')}>
                <i className="fas fa-arrow-left"></i> Volver a Página Principal
            </button>
            <h1>Stock de Productos</h1>
            <ul>
                <ProductList
                    productos={productos}
                    incrementarProducto={incrementarProducto}
                    restarProducto={restarProducto}
                />
            </ul>
        </div>
    );
};

export default Stock;
