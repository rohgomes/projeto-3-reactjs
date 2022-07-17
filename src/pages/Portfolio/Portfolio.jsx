import { useState, useEffect } from 'react'
import { BsArrowReturnRight } from 'react-icons/bs'
import Header from '../../componentes/Header/Header'
import image from '../../assets/projects.svg'
import axios from 'axios'



import './portfolio.css'

const list = [
    {   id: 1,
        nome: "Página de matrícula", 
        descricao: "Página desenvolvida para matrícula de reforço escolar, atividade realizada em HTML, CSS e com responsividade.", 
        imagem: "https://media.giphy.com/media/XUzScqvlGjn3nf2yCg/giphy.gif",
        link: "https://media.giphy.com/media/XUzScqvlGjn3nf2yCg/giphy.gif"
    },
    {   id: 2,
        nome: "API Digimon", 
        descricao: "Página desenvolvida em html, css e javaScript, consumo de api.", 
        imagem: "https://media.giphy.com/media/TFN1cSzURSBsylvSPK/giphy.gif",
        link: "https://exibicao-digimons-por-maria-roberta.netlify.app/"
    },
    {   id: 3,
        nome: "Top 5 séries", 
        descricao: "Página criada usando HTML e CSS e populada com os dados do arquivo data.json usando JavaScrip.", 
        imagem: "https://media.giphy.com/media/OmpN9tnYnDVALn6MV0/giphy.gif",
        link: "https://cards-mulheres-trans-por-maria-roberta.netlify.app/"
    },
    {   id: 4,
        nome: "Meu diário Reprograma", 
        descricao: "Página desenvolvida em React, contem 4 projetos que desenvolvi na reprograma." , 
        imagem: "https://media.giphy.com/media/2IdAWZrCub3GJNNH8K/giphy.gif",
        link: "https://meu-diario-reprograma-por-maria-roberta.netlify.app"
    }

]

function Portfolio() {
    const [repos, setRepos] = useState([])
    const baseURL = 'https://api.github.com/users/rohgomes/repos'
  
    useEffect(()=> {
      axios
        .get(baseURL)
        .then((response) => setRepos(response.data))
    }, [])
  
    return(
     <>
      <Header 
        image={image} 
        description="ilustracao mulher com site"
      >
        Meus Projetos
      </Header>
  
      <div className="cartao-container">
        {
          list.map(projeto => {
            return(
              <div className="cartao" key={projeto.id}>
                <h1>{projeto.nome}</h1>
                <img src={projeto.imagem} alt={"gif do projeto "+ projeto.nome}/>
                <p>{projeto.descricao}</p>
                <a href={projeto.link} className="enter-repo" target="_blank">
                  <BsArrowReturnRight siz={16} color="#111"/> 		
                </a>
              </div>
            )
          })
        }
      </div>
      <h2 className="titulo">Outros Projetos no meu Github</h2>  
      <div className="card-container">
        {
          repos.map(repo => {
            return(
              <div className="card" key={repo.id}>
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
                <a href={repo.html_url} className="enter-repo" target="_blank">
                  <BsArrowReturnRight siz={16} color="#fff"/>
                </a>
              </div>
            )
          })
        }
      </div>
     </>
    )
   }
   
   export default Portfolio