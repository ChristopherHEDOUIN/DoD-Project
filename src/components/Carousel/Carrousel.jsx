import './Carrousel.scss';

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import wow1 from '../../assets/image 1.jpg'
import wow2 from '../../assets/image 2.jpg'
import wow3 from '../../assets/image 3.jpg'

export default function Carrousel(){
    return(
        <div className="slideshow"> 
            <AliceCarousel infinite disableButtonsControls autoPlay autoPlayInterval={3000}>
                <img src={wow1} className='slide' alt='world of warcraft' />
                <img src={wow2} className='slide' alt='world of warcraft' />
                <img src={wow3} className='slide' alt='world of warcraft' />
            </AliceCarousel>
            
        </div>
    );
}