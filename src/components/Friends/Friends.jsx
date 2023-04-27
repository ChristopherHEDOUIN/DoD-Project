import './Friends.scss';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

export default function Friends(){
    return(
        <article className='article'>
                <h2 className='article__mesPotesGeeks'>Mes Geeks</h2>
                    <ul className='article__ul'>
                        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2, sm: 8, md: 10}}>
                            <li className='article__li'>
                                <Avatar src="../../../public/Ouf.jpeg" alt="imgjeuxpersonnage" sx={{ width:150, height:150, }} />
                                <Link className='article__a'href="#">
                                    Ouf
                                </Link>
                            </li>
                            <li className='article__li'>
                                <Avatar src="../../../public/Eiko.jpeg" alt="imgjeuxpersonnage" sx={{ width:150, height:150 }} />
                                <Link className='article__a' href="#">
                                    Eikoban
                                </Link>
                            </li>
                            <li className='article__li'>
                                <Avatar src="../../../public/Zolke.jpeg" alt="imgjeuxpersonnage" sx={{ width:150, height:150 }} />
                                <Link className='article__a' href="#">
                                    Zolke
                                </Link>
                            </li>
                            <li className='article__li'>
                                <Avatar src="../../../public/Cyandre.png" alt="imgjeuxpersonnage" sx={{ width:150, height:150 }} />
                                <Link className='article__a' href="#">
                                    Cyandre
                                </Link>
                            </li>
                            <li className='article__li'>
                                <Avatar src="../../../public/Kryal.jpeg" alt="imgjeuxpersonnage" sx={{ width:150, height:150 }} />
                                <Link className='article__a' href="#">
                                    Kryalman
                                </Link>
                            </li>
                        </Stack>
                    </ul>                    
        </article>
    );
}