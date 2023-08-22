import { Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";
import { LogOut  } from "lucide-react";

interface CheckoutDialog {
    open: boolean;
    handleOpen: () => void;
}

const CheckoutDialog:React.FC<CheckoutDialog> = (props:CheckoutDialog) => {
    return ( 
        <Dialog open={props.open} size="xxl" handler={props.handleOpen} className="font-poppins">
            <DialogHeader className="font-poppins">
                <LogOut></LogOut>
                Checkout
            </DialogHeader>

            <DialogBody className="font-poppins">
                This is where you pay
            </DialogBody>

            <DialogFooter>
                <button onClick={props.handleOpen}>Click here to quit</button>
            </DialogFooter>
        </Dialog>
     );
}
 
export default CheckoutDialog;