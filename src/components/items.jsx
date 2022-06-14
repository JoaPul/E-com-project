
import { useState } from 'react'
import useGetData from '../hooks/usegetData'

// styles
import '../styles/items.css'

const Items = ({ esc }) => {
  const { itemss, loading, error } = useGetData()
  const [arr, setArr] = useState([])
  const [vali, setVali] = useState(false)

  if (error) {
    return (<p>{error}</p>)
  }
  // TODO añadir spiner
  if (loading) {
    return (
      <>
        <p className='spinner-1'>...Loading page</p>
      </>
    )
  }

  const Espera = () => {
    setTimeout(() => {
      setArr(itemss)
      setVali(true)
    }, 4000)

    return <p className='spinner-1'>...Loading page</p>
  }

  const searchItems = (val) => {
    // console.log(val)
    setArr(itemss.filter(item => {
      return item.product_name.toLowerCase().match(val.toLocaleLowerCase())
    }))
    console.log(arr)
  }

  return (
    <div className='cont-items'>
      {esc ? <input type='text' placeholder='Busca un producto...' onChange={(event) => searchItems(event.target.value)} /> : ''}
      <section className='div-items'>
        {!vali
          ? Espera()
          : arr.map((index, key) => (
            <div key={key} className='conte-Items'>
              <article className='card'>
                <img src={index.image ? index.image : index.images ? index.images : 'https://pbs.twimg.com/media/FFTMAFmWYAIwYaY?format=jpg&name=large'} alt='imagen de articulo' />
                <p>{index.product_name}</p>
              </article>
            </div>
          ))}
      </section>
    </div>
  )
}

export default Items
