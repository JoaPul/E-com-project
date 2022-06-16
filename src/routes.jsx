// pages
import App from './pages/App'

// componentes
import Items from './components/items'

// funcioines de librerias
import { Navigate, useRoutes } from 'react-router-dom'

// Items recibe un prop llamado 'esc'
// que es un estado que controla si aparece el buscador o no,
// le da la orden(cambia el estado) de aparecer el componente Navbar
const Path = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <Navigate to='/items' replace />
    },
    {
      path: '/items',
      element: <App />,
      children: [
        {
          element: <Items />,
          index: true
        }
      ]
    },
    // componente "page not found"
    {
      path: '/404',
      element: <p style={{ fontFamily: 'Fredoka', fontSize: '20px', textAlign: 'center' }}>Page not found</p>
    },
    {
      path: '*',
      element: <Navigate to='/404' replace />
    }
  ])

  return element
}

export default Path
