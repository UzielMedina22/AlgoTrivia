import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import './index.css'
import Inicio from './pages/Inicio.tsx'
import Juego from './pages/Juego.tsx'


const router = createHashRouter([
  {
    path: '/',
    element: <Inicio />
  },
  {
    path: '/play',
    element: <Juego />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
