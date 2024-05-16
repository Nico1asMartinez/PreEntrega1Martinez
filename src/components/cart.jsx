
import React, { useState } from 'react';
import { toast } from "react-toastify";
import useCart from "./useCart";
import ItemCart from "./ItemCart";
import { Navigate } from "react-router-dom";

function Cart(props) {
  const { carrito } = useCart();
  const [compraRealizada, setCompraRealizada] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    
    if (!name || !email || !phone) {
      toast.error("Por favor, completa todos los campos.");
      return;
    }
    
    toast("Venta terminada");
    

    setCompraRealizada(true);
  };

  const vaciarCarrito = () => {
    toast.error("Se vació el carrito!");
  };

  if (compraRealizada) {
    return <Navigate to="/" />;
  }


  const vaciar = () => {
    props.emptyConfirm(Cart)
}

  return (
    <section className="grid grid-cols-1 p-5 gap-4">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-3xl font-sans">Carrito</h1>
        {carrito.map((producto, index) => (
          <ItemCart key={index} producto={producto} vaciarCarrito={vaciarCarrito} />
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
        <button
          type="submit"
          className="bg-blue-500 text-white rounded mt-3 mx-5 hover:bg-blue-700 w-24 h-10"
        >
          Comprar
        </button>

        <button className='bg-blue-500 font-sans text-white rounded mt-3 mx-5 hover:bg-blue-700 w-24 h-10' onClick={vaciar}>vaciar cart</button>


      </form>
    </section>
  );
}

export default Cart;







