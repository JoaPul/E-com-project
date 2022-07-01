import Navbar from '../components/navbar'
import { AppProvider } from '../context/AppContext'
import { Outlet } from 'react-router-dom'
import { AuthProvider } from '../context/AuthContext'

// components
// import { Login } from '../components/Login'

// styles
import '../styles/Login.css'

export const User = () => {
  return (
    <AppProvider>
      <AuthProvider>
        <Navbar about='user' />
        <Outlet />
      </AuthProvider>
    </AppProvider>
  )
}
