import './Friends.scss';
import Avatar from '@mui/material/Avatar';
import Cyandre from '../../../public/Cyandre.png'
import Eiko from '../../../public/Eiko.jpeg'
import Kryal from '../../../public/Kryal.jpeg'
import Ouf from '../../../public/Ouf.jpeg'
import Zolke from '../../../public/Zolke.jpeg'

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