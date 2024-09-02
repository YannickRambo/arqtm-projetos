import ponte from "../../../public/ponte.jpeg";
import diagrama from "../../../public/diagrama-ponte.jpeg";
import "./Bridge.css";

export function Bridge() {
    return (
        <div className="bridge">
            <div>
                <h2>Ponte em Arco</h2>
                <figure>
                    <img src={ponte} alt="" />
                </figure>
                <h2>Introdução</h2>
                <p>Este trabalho abordará detalhadamente sobre a construção do projeto da Ponte em arco, apresentando seus elementos, seus cálculos, resultados e entre outros aspectos. </p>
                <p>Este trabalho propõe o projeto e construção experimental de uma ponte de espaguetes, desafiando métodos convencionais de engenharia civil. A ideia é explorar conceitos de resistência estrutural e distribuição de carga, aplicando na prática os princípios teóricos aprendidos em engenharia. Além de avançar o conhecimento na área, o projeto servirá como uma ferramenta educativa valiosa, demonstrando os desafios e soluções na engenharia estrutural contemporânea.</p>
            </div>
            <div>
                <h2>Simulação Computacional</h2>
                <p>Realizamos a ponte no Software chamado FTOOL, com sua altura, comprimento e seus esforços. Em seguida realizamos a ponte no AUTOCAD para observarmos com clareza e determinarmos os ângulos.</p>
                <figure>
                    <img src={diagrama} alt="" />
                </figure>
            </div>
            <div>
                <h2>Conclusões</h2>
                <ul>
                    <li>
                        <p>Neste trabalho foi projetada uma ponte em arco, com o objetivo de suportar uma força de 100kgf.</p>
                    </li>
                    <li>
                        <p>Com a ajuda de nossos métodos para a realização dos cálculos, conseguimos elaborar o projeto de maneira mais fácil. Trazendo exatamente os seus valores permitidos.</p>
                    </li>
                    <li>
                        <p>Nossa ponte foi feita para resistir a grandes forças de peso, porém na hora do teste, aguentou 9,2kg.</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}