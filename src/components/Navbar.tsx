import { Menu, ShoppingCart } from "lucide-react";


interface NavbarProps {
    openDrawer: () => void,
    openCheckout: () => void,
    numItems: number
}

const Navbar: React.FC<NavbarProps> = ({ openDrawer, openCheckout, numItems }) => {
    return (  
        <div className="w-full max-w-5xl rounded-b h-16 bg-primary flex justify-between px-4 fixed z-20">
            <ul className="h-full flex flex-row items-center gap-3">
                <li>
                    <Menu className="hover:cursor-pointer" onClick={openDrawer}/>
                </li>
                <li className="text-xl">Cookies Inc</li>
            </ul>

            <ul className="h-full flex flex-row items-center relative ">
                <li onClick={openCheckout} className=" hover:cursor-pointer">
                    <div className="relative ">
                        <ShoppingCart/>
                        
                        <span className="absolute -top-2 -right-2.5 bg-red-500 text-white text-center text-sm rounded-full h-5 w-5 drop-shadow">{numItems}</span>
                    </div>
                    
                    
                </li>
            </ul>
        </div>
    );
}
 
export default Navbar;