import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'

const Signup = () => {
  const { SignUpAuth, si } = useAuthContext()

  // estados para los valores de los inputs
  const [fn, setFn] = useState()
  const [ln, setLn] = useState()
  const [Bd, setBd] = useState()
  const [gen, setGen] = useState()
  const [em, setEm] = useState()
  const [ps, setPs] = useState()

  const navigate = useNavigate()

  const Submit = async (event) => {
    event.preventDefault()
    const data = {
      first_name: fn,
      last_name: ln,
      birth_date: Bd,
      gender: gen,
      email: em,
      password: ps
    }
    await SignUpAuth(data)
  }
  useEffect(() => {
    if (si) {
      navigate('/User/Login')
    }
  }, [si])

  return (
    <section className='Cont-Login'>
      <form className='form-SignUp' onSubmit={Submit}>
        <div>
          <h3>SignUp</h3>
        </div>
        <div className='cont-inp'>
          <input
            required
            name='FirstName'
            placeholder='First Name'
            type='text'
            className='form-input'
            onChange={event => setFn(event.target.value)}
          />
        </div>
        <div className='cont-inp'>
          <input
            required
            name='LastName'
            placeholder='LastName'
            type='text'
            className='form-input'
            onChange={event => setLn(event.target.value)}
          />
        </div>
        <div className='cont-inp'>
          <input
            required
            name='BirthDate'
            placeholder='Birth Day'
            type='date'
            className='form-input'
            onChange={event => setBd(event.target.value)}
          />
        </div>
        <div className='cont-inp'>
          <div className='Gender'>
            <input
              name='gen'
              type='radio'
              onChange={event => setGen('M')}
            />Male
          </div>
          <div className='Gender'>
            <input
              name='gen'
              type='radio'
              onChange={event => setGen('F')}
            />Female
          </div>
        </div>
        <div className='cont-inp'>
          <input
            required
            name='Email'
            placeholder='E-mail'
            type='email'
            className='form-input'
            onChange={event => setEm(event.target.value)}
          />
        </div>
        <div className='cont-inp'>
          <input
            required
            name='Password'
            placeholder='Password'
            type='password'
            className='form-input'
            onChange={event => setPs(event.target.value)}
          />
        </div>
        <button type='submit' className='Login-btn'>SignUp</button>
      </form>
    </section>
  )
}

export default Signup
