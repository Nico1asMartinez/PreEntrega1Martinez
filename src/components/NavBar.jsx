import { Button } from "antd";
import { Menu } from "lucide-react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";






function NavBar() {
    return (
        <nav className="bg-blue-200 p-5 flex justify-between shadow-lg"    >

            <Link to='/'> <h1 className="text-3xl mr-10 ">Mi Navbar</h1> </Link>
            
                <Link to='/category/autos'><Button>Autos</Button></Link>
                
                <Link to='/category/camionetas'><Button>Camionetas</Button></Link>

                <Link to='/category/motos'><Button>Motos</Button></Link>
                



                <CartWidget
                    number={0}
                />
                <Menu width={30} height={30}/>

                

                
                



        </nav>
    )
}

export default NavBar