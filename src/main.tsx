import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//import './index.css'


//import Container from './Container.tsx'
import Pagina from './Pagina.tsx'
import Componente1 from './Componente1.tsx'
import Componente2 from './Componente2.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Componente1 />
  },
  {
    path: "/componente1",
    element: <Componente1 />
  },
  {
    path: "/componente2",
    element: <Componente2 />
  },

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      {/* <Container nome="Header" />  
    <Container nome="Body" />  
        <Container nome="Footer" />   */}
        <Pagina/>
  </StrictMode>,
)
  