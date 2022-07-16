import Header from "../../componentes/Header/Header"
import Image from '../../assets/bike.svg'
import Footer from "../../componentes/Footer/Footer"
import Textos from "../../componentes/Textos/Textos"
import './sobre.css'


function Sobre() {
    return(
        <>
            <Header 
                image={Image} 
                description={"ilustração de mulher com projeto"}
                >
                 Sobre mim...
            </Header>
            <section className="section-sobre">
                <div className="imagem">
                    <img src="https://media.giphy.com/media/dGzmyFMJ7dDyQwcdEg/giphy.gif" alt="Imagem da desenvolvedora da página"/>
                </div>
                <div className="sobre">
                    <Textos className="texto">
                        Eu sou Maria Roberta, tenho 29 anos, sou de Olinda - Pernambuco. Sou professora 
                        de reforço escolar autônoma desde 2017. Estou no processo de transição de carreira desde 
                        janeiro de 2022. A tecnologia sempre me fascinou, entender como as coisas funcionavam e 
                        como era tudo por "trás" das páginas me encantava. E agora me sinto cada dia mais próxima 
                        do meu objetivo, ser  a pessoa por trás das telas, desenvolvedora e fazer transição de carreira.
                    </Textos>
                    <Textos className="texto">
                        Curiosidades:
                        Como uma boa e velha canceriana, sou apaixonada pela lua!
                        Amante e defensora da natureza e de tudo que nela habita. Amo acampar, praia, andar de bicicleta
                        e passar horas olhando o céu. 
                    </Textos>
                </div>
            </section>
            <footer>
                <Footer> Página desenvolvida por Maria Roberta | Aluna Reprograma - On17 | 2022 </Footer>
            </footer>
        </>
    )
}

export default Sobre