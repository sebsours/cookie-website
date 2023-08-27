import { Carousel } from "@material-tailwind/react";
import cookie from '../assets/cookie.jpg'



const CookieCarousel = () => {
    return ( 
        <Carousel className="py-20 bg-secondary h-[750px] z-10" loop={true} autoplay={true}>
            <div className="h-full flex flex-col items-center">

                <div className="h-1/2 w-4/5 flex flex-col items-start justify-center gap-2">
                    <span className="text-5xl font-semibold tracking-wide">Fall is here</span>
                    <p className="tracking-wide">Our limited edition pumpkin spice cookies are now here</p>
                    <button className="tracking-wide mt-10 bg-accent max-w-[600px] w-44 text-white py-2 rounded-3xl">Order Now</button>
                </div>
                
                <div className="h-1/2 w-4/5">
                    <img src={cookie} alt="" className="w-[300px]"/>
                </div>
                
            </div>

            <div className="h-full flex flex-col items-center">
                <div className="h-1/2 w-4/5 flex flex-col items-start justify-center gap-2">
                    <span className="text-5xl font-semibold tracking-wide">Good Dozen Cookie Title</span>
                    <p className="tracking-wide">Order a dozen cookies and get 50% off!</p>
                    <button className="tracking-wide mt-10 bg-accent max-w-[600px] w-44 text-white py-2 rounded-3xl">Order now</button>
                </div>

                <div className="h-1/2 w-4/5">
                    <img src={cookie} alt="" className="w-[300px]"/>
                </div>
            </div>
            
            <div className="h-full flex flex-col items-center">
                <div className="h-1/2 w-4/5 flex flex-col items-start justify-center gap-2">
                    <span className="text-5xl font-semibold tracking-wide">Sweet Surprise</span>
                    <p className="tracking-wide">Order our delicious ice cream cookie cake</p>
                    <button className="tracking-wide mt-10 bg-accent max-w-[600px] w-44 text-white py-2 rounded-3xl">Order now</button>
                </div>

                <div className="h-1/2 w-4/5">
                    <img src={cookie} alt="" className="w-[300px]"/>
                </div>
            </div>
        </Carousel>
     );
}
 
export default CookieCarousel;