import Navbar from "../components/Navbar";
import Section from "../components/Section";
import cookieData from "../assets/cookieselection.json"

const Home = () => {
    return ( 
        <>
            <Navbar />
            <div className='flex flex-col py-20' id='Main-Sections'>
                <Section header={cookieData.classics.type} list={cookieData.classics.list}/>
                <Section header={cookieData.favorites.type} list={cookieData.favorites.list}/>
                <Section header={cookieData.vegan.type} list={cookieData.vegan.list}/>
                <Section header={cookieData.seasonal.type} list={cookieData.seasonal.list}/>
                <Section header={cookieData.deals.type} list={cookieData.deals.list}/>
                <Section header={cookieData.other.type} list={cookieData.other.list}/>
            </div>
        </>
     );
}
 
export default Home;