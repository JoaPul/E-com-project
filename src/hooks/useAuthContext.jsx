// se sutituyo por el mismo hook definido en AuthContext
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const useAuthContext = () => {
  const context = useContext(AuthContext)

  if (!context) throw new Error('No Hay un contexto para Login')

  return context
}

export default useAuthContext
