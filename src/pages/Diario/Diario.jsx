import Header from '../../componentes/Header/Header'
import Image from '../../assets/projects.svg'
import Footer from '../../componentes/Footer/Footer'
import Texto from '../../componentes/Textos/Textos'
import Titulo from '../../componentes/Textos/Titulo'
import Gifs from '../../componentes/Gifs'

import './diario.css'

function Diario() {
    return(
        <>
            <Header 
                image={Image} 
                description={"ilustração de mulher com projeto"}
                >
                Meu Diário na Reprograma
            </Header>
            <article>
                <Titulo title="O que aprendi na Reprograma:" />
                <div className="container">
                    <Titulo className="titulo" title="Git/GitHub"/>
                    <Gifs image="https://media.giphy.com/media/kC2XrbvZlQzfHKhKaQ/giphy.gif" alt="Gif da série Aj and the queen, Rupaul andando"/>
                    <Texto><b>Git</b> Git é um sistema de controle de versão de arquivos/códigos, ou seja, eu uso o Git para criar versões do meu código. 
                    É possível que várias pessoas trabalhem juntas, deforma simuntânea no mesmo código editando e criando novos arquivos e permitindo que 
                    os mesmos possam existir sem o risco de suas alterações serem sobrescritas. O <b>GitHub</b> é uma plataforma de hospedagem de código, 
                    então os arquivos/códigos que foram criados e versionados são "guardados" no GitHub. Ele permite que outras pessoas cadastradas na 
                    plataforma contribuam em projetos privados e possam ver os códigos.</Texto>
                </div>

                <div className="container">
                    <Titulo className="titulo" title="HTML"/>
                    <Gifs image="https://media.giphy.com/media/eMfyklFdvERzJGQfZI/giphy.gif" alt="Gif da série Aj and the queen, Rupaul abrindo a porta"/>
                    <Texto> <b>HTML</b> é a sigla de Hypertext Markup Language, ou, em português, linguagem de marcação para hipertexto. São blocos de código
                     formam a estrutura da minha página, é o corpo da página. Estes blocos recebem conteúdo do tipo textos, imagens, vídeos, áudios e links. 
                    Quando acessamos uma página na web, o que vemos é a interpretação que o navegador está fazendo de um arquivo HTML, ou seja do que foi construído.</Texto>
                </div>

                <div className="container">
                    <Titulo className="titulo" title="CSS"/>
                    <Gifs image="https://media.giphy.com/media/lPjrMPvd6yitV7COkX/giphy.gif" alt="Gif da série Aj and the queen, AJ exibindo seus aneis e beleza" />
                    <Texto> <b>CSS</b> é a sigla para o termo em inglês Cascading Style Sheets que, traduzido para o português, significa Folha de Estilo 
                    em Cascatas. O CSS é focado no estilo toda a estética de um site, me permite dar minha identidade visual ao site e proporcionar ao usuário 
                    uma experiência agradável, com um site funcional e bonito.</Texto>
                </div>

                <div className="container">
                    <Titulo  className="titulo" title="JavaScript"/>
                    <Gifs image="https://media.giphy.com/media/mFSlUaVHSgIewSIDqe/giphy.gif" alt="Gif da série Aj and the queen, Rupaul dirigindo e chorando" />
                    <Texto><b>JavaScript</b> É uma linguagem de programação de comportamento que permite a criação de conteúdos dinâmicos, controle de mídias 
                    e animações para deixar seu site mais interativo e interessante. Aprendi o que é e como utilizar: variáveis, funções, arrays, objetos, loops, 
                    métodos de iteração, métodos de extração, métodos de manipulação usando o EC6, callback e tantas outras coisas. É fácil? Não! Entendi todas? 
                    Entendi. Mas sei como usar? Ainda não! Mas continuo estudando e me dedicando ao máximo para conseguir aplicar todo aprendizado. Determinação 
                    persistência sempre, pois desistir não é uma opção!</Texto>
                </div>
            </article>

            <footer>
                <Footer> Página desenvolvida por Maria Roberta | Aluna Reprograma - On17 | 2022 </Footer>
            </footer>
        </>
    )
}

export default Diario