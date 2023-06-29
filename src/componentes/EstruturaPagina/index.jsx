import React from "react";
import "./style.css"
import Topo from "../Topo"
import Rodape from "../Rodape"

export default function EstruturaPagina(props) {
    return(
        <section>

            <Topo/>

            {props.children}

            <Rodape/>
            
        </section>
    )
}