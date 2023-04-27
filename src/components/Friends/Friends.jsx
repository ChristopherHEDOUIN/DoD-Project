import './Friends.scss';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

export default function Friends(){
    return(
        <footer className='footer'>
                <h2 className='footer__mesPotesGeeks'>Mes Geeks</h2>
                    <ul className='footer__ul'>
                        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2, sm: 8, md: 10}} sx={{textAlign: 'center'}}>
                            <li className='footer__li'>
                                <Avatar src="../../../public/Ouf.jpeg" alt="imgjeuxpersonnage" sx={{ width:150, height:150 }} />
                                <Link href="#">
                                    Ouf, le raid Leader
                                </Link>
                            </li>
                            <li className='footer__li'>
                                <Avatar src="../../../public/Eiko.jpeg" alt="imgjeuxpersonnage" sx={{ width:150, height:150 }} />
                                <Link className='footer_a' href="#">
                                    Eikoban, le Nordiste
                                </Link>
                            </li>
                            <li className='footer__li'>
                                <Avatar src="../../../public/Zolke.jpeg" alt="imgjeuxpersonnage" sx={{ width:150, height:150 }} />
                                <Link className='footer_a' href="#">
                                    Zolke, le chat
                                </Link>
                            </li>
                            <li className='footer__li'>
                                <Avatar src="../../../public/Cyandre.png" alt="imgjeuxpersonnage" sx={{ width:150, height:150 }} />
                                <Link className='footer_a' href="#">
                                    Cyandre, l'officier jamais là
                                </Link>
                            </li>
                            <li className='footer__li'>
                                <Avatar src="../../../public/Kryal.jpeg" alt="imgjeuxpersonnage" sx={{ width:150, height:150 }} />
                                <Link className='footer_a' href="#">
                                    Kryalman, le dragon qui pue
                                </Link>
                            </li>
                        </Stack>
                    </ul>                    
        </footer>
    );
}