import Header from '../../componentes/Header/Header'
import Image from '../../assets/projetinhos.svg'
import Footer from '../../componentes/Footer/Footer'

function Portifolio() {
    return(
        <>
            <Header 
                image={Image} 
                description={"ilustração de mulher com projeto"}
                >
                Meus Projetos
            </Header>
            <footer>
                <Footer> Página desenvolvida por Maria Roberta | Aluna Reprograma - On17 | 2022 </Footer>
            </footer>
        </>
    )
}

export default Portifolio