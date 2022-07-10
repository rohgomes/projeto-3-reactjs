import Header from '../../componentes/Header/Header'
import Image from '../../assets/projeto.svg'

function Portifolio() {
    return(
        <Header 
            image={Image} 
            description={"ilustração de mulher com projeto"}
            >
            Meus Projetos
        </Header>
    )
}

export default Portifolio