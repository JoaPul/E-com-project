// pages
import App from './pages/App'
import Item from './pages/item'
import { About } from './pages/About'

// componentes
import Items from './components/items'

// funcioines de librerias
import { Navigate, useRoutes } from 'react-router-dom'
import { Wishlist } from './pages/Wishlist'
import { Cart } from './pages/Cart'

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
        },
        {
          path: 'item/:name',
          element: <Item />
        },
        {
          path: 'Wishlist',
          element: <Wishlist />
        },
        {
          path: 'Cart',
          element: <Cart />
        }
      ]
    },
    {
      path: '/About',
      element: <About />
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
