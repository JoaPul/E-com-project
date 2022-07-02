// aqui se pondra la validacion si el usuario si inicio secion y que persista el inicio de sesión, para cuando carguemos la pagina
import jwtDecode from 'jwt-decode'

// validar el token
export const isValidToken = (token) => {
  try {
    if (!token) {
      return false
    }
    const { id } = jwtDecode(token)
    return id
  } catch (error) {
    console.log(error)
  }
}

// guardar la sesión
export const setSession = (token) => {
  if (token) {
    window.localStorage.setItem('token', token)
  } else {
    window.localStorage.removeItem('token')
  }
}
