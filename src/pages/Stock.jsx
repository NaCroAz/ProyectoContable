import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Stock.css';
import '../styles/fontStyle.css';

const Stock = ({ addAsiento, productos, setProductos }) => {
    const navigate = useNavigate();
    const [newProduct, setNewProduct] = useState({ nombre: '', precio: '', cantidad: parseInt('') });

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
                    return { ...product, cantidad : parseInt(product.cantidad) + 1 };
                }
                return product;
            });
        });
    };


    const handleCambioInput = (e) => {
        const { name, value } = e.target;
        setNewProduct(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        agregarProducto(newProduct);
        setNewProduct({ nombre: '', precio: '', cantidad: parseInt('') }); // Reset form
    };

    const agregarProducto = (nuevoProducto) => {
        setProductos(prevProducts => {
            return [...prevProducts, { ...nuevoProducto, id: prevProducts.length + 1 }];
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
                <p>Precio: ${producto.precio}</p>
                <p>Cantidad: {producto.cantidad}</p>
                <button onClick={() => incrementarProducto(producto.id)}>
                    <i className="fas fa-plus"></i> Agregar
                </button>
                <button onClick={() => restarProducto(producto.id)} hidden={parseInt(producto.cantidad) === 0}>
                    <i className="fas fa-minus"></i> Quitar
                </button>
            </li>
        );
    };

    const ProductList = ({ productos, incrementarProducto, restarProducto, agregarProducto }) => {
        return (
            <>
                {productos.map(producto => (
                    <ProductItem
                        key={producto.id}
                        producto={producto}
                        incrementarProducto={incrementarProducto}
                        restarProducto={restarProducto}
                        agregarProducto={agregarProducto}
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
            <details className='product-formContainer'>
                <summary>Agregar Producto</summary>
                <form onSubmit={handleSubmit} className="product-form">
                    <input type='text' name='nombre' value={newProduct.nombre} onChange={handleCambioInput} placeholder='Nombre' />
                    <input type='number' name='precio' value={parseInt(newProduct.precio)} onChange={handleCambioInput} placeholder='Precio' />
                    <input type='number' name='cantidad' value={parseInt(newProduct.cantidad)} onChange={handleCambioInput} placeholder='Cantidad' />
                    <button type='submit' className="product-button">Agregar Producto</button>
                </form>
            </details>
            <ul className="lista-productos">
                <ProductList
                    productos={productos}
                    incrementarProducto={incrementarProducto}
                    restarProducto={restarProducto}
                    agregarProducto={agregarProducto}
                />
            </ul>
        </div>
    );
};

export default Stock;
