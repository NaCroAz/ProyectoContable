import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

//* Estilos
import '../styles/Stock.css'
import '../styles/fontStyle.css'

const Stock = ({ addAsiento, productos, setProductos}) => {
    const navigate = useNavigate()
    
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

    // Navegador de direcciones
    const handleNavigate = (path) => {
        navigate(path);
    };


    const ProductItem = ({ producto, incrementarProducto, restarProducto }) => {
        return (
            <>
                <li>
                    Nombre: {producto.nombre}, Precio: ${producto.precio.toFixed(2)}, Cantidad: {producto.cantidad}
                    <button onClick={() => incrementarProducto(producto.id)}>Vender</button>
                    <button onClick={() => restarProducto(producto.id)} hidden={producto.cantidad === 0}>Comprar</button>
                </li>
            </>
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
            <button onClick={() => handleNavigate('/')}>Volver a Pagina Principal</button>
            <h1>Stock de Productos</h1>
            <p>#Contenido a agregarr#</p>
            <ul>
                <ProductList
                    productos={productos}
                    incrementarProducto={incrementarProducto}
                    restarProducto={restarProducto}
                />
            </ul>
        </div>
    )
}

export default Stock