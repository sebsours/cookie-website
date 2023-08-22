import { Menu, ShoppingCart } from "lucide-react";
import { Badge } from "@material-tailwind/react";

interface NavbarProps {
    openDrawer: () => void,
    openCheckout: () => void,
}

const Navbar: React.FC<NavbarProps> = ({ openDrawer, openCheckout }) => {
    return (  
        <div className="w-full h-16 bg-primary flex justify-between px-4 fixed z-10">
            <ul className="h-full flex flex-row items-center gap-3">
                <li>
                    <Menu className="hover:cursor-pointer" onClick={openDrawer}/>
                </li>
                <li className="text-xl">Cookies Inc</li>
            </ul>

            <ul className="h-full flex flex-row items-center">
                <li onClick={openCheckout}>
                    <Badge content="5" className="min-w-[20px] min-h-[20px]">
                        <ShoppingCart className="hover:cursor-pointer"/>
                    </Badge>
                    
                </li>
            </ul>
        </div>
    );
}
 
export default Navbar;