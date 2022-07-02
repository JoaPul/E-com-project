// qustomhooks
import useAppContext from '../hooks/useAppContext'
import useFetcher from '../hooks/useFetcher'

// funciones de otras librerias/ hooks
import { useState, useRef, useEffect } from 'react'

// styles
import '../styles/items.css'
import { Link } from 'react-router-dom'

const Items = () => {
  const searchRef = useRef()
  const [arr, setArr] = useState([])
  const [vali, setVali] = useState(false)
  const { setItems, hide } = useAppContext()
  const { data: itemss, error } = useFetcher('https://ecomerce-master.herokuapp.com/api/v1/item')
  // Mensaje de error si no encontro ningun match con la busqueda
  const [sms, setSms] = useState('')

  if (error) {
    return (<p>{error}</p>)
  }

  // funcion para esperar a que se termine de cargar la infomracion de axios, mientras, llama a un spinner
  const Espera = () => {
    setTimeout(() => {
      setArr(itemss)
      setVali(true)
    }, 2000)
    return (
      <section className='spinCont'>
        <p style={{ fontFamily: 'Fredoka', fontSize: '20px' }}>Loading...</p>
        <div className='contlogo'>
          <img className='spinnerLogoImg' src='/src/assets/bag.png' alt='bag logo img' />
          <h1>DON JAIME</h1>
          <p>store</p>
        </div>
      </section>
    )
  }

  // funcion para buscar articulo en especifico
  const searchItems = (event) => {
    event.preventDefault()
    const trimValue = searchRef.current.value.trim()

    setArr(itemss.filter(item => {
      return item.product_name.toLowerCase().match(trimValue.toLowerCase())
    }))

    // event.target.reset()
  }

  // {/* <button className='searchBTN' type='submit'>Search</button> */}
  const messageCount = () => {
    return (
      <>
        <form onSubmit={searchItems} className='searchForm'>
          <input type='search' ref={searchRef} placeholder='Busca un producto...' onChange={(event) => event.target.value === '' && setArr(itemss)} />
        </form>
        {sms}
      </>
    )
  }

  useEffect(() => {
    if (!hide) {
      setSms('')
    }
  }, [hide])

  useEffect(() => {
    if (!hide) {
      setSms('')
    } else {
      if (arr.length !== 0) {
        setSms(<p className='Finded'>We found {arr.length} Items</p>)
      } else {
        setSms(<p className='NotFinded'>No item with this specifications were found</p>)
      }
    }
  }, [arr])

  // `https://picsum.photos/300/200?random=${parseInt(Math.random() * 1000)}`
  // imgFalsa(index.image) list={index}
  return (
    <div className='cont-items'>
      {hide ? messageCount() : ''}
      <section className='div-items'>
        {!vali
          ? Espera()
          : arr.map((index, key) => (
            <Link onClick={() => setItems([index, `https://picsum.photos/500/500?random=${arr.indexOf(index)}`])} to={`item/${index.product_name}`} key={key} className='conte-Items'>
              <article className='card'>
                <img loading='lazy' src={`https://picsum.photos/500/500?random=${arr.indexOf(index)}`} alt='imagen de articulo' />
                <div className='infoPro'>
                  <p>{index.product_name}</p>
                  {/* <br /> */}
                  <p><span style={{ textDecoration: 'underline', textDecorationThickness: '2px', fontSize: '20px', fontWeight: '1000' }}>${index.price}</span></p>
                </div>
              </article>
            </Link>
          ))}
      </section>
    </div>
  )
}

export default Items
