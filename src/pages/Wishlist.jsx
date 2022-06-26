// import { List } from '../components/list'
// import { useEffect } from 'react'
import useAppContext from '../hooks/useAppContext'

export const Wishlist = () => {
  const { fav, filterWish } = useAppContext()

  return (
    <div className='ElemLista'>
      {fav.map((item, key) => {
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
              <button className='borrarDeLista' onClick={() => filterWish(item)}>&times;</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
