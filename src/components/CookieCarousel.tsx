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
        <Carousel className="py-20 bg-gradient-to-t from-primary to-secondary h-[750px] z-10 " loop={true} autoplay={true} autoplayDelay={7500}>
            <div className="flex justify-center h-full">
                <div className="h-full lg:w-lg flex flex-col lg:flex-row lg:justify-evenly items-center ">
                    <div className="h-1/2 px-10 lg:px-0 lg:mr-16 flex flex-col items-start justify-around">
                        <div>
                            <span className="text-5xl font-semibold tracking-wide">Double Deliciousness</span>
                            <p className="tracking-wide mt-5">Our most sought after cookie. Try our Double Trouble cookie.</p>
                        </div>
                        
                        <button onClick={() => handleButtonClick(2)} className="tracking-wide bg-accent max-w-[600px] w-44 text-white py-2 rounded-3xl">Order now</button>
                    </div>

                    <div className="flex justify-center h-96 ">
                        <img src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29va2llfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="A delicious Double Trouble cookie" className="object-cover w-[400px] rounded-lg drop-shadow-lg"/>
                    </div>
                </div>
            </div>

            <div className="flex justify-center h-full">
                <div className="h-full lg:w-lg flex flex-col lg:flex-row lg:justify-evenly items-center">
                    <div className="h-1/2 px-10 lg:px-0 lg:mr-16 flex flex-col items-start justify-around ">
                        <div>
                            <span className="text-5xl font-semibold tracking-wide">Fallin' for You</span>
                            <p className="tracking-wide mt-5">Our limited edition pumpkin spice cookies are now here</p>
                        </div>
                        
                        <button onClick={() => handleButtonClick(1)} className="tracking-wide bg-accent max-w-[600px] w-44 text-white py-2 rounded-3xl">Order Now</button>
                    </div>
                    
                    <div className="flex justify-center h-96 ">
                        <img src="https://images.unsplash.com/photo-1611082191524-1c049443f288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNvb2tpZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="A delicious pumpkin spice cookie" className="object-cover w-[400px] rounded-lg drop-shadow-lg"/>
                    </div>
                    
                </div>
            </div>
            
            
            
            <div className="flex justify-center h-full">
                <div className="h-full lg:w-lg flex flex-col lg:flex-row lg:justify-evenly items-center ">
                    <div className="h-1/2 px-10 lg:px-0 lg:mr-16 flex flex-col items-start justify-around">
                        <div>
                            <span className="text-5xl font-semibold tracking-wide">Sweet Surprise</span>
                            <p className="tracking-wide mt-5">Order our delicious ice cream cookie sandwich</p>
                        </div>
                        
                        <button onClick={() => handleButtonClick(3)} className="tracking-wide bg-accent max-w-[600px] w-44 text-white py-2 rounded-3xl">Order now</button>
                    </div>

                    <div className="flex justify-center h-96">
                        <img src="https://images.unsplash.com/photo-1559622214-f8a9850965bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNvb2tpZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="object-cover w-[400px] rounded-lg drop-shadow-lg"/>
                    </div>
                </div>
            </div>
            
        </Carousel>
     );
}
 
export default CookieCarousel;