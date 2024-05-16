import { useContext } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { contexto } from "./cartProvider";

function Item({ item }) {


    return (
        <div className="item flex flex-col items-center shadow-lg p-5 mr-5 gap-4 " >
            <h3 className="text-3xl font-sans border-b border-black ">{item.name}</h3>
            <img src={item.image} alt={item.name} className="w-1/2" />
            <div className="flex justify-between mt-4">
                <Link to={`/item/${item.id}`}>
                    <Button type="primary" className="bg-blue-500 mr-2">Ver detalle</Button>
                </Link>
            </div>
        </div>
    );
}

export default Item;

