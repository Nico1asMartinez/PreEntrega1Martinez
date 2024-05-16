import { Button } from "antd";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { contexto } from "./cartProvider";




function NavBar() {

const elValorDelContext =  useContext(contexto)


    return (
        <nav className="bg-blue-200 p-5  shadow-lg flex justify-between "    >

            <div>

            <Link to='/'> <h1 className="text-3xl mr-10 ">Mi Navbar</h1> </Link>

            </div>

                <div className="flex  space-x-4 mr-2">
            
                <Link to='/category/autos'><Button>Autos</Button></Link>
                
                <Link to='/category/camionetas'><Button>Camionetas</Button></Link>

                <Link to='/category/motos'><Button>Motos</Button></Link>

                <span className="flex gap-1">
                <CartWidget />
                {elValorDelContext.cantidadTotal}
                </span>
                </div>
                

                
                
                

                

                
                



        </nav>
    )
}

export default NavBar