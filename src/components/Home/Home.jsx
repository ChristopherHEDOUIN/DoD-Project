import Friends from "../Friends/Friends";
import Description from "../Description/Description";
import Carrousel from "../Carousel/Carrousel";

export default function Home(){
    return(
        <header>
            <Description />
            <Carrousel />
            <Friends />
        </header>
    );
}