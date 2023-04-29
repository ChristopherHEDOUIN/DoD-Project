import './Carrousel.scss';
import { useState, useEffect,useRef } from 'react';
import wow1 from '../../assets/wow1.jpeg'
import wow2 from '../../assets/wow2.jpg'
import wow3 from '../../assets/wow3.jpeg'

export default function Carrousel(){
    
    const img = [{wow1}, {wow2}, {wow3}];
    const delay = 2500;
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }
    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === img.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
        return () => {
            resetTimeout();
        };
      }, [index]);

    return(
        <div className="slideshow">
            <div 
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {img.map((img, index) => (
                    <div 
                        className="slide" 
                        key={index}
                        style={{img}}
                    />
                
                ))}
            </div>
        </div>
    );
}