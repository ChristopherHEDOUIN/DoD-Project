import './Title.scss'
import logo from '../../assets/Death-removebg-preview.jpg'

export default function Title(){
    return(
        <header className='header'>
            <img className='header-logo' src={logo} alt="logo-de-la-guilde"  />
            <h1 className='header-Title'>Death Or Die</h1>
        </header>
    );
}