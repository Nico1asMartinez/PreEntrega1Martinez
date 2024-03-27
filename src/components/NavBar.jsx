import { Button } from "antd";
import { Menu } from "lucide-react";
import CartWidget from "./CartWidget";






function NavBar() {
    return (
        <nav className="bg-blue-200 p-5 flex justify-between shadow-lg"    >

                <h1 className="text-3xl mr-10 ">Mi Navbar</h1>

                <a href="#"><Button>Enlace</Button></a>
                

                <a href="#"><Button>Enlace</Button></a>
                <CartWidget
                    number={0}
                />
                <Menu width={30} height={30}/>

                

                
                



        </nav>
    )
}

export default NavBar