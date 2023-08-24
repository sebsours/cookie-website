import { Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";
import {  X  } from "lucide-react";
import { useEffect, useState } from "react";

interface checkoutInfo {
    name: string,
    price: string, 
    quantity: number,
    description: string,
    img: string,
}

interface CheckoutDialog {
    open: boolean;
    handleOpen: () => void;
    handleOpenCookieDialog: () => void;
    handleCookieInfo: (name: string, desc:string, price:string, img:string) => void;
    items: Map<string, checkoutInfo>
    deleteItemFromMap: (item:string) => void;
}

const CheckoutDialog:React.FC<CheckoutDialog> = (props:CheckoutDialog) => {
    const [numItems, setNumItems] = useState(0);
    const [listItems, setListItems] = useState<React.ReactElement[] | null>(null);
    const [totalCost, setTotalCost] = useState(0);


    useEffect(() => {
        const list:React.ReactElement[] = [];
        let cost = 0;
        let numberOfItems = 0;
        let index = 0;

        for (const key of props.items.keys()) {
            const name = key;
            const item = props.items.get(key);

            // Build up total cost
            const cookiePrice = (Number(item?.price) * item!.quantity).toFixed(2);
            cost += Number(cookiePrice);

            // Build up number of items
            numberOfItems += item!.quantity;

            // Build up list of items to render
            list.push(
                <li key={index} className="flex flex-col">
                    <div className="flex justify-between">
                        <span>{name} - {item?.quantity}</span>
                        <span>${cookiePrice}</span>
                    </div>
                    
                    <div className="flex gap-4 pt-2">
                        <button 
                            onClick={() => {
                                props.handleCookieInfo(name, item!.description, item!.price, item!.img);
                                props.handleOpenCookieDialog();
                            }}>Edit</button>
                        <button onClick={() => props.deleteItemFromMap(name)}>Delete</button>
                    </div>
                    
                </li>
            )

            index++;

        }

        setTotalCost(cost);
        setNumItems(numberOfItems);
        setListItems(list);




    }, [props.items])
    


    return ( 
        <Dialog open={props.open} size="xxl" handler={props.handleOpen} className="font-poppins px-4 py-3">
            <DialogHeader className="font-poppins flex justify-between ">
                Checkout
                <X className="hover:cursor-pointer" onClick={props.handleOpen}/>
            </DialogHeader>

            <DialogBody divider className="font-poppins">
                <div>
                    <span className="">Your Order</span>
                    <ul className="pt-8 flex flex-col gap-5">
                        
        
                        { numItems > 0 ? 
                            listItems
                        : 
                        <li>You have no items</li>
                        }

                        <li className="mt-10 flex justify-end">Total: ${totalCost.toFixed(2)}</li>
                    </ul>
                </div>
            
            </DialogBody>

            <DialogFooter className="flex justify-center">
                
                <button onClick={props.handleOpen} disabled={numItems === 0} className="bg-primary disabled:bg-secondary w-full max-w-[600px] text-white py-2 rounded-3xl hover:bg-accent transition ease-in outline-none">Place Order</button>
            </DialogFooter>
        </Dialog>
     );
}
 
export default CheckoutDialog;