import './NavBar.scss'
import { NavLink } from "react-router-dom";
import logo from '../../assets/Death-removebg-preview.jpg'

export default function NavBar({ categories }){
    return(
        <header className="menu">
            <nav className='nav'>
                {
                    categories.map((category) => (
                        <NavLink
                            key={category.label}
                            to={category.label === 'Home' ? category.route : `${category.route}`}
                            className={({ isActive }) => (
                                isActive ? 'menu-link menu-link--selected' : 'menu-link'
                            )}
                            >
                            {category.label}
                        </NavLink>
                    ))
                }
            </nav>
            <img className='menu__logo' src={logo} alt="Logo__Guilde__DeathOrDie" width='300' height='300' />
        </header>
        );
}