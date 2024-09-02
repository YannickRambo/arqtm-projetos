import tauane from "../../../public/tauane.jpeg";
import manu from "../../../public/manu.jpeg";
import "./Responsabilities.css";

export function Responsabilities() {
    return (
        <section id="responsabilities">
            <h1>NOSSAS ATUAÇÕES</h1>
            <div>
                <div className="figureContainer">
                    <figure className="figureContainerImage">
                        <img src={tauane} />
                    </figure>
                    <ul className="figureList">
                        <li>
                            <p>Planejamento Estratégico</p>
                        </li>
                        <li>
                            <p>Relacionamento com o cliente</p>
                        </li>
                        <li>
                            <p>Conformidade legal e regulamentos</p>
                        </li>
                    </ul>
                </div>
                <div className="figureContainer">
                    <figure className="figureContainerImage">
                        <img src={manu} />
                    </figure>
                    <ul className="figureList">
                        <li>
                            <p>Planejamento Estratégico</p>
                        </li>
                        <li>
                            <p>Gestão Financeira</p>
                        </li>
                        <li>
                            <p>Desenvolvimento de Negócios</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}