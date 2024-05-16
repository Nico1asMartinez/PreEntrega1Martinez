import { createContext, useEffect, useState } from "react"

export const contexto = createContext();

const Provider = contexto.Provider

    function CartProvider (props) {

        const [cantTotal, setCantTotal] = useState(0)
        const [precioTotal, setPrecioTotal] = useState(0)
        const [carrito, setCarrito] = useState([])





        const agregarAlCarrito = (cant, item) => {
            
            setCantTotal(cantTotal + cant)

            const copia = carrito.slice(0)

            const productcant = item

            productcant.cantidad = cant

            copia.push(productcant)
            setCarrito(copia)
            
        }

        const borrarDelCarrito = (id) => {

            setCantTotal(cantTotal - cantTotal)
        }


        const vaciarCarrito = () => {
            console.log("vaciar carrito")
            setCantTotal(0)
            setCarrito([])
        }

        const estaEnElCarrito = (id) => {
            console.log("esta en el carrito")
        }


        const valorActual = {
            cantidadTotal : cantTotal,
            precioTotal : precioTotal,
            carrito  : carrito,
            agregarAlCarrito : agregarAlCarrito,
            borrarDelCarrito : borrarDelCarrito,    
            vaciarCarrito : vaciarCarrito,
            estaEnElCarrito : estaEnElCarrito


        }


        return(
            <Provider value={valorActual} >
                {props.children}
            </Provider>
        )

}

export default CartProvider

