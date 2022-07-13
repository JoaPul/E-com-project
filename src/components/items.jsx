// qustomhooks
import useAppContext from '../hooks/useAppContext'
import useFetcher from '../hooks/useFetcher'

// funciones de otras librerias/ hooks
import { useState, useRef, useEffect } from 'react'
// import Carousel from '@itseasy21/react-elastic-carousel'

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
  // Carrusel y su contador
  const [car, setCar] = useState([])
  const [cont, setCont] = useState(0)

  if (error) {
    return (<p>{error}</p>)
  }

  // FUNCIONES

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

  // funcion para poder hacer la busqueda
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

  // funcion que guarda los items por pagina(de 20 en 20)
  const pages = () => {
    const aux = []
    for (let i = pag; i < pag + 20; i++) {
      if (itemss[i]) {
        aux.push(itemss[i])
      }
    }
    setArr(aux)
    setCar(
      aux.map((index, key) => (
        <div className='C-Item' key={key}>
          <img src={`https://picsum.photos/id/${itemss.indexOf(index)}/500/500`} alt='imagen de articulo de fondo' />
          <div className='ProdInfo'>
            <h2 className='artNom'>{index.product_name}</h2>
            <br />
            <p style={{ fontSize: '20px' }}>${index.price} </p>
            <br />
            <p><span style={{ fontWeight: '1000' }}>Category:</span> {index.category}</p>
            <br />
            <p><span style={{ fontWeight: '1000' }}>Brand:</span> {index.brand}</p>
          </div>
        </div>
      )))
  }

  // funcion para setear a 0 cont cuando cambie de pagina
  const pagCha = (i) => {
    i ? setPag(pag - 20) : setPag(pag + 20)
    setCont(0)
  }

  // useEffects

  useEffect(() => {
    pages()
  }, [pag])

  useEffect(() => {
    if (!hide) {
      setSms('')
    } else {
      if (arr.length !== 0) {
        if (arr.length !== 20) {
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
          : (
            <section className='todo-items'>
              <h1 style={{ fontFamily: 'Fredoka', textAlign: 'center', fontSize: '25px', margin: '0px', paddingTop: '20px', paddingBottom: '15px', color: '#595959' }}>Featured</h1>
              <div className='carousel'>
                <div className='C-in'>
                  <button style={cont === 0 ? { display: 'none', marginLeft: '10px' } : { display: 'inline-block', marginLeft: '10px' }} onClick={() => setCont(cont - 1)}>{'<'}</button>
                  {car[cont]}
                  <button style={cont === 19 ? { display: 'none', marginRight: '10px' } : { display: 'inline-block', marginRight: '10px' }} onClick={() => setCont(cont + 1)}>{'>'}</button>
                </div>
              </div>
              <div className='articles'>
                {arr.map((index, key) => (
                  <div key={key} className='conte-Items'>
                    <Link onClick={() => setItems([index, `https://picsum.photos/id/${itemss.indexOf(index)}/500/500`])} to={`/items/item/${index.product_name}`} className='Link'>
                      <article className='card'>
                        <img loading='lazy' src={`https://picsum.photos/id/${itemss.indexOf(index)}/500/500`} alt='imagen de articulo' />
                        <div className='infoPro'>
                          {/* <p>{index.product_name.length > 13 ? index.product_name.split(' ')[0] : index.product_name}</p> */}
                          <p>{index.product_name}</p>
                          <p style={{ fontSize: '20px', fontWeight: '1000' }}>$<span style={{ textDecoration: 'underline', textDecorationThickness: '2px', fontSize: '20px', fontWeight: '1000' }}>{index.price}</span></p>
                        </div>
                      </article>
                    </Link>
                    <div className='actionss'>
                      <button onClick={() => addToCart([index, `https://picsum.photos/id/${itemss.indexOf(index)}/500/500`])}>
                        <img src='https://i.postimg.cc/qhB9XLLD/Carrito-Blanc.png' alt='Imagen carrito de compras' />
                      </button>
                      <button onClick={() => addToWish([index, `https://picsum.photos/id/${itemss.indexOf(index)}/500/500`])}>
                        <img src='https://i.postimg.cc/YLhZTCT1/CoraW.png' alt='Icono de vfavoritos' />
                      </button>
                    </div>
                  </div>))}
              </div>
            </section>)}
      </section>
      {!vali
        ? ''
        : (
          <div className='pages' style={{ height: '55px', width: '100%', marginBottom: '20px' }}>
            <Link to={`/items/page/${(pag / 20)}`} style={pag === 0 ? { zIndex: '-4' } : { zIndex: '4' }}>
              <button onClick={() => pagCha(true)}>
                <p style={{ fontSize: '20px', padding: '5px' }}>{'<'}</p>
              </button>
            </Link>
            {pag > 0
              ? (itemss.length >= pag + 20 ? (<div><Link onClick={() => setPag(pag - 20)} to={`/items/page/${(pag / 20)}`} style={{ padding: '10px' }}>{(pag / 20)}</Link><p style={{ textDecoration: 'underline' }}>{(pag / 20) + 1}</p><Link onClick={() => setPag(pag + (20 * 2))} to={`/items/page/${(pag / 20) + 2}`} style={{ padding: '10px' }}>{(pag / 20) + 2}</Link></div>) : (<div><Link to={`/items/page/${(pag / 20) - 1}`} style={{ padding: '10px' }} onClick={() => setPag(pag - (20 * 2))}>{(pag / 20) - 1}</Link><Link to={`/items/page/${(pag / 20)}`} style={{ padding: '10px' }} onClick={() => setPag(pag - 20)}>{(pag / 20)}</Link><p style={{ textDecoration: 'underline' }}>{(pag / 20) + 1}</p></div>))
              : (
                <div>
                  <p style={{ textDecoration: 'underline' }}>{(pag / 20) + 1}</p>
                  <Link onClick={() => setPag(pag + (20 * 2))} to={`/items/page/${(pag / 20) + 2}`} style={{ padding: '10px' }}>{(pag / 20) + 2}</Link>
                  <Link onClick={() => setPag(pag + (20 * 3))} to={`/items/page/${(pag / 20) + 3}`} style={{ padding: '10px' }}>{(pag / 20) + 3}</Link>
                </div>)}
            <Link to={`/items/page/${(pag / 20) + 2}`} style={pag >= (itemss.length - 19) ? { zIndex: '-4' } : { zIndex: '4' }}>
              <button onClick={() => pagCha(false)}><p style={{ fontSize: '20px', padding: '5px' }}>{'>'}</p></button>
            </Link>
          </div>)}
    </div>
  )
}

export default Items
