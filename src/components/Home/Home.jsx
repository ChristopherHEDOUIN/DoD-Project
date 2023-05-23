import Friends from "../Friends/Friends";
import Title from '../Title/Title';
import Carrousel from "../Carousel/Carrousel";
import Description from "../Description/Description";

import images from '../../data/images';

export default function Home(){
    return(
        <header>
            <Title />
            <Description />
            <Carrousel images={images} />
            <Friends />
        </header>
    );
}