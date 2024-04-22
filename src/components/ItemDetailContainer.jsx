import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";

function ItemDetailContainer() {
    const { id } = useParams(); // Obtén el parámetro de ID del producto
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        // Encuentra el producto correspondiente al ID proporcionado
        const productoEncontrado = data.find(item => item.id === parseInt(id));
        setProducto(productoEncontrado);
    }, [id]);

    if (!producto) {
        return <div>Cargando...</div>;
    }

    return (
        <section className="grow flex items-center justify-center">

        <div className="bg-white shadow-md w-1/2 rounded p-10 flex flex-col items-center  ">
            <h2 className="text-lg font-bold mb-2">{producto.name}</h2>
            <img  src={producto.image} alt={producto.name} className="w-full mb-2" />
            <p className="text-gray-700 mb-2">{producto.description}</p>
            <p className="text-gray-700">Precio: ${producto.price}</p>
            <p className="text-gray-700">Stock: {producto.stock}</p>
        </div>
        </section>
    );
}

export default ItemDetailContainer;

