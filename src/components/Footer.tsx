import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
    return ( 
        <div className="h-96 bg-primary my-40 pt-8 px-5 flex flex-col gap-5">
            <div className="order-3 self-center">
                <span className="text-3xl">Cookies Inc</span>
            </div>

            <div className="order-1">
                <span className="text-2xl">Company</span>
                <div className="grid grid-cols-2 pt-3 gap-4">
                    <a href="">About Us</a>
                    <a href="">Nutrition</a>
                    <a href="">FAQ</a>
                    <a href="">Loyalty</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Contact Us</a>
                </div>
            </div>

            <div className="order-2">
                <span className="text-2xl">Follow Us</span>
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