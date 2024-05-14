import React from "react";
import ItemCount from "./itemCount";

function ItemDetail({ product }) {
  return (

    <section className="flex flex-col items-center shadow-lg p-5 mr-5 gap-4">
    <div className="item-detail">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <h2>Precio: ${product.price}</h2>
      <h2>Stock: {product.stock}</h2>
    </div>
     <div className="inset-x-0"><ItemCount/> </div>
     </section> 
    

     
    
    
  );
}

export default ItemDetail;
