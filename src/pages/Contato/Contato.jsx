import Header from '../../componentes/Header/Header'
import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs'
import Image from '../../assets/contato.svg'
import Footer from '../../componentes/Footer/Footer'

import './contato.css'

function Contato() {
    return(
        <>
            <Header 
                image={Image} 
                description={"ilustração de mulher com projeto"}
                >
                Meus Contatos
            </Header>

            <section className='card-contato'>
                <div className='contato'>
                    <p className='redes'><b>Instagram</b></p>
                    <a href= "https://www.instagram.com/robeerta.gomezz/" className="enter-repo" target="_blank">
                        <BsInstagram size={45} color="#fff"/>
                    </a>
                </div>
                <div className='contato'>
                    <p className='redes'><b>Linkedin</b></p>
                    <a href="https://www.linkedin.com/in/mrobertagomes/" className="enter-repo" target="_blank">
                        <BsLinkedin size={45} color="#fff"/>
                    </a>

                </div>
                <div className='contato'>
                    <p className='redes'><b>GitHub</b></p>
                    <a href="https://github.com/rohgomes" className="enter-repo" target="_blank">
                        <BsGithub size={45} color="#fff"/>
                    </a>

                </div >

            </section>

            <footer>
                <Footer> Página desenvolvida por Maria Roberta | Aluna Reprograma - On17 | 2022 </Footer>
            </footer>
        </>
    )
}

export default Contato