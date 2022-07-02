import axios from 'axios'
import { createContext, useContext, useState, useEffect } from 'react'

// utils jwt
import { isValidToken } from '../utils/jwt'

// El que tiene los valos guardados
const AuthContext = createContext(null)

// El que abraza a los valores y necesita ser invocado para llamar a los valores para que se puedan comunicar entre si
const AuthProvider = ({ children }) => {
  // estado para verificar que tengo una sesion iniciada
  const [authed, setAuthed] = useState(false)
  // checa cada que se actualiza la pagina si se quedo un token en local storage
  const [init, setInit] = useState(false)
  // estado para guardar el token y el id del usuario cuando ya haga login
  const [token, setToken] = useState('')
  const [id, setId] = useState('none')
  // estado para guardar la información del usuario
  const [user, setUser] = useState('')

  const loginAuth = async (email, password) => {
    const response = await axios.post('https://ecomerce-master.herokuapp.com/api/v1/login', {
      email,
      password
    })
    // respuesta de axios
    setId(isValidToken(response.data.token))
    setToken(response.data.token)
    setAuthed(true)
    setUser(await axios.get(`https://ecomerce-master.herokuapp.com/api/v1/user/${id}`, {
      headers: {
        Authorization: `JWT ${token}`
      }
    }))
  }

  useEffect(() => {
    if (user !== '') {
      console.log(user)
    }
  }, [user])

  const initialValues = {
    loginAuth,
    user
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
