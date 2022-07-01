// pages
import App from './pages/App'
import Item from './pages/item'
import { About } from './pages/About'
import { User } from './pages/User'

// componentes
import Items from './components/items'
import { Wishlist } from './pages/Wishlist'
import { Cart } from './pages/Cart'
import { Login } from './components/Login'
import Signup from './components/Signup'
import { Profile } from './components/Profile'

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
    {
      path: '/User',
      element: <User />,
      children: [
        {
          path: 'Login',
          element: <Login />,
          index: true
        },
        {
          path: 'Profile/:name',
          element: <Profile />
        },
        {
          path: 'SignUp',
          element: <Signup />
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
