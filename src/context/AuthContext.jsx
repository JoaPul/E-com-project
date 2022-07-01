import { createContext } from 'react'

// El que tiene los valos guardados
const AuthContext = createContext(null)

// El que abraza a los valores y necesita ser invocado para llamar a los valores
const AuthProvider = ({ children }) => {
  const initialValues = {}

  return (
    <AuthContext.Provider>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
