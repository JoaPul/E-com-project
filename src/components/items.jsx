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
  // arreglo manipulable donde estan los productos
  const [arr, setArr] = useState([])
  // valor para decir si ya se cargaron los productos o no
  const [vali, setVali] = useState(false)
  // estados globales
  const { setItems, hide, addToCart, addToWish } = useAppContext()
  // respuesta del fetch
  const { data: itemss, error } = useFetcher('https://ecomerce-master.herokuapp.com/api/v1/item')
  // Mensaje de error si no encontro ningun match con la busqueda
  const [sms, setSms] = useState('')
  // estado para separar paginas y articulos
  const [pag, setPag] = useState(0)

  if (error) {
    return (<p>{error}</p>)
  }

  // funcion para esperar a que se termine de cargar la infomracion de axios, mientras, llama a un spinner
  const Espera = () => {
    setTimeout(() => {
      pages()
      setVali(true)
    }, 2000)
    return (
      <section className='spinCont'>
        <p style={{ fontFamily: 'Fredoka', fontSize: '20px' }}>Loading...</p>
        <div className='contlogo'>
          <img className='spinnerLogoImg' src='https://i.postimg.cc/FdPwPLCr/bag.png' alt='bag logo img' />
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
          <input type='search' ref={searchRef} placeholder='Busca un producto...' onChange={(event) => event.target.value === '' && pages()} />
        </form>
        {sms}
      </>
    )
  }

  const pages = () => {
    const aux = []
    for (let i = pag; i < pag + 30; i++) {
      if (itemss[i + pag]) {
        aux.push(itemss[i + pag])
      }
    }
    setArr(aux)
  }

  useEffect(() => {
    setArr()
    pages()
  }, [pag])

  useEffect(() => {
    if (!hide) {
      setSms('')
    } else {
      if (arr.length !== 0) {
        if (arr.length !== 30) {
          setSms(<p className='Finded'>We have {arr.length} Items</p>)
        } else {
          setSms(null)
        }
      } else {
        setSms(<p className='NotFinded'>No item with this specifications were found</p>)
      }
    }
  }, [arr, hide])

  return (
    <div className='cont-items'>
      {hide ? messageCount() : ''}
      <section className='div-items'>
        {!vali
          ? Espera()
          : arr.map((index, key) => (
            <div key={key} className='conte-Items'>
              <Link onClick={() => setItems([index, `https://picsum.photos/500/500?random=${itemss.indexOf(index)}`])} to={`item/${index.product_name}`} className='Link'>
                <article className='card'>
                  <img loading='lazy' src={`https://picsum.photos/500/500?random=${itemss.indexOf(index)}`} alt='imagen de articulo' />
                  <div className='infoPro'>
                    <p>{index.product_name}</p>
                    {/* <br /> */}
                    <p style={{ fontSize: '20px', fontWeight: '1000' }}>$<span style={{ textDecoration: 'underline', textDecorationThickness: '2px', fontSize: '20px', fontWeight: '1000' }}>{index.price}</span></p>
                  </div>
                </article>
              </Link>
              <div className='actionss'>
                <button onClick={() => addToCart([index, `https://picsum.photos/500/500?random=${itemss.indexOf(index)}`])}>
                  <img src='https://i.postimg.cc/qhB9XLLD/Carrito-Blanc.png' alt='Imagen carrito de compras' />
                </button>
                <button onClick={() => addToWish([index, `https://picsum.photos/500/500?random=${itemss.indexOf(index)}`])}>
                  <img src='https://i.postimg.cc/YLhZTCT1/CoraW.png' alt='Icono de vfavoritos' />
                </button>
              </div>
            </div>
          ))}
      </section>
      {!vali
        ? ''
        : (
          <div className='pages' style={{ height: 'inherit', width: '100%', marginBottom: '20px' }}>
            <button style={pag === 0 ? { zIndex: '-4' } : { zIndex: '4' }} onClick={pag !== 0 && (() => setPag(pag - 30))}><p>{'<'}</p></button>
            {pag > 0
              ? (itemss.length >= pag + 30 ? (<div><p>{(pag / 30)}</p><p style={{ textDecoration: 'underline' }}>{(pag / 30) + 1}</p><p>{(pag / 30) + 2}</p></div>) : (<div><p>{(pag / 30) - 1}</p><p>{(pag / 30)}</p><p style={{ textDecoration: 'underline' }}>{(pag / 30) + 1}</p></div>))
              : (
                <div>
                  <p style={{ textDecoration: 'underline' }}>{(pag / 30) + 1}</p>
                  <p>{(pag / 30) + 2}</p>
                  <p>{(pag / 30) + 3}</p>
                </div>)}
            <button onClick={() => setPag(pag + 30)}><p>{'>'}</p></button>
          </div>)}
    </div>
  )
}

export default Items
