import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// Styles
import './styles/index.css'
// components
// Context
// import { ContextProvider } from './context/AppContext'
// Path
import Path from './routes'

const root = document.getElementById('root')
const container = createRoot(root)

container.render(
  <StrictMode>
    <BrowserRouter>
      <Path />
    </BrowserRouter>
  </StrictMode>
)
