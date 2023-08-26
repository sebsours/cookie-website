import { Carousel } from "@material-tailwind/react";



const CookieCarousel = () => {
    return ( 
        <Carousel className="py-20 bg-secondary h-96 z-10" loop={true} autoplay={true}>
            <div >
                Test div 1
            </div>
            <div>
                Test div 2
            </div>
            <div>
                Test div 3
            </div>
            <div>
                Test div 4
            </div>
        </Carousel>
     );
}
 
export default CookieCarousel;