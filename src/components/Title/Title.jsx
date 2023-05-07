import './Title.scss'
import logo from '../../assets/Death-removebg-preview.jpg'
import { motion } from "framer-motion"

export default function Title(){
    return(
        <header className='header'>
            <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 1.5 }}
                className='header-logo' 
                src={logo} 
                alt="logo-de-la-guilde"  
            />
            <img />
            <h1 className='header-Title'>Death Or Die</h1>
        </header>
    );
}