import './NavBar.scss'
import { useState } from 'react';
import { NavLink } from "react-router-dom";

export default function NavBar({ categories }){

    const [active, IsActive] = useState(true);
    const handleNavClick = () =>{
        IsActive(false);
    }

    return(
        <header className="menu">
            <nav className={`nav-items ${active && "switch"}`}>
                {
                    categories.map((category) => (
                        <NavLink
                            key={category.label}
                            to={category.label === 'Home' ? category.route : `${category.route}`}
                            className={({ isActive }) => (
                                isActive ? 'menu-link menu-link--selected' : 'menu-link'
                            )}
                            onClick={handleNavClick}
                            >
                            {category.label}
                        </NavLink>
                    ))
                }  
            </nav>
            <div 
                className={`nav-toggle ${active && "switch"}`}
                onClick={() => IsActive(!active)}>
                        
                <div className='hamburger'></div>
            </div>
        </header>
        );
}