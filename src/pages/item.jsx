// import { useEffect } from 'react'
import useAppContext from '../hooks/useAppContext'

// styles
import '../styles/item.css'

const Item = () => {
  const { items, addToCart, addToWish } = useAppContext()

  return (
    <section className='cont-Item'>
      <div className='prodDet'>
        <h2>Product Details</h2>
      </div>
      <section className='articuloInd'>
        <div className='img-des'>
          <div className='imgArt'>
            <img src={items[1]} alt='Imagen de articulo' />
          </div>
          <div className='infArt'>
            <h1>{items[0].product_name} | <span className='Dispon' style={items[0].isActive ? { color: '#198755' } : { color: 'Red' }}>{items[0].isActive ? 'Available' : 'Not available at the moment'}</span></h1>
            <hr />
            <p style={{ fontSize: '20px' }}>${items[0].price} </p>
            <hr />
            <p><span style={{ fontWeight: '1000' }}>Category:</span> {items[0].category}</p>
            <hr />
            <p><span style={{ fontWeight: '1000' }}>Brand:</span> {items[0].brand}</p>
            <hr />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <p style={{ width: '80%' }}><span style={{ fontWeight: '1000' }}>Description:</span> {items[0].description}</p>
            </div>
            <br />
          </div>
        </div>
        <div className='actions'>
          <button onClick={() => addToCart(items)}>
            <img src='https://i.postimg.cc/qhB9XLLD/Carrito-Blanc.png' alt='Imagen carrito de compras' />
            Add to cart
          </button>
          <button onClick={() => addToWish(items)}>
            <img src='https://i.postimg.cc/YLhZTCT1/CoraW.png' alt='Icono de vfavoritos' />
            Add to Wish List
          </button>
        </div>
      </section>
    </section>
  )
}

export default Item
