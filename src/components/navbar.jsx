// qustomhooks
import useAppContext from '../hooks/useAppContext'
// funciones y hooks de librerias

// styles
import '../assets/bag.png'
import '../styles/navbar.css'

const Navbar = () => {
  const { hide, setHide } = useAppContext()

  return (
    <header className='nav'>
      <div className='logo'>
        <img className='logoImg' src='src/assets/bag.png' alt='bag logo img' />
        <h1>DON JAIME</h1>
        <p>store</p>
      </div>
      <div className='menu'>
        <button>Inicio</button>
        <button>Conocenos</button>
        <button onClick={() => setHide(!hide)}>Buscador</button>
      </div>
    </header>
  )
}

export default Navbar
