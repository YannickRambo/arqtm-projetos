import { LiaBalanceScaleRightSolid } from "react-icons/lia";
import "./PrinciplesAndValues.css";
import { FaHandHoldingHeart } from "react-icons/fa";

export function PrinciplesAndValues() {
    return (
        <section className="principlesAndValues">
            <article className="principles">
                <div className="principlesAndValuesTitle">
                    <figure><LiaBalanceScaleRightSolid /></figure>
                    <h2>Princípios</h2>
                </div>
                <ul>
                    <li>
                        <p><span>SUSTENTABILIDADE CRIATIVA:</span> Acreditamos que a arquitetura deve respeitar e melhorar o meio ambiente. Nossos projetos são desenvolvidos com um compromisso rigoroso com práticas sustentáveis, utilizando materiais ecoeficientes e tecnologias verdes para garantir que cada espaço seja tão responsável quanto inspirador.</p>
                    </li>
                    <li>
                        <p><span>INTEGRAÇÃO COM O CONTEXTO:</span> Valorizamos a harmonia entre o projeto e o seu entorno. Cada criação é cuidadosamente integrada ao seu contexto cultural e natural, respeitando a história e o caráter único do local, enquanto propõe uma visão fresca e inovadora.</p>
                    </li>
                    <li>
                        <p><span>HUMANIZAÇÃO DO ESPAÇO:</span> Nossos projetos são centrados nas pessoas. Buscamos entender as necessidades e aspirações de nossos clientes, criando espaços que promovem o bem-estar e a convivência harmoniosa, onde cada elemento é pensado para enriquecer a experiência do usuario.</p>
                    </li>
                    <li>
                        <p><span>INOVAÇÃO E FUNCIONALIDADE:</span> A inovação é a nossa força motriz, mas nunca em detrimento da funcionalidade. Cada projeto busca um equilíbrio perfeito entre originalidade e praticidade, garantindo que cada solução arquitetônica não apenas surpreenda, mas também sirva efetivamente aos propósitos para os quais foi concebida.</p>
                    </li>
                    <li>
                        <p><span>COLABORAÇÃO E TRANSPARÊNCIA:</span> Enxergamos nossos clientes como parceiros na jornada do design.
                            Promovemos uma comunicação aberta e transparente ao longo de todo o processo, garantindo que cada decisão seja tomada em conjunto e que o resultado final reflita verdadeiramente a visão compartilhada.</p>
                    </li>
                </ul>
            </article>
            <article className="values">
                <div className="principlesAndValuesTitle">
                    <FaHandHoldingHeart/>
                    <h2>Valores</h2>
                </div>
                <ul>
                    <li>
                        <p><span>CRIATIVIDADE:</span> Cada projeto é uma nova tela em branco, onde a criatividade não tem limites e é a força que transforma conceitos em realidades palpáveis</p>
                    </li>
                    <li>
                        <p><span>RESPEITO:</span> Respeitamos o meio ambiente, o contexto cultural e as necessidades individuais, reconhecendo que a arquitetura deve sempre servir ao bem-estar coletivo e individual.</p>
                    </li>
                    <li>
                        <p><span>COMPROMISSO:</span> Comprometemo-nos a entregar a mais alta qualidade em cada etapa do processo, desde o planejamento até a execução, garantindo que nossos projetos superem as expectativas.</p>
                    </li>
                    <li>
                        <p><span>EMPATIA:</span> Empatia é a base de nosso trabalho. Colocamo-nos no lugar dos usuários finais para entender suas experiências e necessidades, moldando espaços que realmente tocam suas vidas.</p>
                    </li>
                    <li>
                        <p><span>EXCELÊNCIA:</span> Buscamos a excelência em cada detalhe, com um rigoroso padrão de qualidade que reflete nossa paixão pela arquitetura e nosso desejo de criar legados duradouros.</p>
                    </li>
                </ul>
            </article>
        </section>
    )
}