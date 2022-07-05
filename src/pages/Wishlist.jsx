// import { List } from '../components/list'
import { useEffect } from 'react'
import useAppContext from '../hooks/useAppContext'

export const Wishlist = () => {
  const { fav, filterWish, addToCart, favNR, addToWish, QuitaUnoW } = useAppContext()

  useEffect(() => {
    console.log('fav', fav, 'favNR', favNR)
  }, [favNR, fav])

  // cuenta cuantos articulos iguales hay en fav
  const contar = (item) => {
    return fav.filter(elem => {
      return elem[0] === item[0] && item
    }).length
  }

  return (
    <div className='ElemLista'>
      <h1 className='Titulo'>Wishlist</h1>
      {fav.length !== 0
        ? favNR.map((item, key) => {
          return (
            <div className='articulo' key={key}>
              <div className='artContImg'>
                <img src={item[1]} alt='Imagen de articulo' />
              </div>
              <div className='infoProd'>
                <p>{item[0].product_name}</p>
                <p>${item[0].price}</p>
                <div className='contador'>
                  <button style={contar(item) === 1 ? { zIndex: '-1' } : { zIndex: '4' }} onClick={() => QuitaUnoW(item)}><p>{'<'}</p></button>
                  {/* <p>{cont}</p> */}
                  <p>{contar(item)}</p>
                  <button onClick={() => addToWish(item)}><p>{'>'}</p></button>
                </div>
              </div>
              <div className='artBtn'>
                <button className='borrarDeLista' onClick={() => filterWish(item)}>&times;</button>
                <button className='borrarDeLista' onClick={() => addToCart(item)}><img src='https://i.postimg.cc/qhB9XLLD/Carrito-Blanc.png' alt='Cart logo' /></button>
              </div>
            </div>
          )
        })
        : (
          <div className='blank'>
            <p>It's seems that we doesn't have any article added to the wishlist yet, go back to home page and start to add articles to the list</p>
          </div>)}
    </div>
  )
}
