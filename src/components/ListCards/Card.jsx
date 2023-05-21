import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function Card({dataCard}){

    const {sessionSlug} = useParams();
    const {slug, setSlug} = useState(null);
    const location = useLocation();

    //recupération lastPath dans l'url
    const thePath = location.pathname;
    const lastPath = thePath.split("/").pop();

    useEffect(()=> {fetch(`http://localhost:5173/blog/${sessionSlug}`)},[sessionSlug])
    if(lastPath === sessionSlug)

    return(
        <section 
            key={sessionSlug}
            className="section"
        >
            <h1 className="article__title">Je suis un <strong>nazca</strong></h1>
        {
        dataCard.map((post) => (
            <article className="section__article">
                <h2 className="article__tiltelittle">{post.title}</h2>
                <p className="article__paragraph">
                    {post.excerpt}   
                </p>
            </article> 
        ))
        }


           
    </section>

    );
}