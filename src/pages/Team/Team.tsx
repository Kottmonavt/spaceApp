import './Team.css'

interface TeamCardProps {
    namePilot: string;
    role: string;
    image: string;
    description: string;
}

export const TeamCard = ({namePilot, role, image, description}: TeamCardProps) => {
    return (
        
        <div className='image-card'>
            <img src={image} alt="Img" className='image'/>  
            <div className='image overlay roboto-24'>{description}</div>
            <div className='pilot-name russo-24'>{namePilot}</div>
            <div className='pilot-role russo-24'>{role}</div>           
        </div>
    )
}

function Team() {
    return (
        <div>
            <div className='title-container-team russo-36'>Our Team</div>
            <div className='image-box'>
                <TeamCard namePilot='Shkaplerov A. N.' role='Spacecraft commander' image='./src/assets/Shkaplerov.jpg' description='Anton Nikolaevich Shkaplerov (born February 20, 1972, Sevastopol) is a Russian test cosmonaut of the Gagarin Research Institute of the Central Research Institute of the Russian Federation, Candidate of Technical Sciences, Colonel of the Russian Air Force (12/30/2009). He made four space flights to the International Space Station, during which he conducted three spacewalks — a total duration of 21 hours and 39 minutes. Hero of the Russian Federation (2013).'/>
                <TeamCard namePilot='Artemyev O. G.' role='The first pilot' image='./src/assets/Artemyev.jpg' description='Oleg Germanovich Artemyev (born December 28, 1970, Riga, Latvian SSR) is a Russian test cosmonaut of the Gagarin Research Institute of the Central Research Institute of the USSR, the 118th cosmonaut of the USSR/Russia and the 534th cosmonaut in the world. The total duration of the flights was 560 days, 18 hours and 06 minutes. He made eight spacewalks, the total duration of work in outer space was more than 53 hours.'/>
                <TeamCard namePilot='Kononenko O. D.' role='The second pilot' image='./src/assets/Kononenko.jpg' description='Oleg Dmitrievich Kononenko (born June 21, 1964, Chardzhou, Turkmen SSR) is a Russian cosmonaut, Hero of the Russian Federation, Hero of Turkmenistan.
Instructor-test cosmonaut of the 1st class, 473rd cosmonaut of the world, 102nd cosmonaut of the Russian Federation.  The total time in space was 1,110 days, 14 hours and 57 minutes, including 44 hours and 30 minutes in outer space'/>
            </div>
        </div>

    )
}
export default Team;