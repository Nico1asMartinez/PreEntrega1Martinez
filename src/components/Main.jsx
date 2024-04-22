
import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import NavBar from "./NavBar";
import ItemDetailContainer from "./ItemDetailContainer";

function Main() {
  return (
    <Routes>

    <Route path="/" element={<ItemListContainer />} />

    <Route path="/category/:categoryId" element={<ItemListContainer />} />

    <Route path="/item/:id" element={<ItemDetailContainer />} />

    </Routes>
  );
}

export default Main;
