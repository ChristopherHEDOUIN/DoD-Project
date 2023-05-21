import './Curriculum.scss'
import Cinteret from '../../assets/CInteret.jpg'

export default function Curriculum(){
    return(
        <section className='curri'>
            <img src="" alt="" />
            <h1 className='curri-title'>Christopher HEDOUIN</h1>
            <h3 className='curri-subtitle'>à la recherche d'une alternance en tant que développeur web</h3>
            <p>Nantes / Remote</p>
            <p>chris.hedouin@lilo.org</p>
            <p>06.33.20.92.93</p>
            <p>@ChristopherHEDOUIN</p>
            <h2>Profil</h2>
            <p>
            Développeur Web et Mobile de 31ans avec une spécialisation enReactJS, je suis actuellement enreconversion professionnelle.
            Suite à la formation développeurweb et mobile suivi chez l'écoleO'Clock, j'ai développer mescompétences pendant six moisautour de PHP. Pour plus dechallenge, j'ai choisi un mois despécialisation sur la librairieReactJS. Je suis disponible pourune alternance d'une année afinde compléter ma formation etd'utiliser mes compétences dansle monde du travail.
            </p>
            <h4>Soft Skill</h4>
            <p>Autonomie Écoute Curiosité Gestion du stress Prise de recul</p>
            <h4>Langues</h4>
            <p>Français Anglais Espagnol</p>
            <h2>Centres D'interêts</h2>
            <img src={Cinteret} alt="image crosfit et manette jeux vidéo" />
            <h2>EXPERIENCE PROFESSIONNELLES</h2>
            <h3>DÉVELOPPEMENT WEB (Projet d'école)</h3>
            O'clock l Avril 2023
            La Cinquième Compagnie - Annuaire du funéraire.
            En équipe de quatre personnes pour référencer le milieu du
            funéraire. (pompes funèbres, crématoriums, cimetières)
            Poste occupé : Product Owner
            Je me suis occupé de la partie Front avec un collègue.
            Annuaire après recherche par commune et espace membre et
            création de compte avec authentification.
            ECOLE O'CLOCK
            Développeur Web et Web Mobile Niveau V -
            2023
            ➔ 3 mois de socle (HTML5, CSS3, JavaScript, PHP,
            MySQL)
            ➔ 1 mois de spécialisation en React.JS
            ➔ Projet d'une durée d'un mois:
            F O RMATI O N
            LYCÉE JULES FERRY
            BTS IRIS - 2012
            Informatique et Réseaux pour L'Industrie et les
            Services Techniques
        </section>
    );
}