import { useEffect } from 'react'
import useAppContext from '../hooks/useAppContext'

// styles
import '../styles/item.css'

const Item = () => {
  const { items, setCart, cart, fav, setFav } = useAppContext()

  useEffect(() => {
    console.log(fav)
  }, [fav])

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <section className='articuloInd'>
      <div className='imgArt'>
        <img src={items[1]} alt='Imagen de articulo' />
      </div>
      <div className='infArt'>
        <h1>{items[0].product_name} | <span className='Dispon' style={items[0].isActive ? { color: '#198755' } : { color: 'Red' }}>{items[0].isActive ? 'Available' : 'Not available at the moment'}</span></h1>
        <hr />
        <p style={{ fontSize: '28px' }}>${items[0].price} </p>
        <hr />
        <p><span style={{ fontWeight: '1000' }}>Category:</span> {items[0].category}</p>
        <hr />
        <p><span style={{ fontWeight: '1000' }}>Brand:</span> {items[0].brand}</p>
        <hr />
        <p style={{ width: '70%' }}><span style={{ fontWeight: '1000' }}>Description:</span> {items[0].description}</p>
        <br />
        <div className='actions'>
          <button onClick={() => setCart([...cart, items])}>
            <img src='../../src/assets/CarritoBlanc.png' alt='Imagen carrito de compras' />
            Add to cart
          </button>
          <button onClick={() => setFav([...fav, items])}>
            <img src='../../src/assets/CoraW.png' alt='Icono de vfavoritos' />
            Add to Wish List
          </button>
        </div>
      </div>
    </section>
  )
}

export default Item
