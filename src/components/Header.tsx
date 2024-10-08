import { useNavigate } from 'react-router-dom'
import './header.css'


function Header() {
    const menuLinksLeft = [
        { 
            id: 1,
            title: "About",
            link: "/about"
        },
        {
            id: 2,
            title: "Our Team",
            link: ""
        },
        {
            id: 3,
            title: "Planet",
            link: ""
        },
        {
            id: 4,
            title: "Price",
            link: ""
        },
        {
            id: 5,
            title: "Explore",
            link: ""
        }
    ]

    const menuItemsLeft = menuLinksLeft.map((l) => (
        <button key={l.id} className={`button-header ${l.id === 5 ? 'special-button' : ''}`} onClick={()=> navigate(l.link)}>
            {l.title}
        </button>
    ))

    const navigate = useNavigate() 

    
    return (
    <header>

        <div className="container">
            <div className='right-button'>
                {menuItemsLeft}
            </div>
        </div>
    </header>
    )
}

export default Header