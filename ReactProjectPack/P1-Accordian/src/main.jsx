import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Accordian from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Accordian />
  </StrictMode>,
)
