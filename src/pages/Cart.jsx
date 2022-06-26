import useAppContext from '../hooks/useAppContext'
// Styles
import '../styles/list.css'

export const Cart = () => {
  const { cart, filterCart } = useAppContext()

  return (
    <div className='ElemLista'>
      {cart.map((item, key) => {
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
            </div>
          </div>
        )
      })}
    </div>
  )
}
