import { useEffect, useState } from 'react'
import useGetData from '../hooks/usegetData'

// styles
import '../styles/items.css'

const Items = ({ esc }) => {
  const { itemss, loading, error } = useGetData()
  const [arr, setArr] = useState(itemss)

  // const [neww, setNew] = useState([])

  if (error) {
    return (<p>{error}</p>)
  }
  // TODO añadir spiner
  if (loading) {
    return (<p>...Loading</p>)
  }



  // const rend =

  // useEffect(() => {
  //   if (loading) {
  //     neww
  //   } else {
  //     setArr(itemss)
  //   }
  // }, [loading])

  const searchItems = (val) => {
    setArr(itemss.filter(item => {
      return item.product_name.toLowerCase().includes(val.toLocaleLowerCase())
    }))
  }

  return (
    <div className='cont-items'>
      {esc ? <input type='text' placeholder='Busca un producto...' onChange={(event) => searchItems(event.target.value)} /> : ''}
      <section className='div-items'>
        {arr.map((index, key) => (
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
// export { Buscador }
