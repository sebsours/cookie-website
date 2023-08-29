import { Dialog, DialogHeader, DialogBody, DialogFooter, Input,  Accordion, AccordionHeader, AccordionBody, Alert } from "@material-tailwind/react";
import {  X, ChevronDown, Loader2  } from "lucide-react";
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
    isSubmitOpen: boolean;
    handleIsSubmitOpen: () => void;
    items: Map<string, checkoutInfo>
    deleteItemFromMap: (item:string) => void;
}

const CheckoutDialog:React.FC<CheckoutDialog> = (props:CheckoutDialog) => {
    const [numItems, setNumItems] = useState(0);
    const [listItems, setListItems] = useState<React.ReactElement[] | null>(null);
    const [listItemsForSubmit, setListItemsForSubmit] = useState<React.ReactElement[] | null>(null);
    const [totalCost, setTotalCost] = useState(0);
    const [openFirstAccordion, setOpenFirstAccordion] = useState(false);
    const [openSecAccordion, setOpenSecAccordion] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expireDate, setExpiredDate] = useState('');
    const [cvc, setCvc] = useState('');
    const [curDate, setDate] = useState('');

    const [nameErr, setNameErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [cardNumErr, setCardNumErr] = useState(false);
    const [expireErr, setExpireErr] = useState(false);
    const [cvcErr, setCvcErr] = useState(false);

    const handleOpenFirstAcc = () => {setOpenFirstAccordion((cur) => !cur)}
    const handleOpenSecAcc = () => {setOpenSecAccordion((cur) => !cur)}

    const buttonClick = () => {
        setIsLoading(true);
        let flag = false;
        if (!name) {
            setNameErr(true);
            setOpenFirstAccordion(true);
            flag = true;
        }


        if (!email || !email.match('.+\@.+\..+')) {
            setEmailErr(true);
            setOpenFirstAccordion(true);
            flag = true;
        }
        if (!cardNumber || !cardNumber.match('\\b\\d{4}(| |-)\\d{4}\\1\\d{4}\\1\\d{4}\\b')) {
            setCardNumErr(true);
            setOpenSecAccordion(true);
            flag = true;
        }
        if (!expireDate || !expireDate.match('^(0[1-9]|1[0-2])\/?([0-9]{2})$')) {
            setExpireErr(true);
            setOpenSecAccordion(true);
            flag = true;
        }
        if (!cvc || !cvc.match('^\\d{3}$')) {
            setCvcErr(true);
            setOpenSecAccordion(true);
            flag = true;
        }

        
        if (flag) {
            setIsLoading(false);
            
            return;
        }
        
        setTimeout(() => {
            setIsLoading(false);
            props.handleIsSubmitOpen();
            props.handleOpen();
            const dateObj = new Date().toLocaleString();
            setDate(() => dateObj);
            
            setName('');
            setEmail('');
            setCardNumber('');
            setExpiredDate('');
            setCvc('');

            
            
        }, 2000);
        
    }

    useEffect(() => {
        const list:React.ReactElement[] = [];
        const listForSubmitModal:React.ReactElement[] = [];
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

            listForSubmitModal.push(
                <li key={index} className="flex flex-col">
                    <div className="flex justify-between">
                        <span className="ml-10">{name} - {item?.quantity}</span>
                        <span>${cookiePrice}</span>
                    </div>
                </li>
            )

            index++;

        }

        setTotalCost(cost);
        setNumItems(numberOfItems);
        setListItems(list);
        setListItemsForSubmit(listForSubmitModal)



    }, [props.items])
    


    return ( 
        <>
        
            <Dialog open={props.open} size="xxl" handler={props.handleOpen} className="font-poppins px-4 py-3 max-h-none h-auto">
                <DialogHeader className="font-poppins flex justify-between ">
                    Checkout
                    <X className="hover:cursor-pointer" onClick={props.handleOpen}/>
                </DialogHeader>

                <DialogBody divider className="font-poppins">
                    <div className="pb-5">
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
            

                <DialogFooter className="flex flex-col">
                    <p className="self-start text-xs">Note: This is only for demo purposes only. Data inputted is minimally validated and will not be stored or used anywhere else. Any dummy data will
                        still be accepted by the app. Ex: 1111 1111 1111 1111 for card number input
                    </p>
                    <Accordion open={openFirstAccordion} className="font-poppins " icon={<ChevronDown className={`${openFirstAccordion ? "rotate-180" : ""} transition-transform`} />}>
                        <AccordionHeader onClick={handleOpenFirstAcc} className="font-poppins font-medium">
                            Contact Info
                        </AccordionHeader>

                        <AccordionBody className="flex flex-col gap-4 py-3 font-poppins max-w-xl"> 
                            <Input label="Name" crossOrigin={undefined}
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                    setNameErr(false); 
                                }} 
                                error={nameErr}/>
                            <Input label="Email" crossOrigin={undefined}
                                value={email} 
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setEmailErr(false);
                                }}
                                error={emailErr}/>
                        </AccordionBody>
                    </Accordion>

                    <Accordion open={openSecAccordion} className="font-poppins pb-10 " icon={<ChevronDown className={`${openSecAccordion? "rotate-180" : ""} transition-transform`} />}>
                        <AccordionHeader onClick={handleOpenSecAcc} className="font-poppins font-medium">
                            Payment
                        </AccordionHeader>
                        
                        <AccordionBody className="flex flex-col gap-4 py-3 font-poppins max-w-xl">
                            <Input label="Card number" crossOrigin={undefined}
                                value={cardNumber}
                                onChange={(e) => {
                                    setCardNumber(e.target.value);
                                    setCardNumErr(false);
                                }} 
                                error={cardNumErr}></Input>
                            
                            <Input label="Expires" crossOrigin={undefined} 
                                maxLength={5}
                                value={expireDate}
                                onKeyDown={(e) => {
                                    if (e.key === 'Backspace' && expireDate.length === 3) {
                                        setExpiredDate((expireDate) => expireDate.substring(0,2));
                                    }
                                } }
                                onChange={(e) => {
                                    if (e.target.value.length === 2){
                                        setExpiredDate(e.target.value.substring(0,2) + '/' + e.target.value.substring(2));
                                    } else {
                                        setExpiredDate(e.target.value);
                                    }
                                    setExpireErr(false);
                                }} 
                                error={expireErr}></Input>
                            <Input label="CVC" crossOrigin={undefined}
                                value={cvc}
                                maxLength={3}
                                onChange={(e) => {
                                    setCvc(e.target.value);
                                    setCvcErr(false);
                                }} 
                                error={cvcErr}></Input>
                        </AccordionBody>
                    </Accordion>
                    <button onClick={buttonClick} disabled={numItems === 0} className="bg-primary disabled:bg-secondary flex justify-center w-full max-w-[600px] text-white py-2 rounded-3xl hover:bg-accent transition ease-in outline-none">
                        {isLoading ? <Loader2 className="animate-spin"/> : 'Place Order'}
                    </button>
                </DialogFooter>
            </Dialog>

            <Dialog open={props.isSubmitOpen} size="md" handler={props.handleIsSubmitOpen}>
                    <DialogHeader className="font-poppins flex justify-between ">
                        Order Received!
                        <X className="hover:cursor-pointer" onClick={props.handleIsSubmitOpen}/>
                    </DialogHeader>
                    <DialogBody divider className="font-poppins">
                                <span>Order placed for {name} at {curDate}</span>
                                <hr className="my-5"/>
                                <div>
                                    <span className="">Order Details:</span>
                                    {listItemsForSubmit}
                                </div>
                                <li className="mt-10 flex justify-end">Total: ${totalCost.toFixed(2)}</li>
                    </DialogBody>
                    <DialogFooter className="font-poppins flex justify-start">
                        <span>Thank You!</span>
                    </DialogFooter>
            </Dialog>
        </>
     );
}
 
export default CheckoutDialog;