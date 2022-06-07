// import { Buscador } from '../components/items'
// styles
import '../styles/navbar.css'

const Navbar = ({ cambio }) => {
  return (
    <header className='nav'>
      <div className='logo'>
        <h1>Don Jaime Shop</h1>
      </div>
      <div className='menu'>
        <button>Inicio</button>
        <button>Conocenos</button>
        <button onClick={cambio}>buscador</button>
      </div>
    </header>
  )
}

export default Navbar
