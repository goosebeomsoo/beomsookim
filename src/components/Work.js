import react from "react";

import "./work.css";

function Work({title, text, link, imgSrc}) {
    return (
        <div className="work__section">
            <h1 className="title">{ title }</h1>
            <p className="main-text">{ text }</p>
            <a href={ link } className="linkBtn">Learn more</a>
            <img src={ imgSrc } loading="lazy"/>
        </div>
    )
}

export default Work;