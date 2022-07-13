import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sobre from '../pages/Sobre/Sobre'
import Portifolio from '../pages/Portifolio/Portifolio'
import Comentarios from '../pages/Comentarios/Comentarios'
import Contato from '../pages/Contato/Contato'
import Diario from '../pages/Diario/Diario'
import Menu from '../componentes/Menu/Menu'

function ApplicationRoutes() {
    return(
        <BrowserRouter>
            <Menu />
                <Routes>
                    <Route path="/" element={<Sobre />} />
                    <Route path="portifolio" element={<Portifolio/>} />
                    <Route path="diario" element={<Diario/>} />
                    <Route path="comentarios" element={<Comentarios />} />
                    <Route path="contato" element={<Contato />} />
                </Routes>
        </BrowserRouter>

    )
}

export default ApplicationRoutes