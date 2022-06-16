// qustomhooks
import useAppContext from '../hooks/useAppContext'
import useFetcher from '../hooks/useFetcher'

// funciones de otras librerias/ hooks
import { useState, useEffect } from 'react'

// styles
import '../styles/items.css'

const Items = () => {
  // const { itemss, loading, error } = useGetData()
  const [arr, setArr] = useState([])
  const [vali, setVali] = useState(false)
  const { setItems, hide } = useAppContext()
  const { data: itemss, error } = useFetcher('https://ecomerce-master.herokuapp.com/api/v1/item')

  if (error) {
    return (<p>{error}</p>)
  }
  // if (loading) {
  //   return (
  //     <section className='spinCont'>
  //       <p style={{ fontFamily: 'Fredoka', fontSize: '20px' }}>Cargando...</p>
  //       <div className='contlogo'>
  //         <img className='spinnerLogoImg' src='src/assets/bag.png' alt='bag logo img' />
  //         <h1>DON JAIME</h1>
  //         <p>store</p>
  //       </div>
  //     </section>
  //   )
  // }

  useEffect(() => {
    setItems(itemss)
    // console.log('componente Items')
  }, [])

  // funcion para esperar a que se termine de cargar la infomracion de axios, mientras, llama a un spinner
  const Espera = () => {
    setTimeout(() => {
      setArr(itemss)
      setVali(true)
    }, 4000)
    return (
      <section className='spinCont'>
        <p style={{ fontFamily: 'Fredoka', fontSize: '20px' }}>Cargando...</p>
        <div className='contlogo'>
          <img className='spinnerLogoImg' src='src/assets/bag.png' alt='bag logo img' />
          <h1>DON JAIME</h1>
          <p>store</p>
        </div>
      </section>
    )
  }

  // evalua si al articculo tiene algun problema en la imgen
  const imgFalsa = (IMG) => {
    if (IMG) {
      try {
        return IMG
      } catch (error) {
        return 'https://pbs.twimg.com/media/FFTMAFmWYAIwYaY?format=jpg&name=large'
      }
    } else {
      return 'https://pbs.twimg.com/media/FFTMAFmWYAIwYaY?format=jpg&name=large'
    }
  }

  // funcion para buscar articulo en especifico
  const searchItems = (val) => {
    setArr(itemss.filter(item => {
      return item.product_name.toLowerCase().match(val.toLocaleLowerCase())
    }))
    console.log(arr)
  }

  return (
    <div className='cont-items'>
      {hide ? <input type='text' placeholder='Busca un producto...' onChange={(event) => searchItems(event.target.value)} /> : ''}
      <section className='div-items'>
        {!vali
          ? Espera()
          : arr.map((index, key) => (
            <div key={key} className='conte-Items'>
              <article className='card'>
                <img loading='lazy' src={imgFalsa(index.image)} alt='imagen de articulo' />
                <p>{index.product_name}</p>
              </article>
            </div>
          ))}
      </section>
    </div>
  )
}

export default Items
