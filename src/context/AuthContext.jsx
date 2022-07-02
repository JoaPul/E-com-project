import axios from 'axios'
import { createContext, useContext, useState, useEffect } from 'react'

// utils jwt
import { isValidToken, setSession } from '../utils/jwt'

// El que tiene los valos guardados
const AuthContext = createContext(null)

// El que abraza a los valores y necesita ser invocado para llamar a los valores para que se puedan comunicar entre si
const AuthProvider = ({ children }) => {
  // estado para guardar el token y el id del usuario cuando ya haga login
  const [token, setToken] = useState('')
  const [id, setId] = useState('none')
  // estado para guardar la información del usuario
  const [user, setUser] = useState('')
  // saber si ya hizo singUp
  const [si, setSi] = useState(false)
  const [nn, setNN] = useState('')

  const loginAuth = async (email, password) => {
    const response = await axios.post('https://ecomerce-master.herokuapp.com/api/v1/login', {
      email,
      password
    })
    // respuesta de axios
    setId(isValidToken(response.data.token))
    setToken(response.data.token)
    setSession(response.data.token)
    // estado para verificar si tiene una sesión iniciada
  }

  // SingUp
  const SignUpAuth = async (data) => {
    try {
      const response = await axios.post('https://ecomerce-master.herokuapp.com/api/v1/signup', data)
      // respuesta de axios
      console.log(response.data.first_name)
      setNN(response.data.first_name)
      setSi(true)
    } catch (error) {
      console.log(error)
    }
  }

  // valida si ya tengo un token en local storage
  useEffect(() => {
    try {
      if (window.localStorage.getItem('token') !== null && isValidToken(window.localStorage.getItem('token'))) {
        setId(isValidToken(window.localStorage.getItem('token')))
        setToken(window.localStorage.getItem('token'))
        // estado que verifica si tiene una sesion iniciada sindo que se actualizo el navegador y se guardo el token en local storage
      }
    } catch (error) {
      console.log(error)
    }
  }, [])

  // para obtener la info del usuario logueado
  useEffect(() => {
    // para checar si user ya tiene la info de el usuario
    if (user !== '') {
      return console.log(user)
    }
    // para hacer la petición de la info del usuario logueado
    if (token !== '' && id !== '') {
      // console.log(token)
      const funUser = async () => {
        setUser(await axios.get(`https://ecomerce-master.herokuapp.com/api/v1/user/${id}`, {
          headers: {
            Authorization: `JWT ${token}`
          }
        }))
      }
      funUser()
    }
  }, [token, user])

  const initialValues = {
    loginAuth,
    SignUpAuth,
    setNN,
    user,
    si,
    nn
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
