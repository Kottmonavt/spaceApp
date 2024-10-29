import { useNavigate } from 'react-router-dom'
import './Home.css';

function Home() {
    const navigate = useNavigate()   
    return (
        <div>
            <img src='./src/assets/astronaut.png' alt='Astronaut' className='image-astronaut'/>
            <div className="text-container">
                <div className='russo'>THINK</div>
                <div className='russo'>BIGGER, GO</div>
                <div className='russo'>BYUONG</div>
            </div>
            <div className='text-container'>
                <div className='roboto'>There is much more to the void that the eyes</div>
                <div className='roboto'>can see. Let's go to the place where gravity</div>
                <div className='roboto'>doesn't matter</div>
            </div>
            <div className='button-container'>
                <div className='special-button-home' onClick={()=> navigate('/about')}>Explore more</div>
            </div>

        </div>
    );
}
export default Home;