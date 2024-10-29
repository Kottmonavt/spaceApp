import { useNavigate } from 'react-router-dom'
import './Price.css'
interface TicketCardProps {
    cardName: string;
    nameTicket: string;
    price: string;
    positions1: string;
    positions2: string;
    positions3: string;
    positions4: string;
    positions5: string;
}

export const TicketCard = ({cardName,nameTicket,price,positions1,positions2,positions3,positions4,positions5}: TicketCardProps) => {
    const navigate = useNavigate()
    return (
        <div className={cardName}>
            <div className='name-card russo-24'>{nameTicket}</div>
            <div className='price-card russo-36'>{price}</div>
                <div className='text-card-container roboto-18'>{positions1}</div>
                <div className='text-card-container roboto-18'>{positions2}</div>
                <div className='text-card-container roboto-18'>{positions3}</div>
                <div className='text-card-container roboto-18'>{positions4}</div>
                <div className='text-card-container roboto-18'>{positions5}</div>
            <div className='explore-container'>
                <div className='button-explore' onClick={()=> navigate('/about')}>Reserve a seat</div>
            </div>
        </div>
    )
}
function Price() {
    return (
        <div>
            <div className='title-container'>
                <div className='russo-36'>Available ticket</div>
            </div>           
            <div className='card-container'>
                <TicketCard cardName='card-standart' nameTicket='Standart ticket' price='$ 1 000 000' positions1='&#10004; 1-month intensive persosnal training' positions2='&#10004; comfortable luxurious seats'  positions3='&#10004; open space included' positions4='&#10060; 50+ photos and video recording' positions5='&#10060; unlimited food options'/>    
                <TicketCard cardName='card-vip' nameTicket='VIP ticket' price='$ 5 000 000' positions1='&#10004; 1-month intensive persosnal training' positions2='&#10004; comfortable luxurious seats'  positions3='&#10004; open space included' positions4='&#10004; 50+ photos and video recording' positions5='&#10060; unlimited food options'/>
                <TicketCard cardName='card-exclusive' nameTicket='Exclusive ticket' price='$ 10 000 000' positions1='&#10004; 1-month intensive persosnal training' positions2='&#10004; comfortable luxurious seats'  positions3='&#10004; open space included' positions4='&#10004; 50+ photos and video recording' positions5='&#10004; unlimited food options'/>
            </div>
        </div>       
    )
}
export default Price;