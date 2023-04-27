export default function Blog(){
    return(
        <section className="section">
            <h1 class="article__title">Je suis un <strong>nazca</strong></h1>
            <article className="section__article">
                <h2 class="article__tiltelittle">Saison 0 - bienvenue chez o'clock</h2>
                <p class="article__paragraph">
                    Bienvenue à tous, sur ce petit blog tenu par moi-même, Chris, petit étudiant chez O'Clock depuis le <time class="paragraph__time" datetime="2022-10-31">31 octobre 2022</time>. Tout débute par une féroce bataille avec Transition Professionnelle et ma propre société pour monter un dossier de reconversion. Le commerce ne me va plus comme un gand. J'ai lancer la procédure début Printemps. Je fais des recherches sur les possibilités d'emploi sur la zone ou je vis. Après plusieurs semaines de recherche, je lance la demande. Pour rentrer chez O'clock, il faut passer par <a class="paragraph__link" href="https://oclock.io/blog/444/le-chemin-vers-oclock">le chemin</a>. Pour commencer <dfn class="paragraph__dfn">la génèse</dfn> : c'est tous simplement le partage de notre dossier d'inscription. Puis, le plus sérieux commence. <dfn class="paragraph__dfn">Le rituel d'initiation</dfn>. Oui, je sais, ça fait peur. Sauf que rien du tout. Plutôt détente, un petit questionnaire sur notre culture informatique, notre logique et notre anglais (catastrophique) vous attends. Une fois le test réussi. Une petite vidéo sur notre motivation, notre envie et notre setup. Montrez son environnement de travail, le lieu de vie de nos prochains mois. O'clock vous a admis, votre dossier est accepté par Transition Professionnelle, vous voilà embarquer dans la Dolorean pour votre futur.<br/>
                    La saison 0 commence. Mise en route d'une installation d'une classe virtuelle durant les deux premières semaines avant la rentrée. On part sur une saison avec les vingts "tâches d'Hercules" ! Elles servent principalement à mettre en place tous le réseau et les outils que nous allons utilisé chaque jour. Slack pour echangé avec les profs, la promo dans laquelles on se trouve, mais aussi les Alumnis. Test du <dfn class="paragraph__dfn">Cockpit</dfn>: un lieu d'apprentissage directement dans ton ordinateur ! Ton discord pour pouvoir echanger avec les autres étudiants en dehors et pendant les cours. L'engagement, la prise d'une pillule rouge pour certifié ta dévotion à la formation. Autres outils comme google drive, github et twitter mis en avant pour le fonctionnement des cours et sa propre veille technologique. Quelques entrainements et mise en bouche de code en s'amusant (jeu vidéo ou lecture). Un dernier et ultime questionnaire avant le premier jour. Le dernier week-end réel. Après celui-ci...<em class="paragraph__important">la rentrée</em> !
                </p>
            </article>
            <article>
            <h2 class="article__tiltelittle">Saison 1 - HyperText Markup Language et Cascading Style Sheets</h2>
                <p class="article__paragraph">
                    <em class="paragraph__em">Le premier jour</em>. Après plusieurs mois d'attente, retour en classe. On arrive tout timide, classe de 49 élèves. On nous annonce le parcours que l'on va faire, présentation de l'école ainsi que notre réferente. Celle qui nous suivra du début à la fin. Présentation du cockpit et rappel sur notre environnement de travail. Github, notre outils de partage de cours et de challenges journaliers. Informations sur le téléporteur et ses caprisses. Rapide présentation de VSCode, obligation d'utilisation de google Chrome et quelques rapide notions sur le Terminal ! Etude du markdown et explications de son utilité dans tous site !
                    Fin de journée vers <time class="paragraph__time" datetime="16:00">16h00</time> deux quizz sur la journée et des conseils de lecture sur la réussite de notre formation et les bases du HTML.<br/>
                    <em class="paragraph__em">Le deuxième jour</em>. On va parlé du contenu ! Premiere balise, premier site internet pas sur le net ,premier git clone. On parle sémentique, balise HTML et mise en place du CSS. A FOND LA FORME ! Vous vous en doutez, HTML pour le fond et le CSS pour la forme. Définition et principe des deux languages. Le premier, HTML. <span class="colorComment"> commentaires {'<-- -->'}</span>, les balises fermantes (possibilité de qualifier finement le contenu), autofermantes, les attributs, l'indentation, l'imbrication familliale des balises, les éléments block ou inline ainsi les liens avec les ancres et le URL relative ou absolue. Le deuxieme, CSS. Fichier séparé du HTML, et link dans le header de notre site. La structure du CSS : Selecteur, propriéré et valeur, ce qu'on souhaite modifier, ou et comment. Les classes et le id, les unités de coleur ou de tailles, les pseudo-classes et l'héritage.<br/>
                    <em class="paragraph__em">Le troisième jour</em>. BoxModel Powaaa ! On essaye de structurer sa page au mieux avec les balises sémentiques, apprentissage de la différence entre le Block et le Inline, quelques approfondissement de balise CSS (margin, padding, tableau), la balise img pour implémenter de petite image sympathique notre site. Et finir notre journée sur du BoxModel. Challenge HEROCORP Accepté !<br/>
                    <em class="paragraph__em">Le quatrieme jour</em>. Les layouts et debut du FlexBox. Rien de vaut mieux qu'un exemple. L'action du float est présent dans ce petit paragraphe et cette partie du site est "flexboxé" comme quasiment tous le reste.<br/>
                    <em class="paragraph__em">Le cinquième jour</em>. Petit Atelier en <strong class="paragraph__important">Pair Programming</strong>. Tous nouveau pour ma part ! Je prends cela comme un challenge. Nous travaillons ma superbe co-programmeuse et moi sur un petit site a mettre en forme. Utilisation de FlexBox et de Grid ! Journée interessante et intense, on ne veut plus s'arrêter. Impression d'être déjà sur du travail concret avec des horaires fixé. S'obligé a prendre des poses pour aerer son esprit.<br/>
                    <em class="paragraph__em">Le sixième jour</em>.Différents outils d'apprentissage : <dfn class="paragraph__dfn">B.E.M.</dfn> - Block Element Modifier, unités <dfn class="paragraph__dfn">"vw"</dfn> - viewport width et <dfn class="paragraph__dfn">"vh"</dfn> - "hauteur de la fenêtre". Position Relative, fixed et absolute ! Petite journée bien sympathique avec un challenge sur des images de cameléons et une petit intrus a dispositionné comme une galerie d'image !<br/>
                    <em class="paragraph__em">Le septieme jour</em> le fameux font-zise:0, un peu de pseudo classes et surtour du Responsive Web Design, adapté son site pour tous les types d'écran différent. Mobile First, car on est H24 sur nos téléphone. Quelques petites <span class="transition">transitions</span> rapide.<br/>
                    <em class="paragraph__em">Le dernier jour</em>. Dernier jour de cette saison, nous avons fait un long parcours, parsemez de remise en questions sur certaines notions qu'on pensait acquises mais qui manquait d'approfondissement. Petit Parcours d'une durée de trois heures. Première mise en condition sur quelques exercices données sur du HTML et du CSS. L'objectif est soft. Pas de prises de tête, pas de notes, mais un certains plaisir a finir chaques exercices et les exercices bonus. Auto-correction et auto-évalutation. Petit KiemTao pour partager son humeur de la semaine. Et pour finalisé une petit challenge sur le Terminal.
                    Fin de saison, le HTML et CSS, c'est fini. Enfin, on s'entraine encore un peu chaque week-end.
                </p>
            </article>
            <article>
                <h2 class="article__tiltelittle">Saison 2 - hypertext preprocessor</h2>
                <p class="article__paragraph">
                    Format Différent pour cette nouvelle Saison. Apprentissage intensive sur le fonctionnement d'un serveur et son rôle. Que fait une page PHP et que fait un serveur avec une page ecrite en PHP. Survol du serveur Apache. Et mise en place d'un nouveau style de programmation : variables, types de données, les structures conditionnelles, des comparaisons. Nouvelles balises <span class="colorPhp">"php"</span>, commentaire <span class="colorPhp">//</span>, le fameux <span class="colorPhp">echo</span>. On a pu ensuite se former sur les include et require, les tableaux simples <span class="colorPhp">[ ]</span> et quelques boucles (for, while, foreach). Avec les petites boucles, nous avons parcouru des nouveaux tableaux. Les fameux tableaux assosiatif, qui avec une petite boucle sympathique qui nous permettais de couvrir les index et les valeurs. L'heure de l'Atelier est de retour, nouvelle obejctif, multipages en PHP pour faire des mises en pages de plusieurs page php pour lier tous les articles ensembles O'news, nous voila ! Mise en place de notre premier formulaire. Comprehension de ou se dirige les infos et ou les recupérer ! <span class="colorPhp">GET and POST</span> deviennent tes amis. Puis l'arrivé des fonctions, a l'instant T, tres peu de comprehension de l'utilité de ce nouvelle outils. Mais lorsque tous se complexifie, cela saute au yeux, comment faire sans elle ?!? On en crée a tous va, et on les utilise pour mieux avancé dans notre compréhension du PHP. Assemblage des notions vues depuis le début de la saison, on rajoute du contenu au site O'News... Demain, les grands jours du Bilan de la saison ! Le parcours est la, un peu de tension sur ce nouveau langage qui remets en doute notre apprentissage de la semaine, mais on confirme certains et en apprendre d'autres. 
                    Fin du premier clap du PHP !
                </p>
            </article>
            <article>
                <h2 class="article__tiltelittle">Saison 3 - javascript</h2>
                <p class="article__paragraph">
                    On continue sur un format plus court et condensé. Ce premier jour de JS, apprentissage des bases. Quasi même syntaxe que le PHP. Quelques simplifications mais rien de transandant. On arrive rapidement en fin de premier journée a voir ce qu'on a vu en une semaine en php. On rentre dans le vif du sujet. Mise en place des variables, les types de données qu'on peut utilisé, les conditions, boucles et fonctions. Pour l'instant, rien de très pertubant. Arrive le <def class="paragraph__dfn">DOM</def> -  Document Object Model, c'est une interface de programmation qui permet d'acceder au elements d'une page web. Quelques manipulations, ciblage de certaine balises HTML. Puis viens les évènements, apprendre a écouter et lire un évènement fait par l'utilisateur sur le site. Pouvoir prevenir et interagir avec lui lorsque une utilisation sera faite.<br/> Exemple : <button id="theme-switch" class="btn" type="button" aria-label="Changer le thème">DarkTheme</button>. Les fonctions sont de retour pour le reste de la saison ! Petit atelier Trip'Odvisor en pair-programming, verification de notre utilisation du DOM et des Evenements a travers un petit site pour gerer une pop up de newsletters. Organisations et decoupage du code à travers les modules. Sépariter du codes par rapport a la demande du site : newsletters, gestions theme couleurs, favoris, avec une mise en place d'une fonction init dans le module. But : isolation d'action en différent fichier pour meilleurs lecture de code et eviter les conflits. Juste apres cela, nouvelles notions ! Les cookies !! Le localStorage et sessionStorage avec notre ami JSON. Finalisation avec le Dataset et son fonctionnement. Pacours prevu avec beaucoup d'algebre, plein d'exercice sur des Maths et des calculs. Boucles encore un peu caothiques mais on s'en sort quand même.
                    Fin de saison plus calme avec un Atelier revision suivi d'une veille et d'une mise a jour de son CV linkedin.
                </p>
            </article>
    </section>

    );
}