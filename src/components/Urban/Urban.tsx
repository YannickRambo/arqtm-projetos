import mapa1 from "../../../public/mapa1.jpeg";
import mapa2 from "../../../public/mapa2.jpeg";
import "./Urban.css";

export function Urban() {
    return (
        <div className="urban">
            <div>
                <h2>Projeto Urbano</h2>
                <ul>
                    <li>
                        <p>Leitura da área de intervenção</p>
                    </li>
                    <li>
                        <p>Município: Canoas</p>
                    </li>
                    <li>
                        <p>Região: Bairro São José divisa com o o Guajuviras</p>
                    </li>
                    <li>
                        <p>Perímetro: 12ha</p>
                    </li>
                    <li>
                        <p>Área: 1200.000 m2</p>
                    </li>
                </ul>
                <figure>
                    <img src={mapa1} alt=""/>
                </figure>
                <figure>
                    <img src={mapa2} alt=""/>
                </figure>
            </div>
            <div>
                <h2>Conceito</h2>
                <p>O projeto da gleba busca desenvolver um conceito de cidade caminhável, onde todas as necessidades básicas possam ser atendidas a pé em até 15 minutos, com vias seguras, boa circulação de pedestres e acesso eficiente ao transporte público. O objetivo é integrar diferentes classes sociais, promovendo convivência harmoniosa, segurança, e oportunidades para todos. O plano inclui a criação de parques, praças, ciclovias, áreas de convivência comunitária, escolas, centros culturais, e comércio local. Também prioriza a sustentabilidade, com práticas como coleta seletiva de lixo, painéis solares e jardins comunitários. A proposta visa construir um ambiente urbano inclusivo, sustentável e acolhedor para todos.</p>
                <h2>Análise Propositiva</h2>
                <p>Através de uma análise do bairro, decidimos que haverá uma via coletoras e as outras vias serão locais. Na divisão dos lotes, pensamos em colocar uma área central focada em comércio, já que não há facilidade de acesso local nos arredores.</p>
                <p>Optamos por lotes de 300 m² e quadras de 4.290 a 8.500 m² para otimizar o uso do espaço urbano, promovendo habitações adequadas e áreas de lazer. Essas medidas visam melhorar a infraestrutura, a mobilidade urbana e a qualidade de vida dos moradores, transformando o bairro em um espaço mais harmonioso e funcional.</p>
            </div>
            <div>
                <h2>Proposta</h2>
                <p>A proposta visa criar uma região de fácil acesso e segurança que suporte os quarteirões ao redor da gleba, destacando o conceito de "cidade caminhável". Serão implantadas praças públicas equipadas com quadras de esporte, brinquedos, equipamentos de musculação ao ar livre e vegetação nativa. Os setores mistos e comerciais estarão distribuídos para promover proximidade e atrair a população, com restaurantes, mercados e lojas. A sustentabilidade será incentivada por meio de coleta seletiva, reciclagem, transporte alternativo, iluminação LED e preservação de áreas verdes. O objetivo é criar um espaço funcional, seguro, vibrante e acolhedor, promovendo uma cidade mais humana e sustentável.</p>
                <p>O Plano Diretor foi utilizado para orientar o desenvolvimento do bairro São José, na divisa com o Guajuviras, visando um crescimento organizado e sustentável. As diretrizes definem áreas de uso residencial, comercial e de serviços, além de preservar áreas verdes e espaços públicos, melhorando a infraestrutura e a mobilidade urbana. Lotes de 300 m² e quadras entre 4.290 m² e 8.500 m² foram escolhidos para otimizar o uso do espaço urbano, promovendo habitações adequadas e áreas de lazer. Essas medidas buscam transformar o bairro em um espaço mais harmonioso e funcional, assegurando uma melhor qualidade de vida para os moradores.</p>
            </div>
        </div>
    );
}