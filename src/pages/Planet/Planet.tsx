import './Planet.css'

interface PlanetProps {
    namePlanet: string;
    describe: string;
    classImage: string;
    image: string;
}

export const PlanetCard1 = ({namePlanet, describe, classImage, image}: PlanetProps) => {
    return (
        <div className='planet-inner-box'>
            <img src={image} alt="Img" className={classImage}/>
            <div className='text-planet'>
                <div className='text-name-planet russo-24'>{namePlanet}</div>
                <div className='roboto-18'>{describe}</div>
            </div>          
        </div>
    )
}

export const PlanetCard2 = ({namePlanet, describe, classImage, image}: PlanetProps) => {
    return (
        <div className='planet-inner-box'>
            <div></div>
            
            <div className='text-uranus'>
                <div className='text-name-planet russo-24'>{namePlanet}</div>
                <div className='roboto-18'>{describe}</div>
            </div>
            <img src={image} alt="Img" className={classImage}/>
          
        </div>
    )
}


function Planet() {
    return (
        <body>
            <div className='body-text'>
                <div className='russo-36'>You can choose one of these planets for your journey</div>
            </div>
            <div className='planet-container'>                
                <PlanetCard1 namePlanet='01 MARS' describe='A small planet for the realization of all your childhood dreams of space travel.' classImage='image-mars' image='./src/assets/Mars.png'/>
                <PlanetCard2 namePlanet='02 URANUS' describe='Did you dream of becoming a polar explorer as a child? On Uranus, you can try yourself as a space polar explorer!' classImage='image-uranus' image='./src/assets/Uranus.png'/>
                <PlanetCard1 namePlanet='03 MERCURY' describe='Do you like the sun and the heat? Then it is time for you to visit Mercury! The sun is closer and hotter here than you can imagine.' classImage='image-mercury' image='./src/assets/Mercury.png'/> 
                <PlanetCard2 namePlanet='04 JUPITER' describe='Have you ever dreamed of watching a hurricane on Jupiter up close? Your dream can be realized with the help of us!' classImage='image-jupiter' image='./src/assets/Jupiter.png'/> 
                <PlanetCard1 namePlanet='05 VENUS' describe='Do you like sauna and acid rain? Do you want Monday to come less often? We are waiting for you on Venus, here your dreams will become reality!' classImage='image-venus' image='./src/assets/Venus.png'/>                 
            </div>
        </body>
    )
}

export default Planet