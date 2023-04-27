import NavBar from "../NavBar/NavBar";
import categoriesData from '../../data/categorie';

export default function Home(){
    return(
        <header>
           <NavBar categories={categoriesData} />
        </header>
    );
}