import { createContext, useState } from 'react'

const AppContext = createContext(null)

// el que comunica a todos los componentes
const AppProvider = ({ children }) => {
  // Informacion de Articulo seleccionado(primera posicion), link de imagen para el articulo(segunda posicion)
  const [items, setItems] = useState([])
  // estado para aparecer el buscador
  const [hide, setHide] = useState(false)
  // lista de carrito
  const [cart, setCart] = useState([])
  // lista de favoritos
  const [fav, setFav] = useState([])
  // Estado para cambiar de color, botones de navBar
  const [colo, setColo] = useState('menu')

  const addToCart = (index) => {
    setCart([...cart, index])
  }

  const addToWish = (index) => {
    setFav([...fav, index])
  }

  const filterCart = (index) => {
    setCart(() => cart.filter((elem) => {
      return elem !== index
    }))
  }
  const filterWish = (index) => {
    setFav(() => fav.filter((elem) => {
      return elem !== index
    }))
  }

  const initialValue = {
    setItems,
    setHide,
    setColo,
    addToCart,
    addToWish,
    filterCart,
    filterWish,
    colo,
    fav,
    cart,
    items,
    hide
  }

  return (
    <AppContext.Provider value={initialValue}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
