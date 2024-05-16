import React from 'react';

function ItemCart(props) {
  

  const vaciar = () => {
      props.emptyConfirm(ItemCart)
  }

  return (
    <section>
    <div className=' flex flex-col items-center justify-center gap-2 '>
      <h3>{props.producto.name}</h3>
      <img className='w-1/3' src={props.producto.image} alt={props.producto.name} />
      <p>Cantidad: {props.producto.cantidad}</p>
      <p>Precio: {props.producto.precio}</p>
    </div>
    </section>
  );
}

export default ItemCart;