

import { useContext, useState } from 'react';
import { toast } from "react-toastify";
import useCart from "./useCart";
import ItemCart from "./ItemCart";
import { Navigate } from "react-router-dom";
import { contexto } from './cartProvider';

function Cart(props) {

  const valorActual = useContext(contexto);

  const { carrito } = useCart();
  console.log(carrito)


  const [compraRealizada, setCompraRealizada] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name || !email || !phone) {
      console.log(name, email, phone)
      toast.error("Por favor, completa todos los campos.");
      return;
    }
    
    toast.success("Venta realizada!");
    

    setCompraRealizada(true);
  };




  const vaciar = () => {
    props.emptyConfirm(Cart)
}







  if (compraRealizada) {
    return <Navigate to="/" />;
  }

  return (
    <section className="grid grid-cols-1 p-5 gap-4">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-3xl font-sans">Carrito</h1>
        {carrito.map((producto, index) => (
          <ItemCart key={index} producto={producto} />
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col border p-5 justify-center gap-2">
        <input 
          name="name"
          className="border p-2 shadow-md text-center rounded-md"
          type="text"
          placeholder="Escribe un nombre"
        />
        <input
          name="email"
          className="border p-2 shadow-md text-center rounded-md"
          type="email"
          placeholder="Escribe un email"
        />
        <input
          name="phone"
          className="border p-2 shadow-md text-center rounded-md"
          type="tel"
          placeholder="Escribe un teléfono"
        />
        <div className='flex  '>
        <button className='bg-blue-500 font-sans text-white rounded mt-3 mx-5 hover:bg-blue-700 w-24 h-10'>Comprar</button>
        <button className='bg-blue-500 font-sans text-white rounded mt-3 mx-5 hover:bg-blue-700 w-24 h-10' onClick={vaciar}>vaciar cart</button>
        </div>

      </form>
      
      
      
    </section>
  );
}

export default Cart;






