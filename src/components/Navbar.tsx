import { Menu, ShoppingCart } from "lucide-react";


const Navbar = () => {
    return (  
        <div className="w-full h-16 bg-primary flex justify-between px-4 fixed z-10">
            <ul className="h-full flex flex-row items-center gap-3">
                <li><Menu/></li>
                <li className="text-xl">Cookies Inc</li>
            </ul>

            <ul className="h-full flex flex-row items-center">
                <li><ShoppingCart/></li>
            </ul>
        </div>
    );
}
 
export default Navbar;