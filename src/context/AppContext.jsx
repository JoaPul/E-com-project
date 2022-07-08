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
  // estado para saber si esconder o dejar menu hamburgueza
  const [open, setOpen] = useState(false)
  // Artifulos no repetidos
  const [favNR, setFavNR] = useState([])
  const [cartNR, setCartNR] = useState([])

  const QuitaUnoW = (index) => {
    let i = 0
    setFav(fav.filter((elem) => {
      if (elem[1] === index[1] && i === 0) {
        i += 1
        return null
      } else {
        return elem
      }
    }))
  }

  const QuitaUnoC = (index) => {
    let i = 0
    setCart(cart.filter((elem) => {
      if (elem[1] === index[1] && i === 0) {
        i += 1
        return null
      } else {
        return elem
      }
    }))
  }

  const addToCart = (index) => {
    setCart([...cart, index])
    if (cart.length !== 0) {
      if (cart.filter((el) => { return el[1] !== index[1] && true }).length === cart.length) {
        setCartNR([...cartNR, index])
      }
    } else {
      setCartNR([...cartNR, index])
    }
  }

  const addToWish = (index) => {
    setFav([...fav, index])
    if (fav.length !== 0) {
      if (fav.filter((el) => { return el[1] !== index[1] && true }).length === fav.length) {
        setFavNR([...favNR, index])
      }
    } else {
      setFavNR([...favNR, index])
    }
  }

  const filterCart = (index) => {
    setCart(() => cart.filter((elem) => {
      return elem[1] !== index[1] && elem
    }))
    setCartNR(() => cartNR.filter((elem) => {
      return elem[1] !== index[1] && elem
    }))
  }

  const filterWish = (index) => {
    setFav(() => fav.filter((elem) => {
      return elem[1] !== index[1] && elem
    }))
    setFavNR(() => favNR.filter((elem) => {
      return elem[1] !== index[1] && elem
    }))
  }

  const initialValue = {
    setItems,
    setHide,
    setColo,
    setOpen,
    addToCart,
    addToWish,
    filterCart,
    filterWish,
    QuitaUnoW,
    QuitaUnoC,
    favNR,
    cartNR,
    open,
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
