import React from "react";
import "./style.css"
import Topo from "../../Topo"
import Rodape from "../../Rodape"

import {Link} from "react-router-dom"

const Home = () => {
    return(
        <section>
        <Topo/>

        <Rodape/>
        </section>
    )
}

export default Home