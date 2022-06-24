// qustomhooks
import useAppContext from '../hooks/useAppContext'
// funciones y hooks de librerias
import { Link } from 'react-router-dom'
// styles
import '../assets/bag.png'
import '../styles/navbar.css'

const Navbar = () => {
  const { hide, setHide } = useAppContext()

  return (
    <header className='nav'>
      <div className='menu'>
        <Link className='btn' to='/items'>Home</Link>
        <Link className='btn' to='/About'>About</Link>
        <button className='btn' onClick={() => setHide(!hide)}>
          {/* <img className='btnImgp' src='src/assets/lupa plomo.png' alt='Search button' style={{ height: '20px', width: '20px' }} /> */}
          <img className='btnImgb' src='../../src/assets/lupaBlanca.png' alt='Search button' style={{ height: '20px', width: '20px' }} />
        </button>
      </div>
      <Link className='logo' to='/'>
        <img className='logoImg' src='../../src/assets/bag.png' alt='bag logo img' />
        <div className='logoText'>
          <h1>DON JAIME</h1>
          <p>store</p>
        </div>
      </Link>
      <div className='perfil'>
        <button className='user'><img src='../../src/assets/User.png' alt='Imagen carrito de compras' /></button>
        <Link className='carrito' to='Cart'><img src='../../src/assets/CarritoBlanc.png' alt='Imagen carrito de compras' /></Link>
        <Link className='favoritos' to='Wishlist'><img src='../../src/assets/CoraW.png' alt='Icono de favoritos' /></Link>
      </div>
    </header>
  )
}

export default Navbar
