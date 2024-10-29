import './Team.css'

interface TeamCardProps {
    namePilot: string;
    role: string;
    image: string;
}

export const TeamCard = ({namePilot, role, image}: TeamCardProps) => {
    return (
        
        <div className='image-card'>
            <img src={image} alt="Img" className='image'/>  
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
                <TeamCard namePilot='Shkaplerov A. N.' role='Spacecraft commander' image='./src/assets/Shkaplerov.jpg' />
                <TeamCard namePilot='Artemyev O. G.' role='The first pilot' image='./src/assets/Artemyev.jpg' />
                <TeamCard namePilot='Kononenko O. D.' role='The second pilot' image='./src/assets/Kononenko.jpg' />
            </div>
        </div>

    )
}
export default Team;