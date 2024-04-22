import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import data from "../data.json";
import { Link } from "react-router-dom";
import { Button } from "antd";

function ItemListContainer() {
    const { categoryId } = useParams(); 
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const promesa = new Promise((res) => {
            setTimeout(() => {
                res(data);
            }, 1000);
        });

        promesa.then((res) => {
            
            if (categoryId) {
                
                const productosFiltrados = res.filter(producto => producto.category === categoryId);
                setProductos(productosFiltrados);
            } else {
                setProductos(res);
            }
        });
    }, [categoryId]); 

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 grow">
            
        {productos.map((producto) => (
            
        <div key={producto.id} className="bg-white shadow-md rounded p-4 flex flex-col justify-between">
        <h2 className="text-lg font-bold mb-2">{producto.name}</h2>
        <img src={producto.image} alt={producto.name} className="w-full mb-2" />
        <Link to={`/item/${producto.id}`}>
            <Button>Ver detalles</Button>
        </Link>
        </div>
        
    ))}
    
    </section>
    );
}

export default ItemListContainer;








