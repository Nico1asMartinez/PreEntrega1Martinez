
import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Cart from "./cart";
import { useContext } from "react";
import { contexto } from "./cartProvider";
import { toast } from "react-toastify";

function Main(props) {

  const valorActual = useContext(contexto);

  const emptyConfirm = (Cart) => {
    valorActual.vaciarCarrito(Cart, props.product)
    toast.error ("se vacio el carrito!")
  }




  return (
    <div className="grow">
      
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart emptyConfirm={emptyConfirm}/>} />
        <Route path="*" element={ <p>404</p> } />
      </Routes>
      
    </div>
  );
}
              




export default Main;
