import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio.tsx'
import Juego from './pages/Juego.tsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/play" element={<Juego />} />
        <Route path="*" element={<Inicio />} />
      </Routes>
    </BrowserRouter>
  )
};
