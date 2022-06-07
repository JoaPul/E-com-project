import { useState } from 'react'
import Items from '../components/items'
import Navbar from '../components/navbar'
// styles
import '../styles/app.css'

const App = () => {
  const [hide, setHide] = useState(false)

  const cambio = () => {
    setHide(!hide)
  }

  return (
    <div className='App'>
      <Navbar cambio={cambio} />
      <Items esc={hide} />
    </div>
  )
}

export default App
