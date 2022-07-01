import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'

export const Login = () => {
  // Funcion en contexto, para autenticar el login
  const { loginAuth } = useAuthContext()

  // estados donde guardare los valores que se pongan en los inputs
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // estado de error si no se autentifican las credenciales
  const [error, setError] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    // checar si las credenciales estan bien
    try {
      await loginAuth(email, password)
    } catch (error) {
      setError(error)
    }
    // checa que si este mandado la info correcta
    console.log(email)
    console.log(password)
    // reinicia los vlaores del estado de password
    setPassword('')
  }

  return (
    <section className='Cont-Login'>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <h3>Login</h3>
        </div>
        {error !== '' ? <p style={{ backgroundColor: 'rgb(237, 88, 88)', borderRadius: '10px', width: '90%', textAlign: 'center', padding: '5px' }}>The E-mail or Password is no Bueno</p> : ''}
        <div className='cont-inp'>
          <input
            required
            name='email'
            placeholder='E-mail'
            type='email'
            className='form-input'
            onChange={event => setEmail(event.target.value)}
            value={email}
          />
        </div>
        <div className='cont-inp'>
          <input
            required
            name='password'
            placeholder='Password'
            type='password'
            className='form-input'
            onChange={event => setPassword(event.target.value)}
            value={password}
          />
        </div>
        <div style={{ width: '70%', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          <button type='submit' className='Login-btn'>Login</button>
          <button className='Login-btn'>
            <Link to='/User/SignUp' style={{ textDecoration: 'none', color: 'black' }}>SignUp</Link>
          </button>
        </div>
      </form>
    </section>
  )
}
