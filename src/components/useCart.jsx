import { useContext } from "react";
import { contexto } from "./cartProvider";


function useCart() {

    const valorActual = useContext(contexto);

    return valorActual
}

export default useCart