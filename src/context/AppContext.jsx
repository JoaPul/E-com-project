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

  // const addToCart = (index) => {
  //   setCart([...cart, index])
  // }

  const initialValue = {
    setItems,
    setHide,
    setCart,
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
