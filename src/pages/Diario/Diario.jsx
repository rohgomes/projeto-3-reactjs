import Header from '../../componentes/Header/Header'
import Image from '../../assets/projects.svg'
import Footer from '../../componentes/Footer/Footer'

function Diario() {
    return(
        <>
            <Header 
                image={Image} 
                description={"ilustração de mulher com projeto"}
                >
                Meu Diário na Reprograma
            </Header>
            <footer>
                <Footer> Página desenvolvida por Maria Roberta | Aluna Reprograma - On17 | 2022 </Footer>
            </footer>
        </>
    )
}

export default Diario