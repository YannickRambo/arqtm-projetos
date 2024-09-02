import tauaneManu from "../../../public/tauane-manu.jpeg";
import "./Figure.css";

export function Figure() {
    return (
        <figure>
            <img src={tauaneManu} alt="Tauane e Manu" />
            <div className="about">
                <h1>O que oferecemos?</h1>
                <p>Na ARQT&M Projetos, cada projeto é uma oportunidade de criar algo único e significativo. Oferecemos uma gama completa de serviços de arquitetura, incluindo:</p>
                <ul className="aboutList">
                    <li>
                        <p>Projetos Residenciais e Comerciais Personalizados</p>
                    </li>
                    <li>
                        <p>Planejamento Urbano e Requalificação de Espaços Públicos</p>
                    </li>
                    <li>
                        <p>Consultoria para Desenvolvimento Imobiliário</p>
                    </li>
                    <li>
                        <p>Soluções Sustentáveis e Eficientes de Design</p>
                    </li>
                </ul>
            </div>
        </figure>
    )
}