// import { useEffect, useState } from 'react'
import useGetData from '../hooks/usegetData'

// styles
import '../styles/items.css'

const Items = (esc) => {
  // const { query } = useAppContext()
  const { itemss, loading, error } = useGetData()
  // const { esconder, setEsconder } = useState(esc)
  // const { val, setVal } = useState(<br />)

  if (error) {
    return (<p>{error}</p>)
  }
  // TODO añadir spiner
  if (loading) {
    return (<p>...Loading</p>)
  }

  // useEffect(() => {},)

  // useEffect(() => {
  //   if (esconder) {
  //     return (
  //       setVal(<input type='text' placeholder='busca articulo' />)
  //     )
  //   } else {
  //     return setVal(<br />)
  //   }
  // }, [esconder])

  return (
    <section className='div-items'>
      {/* {val} */}
      {itemss.map((index, key) => (
        <div key={key} className='conte-Items'>
          <article className='card'>
            <img src={index.image ? index.image : index.images ? index.images : 'https://pbs.twimg.com/media/FFTMAFmWYAIwYaY?format=jpg&name=large'} alt='imagen de articulo' />
            <p>{index.product_name}</p>
          </article>
        </div>
      ))}
    </section>
  )
}

export default Items
// export { Buscador }
