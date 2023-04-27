import './NavBar.scss'
import { NavLink } from "react-router-dom";

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
        </header>
        );
}