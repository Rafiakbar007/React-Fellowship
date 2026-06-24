import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Counterapp from './Counterapp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counterapp />
  </StrictMode>,
)
