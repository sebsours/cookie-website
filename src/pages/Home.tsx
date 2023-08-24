import Navbar from "../components/Navbar";
import Section from "../components/Section";
import CheckoutDialog from "../components/CheckoutDialog";
import CookieDialog from "../components/CookieDialog";
import cookieData from "../assets/cookieselection.json"
import { Drawer } from "@material-tailwind/react"
import { useState, useRef } from "react";

interface checkoutInfo {
    price: string, 
    quantity: number
}

const Home = () => {

    const [openDrawer, setOpenDrawer] = useState(false);
    const [openCheckout, setOpenCheckout] = useState(false);
    const [openCookieDialog, setOpenCookieDialog] = useState(false);
    const [cookieInfo, setCookieInfo] = useState({});
    const [numItems, setNumItems] = useState(0);
    const [totalItemsMap, setTotalItemsMap] = useState(new Map());

    const updateMap = (key:string, value:checkoutInfo) => {
        
        if (totalItemsMap.has(key)) {
            // value.quantity += totalItemsMap.get(key).quantity;
            setTotalItemsMap(new Map(totalItemsMap.set(key, value)))
        } else {
            setTotalItemsMap(new Map(totalItemsMap.set(key, value)));
        }

        let countItems = 0;
        for (const key of totalItemsMap.keys()) {
            countItems += totalItemsMap.get(key).quantity;
        }

        setNumItems(countItems);

    }

    const deleteItemFromMap = (item:string) => {
        totalItemsMap.delete(item);
        setTotalItemsMap(new Map(totalItemsMap));

        let countItems = 0;
        for (const key of totalItemsMap.keys()) {
            countItems += totalItemsMap.get(key).quantity;
        }

        setNumItems(countItems);
    }

    const handleOpenDrawer = () => setOpenDrawer(true);
    const handleCloseDrawer = () => setOpenDrawer(false);

    const handleOpenCheckout = () => setOpenCheckout(!openCheckout);
    const handleOpenCookieDialog = () => setOpenCookieDialog(!openCookieDialog);


    const handleCookieInfo = (name: string, desc: string, price: string, img: string) => {
        const cookieObj = {
            name: name,
            description: desc,
            price: price,
            img: img
        }
        

        setCookieInfo(cookieObj);
    }

    const classics = useRef<HTMLDivElement>(null);
    const favorites = useRef<HTMLDivElement>(null);
    const vegan = useRef<HTMLDivElement>(null);
    const seasonal = useRef<HTMLDivElement>(null);
    const deals = useRef<HTMLDivElement>(null);
    const other = useRef<HTMLDivElement>(null);

    const scrollToSection = (elementRef:React.RefObject<HTMLDivElement>) => {

        if (elementRef.current) {
            const location:number = elementRef.current.offsetTop - 50;
            window.scrollTo({
                top: location,
                behavior: "smooth"
            });
            handleCloseDrawer();
        }
        
    };

    return ( 
        <>
            <Navbar openDrawer={handleOpenDrawer} openCheckout={handleOpenCheckout} numItems={numItems}/>
            <div className='flex flex-col py-20' id='Main-Sections'>
                <Section header={cookieData.classics.type} list={cookieData.classics.list} reference={classics} openCookieDialog={handleOpenCookieDialog} handleCookieInfo={handleCookieInfo}/>
                <Section header={cookieData.favorites.type} list={cookieData.favorites.list} reference={favorites} openCookieDialog={handleOpenCookieDialog} handleCookieInfo={handleCookieInfo}/>
                <Section header={cookieData.vegan.type} list={cookieData.vegan.list} reference={vegan} openCookieDialog={handleOpenCookieDialog} handleCookieInfo={handleCookieInfo}/>
                <Section header={cookieData.seasonal.type} list={cookieData.seasonal.list} reference={seasonal} openCookieDialog={handleOpenCookieDialog} handleCookieInfo={handleCookieInfo}/>
                <Section header={cookieData.deals.type} list={cookieData.deals.list} reference={deals} openCookieDialog={handleOpenCookieDialog} handleCookieInfo={handleCookieInfo}/>
                <Section header={cookieData.other.type} list={cookieData.other.list} reference={other} openCookieDialog={handleOpenCookieDialog} handleCookieInfo={handleCookieInfo}/>
            </div>

            <Drawer open={openDrawer} onClose={handleCloseDrawer} className="bg-primary">
                <ul className="text-lg flex flex-col gap-5 pt-5 pl-5">
                    <li className="hover:cursor-pointer hover:text-white transition duration-200" onClick={() => scrollToSection(classics)}>
                        {cookieData.classics.type.toUpperCase()}
                    </li>

                    <li className="hover:cursor-pointer hover:text-white transition duration-200" onClick={() => scrollToSection(favorites)}>
                        {cookieData.favorites.type.toUpperCase()}
                    </li>

                    <li className="hover:cursor-pointer hover:text-white transition duration-200" onClick={() => scrollToSection(vegan)}>
                        {cookieData.vegan.type.toUpperCase()}
                    </li>

                    <li className="hover:cursor-pointer hover:text-white transition duration-200" onClick={() => scrollToSection(seasonal)}>
                        {cookieData.seasonal.type.toUpperCase()}
                    </li>

                    <li className="hover:cursor-pointer hover:text-white transition duration-200" onClick={() => scrollToSection(deals)}>
                        {cookieData.deals.type.toUpperCase()}
                    </li>

                    <li className="hover:cursor-pointer hover:text-white transition duration-200" onClick={() => scrollToSection(other)}> 
                        {cookieData.other.type.toUpperCase()}
                    </li>
                </ul>
            </Drawer>

            <CookieDialog open={openCookieDialog} handleOpen={handleOpenCookieDialog} cookieInfo={cookieInfo}
            updateMap={updateMap}></CookieDialog>

            <CheckoutDialog open={openCheckout} handleOpen={handleOpenCheckout} items={totalItemsMap} deleteItemFromMap={deleteItemFromMap}></CheckoutDialog>
        </>
     );
}
 
export default Home;