import './Description.scss'
import Friends from '../Friends/Friends';

export default function Description(){
    return(
        <section className='description'>
            <h3 className="header__title">Darkäsh, ce troll des cavernes.</h3>
            <h5 className='header__little title'>Je suis un Death Or Die.</h5>
            <p className='description__history'>Bonjour à tous, et bienvenue sur mon premier site web. Je suis ici pour vous raconter l'histoire d'un petit troll des cavernes qui a commencé le code il y a peu. Celui-ci étant un grand joueur inveteré de World Of Warcraft. Il a commencé à jouer après que son cousin Rainbow, aka Max, lui a dit de rejoindre le serveur du Culte de la Rive Noire. Vous me direz, le culte de la rive noire... Une zone sombre de World Of Warcraft ? Des lieux parsemés de personnages en robe noire et de sacrifice sur place publique. Mais non voyez vous, simple serveur PVE/PVP qui s'ammusait à te camper à Strangleronce quand toi tu n'étais qu'un pauvre nouveau joueur level 20. Mais qui n'a pas fait cela par vengeance par la suite ? Bon nombre d'histoire les plus farfelus les unes que les autres pourrait être raconter, mais commençons par le commencement. Premier choix à faire : <strong>Le personnage.</strong> </p>

            <p className="description__history">
                Tout d'abord, la faction. Je n'ai pas eu trop le choix, si nous voulions jouer ensemble, la Horde était un choix sans alternative.Je me connecte et choisi la faction de <strong>la Horde</strong>. Stupéfaction, plusieurs choix s'offrait à moi. Je vous passe les détails mais entre un Orc vert, un troll bleu, un elfe, et une vachette, le choix était difficile. Je me suis donc orienté sur les classes. Car celle ci ne pouvait être utilisé que par certaines Races. Un monsieur Ambidextre me plaisait bien et surtout un attaquant de front.Je me suis donc renseigné qui était le choix plus optimal concernant les statistiques des sorts de Races et il s'est averé que c'était les trolls.Me voila donc parti sur un troll, completement vouté qui est le désecendant d'une race ancestral qui a fui un pays que nous ne connetrons que bien plus tard.
            </p>
            <p className="description__history">
                Donc me voilà arrivé en Azeroth. Il est vrai que c'était plutot difficile au début. Beaucoup d'informations à retenir, les potes qui sont Haut Niveau ne viennent pas t'aider. Tu passes ton temps à gagner de l'expérience, faire du rush de quêtes et quelques (millier de) donjons. Plus tu avances et plus c'est l'évolution du personnage prends du temps. Et quand tu arrives à la fin de l'extension, finito tous le tralala, on te rush ton stuff et tu tue le dernier boss de raid en étant spécialisation "carpette"(mort avant la phase 1 du boss). Tu termines tout cela bien gentillement. Et c'est là que l'on t'explique que le jeu ne fait que commencer. Quêtes Journalière, Raid Hebdommadaire, Haut-Fait Mensuel, passer son temps à monter tes métiers, tes réputations pour débloquer des équipements importants ou juste des gadgets. 
            <strong>Ta deuxième vie commence...</strong>
            </p>
            <Friends />
        </section>
    );
}