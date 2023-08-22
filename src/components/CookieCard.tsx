
// import Image from "next/image";
import cookieImg from "../assets/cookie.jpg"
import { Plus } from "lucide-react"
interface CookieCardProps {
    name: string,
    description: string,
    price: string, 
    imgURL: string
}


const CookieCard: React.FC<CookieCardProps> = (props:CookieCardProps) => {
    return ( 
        <div className="relative">
            <button className="absolute bottom-0 right-0 bg-secondary rounded-full p-2 peer hover:bg-accent transition duration-300 ease-in"><Plus className="text-white" /></button>
            <div className="h-96 w-64 border-2 border-secondary rounded-lg py-4 px-8 peer-hover:border-accent transition ease-in duration-300">
                <img src={cookieImg} alt="" />
                <div className="pt-3 flex flex-col gap-1">
                    <span className="text-lg font-extrabold tracking-wide">{props.name}</span>
                    <p className="text-xs font-semibold tracking-wide">{props.description}</p>
                    <span className="font-extrabold tracking-wide pt-10">${props.price}</span>
                </div>
                
                
            </div>
            
        </div>
        
     );
}
 
export default CookieCard;