import { useEffect, useState } from 'react'
import Header from '../../componentes/Header/Header'
import { FiTrash2, FiPlus } from 'react-icons/fi'
import Image from '../../assets/mulher.svg'
import './comentarios.css'

function Comentarios() {
    const getLocalList = () => {
        let items = localStorage.getItem('list')
        if(items) {
            return JSON.parse(localStorage.getItem('list'))
        } else {
            return []
        }
    }

    const [list, setList] = useState ([getLocalList])
    const [newitem, setNewItem] = useState ('')

    function handleCreateNewItem() {
        const item = {
            id: Math.random(),
            title: newitem
        }

        if(item.title === '') {
            return
        }

        setList([...list, item])
        setNewItem('')
    }

    function handleRemoveItem(id) {
        const itemsFiltered = list.filter(item => item.id !== id)
        setList(itemsFiltered)
    }

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
    }, [list])


    return(
     <>
       <Header 
         image={Image} 
         description="ilustracao mulher com coração"
       >
         Dicas, feedbacks e mensagens do coração
       </Header>
       <section className="list">
         <header>
           <div className="input-container">
             <input 
               type="text"
               placeholder="Digite aqui"
               onChange={(e) => setNewItem(e.target.value)}
               value={newitem}
             />
             <div className="add-container">
               <button className="add-task" 
               type="submit" 
               onClick={handleCreateNewItem}>
                 <FiPlus size={16} color="#fff" />
               </button>
             </div>
           </div>
         </header>
        <main>
            <ul className="list-items">
                {
                    list.map(item =>{
                        return(
                            <li key={item.id}>
                                <div>
                                    <p>{item.title}</p>
                                </div>
                                <button className="remove-task" 
                                type="button"
                                onClick={() => handleRemoveItem (item.id)}
                                >
                                    <FiTrash2 size={16} />
                                </button>
                            </li>
                        )
                    }
                    
                        )
                }
            </ul>
        </main>
       </section>
     </>
     
    )
   }
   
   export default Comentarios
   