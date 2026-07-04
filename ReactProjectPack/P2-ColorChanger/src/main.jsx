import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import ColorChanger from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ColorChanger />
  </StrictMode>,
)
