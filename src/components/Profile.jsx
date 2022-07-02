import { useAuthContext } from '../context/AuthContext'
import { Link } from 'react-router-dom'

export const Profile = () => {
  const { user } = useAuthContext()

  // useEffect(() => {
  //   console.log(user)
  // }, [user])

  return (
    <section className='Cont-Perfil'>
      {user !== ''
        ? (
          <div className='userInfo'>
            <h1 className='UName'>User information</h1>
            <br />
            <h2 className='UName'>First Name: <span className='data'>{user.data.first_name}</span></h2>
            <hr />
            <h2 className='UName'>Last Name: <span className='data'>{user.data.last_name}</span></h2>
            <hr />
            <h2 className='UName'>Birth Day: <span className='data'>{user.data.birth_date.split('T')[0]}</span></h2>
            <hr />
            <h2 className='UName'>Gender: <span className='data'>{user.data.gender === 'M' ? 'Male' : 'Female'}</span></h2>
            <hr />
            <h2 className='UName'>Email: <span className='data'>{user.data.email}</span></h2>
            <br />
            <button className='Login-btn' onClick={() => window.localStorage.removeItem('token')}>
              <Link to='/Items' style={{ textDecoration: 'none', color: 'black' }}>Logout</Link>
            </button>
          </div>)
        : <h1>Loading...</h1>}
    </section>
  )
}
