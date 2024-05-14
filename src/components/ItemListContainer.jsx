
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getProducts, getProductsFromCategories } from "../utils";




function ItemListContainer() {
    const [productos, setProductos] = useState([]);

    const params = useParams();

    useEffect(() => {
        
        if(params.categoryId) {
            getProductsFromCategories(params.categoryId)
            .then((res)=>{
                setProductos(res)
            })

        } else {
            getProducts()
            .then((res)=>{
                setProductos(res)
            })
        }


    }, [params.categoryId])

    

   
    return (
        <div className="item-list-container p-5">
            <ItemList items={productos} />
        </div>
    );
}

export default ItemListContainer;

