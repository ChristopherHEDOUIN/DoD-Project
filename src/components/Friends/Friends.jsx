import './Friends.scss';
import Avatar from '@mui/material/Avatar';
import Cyandre from '../../assets/Cyandre.png'
import Eiko from '../../assets/Eiko.jpeg'
import Kryal from '../../assets/Kryal.jpeg'
import Ouf from '../../assets/Ouf.jpeg'
import Zolke from '../../assets/Zolke.jpeg'

export default function Friends(){
    return(
        <article className='article'>
                <h2 className='article__mesPotesGeeks'>Mes Geeks</h2>
                    <ul className='article_avatar' >
                            <Avatar className='avatar' alt="Cyandre" srcSet={Cyandre} sx={{width: 200, height: 200, marginBottom: 1}} />
                            <Avatar className='avatar' alt="Eiko" src={Eiko} sx={{width: 200, height: 200, marginBottom: 1 }} />
                            <Avatar className='avatar' alt="Kryal" src={Kryal} sx={{width: 200, height: 200, marginBottom: 1}} />
                            <Avatar className='avatar' alt="Ouf" src={Ouf} sx={{width: 200, height: 200, marginBottom: 1}} />
                            <Avatar className='avatar' alt="Zolke" src={Zolke} sx={{width: 200, height: 200, marginBottom: 1}} /> 
                    </ul>            
        </article>
    );
}