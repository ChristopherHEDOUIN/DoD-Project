import './Curriculum.scss'
import me from '../../assets/moi2.jpg'
import github from '../../assets/github.png'
import Cinteret from '../../assets/CInteret.jpg'

import { motion } from "framer-motion";

export default function Curriculum(){
    return(
        <article className='curri'>
            <section className='curri_expro'>
                <section className='curri_img'> 
                    <img className='curri_title_img' src={me} alt="photo de moi en costume" />
                </section>
                <section className='curri_infos'>
                    <section className='curri_title'>
                        <motion.h2 
                            className='curri_name'
                            initial={{ scale: 0 }}
                            animate={{ rotate: 360, scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 50,
                                damping: 13
                            }}
                        >
                            Christopher HEDOUIN
                        </motion.h2>
                        <h3 className='curri_subtitle'>à la recherche d'une alternance en tant que développeur web</h3>
                    </section>
                    <section className='curri_pro_oclock'>
                        <p>🏠 Nantes / Remote <br/>
                        ✉️ chris.hedouin@lilo.org<br/>
                        📞 06.33.20.92.93<br/>
                        <img src={github} width='20'height='20'/> @ChristopherHEDOUIN</p>
                    </section>
                    <section className='curri_pro'>
                        <h2 className='curri_pro_title'>💼 EXPERIENCE PROFESSIONNELLES</h2>
                        <section className="curri_pro_oclock">
                        <h4 className='curri_pro_subtitle'>O'clock - Avril 2023</h4>
                                <p>La Cinquième Compagnie - Annuaire du funéraire. En équipe de quatre personnes pour référencer le milieu du funéraire. (pompes funèbres, crématoriums, cimetières)<br/>Poste occupé : Product Owner. Je me suis occupé de la partie Front avec un collègue. Annuaire après recherche par commune et espace membre et création de compte avec authentification.</p>
                           
                        </section>
                        <h2 className='curri_pro_title'>🎓 FORMATION</h2>
                            <section className="curri_pro_oclock">
                                <h4 className='curri_pro_subtitle'>Développement Web (Projet d'école)</h4>
                                <p> Développeur Web et Web Mobile Niveau V -
                                2023<br/> 
                                ➔ 3 mois de socle (HTML5, CSS3, JavaScript, PHP,
                                MySQL)<br/> 
                                ➔ 1 mois de spécialisation en React.JS<br/> 
                                ➔ Projet d'une durée d'un mois
                                </p>
                                <h4 className='curri_pro_subtitle'>Lycée Jules Ferry - 2012</h4>
                                <p>BTS Informatique et Réseaux pour L'Industrie et les
                                Services Techniques</p>
                            </section>
                        
                    </section>
                </section>  
            </section> 
            <section className='curri_profil'>
                <section className='curri_profil_Infos'>
                    <h2 className='curri_profil_title'>👑 Profil</h2>
                    <section className="curri_pro_oclock">
                        <p>Développeur Web et Mobile de 31ans avec une spécialisation enReactJS, je suis actuellement enreconversion professionnelle.Suite à la formation développeurweb et mobile suivi chez l'écoleO'Clock, j'ai développer mescompétences pendant six moisautour de PHP. Pour plus dechallenge, j'ai choisi un mois despécialisation sur la librairieReactJS. Je suis disponible pourune alternance d'une année afinde compléter ma formation etd'utiliser mes compétences dans le monde du travail.
                        </p>
                        <h4 className='curri_pro_subtitle'>Soft Skill</h4>
                        <ul> 
                            <li className='curri_li'>Écoute</li>
                            <li className='curri_li'>Curiosité </li>
                            <li className='curri_li'>Autonomie</li>
                            <li className='curri_li'>Prise de recul</li>
                            <li className='curri_li'>Gestion du stress</li> 
                        </ul>
                        <h4 className='curri_pro_subtitle'>Langues</h4>
                        <ul>
                            <li className='curri_li'>Français</li>
                            <li className='curri_li'>Anglais</li>
                            <li className='curri_li'>Espagnol</li> 
                        </ul>
                    </section>
                </section>
                <section className='curri_profil_ci'>
                    <h2 className='curri_profil_title'>🏋️Centres D'interêts</h2>
                    <img src={Cinteret} alt="image crosfit et manette jeux vidéo" />
                </section>
            </section>
        </article>
    );
}