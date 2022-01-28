import React from "react";

import Work from "../components/Work";

import elobe from "../img/elobe.png";
import dogclass from "../img/dogclass.png";
import prism from "../img/prism.png";

function Works() {
    return (
    <div>
        <Work title= {"ELOBE FOREST"} text={"CLT, like other mass timber products, naturally resists fire because it chars."} link={"https://elobeforest.com/"} imgSrc={elobe}/>

        <Work title= {"DOG CLASS"} text={"CLT, like other mass timber products, naturally resists fire because it chars."} link={"https://dogclass.pro/"} imgSrc={dogclass}/>

        <Work title= {"PRISM VISUAL ARTS"} text={"CLT, like other mass timber products, naturally resists fire because it chars."} link={"https://prismvisualarts.com"} imgSrc={prism}/>
    </div>
    )
}

export default Works;