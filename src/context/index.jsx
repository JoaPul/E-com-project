import { createContext, useState } from 'react'

const AppContext = createContext(null)

// el que comunica a todos los componentes
const ContextProvider = ({ children }) => {
  const [query, setQuery] = useState('')

  const initialValue = {
    query,
    setQuery
  }
  return (
    <AppContext.Provider value={initialValue}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, ContextProvider }
