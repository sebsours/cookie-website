
// import Image from "next/image";
import { Plus } from "lucide-react"
interface CookieCardProps {
    name: string,
    description: string,
    price: string, 
    imgURL: string,
    openCookieDialog: () => void,
    handleCookieInfo: (name: string, desc:string, price:string, img:string) => void
}


const CookieCard: React.FC<CookieCardProps> = (props:CookieCardProps) => {
    const handleCookieClick = () => {
        props.handleCookieInfo(props.name, props.description, props.price, props.imgURL);
        props.openCookieDialog();
    }

    return ( 
        <div className="relative group" onClick={handleCookieClick}>
            <button className="absolute -bottom-2 -right-2 bg-secondary rounded-full p-2 group-hover:cursor-pointer group-hover:bg-accent transition duration-300 ease-in"
            onClick={handleCookieClick}>
                <Plus className="text-white" />
            </button>
            <div className="h-96 w-64 border-2 border-secondary rounded-lg py-4 px-8 group-hover:cursor-pointer group-hover:border-accent transition ease-in duration-300">
                <img src={props.imgURL} alt="" height={1920} width={1080} className="w-[184px] h-[188px] rounded-xl object-cover object-center drop-shadow-md"/>
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