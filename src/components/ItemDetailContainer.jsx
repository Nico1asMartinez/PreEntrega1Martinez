import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import { getProductDetail } from "../utils";

function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {


    getProductDetail(id)
      .then((res) => {
        setProduct(res)
      })
      
  

  }, []);

  return (
    <div className="item-detail-container">
      {product ? <ItemDetail product={product} /> : <p>Cargando...</p>}
    </div>
  );
}

export default ItemDetailContainer;
