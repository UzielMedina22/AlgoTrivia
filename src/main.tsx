import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import './index.css'
import Inicio from './pages/Inicio.tsx'
import { createBrowserRouter } from 'react-router'
import Juego from './pages/Juego.tsx'


const router = createBrowserRouter([
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
