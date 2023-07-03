import React from "react";
import "./style.css"
import EstruturaPagina from "../../EstruturaPagina";
import Mapa from "../../Mapa"

const Contato = () => {
    return(
        <EstruturaPagina>
            <div className="contato-container">
                <div className="contato-mapa">
                <h2>Horário de <span>Atendimento</span></h2>

                <p>Agende uma consulta pelo telefone <a href="tel:+552136999999">(21) 3699-9999</a></p>

                <ul className="lista-medicos">
                    <li>
                        <img src="./img/medico01.png" alt="Dr. Hélio"/>
                        <p className="medico">Dr. Hélio</p>
                        <p>Segundas quartas e sextas das 09:00 ás 16:00</p>
                    </li>

                    <li>
                        <img src="./img/medico02.png" alt="Dr. Carlos"/>
                        <p className="medico">Dr. Carlos</p>
                        <p>Terças e quintas das 13:00 ás 18:00</p>
                    </li>

                    <li>
                        <img src="./img/medico03.png" alt="Dra. Suzana"/>
                        <p className="medico">Dra. Suzana</p>
                        <p>Terças, quintas e sábados das 08:00 ás 12:00</p>
                    </li>

                </ul>
                </div>

                <div className="contato-mapa">
                        <h2 className="titulo-mapa">Onde estamos <span>localizados</span> ?</h2>

                        <p>Av. Ayrton Senna, 3000 - Barra da Tijuca, Rio de Janeiro - RJ. CEP: 22775-904</p>
                        <Mapa/>
                </div>

            </div>
            
        </EstruturaPagina>
    )
}

export default Contato