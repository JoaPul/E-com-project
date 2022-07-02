// funciones de librerias (hooks)
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { AppProvider } from '../context/AppContext'
// import useAppContext from '../hooks/useAppContext'

// componentes
import Navbar from '../components/navbar'
// import Items from '../components/items'

// styles
import '../styles/app.css'
import { AuthProvider } from '../context/AuthContext'

const App = () => {
  return (
    <AppProvider>
      <AuthProvider>
        <Navbar />
        <div className='App'>
          <Suspense fallback={
            <section className='spinCont'>
              <p style={{ fontFamily: 'Fredoka', fontSize: '20px' }}>Loading...</p>
              <div className='contlogo'>
                <img className='spinnerLogoImg' src='/src/assets/bag.png' alt='bag logo img' />
                <h1>DON JAIME</h1>
                <p>store</p>
              </div>
            </section>
          }
          >
            <Outlet />
          </Suspense>
        </div>
      </AuthProvider>
    </AppProvider>
  )
}

export default App
