import { Carousel } from "@material-tailwind/react";
import cookie from '../assets/cookie.jpg'

interface CookieCarousel {
    handleOpenCookieDialog: () => void;
    handleCookieInfo: (name: string, desc:string, price:string, img:string) => void;
}


const CookieCarousel: React.FC<CookieCarousel> = (props:CookieCarousel) => {


    const handleButtonClick = (index:number) => {
        switch (index) {
            case 1:
                props.handleCookieInfo("Pumpkin Spice", "This is a pumpkin spice cookie", "1.00", "cookieImg")
                props.handleOpenCookieDialog();
                break;
            case 2:
                props.handleCookieInfo("Double Trouble", "This is double trouble", "1.00", "cookieImg");
                props.handleOpenCookieDialog();
                break;
            case 3:
                props.handleCookieInfo("Cookie Cake", "This is a cookie cake", "30.00", "cookieImg");
                props.handleOpenCookieDialog();
                break;
        }
    }


    return ( 
        <Carousel className="py-20 bg-secondary h-[750px] z-10" loop={true} autoplay={true}>
            <div className="h-full flex flex-col items-center">

                <div className="h-1/2 w-4/5 flex flex-col items-start justify-around">
                    <div className="">
                    <span className="text-5xl font-semibold tracking-wide">Fallin' for You</span>
                    <p className="tracking-wide mt-5">Our limited edition pumpkin spice cookies are now here</p>
                    </div>
                    
                    <button onClick={() => handleButtonClick(1)} className="tracking-wide bg-accent max-w-[600px] w-44 text-white py-2 rounded-3xl">Order Now</button>
                </div>
                
                <div className="h-1/2 w-4/5">
                    <img src={cookie} alt="" className="w-[300px]"/>
                </div>
                
            </div>

            <div className="h-full flex flex-col items-center">
                <div className="h-1/2 w-4/5 flex flex-col items-start justify-around">
                    <div>
                        <span className="text-5xl font-semibold tracking-wide">Trouble is Here</span>
                        <p className="tracking-wide mt-5">Our most sought after cookie. Try our Double Trouble cookie</p>
                    </div>
                    
                    <button onClick={() => handleButtonClick(2)} className="tracking-wide bg-accent max-w-[600px] w-44 text-white py-2 rounded-3xl">Order now</button>
                </div>

                <div className="h-1/2 w-4/5">
                    <img src={cookie} alt="" className="w-[300px]"/>
                </div>
            </div>
            
            <div className="h-full flex flex-col items-center">
                <div className="h-1/2 w-4/5 flex flex-col items-start justify-around">
                    <div>
                        <span className="text-5xl font-semibold tracking-wide">Sweet Surprise</span>
                        <p className="tracking-wide mt-5">Order our delicious ice cream cookie cake</p>
                    </div>
                    
                    <button onClick={() => handleButtonClick(3)} className="tracking-wide bg-accent max-w-[600px] w-44 text-white py-2 rounded-3xl">Order now</button>
                </div>

                <div className="h-1/2 w-4/5">
                    <img src={cookie} alt="" className="w-[300px]"/>
                </div>
            </div>
        </Carousel>
     );
}
 
export default CookieCarousel;