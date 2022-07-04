import useAppContext from '../hooks/useAppContext'
import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// Styles
import '../styles/list.css'

export const Cart = () => {
  const { cart, filterCart, addToWish } = useAppContext()
  const [total, setTotal] = useState(0)

  useEffect(() => {
    cart !== 0 && setTotal(cart.map(item => item[0].price).reduce((toal, currentValue) => toal + currentValue))
  }, [])

  return (
    <div className='ElemLista'>
      <h1 className='Titulo'>Cart</h1>
      {cart.length !== 0
        ? cart.map((item, key) => {
          return (
            <div className='articulo' key={key}>
              <div className='artContImg'>
                <img src={item[1]} alt='Imagen de articulo' />
              </div>
              <div className='infoProd'>
                <p>{item[0].product_name}</p>
                <p>${item[0].price}</p>
              </div>
              <div className='artBtn'>
                <button className='borrarDeLista' onClick={() => filterCart(item)}>&times;</button>
                <button className='borrarDeLista' onClick={() => addToWish(item)}><img src='https://i.postimg.cc/YLhZTCT1/CoraW.png' alt='wishlist logo' /></button>
              </div>
            </div>
          )
        })
        : (
          <div className='blank'>
            <p>It's seems that we doesn't have any article added to the Cart yet, go back to home page and start to add articles to the list</p>
          </div>)}
      {cart.length !== 0
        ? (
          <div className='Total'>
            <h2 style={{ textAlign: 'end' }}>Total: $<span>{total.toString()}</span></h2>
          </div>)
        : ''}
    </div>
  )
}
