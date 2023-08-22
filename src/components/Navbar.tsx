import { Menu, ShoppingCart } from "lucide-react";

interface NavbarProps {
    openDrawer: () => void,
}

const Navbar: React.FC<NavbarProps> = ({ openDrawer }) => {
    return (  
        <div className="w-full h-16 bg-primary flex justify-between px-4 fixed z-10">
            <ul className="h-full flex flex-row items-center gap-3">
                <li>
                    <Menu className="hover:cursor-pointer" onClick={openDrawer}/>
                </li>
                <li className="text-xl">Cookies Inc</li>
            </ul>

            <ul className="h-full flex flex-row items-center">
                <li><ShoppingCart className="hover:cursor-pointer"/></li>
            </ul>
        </div>
    );
}
 
export default Navbar;