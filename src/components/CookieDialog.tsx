import { Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";

interface CookieDialog {
    open: boolean;
    handleOpen: () => void;
}

const CookieDialog:React.FC<CookieDialog> = (props:CookieDialog) => {
    return ( 
        <Dialog open={props.open} handler={props.handleOpen}>
            <DialogHeader>
                Cookie1
            </DialogHeader>

            <DialogBody>
                Information about the cookie and how much you want
            </DialogBody>

            <DialogFooter>
                <button onClick={props.handleOpen}>Cancel</button>
                <button onClick={props.handleOpen}>Add to Card</button>
            </DialogFooter>
        </Dialog>
     );
}
 
export default CookieDialog;