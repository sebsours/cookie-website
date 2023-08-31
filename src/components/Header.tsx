interface HeaderProps {
    title:string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return ( 
        <div className="text-center text-xl text-white w-4/5 md:max-w-5xl bg-primary rounded-sm my-10 py-1 tracking-wide drop-shadow-md">
            {title.toUpperCase()}
        </div>
     );
}
 
export default Header;