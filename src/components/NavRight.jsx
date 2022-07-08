// import { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// contextos
import useAppContext from '../hooks/useAppContext'
import { useAuthContext } from '../context/AuthContext'

// styles
const StyleBurger = styled.div`
 .cont-ops {
  z-index: 4;
  width: auto;
  height: auto;
 }

  .ops{
    display: none;
    /*position: relative;*/
    padding: 10px;
  }

  .barras {
    width: 50px;
    height: 5px;
    background-color: ${({ open }) => open ? 'white' : '#acacac'};
    border-radius: 10px;
    color:transparent;
  }
  
  @media screen and (max-width: 680px) {
    .cont-ops {
      width: 60px;
      height: 60px;
    }
    .perfil {
      flex-direction: column;
      position: absolute;
      background-color: #595959;
      top: 80px;
      right: 0px;
      padding-left: 0px;
      gap: 0px;
      border-radius: 10px;
      border-top-right-radius: 0px;
      border-top-left-radius: 0px;
      border-bottom-right-radius: 0px;
      border-left: 2px solid #262626;
      border-bottom: 2px solid #262626;
      display: ${({ open }) => open ? 'flex' : 'none'};
      z-index: 4;
      margin:0px;
    }

    .ops {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-item: center;
      gap:10px;
      z-index: 4;
    }

    li {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    }

    .user,
    .btnI-selected {
      padding: 10px;
      padding-bottom: 0px;
      margin-bottom: 10px;
      width: 100%;
      transition: border-bottom .25s ease-out, contrast .25s ease-out;
    }
  }

`

export const NavRight = ({ about }) => {
  // const [open, setOpen] = useState(false)
  const { user } = useAuthContext()
  const { colo, setColo, open, setOpen, fav, cart } = useAppContext()

  return (
    <StyleBurger open={open}>
      <section className='cont-ops'>
        <section className='ops' onClick={() => setOpen(!open)}>
          <div className='barras'>.</div>
          <div className='barras'>.</div>
          <div className='barras'>.</div>
        </section>
        <ul className='perfil'>
          <li>
            <Link className={about === 'user' ? 'btnI-selected' : 'user'} to={user !== '' ? `/User/Profile/${user.data.first_name}` : '/User/Login'}>
              {user !== '' ? <p>{user.data.first_name}</p> : <p>Who are you?</p>}
              <img src='https://i.postimg.cc/3d0zBWXh/User.png' alt='Imagen carrito de compras' />
            </Link>
          </li>
          <li>
            <Link className={colo === 'cart' ? 'btnI-selectedD' : 'carrito'} onClick={() => setColo('cart')} to={user !== '' ? '/items/Cart' : '/User/Login'}>
              <div className='insai'>
                <div className='numart' style={cart.length !== 0 ? { display: 'inline-block' } : { display: 'none' }}><p className='pnum'>{cart.length !== 0 ? cart.length > 9 ? '+9' : cart.length : ''}</p></div>
                <img src='https://i.postimg.cc/qhB9XLLD/Carrito-Blanc.png' alt='Imagen carrito de compras' />
              </div>
            </Link>
          </li>
          <li>
            <Link className={colo === 'wish' ? 'btnI-selectedD' : 'favoritos'} onClick={() => setColo('wish')} to={user !== '' ? '/items/Wishlist' : '/User/Login'}>
              <div className='insai'>
                <div className='numart' style={fav.length !== 0 ? { display: 'inline-block' } : { display: 'none' }}><p className='pnum'>{fav.length !== 0 ? fav.length > 9 ? '+9' : fav.length : ''}</p></div>
                <img src='https://i.postimg.cc/YLhZTCT1/CoraW.png' alt='Icono de favoritos' />
              </div>
            </Link>
          </li>
        </ul>
      </section>
    </StyleBurger>
  )
}
