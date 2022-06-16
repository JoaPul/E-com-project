import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const useAppContext = () => {
  const context = useContext(AppContext)

  if (!context) throw new Error('No Hay un contexto activo')

  return context
}

export default useAppContext
