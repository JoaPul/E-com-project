// qustomhooks
import useAppContext from '../hooks/useAppContext'
// funciones y hooks de librerias
import { Link } from 'react-router-dom'
// import { useAuthContext } from '../context/AuthContext'
// import { useEffect, useState } from 'react'
// styles
import '../styles/navbar.css'
import { NavRight } from './NavRight'

const Navbar = ({ about = '' }) => {
  const { hide, setHide, colo, setColo } = useAppContext()

  return (
    <header className='nav'>
      <div className='menu'>
        <Link className={about === '' && colo === 'menu' ? 'btnL-selected' : 'btn'} onClick={() => setColo('menu')} to='/items'>Home</Link>
        <Link className={about === 'About' ? 'btnL-selected' : 'btn'} id='about' onClick={() => setColo('About')} to='/About'>About</Link>
        <button className={hide ? 'btnL-selected' : 'btn'} onClick={() => setHide(!hide)}>
          {/* <img className='btnImgp' src='src/assets/lupa plomo.png' alt='Search button' style={{ height: '20px', width: '20px' }} /> */}
          <img className='btnImgb' src='https://i.postimg.cc/Z0RGWw0C/lupa-Blanca.png' alt='Search button' style={{ height: '20px', width: '20px' }} />
        </button>
      </div>
      <Link className='logo' to='/'>
        <img className='logoImg' src='https://i.postimg.cc/FdPwPLCr/bag.png' alt='bag logo img' />
        <div className='logoText'>
          <h1>DON JAIME</h1>
          <p>store</p>
        </div>
      </Link>
      <NavRight about={about} />
    </header>
  )
}

export default Navbar
