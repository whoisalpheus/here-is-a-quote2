import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FetchQuote from './FetchQuote.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FetchQuote />
  </StrictMode>,
)
