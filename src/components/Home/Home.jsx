import NavBar from "../NavBar/NavBar";
import Title from "../Title/Title";

import categoriesData from '../../data/categorie';

export default function Home(){
    return(
        <header>
           <NavBar categories={categoriesData} />
           <Title />
        </header>
    );
}