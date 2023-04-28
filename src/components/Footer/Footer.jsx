import './Footer.scss'
import { Link } from 'react-router-dom';


export default function Footer(){

    return(
        <footer className='footer'>
            <ul>
                <li>
                    <Link 
                        to="/"
                        className='footer__link'
                        onClick={() =>{
                            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                        }}
                    >
                        DoD
                    </Link>
                </li>
            </ul>
        </footer>
    );
}