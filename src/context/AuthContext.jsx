import axios from 'axios'
import { createContext, useContext, useState } from 'react'

// El que tiene los valos guardados
const AuthContext = createContext(null)

// El que abraza a los valores y necesita ser invocado para llamar a los valores para que se puedan comunicar entre si
const AuthProvider = ({ children }) => {
  // estado para verificar que tengo una sesion iniciada
  const [authed, setAuthed] = useState(false)
  // checa cada que se actualiza la pagina si se quedo un token en local storage
  const [init, setInit] = useState(false)

  const loginAuth = async (email, password) => {
    const response = await axios.post('https://ecomerce-master.herokuapp.com/api/v1/login', {
      email,
      password
    })
    // respuesta de axios
    const user = response.data
    console.log(user)
    setAuthed(true)
  }

  const initialValues = {
    loginAuth
  }

  return (
    <AuthContext.Provider value={initialValues}>
      {children}
    </AuthContext.Provider>
  )
}

// se crea hook dentro del contexto para evitar crear un archivo
const useAuthContext = () => {
  return useContext(AuthContext)
}

export { useAuthContext, AuthProvider }
