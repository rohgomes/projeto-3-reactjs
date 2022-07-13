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
                Sobre
            </Header>
            <main>
                <div className="imagem">
                    <img src="" alt="Imagem da desenvolvedora da página"/>
                </div>
                <div className="sobre">
                    <Textos>
                        Eu sou Maria Roberta, tenho 29 anos, sou de Olinda - Pernambuco. Sou professora 
                        de reforço escolar autônoma desde 2017. E estou no processo de transição de carreira desde 
                        janeiro de 2022. A tecnologia sempre me fascinou, entender como as coisas funcionavam, 
                        como era tudo por trás das páginas me encantava. E agora me sinto cada dia mais próxima 
                        do meu objetivo, ser  a pessoa por trás das telas, Desenvolvedora e fazer transição de carreira.
                    </Textos>
                </div>
             </main>
            <footer>
                <Footer> Página desenvolvida por Maria Roberta | Aluna Reprograma - On17 | 2022 </Footer>
            </footer>
        </>
    )
}

export default Sobre