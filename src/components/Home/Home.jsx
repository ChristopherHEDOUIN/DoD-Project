import Friends from "../Friends/Friends";
import Description from "../Description/Description";
import Carrousel from "../Carousel/Carrousel";

import images from '../../data/images';

export default function Home(){
    return(
        <header>
            <Description />
            <Carrousel images={images} />
            <Friends />
        </header>
    );
}