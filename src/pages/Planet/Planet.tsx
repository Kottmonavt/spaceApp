import './Planet.css'

interface PlanetProps {
    namePlanet: string;
    describe: string;
    classImage: string;
    image: string;
    cardClass: string;
}

export const PlanetCard = ({namePlanet, describe, classImage, image, cardClass}: PlanetProps) => {
    return (
        <div className={cardClass}>
            <img src={image} alt="Img" className={classImage}/>
            <div className='text-planet'>
                <div className='text-name-planet russo-24'>{namePlanet}</div>
                <div className='roboto-18'>{describe}</div>
            </div>          
        </div>
    )
}

function Planet() {
    return (
        <body>
            <div className='planet-container'>
                <div className='row-card'>
                    <div className='planet-card'>
                        <PlanetCard namePlanet='01 MARS' describe='A small planet for the realization of all your childhood dreams of space travel.' classImage='image-mars' image='./src/assets/Mars.png' cardClass='planet-inner-box'/>
                        <PlanetCard namePlanet='03 SATURN' describe='Have you ever dreamed of jumping on the rings of Saturn? It is possible with us' classImage='image-saturn' image='./src/assets/Saturn.png' cardClass='planet-inner-box'/>       
                    </div>
                    <div className='content1'>
                        <PlanetCard namePlanet='02 URANUS' describe='Did you dream of becoming a polar explorer as a child? On Uranus, you can try yourself as a space polar explorer!' classImage='image-uranus' image='./src/assets/Uranus.png' cardClass='planet-card'/>
                    
                    </div>
                    
                </div>
                 
            </div>
        </body>
    )
}

export default Planet