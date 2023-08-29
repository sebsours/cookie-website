import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
    return ( 
        <div className="lg:w-[1400px] px-5 flex flex-col lg:flex-row gap-5 lg:justify-evenly lg:gap-0">
            <div className="order-3 lg:order-1 self-center lg:self-auto">
                <span className="text-3xl lg:text-6xl lg:font-semibold">Cookies Inc</span>
            </div>

            <div className="order-1 lg:order-2">
                <span className="text-2xl font-bold">Company</span>
                <div className="grid grid-cols-2 pt-3 gap-4 lg:grid-cols-1">
                    <a href="">About Us</a>
                    <a href="">Nutrition</a>
                    <a href="">FAQ</a>
                    <a href="">Loyalty</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Contact Us</a>
                </div>
            </div>

            <div className="order-2 lg:order-3">
                <span className="text-2xl font-bold">Follow Us</span>
                <div className="flex justify-between pt-3 w-1/3 gap-5">
                    <a href=""><Facebook /></a>
                    <a href=""><Instagram /></a>
                    <a href=""><Twitter /></a>
                    <a href=""><Youtube /></a>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;