import Header from '../../componentes/Header/Header'
import Image from '../../assets/contato.svg'
import Footer from '../../componentes/Footer/Footer'

function Contato() {
    return(
        <>
            <Header 
                image={Image} 
                description={"ilustração de mulher com projeto"}
                >
                Meus Contatos
            </Header>
            <footer>
                <Footer> Página desenvolvida por Maria Roberta | Aluna Reprograma - On17 | 2022 </Footer>
            </footer>
        </>
    )
}

export default Contato