import { createContext, useState } from 'react'

const AppContext = createContext(null)

// el que comunica a todos los componentes
const AppProvider = ({ children }) => {
  // Estado inicial de todos los articulos
  const [items, setItems] = useState([])
  // Estado de los aarticulos filtrados con los que hizo match
  const [filterItems, setFilterItems] = useState([])
  // Mensaje de error si no encontro ningun match con la busqueda
  const [sms, setSms] = useState({ type: '' })
  // estado para aparecer el buscador
  const [hide, setHide] = useState(false)

  // const cambio = () => {
  //   setHide(!hide)
  // }

  const handleFilterItems = (value) => {
    const filtered = items.filter((item) => {
      return item.product_name.toLowerCase().match(value.toLowerCase())
    })

    if (filtered.length === 0) {
      setFilterItems([])
      setSms({
        type: 'error',
        message: 'Search not found'
      })
    } else {
      setFilterItems(filtered)
      setSms({
        type: 'success',
        message: 'Countries found'
      })
    }
  }

  const initialValue = {
    setItems,
    handleFilterItems,
    setHide,
    hide,
    filterItems,
    sms
  }
  return (
    <AppContext.Provider value={initialValue}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
