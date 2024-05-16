import { useContext, useState } from "react";
import ItemCount from "./itemCount";
import Input from "./Input";
import { contexto } from "./cartProvider";
import { toast } from "react-toastify";

function ItemDetail({ product }) {

  const valorActual = useContext(contexto);

  const [confirmado, setConfirmado] = useState(false);

  const [cant, setCant] = useState(0);


  const onConfirm = (cantidadConfirmada) => {
    console.log("agregando al carrito")
    console.log("la cantidad confirmada es: ", cantidadConfirmada)
    setCant(cantidadConfirmada)
    setConfirmado(true)
  }

  const handleConfirm = (itemCount) => {
    valorActual.agregarAlCarrito(itemCount, product)
    toast.success ("se agrego correctamente al carrito!")
    
  }




  return (

    <section className="flex flex-col items-center shadow-lg p-5 mr-5 gap-4">
      <div className="item-detail flex flex-col items-center">
      <h1>{product.name}</h1>
      <img className="w-1/2 " src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <h2>Precio: ${product.price}</h2>
      <h2>Stock: {product.stock}</h2>
    </div>
    <div className="">
        { confirmado ? <input className=" border p-2 shadow-md text-center rounded-md" /> :  <ItemCount handleConfirm={handleConfirm}
        onConfirm={onConfirm} /> } 
    </div>
    </section> 
    

    
    
  );
}

export default ItemDetail;




    