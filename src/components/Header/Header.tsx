import { useNavigate } from 'react-router-dom'
import './header.css'


function Header() {   
    const navigate = useNavigate()   
    return (
    <header>
        <div className="container">
            <button  className='button-header' onClick={()=> navigate('/about')}>About</button>
            <button  className='button-header' onClick={()=> navigate('/team')}>Our Team</button>
            <button  className='button-header' onClick={()=> navigate('/planet')}>Planet</button>
            <button  className='button-header' onClick={()=> navigate('/price')}>Price</button>
            <button  className='special-button' onClick={()=> navigate('/about')}>Explore</button>
        </div>
    </header>
    )
}

export default Header