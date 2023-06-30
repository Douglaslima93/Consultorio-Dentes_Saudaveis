import React from "react";
import "./style.css"
import {Link} from "react-router-dom"
import EstruturaPagina from "../../EstruturaPagina";

const Home = () => {
    return(
        <EstruturaPagina>
            <div className="conteudo-home">
                <div className="limitar-secao">
                    <h1>OS MELHORES <span> APARELHOS DENTÁRIOS </span>!</h1>
                    <br/>
                    <p>Confira abaixo todas as especialidades odontológicas que temos á sua disposição!</p>
                    <br/>
                    <ul className="lista-servicos">

                        <li>
                            <img src="../img/dente.png" alt="Dente"/>
                            <p>Pré-avaliação</p>
                        </li>

                        <li>
                            <img src="../img/dente.png" alt="Dente"/>
                            <p>Aparelhos Dentarios</p>
                        </li>

                        <li>
                            <img src="../img/dente.png" alt="Dente"/>
                            <p>Raio-x digital</p>
                        </li>

                        <li>
                            <img src="../img/dente.png" alt="Dente"/>
                            <p>Clareamento dental</p>
                        </li>
                    </ul>
                </div>
            </div>

                        <h2 className="titulo-secao">POR QUE USAR <span>APARELHO</span> ?</h2>

                        <img className="imagem-aparelho" src="./img/aparelho.png" alt="Aparelho"/>

                        <ul className="lista-aparelho limitar-secao">
                            <li>
                                <h3>Alinhar os dentes</h3>
                                <p>Dentes desalinhados causam problemas nos dentes e podem afetar a
                                    digestão dos alimentos e a respiração. </p>
                            </li>

                            <li>
                                <h3>Melhorar a dicção e a higiene dentária</h3>
                                <p>Muitas pessoas não conseguem nen usar fio dental devido a posição da sua 
                                    dentição. Contudo, a correção possibilita o cuidado com a saúde bucal
                                    de forma bem mais ampla.
                                </p>
                            </li>

                            <li>
                                <h3>Corrigir espaço entre os dentes</h3>
                                <p>Uma dentição desalinhada e com espaços significativos incomodam muitas pessoas. 
                                    Usar aparelho nos dentes é uma das formas mais eficientes para que esses problemas 
                                    possam ser corrigidos.</p>
                            </li>
                        </ul>

                        <div className="conteudo-clientes-clientes limitar-secao">
                            <h2 className="titulo-secao">VEJA O QUE NOSSOS <span>CLIENTES</span> ESTÃO FALANDO...</h2>

                            <ul className="lista-clientes limitar-secao">
                                <li>
                                    <img src="./img/cliente01.png" alt="Cliente Alberto"/>
                                    <p>Alberto</p>
                                    <p>Usei aparelho por 2 anos e agora posso sorrir novamente.</p>
                                </li>

                                <li>
                                    <img src="./img/cliente02.png" alt="Cliente Eliana"/>
                                    <p>Eliana</p>
                                    <p>Meus dentes eram espaçados e depois de 1 ano estão no lugar certo.</p>
                                </li>

                                <li>
                                    <img src="./img/cliente03.png" alt="Cliente Carla"/>
                                    <p>Carla</p>
                                    <p>Começei a usar ano passado e já estou notando a diferença.</p>
                                </li>
                            </ul>
                        </div>

                        <div className="botao-contato">
                            <Link className="botao" to="/contato">Entrar em contato</Link>
                        </div>
        </EstruturaPagina>
    )
}

export default Home