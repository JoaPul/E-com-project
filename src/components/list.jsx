import { useEffect, useState } from 'react'
import useAppContext from '../hooks/useAppContext'

export const List = ({ esCart }) => {
  const { setCart, cart, fav, setFav } = useAppContext()
  const [val, setVal] = useState([])

  // const NuevoPrint = () => {
  //   val.map((item, key) => {
  //     return (
  //       <div className='articulo' key={key}>
  //         <img src={item[1]} alt='Imagen de articulo' />
  //         <div className='infoProd'>
  //           <p>{item[0].product_name}</p>
  //           {/* <br /> */}
  //           <p>${item[0].price}</p>
  //         </div>
  //         <button className='Borrar de lsita' onClick={Borrado(item)}>&times;</button>
  //       </div>
  //     )
  //   })
  // }
  const Borrado = (item) => {
    esCart
      ? setCart(() => cart.filter((elem) => {
        return elem !== item
      }))
      : setFav(() => fav.filter((elem) => {
        return elem !== item
      }))
  }
  useEffect(() => {
    esCart ? setVal(cart) : setVal(fav)
  }, [cart, fav])

  return (
    <div className='ElemLista'>
      {val.map((item, key) => {
        return (
          <div className='articulo' key={key}>
            <img src={item[1]} alt='Imagen de articulo' />
            <div className='infoProd'>
              <p>{item[0].product_name}</p>
              {/* <br /> */}
              <p>${item[0].price}</p>
            </div>
            <button className='Borrar de lsita' onClick={Borrado(item)}>&times;</button>
          </div>
        )
      })}
    </div>
  )
}
