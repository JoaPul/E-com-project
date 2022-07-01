import Navbar from '../components/navbar'
import { AppProvider } from '../context/AppContext'

// styles
import '../styles/Login.css'

export const Login = () => {
  return (
    <AppProvider>
      <Navbar about='user' />
      <section className='Cont-Login'>
        <form className='form'>
          <div>
            <h3>Login</h3>
          </div>
          <div className='cont-inp'>
            <input name='username' placeholder='Username' type='text' className='form-input' />
          </div>
          <div className='cont-inp'>
            <input name='password' placeholder='Password' type='passwprd' className='form-input' />
          </div>
          <button type='submit' className='Login-btn'>Login</button>
        </form>
      </section>
    </AppProvider>
  )
}
