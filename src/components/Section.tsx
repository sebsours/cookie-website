import Header from './Header';
// import CookieCard from '@/components/CookieCard'
import { useState, useEffect } from 'react'
import CookieCard from './CookieCard';

interface SectionProps {
    header: string,
    reference: React.RefObject<HTMLDivElement>,
    openCookieDialog: () => void,
    handleCookieInfo: (name: string, desc:string, price:string, img:string) => void,
    list: List[]
}

interface List {
    name: string,
    description: string,
    price: string,
    imgURL: string
}

const Section:React.FC<SectionProps> = (props:SectionProps) => {
    const [cards, setCards] = useState<React.ReactElement[] | null>(null);


    useEffect(() => {
        const cookieCards: React.ReactElement[] = [];

        props.list.map((cookie, index) => {
            cookieCards.push(
                <CookieCard 
                    name={cookie.name} 
                    description={cookie.description} 
                    price={cookie.price} 
                    imgURL={cookie.imgURL} 
                    key={index} 
                    openCookieDialog={props.openCookieDialog}
                    handleCookieInfo={props.handleCookieInfo}
                />
            )
        })

        setCards(cookieCards);

    }, []);
    

    return ( 
        <div className='w-full flex flex-col items-center' ref={props.reference}>
          <Header title={props.header}/>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-10'>
                {cards}
              
          </div>
        </div>
     );
}
 
export default Section;