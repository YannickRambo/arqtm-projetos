import uniritter from "../../../public/uniritter.png";
import "./Footer.css";

export function Footer() {
    return (
        <footer>
            <h1>TRABALHO DE FACULDADE</h1>
            <section>
                <h2>FACULDADE UNIRITTER CANOAS</h2>
                <p><span>MATÉRIA:</span> PRÁTICAS PROFISSIONAIS</p>
                <p><span>PROFESSORA:</span> ÉRICA DALL'ASTA</p>
                <p><span>ALUNAS DO PROJETO:</span> JÉSSICA SILVEIRA E MANUELLA KLEIN</p>
                <p><span>DESENVOLVEDOR DO SITE:</span> YANNICK RAMBO</p>
                <img src={uniritter} alt="Logo Uniritter"/>
            </section>
        </footer>
    )
}