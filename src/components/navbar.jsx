// qustomhooks
import useAppContext from '../hooks/useAppContext'
// funciones y hooks de librerias
import { Link } from 'react-router-dom'
// styles
import '../assets/bag.png'
import '../styles/navbar.css'
import { useAuthContext } from '../context/AuthContext'

const Navbar = ({ about = '' }) => {
  const { hide, setHide, colo, setColo } = useAppContext()
  const { user } = useAuthContext()

  return (
    <header className='nav'>
      <div className='menu'>
        <Link className={about === '' && colo === 'menu' ? 'btnL-selected' : 'btn'} onClick={() => setColo('menu')} to='/items'>Home</Link>
        <Link className={about === 'About' ? 'btnL-selected' : 'btn'} onClick={() => setColo('About')} to='/About'>About</Link>
        <button className={hide ? 'btnL-selected' : 'btn'} onClick={() => setHide(!hide)}>
          {/* <img className='btnImgp' src='src/assets/lupa plomo.png' alt='Search button' style={{ height: '20px', width: '20px' }} /> */}
          <img className='btnImgb' src='/src/assets/lupaBlanca.png' alt='Search button' style={{ height: '20px', width: '20px' }} />
        </button>
      </div>
      <Link className='logo' to='/'>
        <img className='logoImg' src='/src/assets/bag.png' alt='bag logo img' />
        <div className='logoText'>
          <h1>DON JAIME</h1>
          <p>store</p>
        </div>
      </Link>
      <div className='perfil'>
        <Link className={about === 'user' ? 'btnI-selected' : 'user'} to={user !== '' ? `/User/Profile/${user.data.first_name}` : '/User/Login'}>{user !== '' ? <p>{user.data.first_name}</p> : <p>Who are you?</p>}<img src='/src/assets/User.png' alt='Imagen carrito de compras' /></Link>
        <Link className={colo === 'cart' ? 'btnI-selected' : 'carrito'} onClick={() => setColo('cart')} to='Cart'><img src='/src/assets/CarritoBlanc.png' alt='Imagen carrito de compras' /></Link>
        <Link className={colo === 'wish' ? 'btnI-selected' : 'favoritos'} onClick={() => setColo('wish')} to='Wishlist'><img src='/src/assets/CoraW.png' alt='Icono de favoritos' /></Link>
      </div>
    </header>
  )
}

export default Navbar
