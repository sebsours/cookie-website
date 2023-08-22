import Navbar from "../components/Navbar";
import Section from "../components/Section";
import cookieData from "../assets/cookieselection.json"
import { Drawer } from "@material-tailwind/react"
import { useState } from "react";

const Home = () => {

    const [openDrawer, setOpenDrawer] = useState(true);

    const handleOpenDrawer = () => setOpenDrawer(true);
    const handleCloseDrawer = () => setOpenDrawer(false);

    return ( 
        <>
            <Navbar openDrawer={handleOpenDrawer}/>
            <div className='flex flex-col py-20' id='Main-Sections'>
                <Section header={cookieData.classics.type} list={cookieData.classics.list}/>
                <Section header={cookieData.favorites.type} list={cookieData.favorites.list}/>
                <Section header={cookieData.vegan.type} list={cookieData.vegan.list}/>
                <Section header={cookieData.seasonal.type} list={cookieData.seasonal.list}/>
                <Section header={cookieData.deals.type} list={cookieData.deals.list}/>
                <Section header={cookieData.other.type} list={cookieData.other.list}/>
            </div>

            <Drawer open={openDrawer} onClose={handleCloseDrawer} className="bg-primary">
                <ul className="text-lg flex flex-col gap-5 pt-5 pl-5">
                    <li className="hover:cursor-pointer hover:text-white transition duration-200">
                        {cookieData.classics.type.toUpperCase()}
                    </li>

                    <li className="hover:cursor-pointer hover:text-white transition duration-200">
                        {cookieData.favorites.type.toUpperCase()}
                    </li>

                    <li className="hover:cursor-pointer hover:text-white transition duration-200">
                        {cookieData.vegan.type.toUpperCase()}
                    </li>

                    <li className="hover:cursor-pointer hover:text-white transition duration-200">
                        {cookieData.seasonal.type.toUpperCase()}
                    </li>

                    <li className="hover:cursor-pointer hover:text-white transition duration-200">
                        {cookieData.deals.type.toUpperCase()}
                    </li>

                    <li className="hover:cursor-pointer hover:text-white transition duration-200"> 
                        {cookieData.other.type.toUpperCase()}
                    </li>
                </ul>
            </Drawer>
        </>
     );
}
 
export default Home;