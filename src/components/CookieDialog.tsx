import { Dialog, DialogHeader, DialogBody, DialogFooter,
         } from "@material-tailwind/react";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

interface CookieDialog {
    open: boolean;
    handleOpen: () => void;
    handleNumItems: (count:number) => void;
    cookieInfo: CookieData;
    updateMap: (key:string, value:number) => void;
}

interface CookieData {
    name: string,
    description: string,
    price: string,
    img: string
}

const CookieDialog:React.FC<CookieDialog> = (props:CookieDialog) => {
    const [count, setCount] = useState(1);

    const addToOrder = () => {
        props.handleNumItems(count);
        props.updateMap(props.cookieInfo.name, count);
        setCount(1);
        props.handleOpen();
    }

    const handleClose = () => {
        setCount(1);
        props.handleOpen();
    }

    return ( 
        <Dialog open={props.open} handler={handleClose} className="select-none ">
            <DialogHeader className="font-poppins flex flex-col items-start gap-1.5 pb-0">
                <span>{props.cookieInfo.name}</span>
                <span className="text-sm">${props.cookieInfo.price}</span>
            </DialogHeader>

            <DialogBody className="font-poppins flex flex-col gap-2">
                <img src={`../assets/${props.cookieInfo.img}`} alt="" />
                <p>{props.cookieInfo.description}</p>
                <ul className="flex gap-5 ">
                    <li onClick={() => {
                        if (count > 1) setCount(count - 1);
                    }} className="hover:cursor-pointer">
                        <Minus/>
                    </li>
                    <li className="select-none">
                        {count}
                    </li>
                    <li onClick={() => {
                        if (count < 12) setCount(count + 1);
                    }} className="hover:cursor-pointer">
                        <Plus/>
                    </li>
                </ul>
                
            </DialogBody>

            <DialogFooter className="flex gap-5 font-poppins text-text">
                <button onClick={addToOrder} className="bg-primary py-1.5 px-4 rounded-3xl hover:text-white transition ease-in outline-none">Add to Order</button>
            </DialogFooter>
        </Dialog>
     );
}
 
export default CookieDialog;