import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PaginaInicial from './paginas/PaginaInicial'
import PaginaDetalhes from './paginas/PaginaDetalhes'
import BarraNavegacao from './components/BarraNavegacao'

function App() {
  return (
    <BrowserRouter>
      <BarraNavegacao />
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/produto/:id" element={<PaginaDetalhes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App